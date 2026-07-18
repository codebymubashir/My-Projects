const track = document.getElementById('track');

document.getElementById('toSignup').addEventListener('click', () => {
  track.classList.add('signup-active');
});

document.getElementById('toLogin').addEventListener('click', () => {
  track.classList.remove('signup-active');
});
