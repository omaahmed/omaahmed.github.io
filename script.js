// ===== Section navigation (tab switching, no page reload) =====
const navItems = document.querySelectorAll('.nav-item');
const panels = document.querySelectorAll('.panel');

navItems.forEach(item => {
  item.addEventListener('click', () => {
    const targetId = item.getAttribute('data-target');

    navItems.forEach(i => i.classList.remove('is-active'));
    item.classList.add('is-active');

    panels.forEach(panel => {
      panel.classList.toggle('is-active', panel.id === targetId);
    });

    history.replaceState(null, '', `#${targetId}`);
  });
});

// ===== Open correct section if URL has a hash on load =====
window.addEventListener('DOMContentLoaded', () => {
  const hash = window.location.hash.replace('#', '');
  if (!hash) return;

  const targetNav = document.querySelector(`.nav-item[data-target="${hash}"]`);
  if (targetNav) targetNav.click();
});