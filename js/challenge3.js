window.addEventListener('load', () => {
  alert(document.querySelectorAll('figcaption')[1].textContent);
  const images = document.querySelectorAll('.thumbnail');
  const display = document.querySelector('#display');
  images.forEach(image => {
      image.addEventListener('mouseover', () => {
          display.style.backgroundImage = `url(${image.src})`;
          display.textContent = image.alt;
          image.style.visibility = 'hidden';
      });
      image.addEventListener('mouseout', () => {
          display.style.backgroundImage = '';
          display.textContent = 'Hover over an image below to display the image and the alt text.';
          image.style.visibility = 'visible';
      });
  });
});
