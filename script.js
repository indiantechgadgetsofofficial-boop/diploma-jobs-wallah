// Mobile Menu Toggle
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('open');
}

// Close menu when a link is clicked
document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('mobileMenu').classList.remove('open');
  });
});

// Smooth scroll offset for sticky header
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 70;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// Add job dynamically (for future CMS use)
function addJob({ title, org, icon, tags, date, vacancies, isNew = false }) {
  const list = document.querySelector('.jobs-list');
  const card = document.createElement('article');
  card.className = 'job-card' + (isNew ? ' new' : '');
  card.innerHTML = `
    ${isNew ? '<div class="job-badge">NEW</div>' : ''}
    <div class="job-top">
      <div class="job-org-icon">${icon}</div>
      <div class="job-info">
        <h4>${title}</h4>
        <p class="org">${org}</p>
      </div>
    </div>
    <div class="job-tags">
      ${tags.map(t => `<span>${t}</span>`).join('')}
      <span>📅 Last Date: ${date}</span>
      <span>💼 ${vacancies} Vacancies</span>
    </div>
    <div class="job-footer">
      <span class="posted">Today</span>
      <a href="#" class="apply-btn">Apply Now →</a>
    </div>
  `;
  list.prepend(card);
}

// Load More button placeholder
document.querySelector('.btn-outline')?.addEventListener('click', function () {
  this.textContent = 'Loading...';
  setTimeout(() => {
    this.textContent = 'Aur bhi jobs jald aayenge! 🔜';
    this.disabled = true;
    this.style.opacity = '0.6';
  }, 1000);
});
