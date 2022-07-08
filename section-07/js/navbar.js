const navbar = document.querySelector('.navbar');

// Add class 'away-from-top' and remove class 'start-top' when scrolled down.
// When scrolled all the way back to the top, remove class 'away-from-top' and
// add class 'back-to-top'.
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    navbar.classList.remove('at-top');
    navbar.classList.add('away-from-top');
  } else {
    navbar.classList.remove('away-from-top');
    navbar.classList.add('at-top');
  }
});

if (window.scrollY > 100) {
  const headerContainer = document.querySelector('header .container');
  headerContainer.getAnimations().forEach(animation => {
    animation.cancel();
  });
}
