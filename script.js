document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  let currentSlide = 0;
    
  function showSlide(index) {
    // Скрываем все слайды
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
      
    // Показываем текущий слайд
    slides[index].classList.add('active');
    dots[index].classList.add('active');
    currentSlide = index;
  }
    
  function nextSlide() {
    let newIndex = currentSlide + 1;
    if (newIndex >= slides.length) {
      newIndex = 0;
    }
    showSlide(newIndex);
  }
   
  function prevSlide() {
    let newIndex = currentSlide - 1;
    if (newIndex < 0) {
      newIndex = slides.length - 1;
    }
    showSlide(newIndex);
  }
    
  // Обработчики для кнопок
  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);
   
  // Обработчики для точек
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => showSlide(index));
  });

  //Анимация при прокрутке
  const infoBlocks = document.querySelectorAll('.info-block');
  
  function checkBlocks() {
    infoBlocks.forEach(block => {
      const blockPosition = block.getBoundingClientRect().top;
      const screenPosition = window.innerHeight * 0.8;
      
      if(blockPosition < screenPosition) {
        block.classList.add('show');
      }
    });
  }
  
  window.addEventListener('scroll', checkBlocks);
  checkBlocks();
});
