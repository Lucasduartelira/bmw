const radios = document.querySelectorAll('input[name="car-color"]');
const carImage = document.getElementById('carImage');

radios.forEach((radio) => {
  radio.addEventListener('change', () => {
    // fade out
    carImage.style.opacity = '0';

    setTimeout(() => {
      carImage.src = radio.dataset.img;
      // fade in
      carImage.style.opacity = '1';
    }, 300);
  });
});


