function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
  }
  
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  