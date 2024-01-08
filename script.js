/* JavaScript used to create blur effect following cursor */
document.addEventListener("DOMContentLoaded", function () {
    const glowContainer = document.querySelector(".glow-container");
    let mouseX = 0;
    let mouseY = 0;
  
    function updateGlowPosition() {
      const deltaX = mouseX - 500; // half container size
      const deltaY = mouseY - 500; // half container size
      glowContainer.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
  
      requestAnimationFrame(updateGlowPosition);
    }
  
    document.addEventListener("mousemove", function (event) {
      mouseX = event.clientX;
      mouseY = event.clientY;
    });
  
    updateGlowPosition();
  });  