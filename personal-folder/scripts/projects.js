// ── Project data (objects in an array) ────────────────────────────────────
const projects = [
  {
    title: 'KOR — Keep On Rolling',
    description: 'A bike maintenance tracking app for iOS and Android. Integrates with Strava to automatically track component wear and notify cyclists when maintenance is due.',
    image: 'images/kor-mobile.png',
    tags: ['Mobile', 'iOS', 'Android'],
    link: '#'
  },
  {
    title: 'KOR Website',
    description: 'Marketing and documentation site for the KOR app, built to onboard new users and showcase features.',
    image: 'images/kor-website.png',
    tags: ['Web Design', 'Web App'],
    link: '#'
  },
  {
    title: 'Route Optimizer',
    description: 'A tool for optimizing delivery and travel routes for maximum efficiency, reducing time and fuel costs.',
    image: 'images/route-optimizer.png',
    tags: ['Web App'],
    link: '#'
  },
  {
    title: 'Landscaping Site',
    description: 'A professional website built for a local landscaping business to showcase services and generate leads.',
    image: 'images/landscaping.jpg',
    tags: ['Web Design'],
    link: '#'
  }
];

// ── Render a project card ──────────────────────────────────────────────────
function createProjectCard(project) {
  return `
    <div class="project-card">
      <div class="card-image">
        <img src="${project.image}" alt="${project.title}" loading="lazy">
        <div class="card-overlay">
          <p>${project.description}</p>
          <a href="${project.link}" class="btn btn-sm">Learn More</a>
        </div>
      </div>
      <div class="card-body">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="tags">
          ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
      </div>
    </div>`;
}

// ── Render all projects in a given array ───────────────────────────────────
function renderProjects(projectsArray) {
  const grid = document.getElementById('projectsGrid');
  const countEl = document.getElementById('filterCount');
  if (!grid) return;

  if (projectsArray.length === 0) {
    grid.innerHTML = '<p class="no-results">No projects found for that filter.</p>';
  } else {
    grid.innerHTML = projectsArray.map(createProjectCard).join('');
  }

  if (countEl) {
    countEl.textContent = `Showing ${projectsArray.length} of ${projects.length} projects`;
  }
}

// ── Filter projects by tag ─────────────────────────────────────────────────
function filterProjects(tag) {
  if (tag === 'All') {
    return projects;
  }
  return projects.filter(project => project.tags.includes(tag));
}

// ── Wire up filter buttons ─────────────────────────────────────────────────
const filterBtns = document.querySelectorAll('.filter-btn');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Modify: toggle active class on buttons
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const tag = btn.dataset.filter;
    const filtered = filterProjects(tag);
    renderProjects(filtered);
  });
});

// ── Initial render ─────────────────────────────────────────────────────────
renderProjects(projects);

// ── Contact form with validation ───────────────────────────────────────────
function validateField(value, fieldName) {
  if (value.trim() === '') {
    return `${fieldName} is required.`;
  }
  if (fieldName === 'Email' && !value.includes('@')) {
    return 'Please enter a valid email address.';
  }
  return '';
}

const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name    = document.getElementById('nameInput');
    const email   = document.getElementById('emailInput');
    const message = document.getElementById('messageInput');

    const nameErr    = document.getElementById('nameError');
    const emailErr   = document.getElementById('emailError');
    const messageErr = document.getElementById('messageError');
    const successMsg = document.getElementById('formSuccess');

    // Validate each field and display errors conditionally
    const errors = {
      name:    validateField(name.value, 'Name'),
      email:   validateField(email.value, 'Email'),
      message: validateField(message.value, 'Message')
    };

    nameErr.textContent    = errors.name;
    emailErr.textContent   = errors.email;
    messageErr.textContent = errors.message;

    const hasErrors = Object.values(errors).some(err => err !== '');

    if (!hasErrors) {
      successMsg.style.display = 'block';
      contactForm.reset();
      setTimeout(() => { successMsg.style.display = 'none'; }, 4000);
    }
  });
}
