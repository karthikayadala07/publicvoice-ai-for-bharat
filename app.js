// ===================== APP STATE =====================
let currentPage = 'home';
let schemeResults = [];
let quizAnswers = [];
let currentQuestion = 0;
let isListening = false;
let recognition = null;
let chatOpen = false;
let speechSynthesis = window.speechSynthesis;

// ===================== INIT =====================
document.addEventListener('DOMContentLoaded', () => {
  renderFeaturedSchemes();
  renderCareerStage('10th');
  renderQuiz();
  renderFAQs();
  initSpeechRecognition();

  // Auto close splash after visiting
  const savedLang = localStorage.getItem('schemefinder_lang');
  if (savedLang) {
    setLanguage(savedLang);
  }

  // Animate guide steps
  setInterval(() => {
    const items = document.querySelectorAll('.gsv-item');
    let active = -1;
    items.forEach((item, i) => { if (item.classList.contains('active')) active = i; });
    items.forEach(i => i.classList.remove('active'));
    if (items.length) items[(active + 1) % items.length].classList.add('active');
  }, 2000);
});

// ===================== SPLASH =====================
function closeSplash() {
  const s = document.getElementById('splash-screen');
  s.style.opacity = '0';
  setTimeout(() => { s.style.display = 'none'; }, 400);
}

// ===================== NAVIGATION =====================
function showPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById('page-' + page);
  if (target) {
    target.classList.add('active');
    currentPage = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  document.querySelectorAll('.nav-link').forEach(l => {
    l.classList.toggle('active', l.getAttribute('onclick')?.includes(page));
  });
  const navLinks = document.getElementById('navLinks');
  if (navLinks) navLinks.classList.remove('open');
}

function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}

// ===================== SCHEMES =====================
function renderFeaturedSchemes() {
  const container = document.getElementById('featuredSchemes');
  if (!container) return;
  const featured = schemesData.slice(0, 6);
  container.innerHTML = featured.map(s => schemeCardHTML(s)).join('');
}

function schemeCardHTML(s) {
  return `
    <div class="scheme-card" onclick="openSchemeModal(${s.id})">
      <div class="scheme-card-top">
        <div class="scheme-icon ${s.color}">${s.icon}</div>
        <div>
          <div class="scheme-title">${s.name}</div>
          <div class="scheme-ministry">${s.ministry}</div>
        </div>
      </div>
      <div class="scheme-tags">
        ${s.tags.map(t => `<span class="tag ${t.toLowerCase().replace(/\s+/g,'')}">${t}</span>`).join('')}
      </div>
      <div class="scheme-benefit"><i class="fas fa-gift"></i> Benefit: <strong>${s.benefit}</strong></div>
      <div class="scheme-actions">
        <button class="btn-scheme-detail" onclick="event.stopPropagation();openSchemeModal(${s.id})">View Details & Guide</button>
        <button class="btn-save-scheme" onclick="event.stopPropagation();saveScheme(${s.id})" title="Save"><i class="far fa-bookmark"></i></button>
      </div>
    </div>
  `;
}

function filterSchemes(cat) {
  showPage('schemes');
  setTimeout(() => {
    const results = schemesData.filter(s => s.category === cat);
    displaySchemeResults(results);
  }, 100);
}

function searchSchemes() {
  const age = parseInt(document.getElementById('fAge')?.value) || 0;
  const income = document.getElementById('fIncome')?.value || '';
  const occ = document.getElementById('fOcc')?.value || '';
  const cat = document.getElementById('fCat')?.value || '';
  const gender = document.getElementById('fGender')?.value || '';

  let results = schemesData.filter(scheme => {
    let pass = true;
    const e = scheme.eligibility;
    if (age && e.minAge && age < e.minAge) pass = false;
    if (age && e.maxAge && age > e.maxAge) pass = false;
    if (occ && e.occupation && !e.occupation.includes(occ)) {
      // still show if no occupation restriction
    }
    if (cat && e.categories && !e.categories.includes(cat) && e.categories.length > 0) pass = false;
    if (gender && e.gender && !e.gender.includes(gender)) pass = false;
    return pass;
  });

  if (results.length === 0) results = schemesData; // show all if no filters match
  displaySchemeResults(results);
  showToast(`Found ${results.length} matching schemes!`, 'success');
}

function displaySchemeResults(results) {
  schemeResults = results;
  const container = document.getElementById('schemesResults');
  const countEl = document.getElementById('schemeCount');
  if (countEl) countEl.textContent = results.length;
  if (!container) return;
  if (results.length === 0) {
    container.innerHTML = `<div class="no-search-yet"><div class="nsy-icon">😔</div><h3>No schemes found</h3><p>Try adjusting your filters</p></div>`;
    return;
  }
  container.innerHTML = results.map(s => schemeCardHTML(s)).join('');
}

function resetFilters() {
  ['fAge','fIncome','fOcc','fCat','fGender','fState'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  document.getElementById('schemesResults').innerHTML = `
    <div class="no-search-yet">
      <div class="nsy-icon">🔍</div>
      <h3>Enter your details to find matching schemes</h3>
      <p>Fill the filters on the left to get personalized results</p>
      <button class="btn-primary" onclick="searchSchemes()">Show All Schemes</button>
    </div>`;
  document.getElementById('schemeCount').textContent = '0';
}

function sortSchemeResults() {
  const sort = document.getElementById('sortSchemes').value;
  let sorted = [...schemeResults];
  if (sort === 'az') sorted.sort((a, b) => a.name.localeCompare(b.name));
  displaySchemeResults(sorted);
}

function toggleFilterSidebar() {
  document.getElementById('filterSidebar').classList.toggle('open');
}

// ===================== SCHEME MODAL =====================
function openSchemeModal(id) {
  const scheme = schemesData.find(s => s.id === id);
  if (!scheme) return;
  const modal = document.getElementById('schemeModal');
  const content = document.getElementById('schemeModalContent');
  content.innerHTML = `
    <div class="modal-scheme-header">
      <div class="modal-scheme-icon ${scheme.color}">${scheme.icon}</div>
      <div>
        <div class="modal-scheme-title">${scheme.name}</div>
        <div class="modal-scheme-ministry">${scheme.ministry}</div>
        <div class="scheme-tags" style="margin-top:8px">
          ${scheme.tags.map(t => `<span class="tag central">${t}</span>`).join('')}
        </div>
      </div>
    </div>
    <div class="modal-section">
      <h4>📋 About This Scheme</h4>
      <p>${scheme.description}</p>
    </div>
    <div class="modal-section">
      <h4>🎁 Benefits</h4>
      <p><strong>${scheme.benefit}</strong></p>
    </div>
    <div class="modal-section">
      <h4>📄 Required Documents</h4>
      <ul>${scheme.documents.map(d => `<li>${d}</li>`).join('')}</ul>
    </div>
    <div class="modal-section">
      <h4>📍 Step-by-Step Application Guide</h4>
      <div class="step-guide">
        ${scheme.steps.map((step, i) => `
          <div class="step-guide-item">
            <div class="sg-num">${i+1}</div>
            <div class="sg-text">${step}</div>
          </div>
        `).join('')}
      </div>
    </div>
    <div class="modal-actions">
      <a href="${scheme.applyLink}" target="_blank" class="btn-primary">
        <i class="fas fa-external-link-alt"></i> Apply Now (Official Portal)
      </a>
      <button class="btn-outline" onclick="speakSchemeDetails(${id})">
        <i class="fas fa-volume-up"></i> Listen
      </button>
    </div>
  `;
  modal.classList.add('active');
}

function closeSchemeModal(event) {
  if (event.target === document.getElementById('schemeModal')) {
    document.getElementById('schemeModal').classList.remove('active');
  }
}

function saveScheme(id) {
  showToast('Scheme saved! Login to access your saved schemes.', 'info');
}

function speakSchemeDetails(id) {
  const scheme = schemesData.find(s => s.id === id);
  if (!scheme) return;
  const text = `${scheme.name}. ${scheme.description}. Benefits: ${scheme.benefit}. Documents needed: ${scheme.documents.join(', ')}.`;
  speakText(text);
}

// ===================== CAREER =====================
function showCareerSection(section) {
  if (section === 'predictor') {
    document.getElementById('career-predictor-section')?.scrollIntoView({ behavior: 'smooth' });
  } else {
    document.querySelector('.career-stages')?.scrollIntoView({ behavior: 'smooth' });
  }
}

function showStage(stage) {
  document.querySelectorAll('.stage-tab').forEach(t => t.classList.remove('active'));
  event.target.classList.add('active');
  renderCareerStage(stage);
}

function renderCareerStage(stage) {
  const content = document.getElementById('careerStageContent');
  if (!content) return;
  const paths = careerData[stage] || [];
  const stageNames = { '10th': 'After 10th Grade', '12th': 'After 12th (Intermediate)', 'grad': 'After Graduation', 'pg': 'After Post-Graduation' };
  content.innerHTML = `
    <div style="margin-bottom:24px">
      <h3 style="font-size:22px;font-weight:800;margin-bottom:8px">Career Paths — ${stageNames[stage]}</h3>
      <p style="color:var(--text-muted)">Click any card to see detailed roadmap, exams, and salary</p>
    </div>
    <div class="career-path-grid">
      ${paths.map(p => `
        <div class="career-path-card" onclick="openCareerDetail(this)" 
          data-title="${p.title}" data-desc="${p.desc}" data-salary="${p.salary}" 
          data-exams="${p.exams}" data-skills="${p.skills}">
          <div class="cpc-icon">${p.icon}</div>
          <div class="cpc-title">${p.title}</div>
          <div class="cpc-desc">${p.desc}</div>
          <div class="cpc-salary">💰 ${p.salary}</div>
          <div class="cpc-tags">${p.tags.map(t => `<span class="cpc-tag">${t}</span>`).join('')}</div>
        </div>
      `).join('')}
    </div>
  `;
}

function openCareerDetail(card) {
  const title = card.dataset.title;
  const desc = card.dataset.desc;
  const salary = card.dataset.salary;
  const exams = card.dataset.exams;
  const skills = card.dataset.skills;
  const details = careerDetails[title] || {};

  const modal = document.getElementById('schemeModal');
  const content = document.getElementById('schemeModalContent');
  content.innerHTML = `
    <div class="modal-scheme-header">
      <div class="modal-scheme-icon education" style="font-size:32px">🎓</div>
      <div>
        <div class="modal-scheme-title">${title}</div>
        <div class="modal-scheme-ministry">${desc}</div>
      </div>
    </div>
    <div class="modal-section">
      <h4>💰 Salary Range</h4>
      <p><strong style="color:var(--accent);font-size:18px">${salary}</strong></p>
    </div>
    <div class="modal-section">
      <h4>📝 Key Entrance Exams</h4>
      <p>${exams}</p>
    </div>
    <div class="modal-section">
      <h4>🔧 Required Skills</h4>
      <p>${skills}</p>
    </div>
    ${details.courses ? `<div class="modal-section"><h4>📚 Courses to Pursue</h4><p>${details.courses}</p></div>` : ''}
    ${details.jobs ? `<div class="modal-section"><h4>💼 Job Roles</h4><p>${details.jobs}</p></div>` : ''}
    <div class="modal-section">
      <h4>🗺️ Roadmap to Success</h4>
      <div class="step-guide">
        <div class="step-guide-item"><div class="sg-num">1</div><div class="sg-text">Complete required educational qualification with good grades</div></div>
        <div class="step-guide-item"><div class="sg-num">2</div><div class="sg-text">Prepare for entrance exams: ${exams}</div></div>
        <div class="step-guide-item"><div class="sg-num">3</div><div class="sg-text">Build skills: ${skills}</div></div>
        <div class="step-guide-item"><div class="sg-num">4</div><div class="sg-text">Apply for relevant colleges/companies/positions</div></div>
        <div class="step-guide-item"><div class="sg-num">5</div><div class="sg-text">Keep learning and upskilling throughout your career</div></div>
      </div>
    </div>
    <div class="modal-actions">
      <button class="btn-primary" onclick="sendQuickMsg('Tell me more about ${title} career')">
        <i class="fas fa-comment"></i> Ask AI Assistant
      </button>
      <button class="btn-outline" onclick="speakText('${title}. ${desc}. Salary: ${salary}. Exams: ${exams}.')">
        <i class="fas fa-volume-up"></i> Listen
      </button>
    </div>
  `;
  modal.classList.add('active');
}

// ===================== QUIZ / AI PREDICTOR =====================
function renderQuiz() {
  if (currentQuestion >= quizQuestions.length) {
    showQuizResults();
    return;
  }
  const q = quizQuestions[currentQuestion];
  const progress = ((currentQuestion / quizQuestions.length) * 100).toFixed(0);
  const container = document.getElementById('quizContent');
  const progressBar = document.getElementById('quizProgress');
  const progressText = document.getElementById('quizProgressText');
  if (!container) return;

  if (progressBar) progressBar.style.setProperty('--progress', progress + '%');
  if (progressBar) progressBar.innerHTML = `<div style="height:100%;background:var(--gradient);border-radius:3px;width:${progress}%;transition:width 0.5s ease"></div>`;
  if (progressText) progressText.textContent = `Question ${currentQuestion + 1} of ${quizQuestions.length}`;

  container.innerHTML = `
    <div class="quiz-question">${q.q}</div>
    <div class="quiz-options">
      ${q.options.map((opt, i) => `
        <button class="quiz-option" onclick="selectAnswer('${opt.value}', this)">
          ${opt.label}
        </button>
      `).join('')}
    </div>
    <div class="quiz-nav">
      <button class="btn-outline" onclick="prevQuestion()" ${currentQuestion === 0 ? 'style="visibility:hidden"' : ''}>
        ← Previous
      </button>
      <button class="btn-primary" id="nextBtn" onclick="nextQuestion()" style="visibility:hidden">
        ${currentQuestion === quizQuestions.length - 1 ? 'See Results 🎯' : 'Next →'}
      </button>
    </div>
  `;
}

function selectAnswer(value, btn) {
  document.querySelectorAll('.quiz-option').forEach(o => o.classList.remove('selected'));
  btn.classList.add('selected');
  quizAnswers[currentQuestion] = value;
  document.getElementById('nextBtn').style.visibility = 'visible';
}

function nextQuestion() {
  if (quizAnswers[currentQuestion] === undefined) {
    showToast('Please select an option', 'error');
    return;
  }
  currentQuestion++;
  if (currentQuestion >= quizQuestions.length) {
    showQuizResults();
  } else {
    renderQuiz();
  }
}

function prevQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    renderQuiz();
  }
}

function showQuizResults() {
  const container = document.getElementById('quizContent');
  const resultsDiv = document.getElementById('quizResults');
  if (container) container.innerHTML = '';
  if (!resultsDiv) return;
  resultsDiv.classList.remove('hidden');

  const predictions = predictCareers(quizAnswers);
  const maxScore = predictions[0][1] || 1;

  resultsDiv.innerHTML = `
    <div class="results-header">
      <h2>🎯 Your AI Career Recommendations</h2>
      <p>Based on your interests, strengths, and goals — here are your top career matches</p>
    </div>
    ${predictions.map(([career, score], i) => {
      const details = careerDetails[career] || {};
      const matchPct = Math.round((score / maxScore) * 100);
      return `
        <div class="career-result-card">
          <div class="crc-header">
            <div class="crc-rank">${i + 1}</div>
            <div>
              <div class="crc-title">${career}</div>
              <div class="crc-match">🎯 ${matchPct}% Match</div>
            </div>
            <div style="margin-left:auto">
              <div style="width:80px;height:8px;background:var(--border);border-radius:4px">
                <div style="height:100%;width:${matchPct}%;background:var(--gradient);border-radius:4px"></div>
              </div>
            </div>
          </div>
          <p class="crc-desc">${details.desc || 'A promising career path well-suited to your profile.'}</p>
          <div class="crc-details">
            <div class="crc-detail"><strong>💰 Salary</strong>${details.salary || 'Varies'}</div>
            <div class="crc-detail"><strong>📝 Exams</strong>${details.exams || 'Check official sites'}</div>
            <div class="crc-detail"><strong>🔧 Skills</strong>${details.skills || 'Domain-specific skills'}</div>
            <div class="crc-detail"><strong>💼 Jobs</strong>${details.jobs || 'Multiple roles available'}</div>
          </div>
        </div>
      `;
    }).join('')}
    <button class="btn-outline btn-full" onclick="retakeQuiz()" style="margin-top:20px">
      <i class="fas fa-redo"></i> Retake Quiz
    </button>
  `;
}

function retakeQuiz() {
  quizAnswers = [];
  currentQuestion = 0;
  document.getElementById('quizResults').classList.add('hidden');
  renderQuiz();
}

// ===================== FAQs =====================
function renderFAQs() {
  const container = document.getElementById('faqList');
  if (!container) return;
  container.innerHTML = faqData.map((faq, i) => `
    <div class="faq-item" id="faq-${i}">
      <div class="faq-q" onclick="toggleFAQ(${i})">
        <span>${faq.q}</span>
        <i class="fas fa-chevron-down"></i>
      </div>
      <div class="faq-a">${faq.a}</div>
    </div>
  `).join('');
}

function toggleFAQ(i) {
  const item = document.getElementById('faq-' + i);
  item.classList.toggle('open');
}

// ===================== CHATBOT =====================
function toggleChatbot() {
  chatOpen = !chatOpen;
  const bot = document.getElementById('chatbot');
  const badge = document.getElementById('chatBadge');
  if (chatOpen) {
    bot.classList.add('open');
    if (badge) badge.style.display = 'none';
  } else {
    bot.classList.remove('open');
  }
}

function sendChatMsg() {
  const input = document.getElementById('chatInput');
  const msg = input.value.trim();
  if (!msg) return;
  input.value = '';
  appendChatMsg(msg, 'user');
  showTyping();
  setTimeout(() => {
    removeTyping();
    const reply = generateBotReply(msg);
    appendChatMsg(reply, 'bot');
  }, 1200);
}

function sendQuickMsg(msg) {
  if (!chatOpen) toggleChatbot();
  setTimeout(() => {
    appendChatMsg(msg, 'user');
    showTyping();
    setTimeout(() => {
      removeTyping();
      appendChatMsg(generateBotReply(msg), 'bot');
    }, 1200);
  }, 300);
}

function appendChatMsg(text, sender) {
  const msgs = document.getElementById('chatMessages');
  const div = document.createElement('div');
  div.className = `chat-msg ${sender}`;
  div.innerHTML = `<div class="chat-bubble">${text}</div>`;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

function showTyping() {
  const msgs = document.getElementById('chatMessages');
  const div = document.createElement('div');
  div.className = 'chat-msg bot typing-indicator';
  div.innerHTML = `<div class="chat-bubble"><div class="typing-dots"><span></span><span></span><span></span></div></div>`;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

function removeTyping() {
  const t = document.querySelector('.typing-indicator');
  if (t) t.remove();
}

function generateBotReply(msg) {
  const m = msg.toLowerCase();
  if (m.includes('complaint') || m.includes('problem') || m.includes('issue')) {
    return `I can help you file a complaint! 📝<br><br>Please provide:<br>• Your name and contact number<br>• Which scheme has an issue<br>• Describe your problem briefly<br><br>You can also call the Centralized Public Grievance Redress system at <strong>1800-111-555</strong> (Toll Free) or visit <strong>pgportal.gov.in</strong>`;
  }
  if (m.includes('scheme') || m.includes('find') || m.includes('benefit')) {
    return `Great! Let me help you find schemes. 🔍<br><br>To get personalized results, please go to <strong>"Find Schemes"</strong> section and fill in:<br>• Your age<br>• Annual income<br>• Occupation<br>• Category (SC/ST/OBC/General)<br><br>Or tell me your details here and I'll suggest matching schemes!`;
  }
  if (m.includes('apply') || m.includes('application') || m.includes('how to')) {
    return `Here's how to apply for any scheme: 📋<br><br><strong>Step 1:</strong> Click "View Details & Guide" on any scheme card<br><strong>Step 2:</strong> Collect all listed documents<br><strong>Step 3:</strong> Visit the official portal link provided<br><strong>Step 4:</strong> Fill the online form or visit nearest CSC<br><strong>Step 5:</strong> Track your application status<br><br>Which scheme do you want to apply for?`;
  }
  if (m.includes('career') || m.includes('job') || m.includes('study')) {
    return `I can guide you on career choices! 🎓<br><br>We have detailed career paths for:<br>• After 10th grade<br>• After 12th (Intermediate)<br>• After Graduation<br>• After Post-Graduation<br><br>Also try our <strong>AI Career Predictor</strong> — take a quick quiz and get personalized career recommendations!<br><br>Go to the <strong>"Career Guide"</strong> tab to explore!`;
  }
  if (m.includes('pm kisan') || m.includes('farmer') || m.includes('kisan')) {
    return `PM Kisan Samman Nidhi 🌾<br><br><strong>Benefit:</strong> ₹6,000/year (₹2000 every 4 months)<br><strong>Eligibility:</strong> All farmer families<br><strong>Documents:</strong> Aadhaar, Bank account, Land records<br><strong>Apply:</strong> pmkisan.gov.in<br><br>Would you like step-by-step guidance to apply?`;
  }
  if (m.includes('ayushman') || m.includes('health') || m.includes('hospital')) {
    return `Ayushman Bharat PM-JAY 🏥<br><br><strong>Benefit:</strong> ₹5 Lakh/year health insurance per family<br><strong>Eligibility:</strong> BPL/low-income families<br><strong>Check eligibility:</strong> pmjay.gov.in<br><br>Provides cashless treatment at 25,000+ empanelled hospitals. Want to know how to get your Ayushman Card?`;
  }
  if (m.includes('scholarship') || m.includes('student') || m.includes('education')) {
    return `Education Scholarships 📚<br><br>Available scholarships for students:<br>• <strong>NSP Scholarships</strong> - For SC/ST/OBC students (₹500-₹20,000/year)<br>• <strong>PM Scholarship</strong> - For defence children<br>• <strong>State Scholarships</strong> - Check your state portal<br>• <strong>ePass Scholarships</strong> - For Telangana/AP students<br><br>Visit <strong>scholarships.gov.in</strong> to apply for central scholarships!`;
  }
  if (m.includes('hello') || m.includes('hi') || m.includes('namaste') || m.includes('help')) {
    return `Namaste! 🙏 How can I help you today?<br><br>I can assist with:<br>• 🔍 Finding government schemes<br>• 📝 Filing complaints<br>• 📋 Application guidance<br>• 🎓 Career guidance<br>• 📄 Document requirements<br><br>Just ask me anything!`;
  }
  return `Thank you for your message! 😊<br><br>I'm here to help with:<br>• Finding government schemes<br>• Filing complaints (grievances)<br>• Application guidance<br>• Career counseling<br><br>For urgent matters, call helpline: <strong>1800-111-555</strong> (Toll Free, 24/7)<br><br>Could you please be more specific about what you need?`;
}

// ===================== SPEECH RECOGNITION =====================
function initSpeechRecognition() {
  if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = getLangCode(currentLang);
    recognition.onresult = (e) => {
      const text = e.results[0][0].transcript;
      if (document.getElementById('chatInput') && chatOpen) {
        document.getElementById('chatInput').value = text;
        sendChatMsg();
      }
    };
    recognition.onerror = () => { isListening = false; updateSpeakBtn(false); };
    recognition.onend = () => { isListening = false; updateSpeakBtn(false); };
  }
}

function getLangCode(lang) {
  const codes = { en: 'en-IN', hi: 'hi-IN', te: 'te-IN', ta: 'ta-IN', kn: 'kn-IN', mr: 'mr-IN', bn: 'bn-IN' };
  return codes[lang] || 'en-IN';
}

function toggleSpeech() {
  if (!recognition) { showToast('Speech recognition not supported in this browser', 'error'); return; }
  if (isListening) {
    recognition.stop();
    isListening = false;
    updateSpeakBtn(false);
  } else {
    recognition.lang = getLangCode(currentLang);
    recognition.start();
    isListening = true;
    updateSpeakBtn(true);
    showToast('Listening... speak now', 'info');
  }
}

function updateSpeakBtn(active) {
  const btn = document.getElementById('speakBtn');
  if (btn) btn.classList.toggle('listening', active);
}

function startVoiceInput(targetId) {
  if (!recognition) { showToast('Voice input not supported', 'error'); return; }
  recognition.lang = getLangCode(currentLang);
  recognition.onresult = (e) => {
    const text = e.results[0][0].transcript;
    const el = document.getElementById(targetId);
    if (el) el.value = text;
  };
  recognition.start();
  showToast('Listening... speak now', 'info');
}

function startSchemeVoiceSearch() {
  if (!recognition) { showToast('Voice input not supported', 'error'); return; }
  const btn = document.getElementById('voiceSearchBtn');
  if (btn) btn.classList.add('listening');
  recognition.lang = getLangCode(currentLang);
  recognition.onresult = (e) => {
    const text = e.results[0][0].transcript.toLowerCase();
    if (btn) btn.classList.remove('listening');
    showToast(`You said: "${text}"`, 'info');
    // Parse voice for age
    const ageMatch = text.match(/(\d+)\s*(year|age|years)/);
    if (ageMatch) document.getElementById('fAge').value = ageMatch[1];
    // Parse for category
    if (text.includes('obc')) document.getElementById('fCat').value = 'obc';
    else if (text.includes('sc') || text.includes('dalit')) document.getElementById('fCat').value = 'sc';
    else if (text.includes('st') || text.includes('tribal')) document.getElementById('fCat').value = 'st';
    // Parse for occupation
    if (text.includes('farmer')) document.getElementById('fOcc').value = 'farmer';
    else if (text.includes('student')) document.getElementById('fOcc').value = 'student';
    else if (text.includes('business')) document.getElementById('fOcc').value = 'business';
    setTimeout(searchSchemes, 500);
  };
  recognition.onerror = () => { if (btn) btn.classList.remove('listening'); };
  recognition.start();
}

function startChatVoice() {
  if (!recognition) { showToast('Voice input not supported', 'error'); return; }
  const btn = document.getElementById('chatVoiceBtn');
  if (btn) btn.classList.add('listening');
  recognition.lang = getLangCode(currentLang);
  recognition.onresult = (e) => {
    const text = e.results[0][0].transcript;
    if (btn) btn.classList.remove('listening');
    document.getElementById('chatInput').value = text;
    sendChatMsg();
  };
  recognition.onerror = () => { if (btn) btn.classList.remove('listening'); };
  recognition.start();
}

// ===================== TEXT TO SPEECH =====================
function speakText(text) {
  if (!speechSynthesis) return;
  speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = getLangCode(currentLang);
  utter.rate = 0.9;
  utter.pitch = 1;
  speechSynthesis.speak(utter);
  showToast('Speaking...', 'info');
}

// ===================== AUTH =====================
function doLogin() {
  const id = document.getElementById('loginId')?.value;
  const pass = document.getElementById('loginPass')?.value;
  if (!id || !pass) { showToast('Please fill all fields', 'error'); return; }
  showToast('Login successful! Welcome back! 🎉', 'success');
  setTimeout(() => showPage('home'), 1500);
}

function doRegister() {
  const fname = document.getElementById('regFname')?.value;
  const phone = document.getElementById('regPhone')?.value;
  const terms = document.getElementById('regTerms')?.checked;
  if (!fname || !phone) { showToast('Please fill all required fields', 'error'); return; }
  if (!terms) { showToast('Please accept the terms & conditions', 'error'); return; }
  showToast('Registration successful! Welcome to SchemeFinder! 🎉', 'success');
  setTimeout(() => showPage('login'), 1500);
}

function socialLogin(provider) {
  showToast(`Connecting to ${provider}...`, 'info');
  setTimeout(() => {
    showToast('Login successful! 🎉', 'success');
    setTimeout(() => showPage('home'), 1000);
  }, 1500);
}

function togglePass(id) {
  const input = document.getElementById(id);
  if (input) input.type = input.type === 'password' ? 'text' : 'password';
}

// ===================== LANGUAGE MODAL =====================
function showLanguageModal() {
  document.getElementById('langModal').classList.add('active');
}

function closeLangModal(event) {
  if (!event || event.target === document.getElementById('langModal')) {
    document.getElementById('langModal').classList.remove('active');
  }
}

// ===================== TOAST =====================
function showToast(msg, type = 'success') {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `${type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️'} ${msg}`;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

// ===================== MISC =====================
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (navbar) {
    if (window.scrollY > 50) {
      navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
    } else {
      navbar.style.boxShadow = '';
    }
  }
});

// Close modals on Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
    if (chatOpen) toggleChatbot();
  }
});
