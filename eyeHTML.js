const eye = document.getElementById('eye');
const pupil = document.getElementById('pupil');

const maxDistanceX = 50; // Maximum horizontal distance from the center of the eye to the pupil
const maxDistanceY = 25; // Maximum vertical distance from the center of the eye to the pupil

document.addEventListener('mousemove', (event) => {
  const eyeRect = eye.getBoundingClientRect();
  const eyeX = eyeRect.left + eyeRect.width / 2;
  const eyeY = eyeRect.top + eyeRect.height / 2;
  
  const mouseX = event.clientX;
  const mouseY = event.clientY;
  
  const angle = Math.atan2(mouseY - eyeY, mouseX - eyeX);
  const distanceX = Math.min(maxDistanceX, Math.abs(mouseX - eyeX));
  const distanceY = Math.min(maxDistanceY, Math.abs(mouseY - eyeY));
  
  const x = eyeX -10 + Math.cos(angle) * distanceX;
  const y = eyeY -10 + Math.sin(angle) * distanceY;
  
  pupil.style.left = `${x}px`;
  pupil.style.top = `${y}px`;
});
