import { useEffect, useRef } from 'react';

export default function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    let animationId: number;

    const itemSize = 14;
    const gap = 55;

    const mouse = { x: -1000, y: -1000, targetX: -1000, targetY: -1000 };
    const mouseRadius = 250;

    const isDark = document.documentElement.classList.contains('dark');
    const baseColor = isDark ? '27, 159, 136' : '15, 118, 110';

    // --- NUEVO: Variables para el efecto Parallax 3D ---
    let currentParallaxX = 0;
    let currentParallaxY = 0;

    class Shield {
      x: number;
      y: number;
      activeIntensity: number;
      offset: number;
      ping: number; // NUEVO: Controlador del parpadeo

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.activeIntensity = 0;
        this.offset = Math.random() * Math.PI * 2;
        this.ping = 0; // Inicia apagado
      }

      draw(time: number, pX: number, pY: number) {
        // Ajustamos la posición real sumando el parallax
        const realX = this.x + pX;
        const realY = this.y + pY;

        const dx = mouse.x - realX;
        const dy = mouse.y - realY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Respiración base
        const breathe = (Math.sin(time * 0.001 + this.offset) + 1) / 2;
        let baseOpacity = isDark ? 0.05 + (breathe * 0.08) : 0.03 + (breathe * 0.05);

        // Interacción del mouse
        if (dist < mouseRadius) {
          const intensity = Math.pow(1 - dist / mouseRadius, 2);
          this.activeIntensity = Math.max(this.activeIntensity, intensity);
        } else {
          this.activeIntensity -= 0.02;
          if (this.activeIntensity < 0) this.activeIntensity = 0;
        }

        // --- NUEVO: Lógica de Parpadeo "Soft-Pulse" ---
        // Pequeña probabilidad de encenderse (como un paquete de datos)
        if (this.activeIntensity < 0.1 && Math.random() < 0.0005) {
          this.ping = 0.8;
        }
        // El brillo decae suavemente para no verse "glitcheado"
        if (this.ping > 0) {
          this.ping -= 0.01;
        }

        // Combinamos todas las opacidades
        const finalOpacity = baseOpacity + (this.activeIntensity * 0.6) + (this.ping * 0.5);
        const scale = 1 + (this.activeIntensity * 0.3) + (this.ping * 0.1);

        if (finalOpacity <= 0.01) return;

        ctx!.save();
        ctx!.translate(realX, realY);
        ctx!.scale(scale, scale);

        ctx!.beginPath();
        const s = itemSize;

        ctx!.moveTo(-s / 2, -s / 2);
        ctx!.lineTo(s / 2, -s / 2);
        ctx!.lineTo(s / 2, 0);
        ctx!.quadraticCurveTo(0, s / 1.1, -s / 2, 0);
        ctx!.closePath();

        ctx!.strokeStyle = `rgba(${baseColor}, ${finalOpacity})`;
        ctx!.lineWidth = 1;
        ctx!.stroke();

        // Relleno sutil si el mouse está cerca o si está en pleno "ping"
        if (this.activeIntensity > 0.3 || this.ping > 0.4) {
          const fillOpacity = Math.max(this.activeIntensity * 0.2, this.ping * 0.15);
          ctx!.fillStyle = `rgba(${baseColor}, ${fillOpacity})`;
          ctx!.fill();

          // Núcleo brillante
          const coreOpacity = Math.max(this.activeIntensity, this.ping * 0.6);
          ctx!.fillStyle = `rgba(${baseColor}, ${coreOpacity})`;
          ctx!.beginPath();
          ctx!.arc(0, -s / 5, 1.5, 0, Math.PI * 2);
          ctx!.fill();
        }

        ctx!.restore();
      }
    }

    let grid: Shield[] = [];

    const initGrid = () => {
      grid = [];
      // Agregamos margen extra para que al hacer el parallax no se vean los bordes vacíos
      const cols = Math.ceil(width / gap) + 4;
      const rows = Math.ceil(height / gap) + 4;

      const startX = -gap * 2;
      const startY = -gap * 2;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          let x = startX + (c * gap);
          let y = startY + (r * gap);
          if (r % 2 === 0) x += gap / 2;
          grid.push(new Shield(x, y));
        }
      }
    };

    initGrid();

    const animate = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      mouse.x += (mouse.targetX - mouse.x) * 0.15;
      mouse.y += (mouse.targetY - mouse.y) * 0.15;

      // --- NUEVO: Calcular Parallax (movimiento contrario al mouse) ---
      const centerX = width / 2;
      const centerY = height / 2;

      let targetParallaxX = 0;
      let targetParallaxY = 0;

      if (mouse.targetX !== -1000) {
        targetParallaxX = (mouse.x - centerX) * -0.03; // Ajusta este valor para más o menos 3D
        targetParallaxY = (mouse.y - centerY) * -0.03;
      }

      currentParallaxX += (targetParallaxX - currentParallaxX) * 0.1;
      currentParallaxY += (targetParallaxY - currentParallaxY) * 0.1;

      grid.forEach(shield => shield.draw(time, currentParallaxX, currentParallaxY));
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        initGrid();
      }, 150);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      clearTimeout(resizeTimeout);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 w-full h-full pointer-events-none opacity-80"
      style={{
        maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 100%)'
      }}
    />
  );
}