document.addEventListener('DOMContentLoaded', () => {

  const cards = document.querySelectorAll('.card');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');

  let current = 0;
  let autoSlideInterval;

  /* ------------ Update Active Card ------------ */
  function updateActiveCard() {
    cards.forEach((card, index) => {
      card.classList.toggle('active', index === current);
    });
  }

  /* ------------ Next Card ------------ */
  function showNext() {
    current = (current + 1) % cards.length;
    updateActiveCard();
  }

  /* ------------ Previous Card ------------ */
  function showPrev() {
    current = (current - 1 + cards.length) % cards.length;
    updateActiveCard();
  }

  /* ------------ Auto Slide ------------ */
  function startAutoSlide() {
    autoSlideInterval = setInterval(showNext, 4000); // every 4 sec
  }

  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }

  /* ------------ Buttons Events ------------ */
  if (nextBtn) nextBtn.addEventListener('click', () => {
    showNext();
    stopAutoSlide();
  });

  if (prevBtn) prevBtn.addEventListener('click', () => {
    showPrev();
    stopAutoSlide();
  });

  /* ------------ Keyboard Control ------------ */
  document.addEventListener('keydown', (e) => {
    if (e.key === "ArrowRight") {
      showNext();
      stopAutoSlide();
    }
    if (e.key === "ArrowLeft") {
      showPrev();
      stopAutoSlide();
    }
  });

  /* ------------ Card Click Navigation ------------ */
  const cardLinks = [
    "ai.html",           // First card
    "fullstack.html",    // Second card
    "uiux.html",         // Third card
    "cybersecurity.html" // Fourth card
  ];

  cards.forEach((card, index) => {
    card.addEventListener('click', () => {
      window.location.href = cardLinks[index];
    });
  });

  /* ------------ Initialize ------------ */
  updateActiveCard();
  startAutoSlide();

});
