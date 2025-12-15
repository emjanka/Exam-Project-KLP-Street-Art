window.onload = () => {
  const header = document.querySelector('header');
  const sections = [
    { element: document.querySelector('.honorable-section'), color: '#2C5170' },
    { element: document.querySelector('.artists-section'), color: '#F2B424' }
  ];

  function updateHeaderColor() {
    const middle = window.scrollY + window.innerHeight / 2;
    let found = false;
    sections.forEach(s => {
      const top = s.element.offsetTop;
      const bottom = top + s.element.offsetHeight;
      if (middle >= top && middle <= bottom) {
        header.style.backgroundColor = s.color;
        found = true;
      }
    });
    if (!found) header.style.backgroundColor = '#ff6b51';
  }

  window.addEventListener('scroll', updateHeaderColor);
  window.addEventListener('resize', updateHeaderColor);
  updateHeaderColor();

  
  const carouselSlide = document.querySelector('.carousel-slide');
  const images = document.querySelectorAll('.carousel-slide img');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  let counter = 0;

  function updateSlide() {
    const size = images[0].clientWidth;
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
  }

  nextBtn.addEventListener('click', () => {
    counter = (counter + 1) % images.length;
    updateSlide();
  });

  prevBtn.addEventListener('click', () => {
    counter = (counter - 1 + images.length) % images.length;
    updateSlide();
  });

  setInterval(() => {
    counter = (counter + 1) % images.length;
    updateSlide();
  }, 6000);

  window.addEventListener('resize', updateSlide);
  updateSlide();
};
