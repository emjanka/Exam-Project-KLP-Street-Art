
window.addEventListener('DOMContentLoaded', () => {
  const pins = document.querySelectorAll('.map-pin');

  pins.forEach(pin => {
    const link = pin.getAttribute('href');

    pin.addEventListener('click', e => {
      e.preventDefault();

      if (pin.classList.contains('active')) {
        pin.classList.remove('active');
        return;
      }

      pins.forEach(p => p.classList.remove('active'));

      pin.classList.add('active');
    });

    const button = pin.querySelector('button');
    if (button) {
      button.addEventListener('click', () => {
        window.location.href = link;
      });
    }
  });

  document.addEventListener('click', e => {
    if (!e.target.closest('.map-pin')) {
      pins.forEach(p => p.classList.remove('active'));
    }
  });
});
