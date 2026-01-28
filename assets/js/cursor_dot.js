// Custom Cursor Dot - Follow mouse movement
document.addEventListener('DOMContentLoaded', function () {
  // Create cursor dot element
  const cursorDot = document.createElement('div');
  cursorDot.classList.add('cursor-dot');
  document.body.appendChild(cursorDot);

  // Track mouse position
  let mouseX = 0;
  let mouseY = 0;
  let currentX = 0;
  let currentY = 0;

  // Update mouse position on move
  document.addEventListener('mousemove', function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // Smooth animation using requestAnimationFrame
  function animateCursor() {
    // Smooth interpolation for lag effect
    const speed = 0.2;
    currentX += (mouseX - currentX) * speed;
    currentY += (mouseY - currentY) * speed;

    cursorDot.style.left = currentX + 'px';
    cursorDot.style.top = currentY + 'px';

    requestAnimationFrame(animateCursor);
  }

  animateCursor();

  // Hide cursor dot when mouse leaves the window
  document.addEventListener('mouseleave', function () {
    cursorDot.style.opacity = '0';
  });

  document.addEventListener('mouseenter', function () {
    cursorDot.style.opacity = '1';
  });
});
