const customerList = document.querySelector('.story-logos');
const carouselButtons = document.querySelectorAll('.carousel-button');
const newsletterForm = document.querySelector('.newsletter-form');

carouselButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const direction = Number(button.dataset.direction);
    const isMobile = window.matchMedia('(max-width: 767px)').matches;

    if (isMobile) {
      const step = customerList.clientWidth;
      const lastIndex = customerList.children.length - 1;
      const currentIndex = Math.round(customerList.scrollLeft / step);
      const nextIndex = (currentIndex + direction + lastIndex + 1) % (lastIndex + 1);
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      customerList.scrollTo({
        left: nextIndex * step,
        behavior: reducedMotion ? 'instant' : 'smooth'
      });
      return;
    }

    if (direction > 0) {
      customerList.append(customerList.firstElementChild);
    } else {
      customerList.prepend(customerList.lastElementChild);
    }
  });
});

newsletterForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const message = newsletterForm.querySelector('.form-message');
  message.textContent = 'Please visit zendesk.com to complete your newsletter subscription.';
});
