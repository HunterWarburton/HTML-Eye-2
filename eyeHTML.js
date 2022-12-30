const eye = document.getElementById('eye');
const pupil = document.getElementById('pupil');

eye.addEventListener('mousemove', (event) => {
  let x = event.pageX - eye.offsetLeft - pupil.offsetWidth / 2;
  let y = event.pageY - eye.offsetTop - pupil.offsetHeight / 2;
  
  const maxX = eye.offsetWidth - pupil.offsetWidth;
  const maxY = eye.offsetHeight - pupil.offsetHeight;
  
  x = Math.min(Math.max(x, 0), maxX);
  y = Math.min(Math.max(y, 0), maxY);
  
  pupil.style.left = `${x}px`;
  pupil.style.top = `${y}px`;
});
