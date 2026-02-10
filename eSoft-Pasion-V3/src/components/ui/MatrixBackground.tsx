import { useEffect, useRef } from 'react';

export default function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    // Configuración
    const itemSize = 18; // Tamaño del escudo
    const gap = 45; // Espacio entre escudos (Grid)
    
    // Estado del mouse
    const mouse = { x: -1000, y: -1000 };
    const mouseRadius = 180; // Radio de activación

    // Clase Escudo (Shield)
    class Shield {
      x: number;
      y: number;
      life: number; // Para el efecto de parpadeo

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.life = 0;
      }

      draw() {
        // Calcular distancia al mouse
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Lógica de iluminación
        let opacity = 0.1; // Opacidad base (apagado)
        let fill = false;
        let scale = 1;

        // 1. Interacción Mouse (Efecto Escáner)
        if (dist < mouseRadius) {
          const intensity = 1 - dist / mouseRadius;
          opacity = 0.8 * intensity;
          scale = 1 + (0.2 * intensity); // Crecen un poco al activarse
          fill = true;
        }

        // 2. Parpadeo Aleatorio (Vigilancia activa)
        if (this.life > 0) {
          opacity = Math.max(opacity, this.life);
          fill = true;
          this.life -= 0.02; 
        } else if (Math.random() < 0.0005) { 
          this.life = 0.6; // Probabilidad de 'ping' aleatorio
        }

        // Dibujar el ESCUDO
        ctx!.save();
        ctx!.translate(this.x, this.y);
        ctx!.scale(scale, scale);
        
        ctx!.beginPath();
        // Forma del escudo
        const s = itemSize;
        ctx!.moveTo(-s/2, -s/2); // Top Left
        ctx!.lineTo(s/2, -s/2);  // Top Right
        ctx!.lineTo(s/2, 0);     // Mid Right
        // Curva hacia la punta inferior
        ctx!.quadraticCurveTo(0, s/1.2, -s/2, 0); 
        ctx!.lineTo(-s/2, -s/2); // Back to Top Left
        ctx!.closePath();

        // Estilos
        ctx!.strokeStyle = `rgba(37, 211, 102, ${opacity + 0.15})`;
        ctx!.lineWidth = 1.5;
        ctx!.stroke();

        if (fill) {
          ctx!.fillStyle = `rgba(37, 211, 102, ${opacity * 0.3})`;
          ctx!.fill();
          
          // Pequeño detalle: Un "check" o núcleo en el centro si está muy activo
          if (opacity > 0.5) {
             ctx!.fillStyle = '#25D366';
             ctx!.beginPath();
             ctx!.arc(0, -s/4, 2, 0, Math.PI*2);
             ctx!.fill();
          }
        }
        
        ctx!.restore();
      }
    }

    // Crear la grilla de escudos
    let grid: Shield[] = [];

    const initGrid = () => {
      grid = [];
      const cols = Math.ceil(width / gap);
      const rows = Math.ceil(height / gap);

      // Crear patrón alternado (como ladrillos) para que se vea más orgánico
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          let x = c * gap;
          let y = r * gap;
          // Desplazar cada fila par
          if (r % 2 === 0) {
            x += gap / 2;
          }
          grid.push(new Shield(x, y));
        }
      }
    };

    initGrid();

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      grid.forEach(shield => shield.draw());
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    // Event Listeners
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initGrid();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseLeave);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 z-0 w-full h-full opacity-50" 
    />
  );
}