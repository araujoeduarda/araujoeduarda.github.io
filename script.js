const intro = document.querySelector('.intro');
const triadeImgs = intro.querySelectorAll('.triade');

// Efeito de digitação nas imagens das tecnologias
triadeImgs.forEach((img, index) => {
  const originalSrc = img.src;
  img.src = '';
  img.style.opacity = 0;
  img.style.transition = 'opacity 5s ease-in-out';

  setTimeout(() => {
    img.src = originalSrc;
    img.style.opacity = 1;
  }, 1000 + index * 100);
});
