// Smooth scroll untuk navigasi
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').replace('#', '');
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Hover effect untuk avatar
const avatar = document.querySelector('.avatar');
if (avatar) {
  avatar.addEventListener('mouseenter', () => {
    avatar.style.backgroundColor = '#00aacc';
  });
  avatar.addEventListener('mouseleave', () => {
    avatar.style.backgroundColor = '#00d4ff';
  });
}