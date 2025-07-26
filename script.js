function triggerFlash(event) {
  event.preventDefault();
  const flash = document.getElementById('flash');
  flash.style.opacity = 1;

  setTimeout(() => {
    window.location.href = event.target.href;
  }, 600);
}
