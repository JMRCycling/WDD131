// ── Shared: Mobile nav toggle 
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('mainNav');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});

nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

// ── Shared: Footer year 
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// ── Home page: Render skill tags from array 
const skills = [
  'JavaScript', 'React', 'Node.js', 'Swift', 'Kotlin',
  'HTML / CSS', 'Git', 'REST APIs', 'Strava API'
];

function renderSkills(skillsArray) {
  const grid = document.getElementById('skillsGrid');
  if (!grid) return;
  grid.innerHTML = skillsArray
    .map(skill => `<span class="skill-tag">${skill}</span>`)
    .join('');
}

renderSkills(skills);

// ── Home page: Mason object ────────────────────────────────────────────────
const mason = {
  role:           'Software Developer',
  education:      'BYU-Idaho',
  skills:         ['JavaScript', 'React', 'Swift', 'Kotlin'],
  hobbies:        ['Mountain biking', 'Trail exploring'],
  currentProject: 'KOR',
  openToWork:     true
};

function formatValue(value) {
  if (typeof value === 'boolean') {
    return `<span class="kw">${value}</span>`;
  }
  if (Array.isArray(value)) {
    const items = value.map(item => `<span class="str">"${item}"</span>`).join(', ');
    return `[${items}]`;
  }
  return `<span class="str">"${value}"</span>`;
}

function renderMasonObject(obj) {
  const container = document.getElementById('masonObject');
  if (!container) return;

  const entries = Object.entries(obj);
  const lines = entries.map(([key, value], i) => {
    const comma = i < entries.length - 1 ? ',' : '';
    return `  ${key}<span class="op">:</span> ${formatValue(value)}${comma}`;
  });

  container.innerHTML = `<pre><code><span class="kw">const</span> Mason <span class="op">=</span> {\n${lines.join('\n')}\n};</code></pre>`;
}

renderMasonObject(mason);
