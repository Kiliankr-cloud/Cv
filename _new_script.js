import { cvData } from './cv-data.js';

// ── Helpers ───────────────────────────────────────────────────────────────────
function t(field, lang) {
  if (!field) return '';
  if (typeof field === 'string') return field;
  return field[lang] || field.de || '';
}
function md(text) {
  return (text || '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
}

// ── UI labels (navigation, buttons, form — no content here) ──────────────────
const ui = {
  de: {
    nav: ['Berufserfahrung / Ausbildung', 'Fähigkeiten', 'Projekte', 'Kontakt'],
    expTitle: 'Berufserfahrung / Ausbildung',
    skillsTitle: 'Fähigkeiten',
    projectsTitle: 'Projekte',
    contactTitle: 'Kontakt',
    contactBtn: 'Senden',
    success: '✅ Nachricht gesendet',
    placeholderName: 'Ihr Name',
    placeholderEmail: 'Ihre E-Mail',
    placeholderMsg: 'Nachricht',
    langSection: 'Sprachen',
    pdfProfile: 'Profil',
    pdfExp: 'Berufserfahrung',
    pdfEdu: 'Ausbildung',
    pdfSkills: 'Fähigkeiten & Tools',
    pdfSoft: 'Soft Skills',
    pdfLang: 'Sprachen',
  },
  en: {
    nav: ['Work Experience / Education', 'Skills', 'Projects', 'Contact'],
    expTitle: 'Work Experience / Education',
    skillsTitle: 'Skills',
    projectsTitle: 'Projects',
    contactTitle: 'Contact',
    contactBtn: 'Send',
    success: '✅ Message sent',
    placeholderName: 'Your Name',
    placeholderEmail: 'Your Email',
    placeholderMsg: 'Message',
    langSection: 'Languages',
    pdfProfile: 'Profile',
    pdfExp: 'Work Experience',
    pdfEdu: 'Education',
    pdfSkills: 'Skills & Tools',
    pdfSoft: 'Soft Skills',
    pdfLang: 'Languages',
  }
};

// ── Render functions ──────────────────────────────────────────────────────────
function renderTimeline(lang) {
  const items = [
    ...cvData.experience.map(e => ({ role: e.role, sub: e.company,     period: e.period, bullets: e.bullets })),
    ...cvData.education.map(e  => ({ role: e.degree, sub: e.institution, period: e.period, bullets: e.bullets }))
  ];
  return items.map(item => {
    const bullets = (item.bullets && (item.bullets[lang] || item.bullets.de)) || [];
    return `
      <div class="timeline-item">
        <details class="mobile-collapsible">
          <summary>
            <h3>${t(item.role, lang)}</h3>
            <p class="highlight">${item.sub}</p>
            <p style="float:right; margin-top:-70px; opacity:0.7;">${t(item.period, lang)}</p>
          </summary>
          <ul>${bullets.map(b => `<li>${b}</li>`).join('')}</ul>
        </details>
      </div>`;
  }).join('');
}

function renderBento(lang) {
  const langCell = `
    <div class="bento-cell t-dark c-small">
      <span class="cat-label">${ui[lang].langSection}</span>
      <div class="skills-grid">
        ${cvData.languages.map((l, i) =>
          `<div class="skill${i === 0 ? ' accent' : ''}">${t(l.language, lang)} — ${t(l.level, lang)}</div>`
        ).join('')}
      </div>
    </div>`;

  return cvData.skills.map((cat, i) => {
    const items = cat.items.map(item => `<div class="skill">${t(item, lang)}</div>`).join('');
    const cell = `
      <div class="bento-cell ${cat.tone || ''} ${cat.span || ''}">
        <span class="cat-label">${t(cat.category, lang)}</span>
        <div class="skills-grid">${items}</div>
      </div>`;
    return i === 0 ? cell + langCell : cell;
  }).join('');
}

// ── Language ──────────────────────────────────────────────────────────────────
let currentLanguage = 'de';

function applyLanguage(lang) {
  document.querySelectorAll('.nav-links a').forEach((a, i) => {
    if (ui[lang].nav[i]) a.textContent = ui[lang].nav[i];
  });

  document.querySelector('#experience h2').textContent = ui[lang].expTitle;
  document.querySelector('#skills h2').textContent     = ui[lang].skillsTitle;
  document.querySelector('#projects h2').textContent   = ui[lang].projectsTitle;
  document.querySelector('#contact h2').textContent    = ui[lang].contactTitle;

  document.querySelector('.subtitle').textContent  = t(cvData.personal.title, lang);
  document.querySelector('.location').textContent  = t(cvData.personal.location, lang);

  const [p1, p2] = t(cvData.personal.bio, lang).split('\n\n');
  document.getElementById('profileText').innerHTML = `<p>${md(p1)}</p><p>${md(p2)}</p>`;

  document.getElementById('timelineContainer').innerHTML = renderTimeline(lang);
  document.getElementById('bentoContainer').innerHTML    = renderBento(lang);

  document.querySelectorAll('[data-placeholder-key]').forEach(el => {
    const key = el.getAttribute('data-placeholder-key');
    if (ui[lang][key]) el.placeholder = ui[lang][key];
  });
  document.querySelector('#contact button[type="submit"]').textContent = ui[lang].contactBtn;
  document.getElementById('successPopup').textContent = ui[lang].success;

  syncTimelineDesktop();
  updateScrollMargins();
}

function toggleLanguage() {
  currentLanguage = currentLanguage === 'de' ? 'en' : 'de';
  applyLanguage(currentLanguage);
}

// ── Theme / Menu ──────────────────────────────────────────────────────────────
function toggleMobileMenu() {
  document.querySelector('nav').classList.toggle('mobile-open');
}

function toggleTheme() {
  document.body.classList.toggle('light');
}

// ── Timeline helpers ──────────────────────────────────────────────────────────
function syncTimelineDesktop() {
  const isMobile = window.innerWidth <= 900;
  document.querySelectorAll('.mobile-collapsible').forEach(item => {
    if (isMobile) item.removeAttribute('open');
    else item.setAttribute('open', '');
  });
}

function updateScrollMargins() {
  const navHeight = document.querySelector('nav').offsetHeight;
  const offset = navHeight + 4;
  document.querySelectorAll('section').forEach(s => {
    s.style.scrollMarginTop = offset + 'px';
  });
}

// ── PDF download ──────────────────────────────────────────────────────────────
function downloadPDF() {
  const lang = currentLanguage;
  const labels = ui[lang];
  const p = cvData.personal;

  const profileSummary = t(p.bio, lang).split('\n\n')[0].replace(/\*\*(.*?)\*\*/g, '$1');

  const sec = 'font-size:8px;font-weight:800;letter-spacing:0.16em;text-transform:uppercase;color:#888;padding-bottom:3px;border-bottom:1px solid #e0e0e0;';
  const tag = 'border:1px solid #ddd;border-radius:3px;padding:2px 7px;font-size:8.5px;color:#555;';

  const expHtml = cvData.experience.map(e => {
    const bullets = (e.bullets && (e.bullets[lang] || e.bullets.de)) || [];
    return `
      <div style="margin-bottom:10px;">
        <div style="display:flex;justify-content:space-between;align-items:baseline;">
          <div style="font-weight:700;font-size:10.5px;">${t(e.role, lang)}</div>
          <div style="font-size:8.5px;color:#999;">${t(e.period, lang)}</div>
        </div>
        <div style="font-size:9.5px;color:#666;font-weight:600;margin-bottom:2px;">${e.company}</div>
        <ul style="padding-left:12px;margin:3px 0 0;">
          ${bullets.slice(0, 3).map(b => `<li style="font-size:9px;color:#444;margin-bottom:1px;">${b}</li>`).join('')}
        </ul>
      </div>`;
  }).join('');

  const eduHtml = cvData.education.map(e => `
    <div style="margin-bottom:7px;">
      <div style="font-weight:700;font-size:10px;">${t(e.degree, lang)}</div>
      <div style="font-size:9px;color:#888;">${e.institution} · ${t(e.period, lang)}</div>
    </div>`
  ).join('');

  const techSkills = cvData.skills
    .filter(cat => !t(cat.category, lang).toLowerCase().includes('soft'))
    .flatMap(cat => cat.items.map(item => t(item, lang)));
  const softSkills = cvData.skills
    .filter(cat => t(cat.category, lang).toLowerCase().includes('soft'))
    .flatMap(cat => cat.items.map(item => t(item, lang)));

  const skillTagsHtml = techSkills.map(s => `<span style="${tag}">${s}</span>`).join('');
  const softTagsHtml  = softSkills.map(s => `<span style="${tag}">${s}</span>`).join('');
  const langHtml = cvData.languages.map(l =>
    `<div style="font-size:9.5px;">${t(l.language, lang)} <span style="color:#999;font-size:8.5px;margin-left:4px;">${t(l.level, lang)}</span></div>`
  ).join('');

  const html = `
    <div style="width:595px;min-height:842px;background:#fff;color:#111;font-family:Arial,sans-serif;font-size:11px;line-height:1.5;padding:40px 44px;box-sizing:border-box;">
      <div style="display:flex;justify-content:space-between;align-items:flex-end;padding-bottom:10px;border-bottom:2px solid #111;margin-bottom:18px;">
        <div>
          <div style="font-size:22px;font-weight:800;margin:0 0 2px;letter-spacing:-0.02em;">${p.name}</div>
          <div style="font-size:10px;color:#777;text-transform:uppercase;letter-spacing:0.12em;font-weight:600;">${t(p.title, lang)}</div>
        </div>
        <div style="text-align:right;font-size:9px;color:#555;line-height:1.9;">
          ${p.contact.email} &nbsp;·&nbsp; ${p.contact.phone}<br>${p.contact.address}
        </div>
      </div>
      <div style="${sec}margin:0 0 7px;">${labels.pdfProfile}</div>
      <div style="font-size:9.5px;color:#444;line-height:1.7;margin-bottom:14px;">${profileSummary}</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;">
        <div>
          <div style="${sec}margin:0 0 7px;">${labels.pdfExp}</div>
          ${expHtml}
          <div style="${sec}margin:12px 0 7px;">${labels.pdfEdu}</div>
          ${eduHtml}
        </div>
        <div>
          <div style="${sec}margin:0 0 7px;">${labels.pdfSkills}</div>
          <div style="display:flex;flex-wrap:wrap;gap:4px;margin-bottom:12px;">${skillTagsHtml}</div>
          <div style="${sec}margin:0 0 7px;">${labels.pdfSoft}</div>
          <div style="display:flex;flex-wrap:wrap;gap:4px;margin-bottom:12px;">${softTagsHtml}</div>
          <div style="${sec}margin:0 0 7px;">${labels.pdfLang}</div>
          <div style="display:flex;gap:16px;">${langHtml}</div>
        </div>
      </div>
    </div>`;

  const container = document.createElement('div');
  container.style.cssText = 'position:fixed;left:-9999px;top:0;';
  container.innerHTML = html;
  document.body.appendChild(container);

  html2pdf().set({
    margin: 0,
    filename: 'Kilian_Kraeftner_CV.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { unit: 'px', format: [595, 842], orientation: 'portrait' }
  }).from(container.firstElementChild).save().then(() => {
    document.body.removeChild(container);
  });
}

// ── Contact form ──────────────────────────────────────────────────────────────
const form  = document.getElementById('contactForm');
const popup = document.getElementById('successPopup');

form.addEventListener('submit', async function(e) {
  e.preventDefault();
  const name    = form.querySelector('input[name="name"]').value;
  const email   = form.querySelector('input[name="email"]').value;
  const message = form.querySelector('textarea[name="message"]').value;

  try {
    await fetch('https://formsubmit.co/ajax/kiliankraftner@gmail.com', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({ name, email, message, _subject: `Neue CV Anfrage von ${name}` })
    });

    popup.style.display = 'block';
    requestAnimationFrame(() => {
      popup.style.opacity = '1';
      popup.style.transform = 'translateY(0px) scale(1)';
    });
    form.reset();

    setTimeout(() => {
      popup.style.opacity = '0';
      popup.style.transform = 'translateY(-8px) scale(0.96)';
      setTimeout(() => { popup.style.display = 'none'; }, 600);
    }, 2600);
  } catch (error) {
    alert('E-Mail Versand fehlgeschlagen. Bitte später erneut versuchen.');
    console.error(error);
  }
});

// ── Init ──────────────────────────────────────────────────────────────────────
window.addEventListener('load', () => { applyLanguage('de'); });
window.addEventListener('resize', () => { syncTimelineDesktop(); updateScrollMargins(); });

// Expose to HTML onclick handlers
window.toggleMobileMenu = toggleMobileMenu;
window.toggleLanguage   = toggleLanguage;
window.toggleTheme      = toggleTheme;
window.downloadPDF      = downloadPDF;
