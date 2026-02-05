  AOS.init();


  (function(){
  const STORAGE_KEY = 'cookieConsentAccepted_v1';

  function showBanner(){
    const banner = document.getElementById('cookie-banner');
    if (!banner) return;
    requestAnimationFrame(() => banner.classList.add('is-visible'));
  }

  function hideBanner(){
    const banner = document.getElementById('cookie-banner');
    if (!banner) return;
    banner.classList.remove('is-visible');
    setTimeout(()=> banner.style.display = 'none', 320);
  }

  function accept(){
    try {
      localStorage.setItem(STORAGE_KEY, 'true'); // ✅ Guarda el consentimiento
    } catch (e) {
      console.warn('No se pudo guardar el consentimiento:', e);
    }
    hideBanner();
  }

  document.addEventListener('DOMContentLoaded', function(){
    const banner = document.getElementById('cookie-banner');
    if (!banner) return;

    const accepted = localStorage.getItem(STORAGE_KEY) === 'true';
    if (!accepted) showBanner(); // ✅ Solo muestra si no se ha aceptado antes

    const btnAccept = document.getElementById('cookie-accept');
    const btnClose  = document.getElementById('cookie-close');

    btnAccept && btnAccept.addEventListener('click', accept);
    btnClose  && btnClose.addEventListener('click', hideBanner);
  });
})();