function triggerFlash(event) {
  event.preventDefault();
  const flash = document.getElementById("flash");
  flash.style.opacity = "1";
  flash.style.transition = "opacity 0.5s";
  setTimeout(() => {
    flash.style.opacity = "0";
  }, 400);
  setTimeout(() => {
    window.location.href = event.target.href;
  }, 500);
}
