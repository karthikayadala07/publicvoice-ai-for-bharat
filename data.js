// ===================== SCHEMES DATA =====================
const schemesData = [
  {
    id: 1, name: "PM Kisan Samman Nidhi", ministry: "Ministry of Agriculture",
    category: "agriculture", icon: "🌾", type: "central",
    benefit: "₹6,000/year (₹2000 every 4 months)", description: "Income support to farmer families across India.",
    eligibility: { maxIncome: 200000, occupation: ["farmer"], minAge: 18 },
    documents: ["Aadhaar Card", "Bank Passbook", "Land Records (Khata/7/12)", "Mobile Number"],
    steps: ["Visit pmkisan.gov.in", "Click 'Farmer Corner'", "Choose 'New Farmer Registration'", "Fill form with Aadhaar + land details", "Submit and get registration number", "Amount credited to bank in 4 months"],
    applyLink: "https://pmkisan.gov.in",
    tags: ["Central Govt", "Farmer"], color: "agriculture"
  },
  {
    id: 2, name: "PM Awas Yojana (Gramin)", ministry: "Ministry of Rural Development",
    category: "housing", icon: "🏠", type: "central",
    benefit: "₹1.2 Lakh (plains) / ₹1.3 Lakh (hills)", description: "Housing for all - provides financial assistance to rural poor for constructing pucca houses.",
    eligibility: { maxIncome: 300000, categories: ["sc","st","obc","ews"], minAge: 18 },
    documents: ["Aadhaar Card", "BPL Certificate", "Bank Account", "Land Documents", "Ration Card"],
    steps: ["Contact your Gram Panchayat", "Submit application form", "Awaas Soft list verification", "Get approved & funds transferred", "Construct house as per guidelines", "Submit utilization certificate"],
    applyLink: "https://pmayg.nic.in",
    tags: ["Central Govt", "BPL", "Rural"], color: "housing"
  },
  {
    id: 3, name: "National Scholarship Portal (NSP)", ministry: "Ministry of Education",
    category: "education", icon: "📚", type: "central",
    benefit: "₹500 - ₹20,000/year depending on course", description: "Central scholarships for students from SC/ST/OBC/Minority categories.",
    eligibility: { categories: ["sc","st","obc","ews"], occupation: ["student"], maxAge: 30 },
    documents: ["Income Certificate", "Caste Certificate", "Mark Sheets", "Bank Account", "Aadhaar", "Bonafide Certificate"],
    steps: ["Register on scholarships.gov.in", "Fill personal & academic details", "Upload required documents", "Submit before deadline", "Track status online", "Amount credited to bank"],
    applyLink: "https://scholarships.gov.in",
    tags: ["Scholarship", "Education"], color: "education"
  },
  {
    id: 4, name: "Ayushman Bharat PM-JAY", ministry: "Ministry of Health",
    category: "health", icon: "🏥", type: "central",
    benefit: "₹5 Lakh/year health insurance per family", description: "World's largest health insurance scheme for poor and vulnerable families.",
    eligibility: { maxIncome: 200000, categories: ["sc","st","obc","ews","general"] },
    documents: ["Aadhaar Card", "Ration Card", "SECC Data Verification", "Mobile Number"],
    steps: ["Check eligibility on pmjay.gov.in", "Visit nearest Common Service Centre", "Get Ayushman Card", "Use card at empanelled hospitals", "Cashless treatment up to ₹5 lakh"],
    applyLink: "https://pmjay.gov.in",
    tags: ["Health", "Insurance", "Central Govt"], color: "health"
  },
  {
    id: 5, name: "PM Mudra Yojana", ministry: "Ministry of Finance",
    category: "business", icon: "💼", type: "central",
    benefit: "Loan up to ₹10 Lakh (Shishu/Kishore/Tarun)", description: "Micro-finance loans for small businesses, entrepreneurs, and self-employed individuals.",
    eligibility: { occupation: ["business","self","unemployed"], minAge: 18 },
    documents: ["Aadhaar Card", "PAN Card", "Business Plan", "Bank Statements", "Address Proof"],
    steps: ["Visit nearest bank/MFI", "Fill MUDRA loan application", "Submit business plan & documents", "Bank evaluates and sanctions", "Loan disbursed to account", "Repay as per schedule"],
    applyLink: "https://mudra.org.in",
    tags: ["Business Loan", "Central Govt"], color: "business"
  },
  {
    id: 6, name: "PM Matru Vandana Yojana", ministry: "Ministry of Women & Child Dev",
    category: "women", icon: "👩", type: "central",
    benefit: "₹5,000 in 3 installments for first live birth", description: "Maternity benefit for pregnant and lactating women for first child.",
    eligibility: { gender: ["female"], minAge: 19 },
    documents: ["Aadhaar Card", "Bank Account (of mother)", "MCP Card", "Marriage Certificate"],
    steps: ["Register at Anganwadi/Health Centre", "Fill Form 1A at local AWC", "Get MCP card stamped", "Receive ₹1000 after registration", "₹2000 after 6-month ANC check", "₹2000 after child birth & vaccination"],
    applyLink: "https://wcd.nic.in/schemes/pradhan-mantri-matru-vandana-yojana",
    tags: ["Women", "Maternity"], color: "women"
  },
  {
    id: 7, name: "Old Age Pension (NSAP)", ministry: "Ministry of Rural Development",
    category: "pension", icon: "👴", type: "central",
    benefit: "₹200-₹500/month", description: "Monthly pension for elderly BPL persons aged 60 and above.",
    eligibility: { minAge: 60, maxIncome: 100000, categories: ["sc","st","obc","ews"] },
    documents: ["Aadhaar Card", "Age Proof", "BPL Certificate", "Bank Account"],
    steps: ["Apply at local Panchayat office", "Fill Form-1", "Submit age and BPL proof", "District collector approval", "Pension amount transferred monthly"],
    applyLink: "https://nsap.nic.in",
    tags: ["Pension", "Senior Citizen"], color: "pension"
  },
  {
    id: 8, name: "PM Ujjwala Yojana", ministry: "Ministry of Petroleum",
    category: "women", icon: "🔥", type: "central",
    benefit: "Free LPG connection + ₹1600 subsidy", description: "Free LPG gas connections for BPL households, especially for women.",
    eligibility: { maxIncome: 200000, gender: ["female"], minAge: 18 },
    documents: ["Aadhaar Card", "BPL Certificate / Ration Card", "Bank Account", "Mobile Number"],
    steps: ["Visit nearest LPG distributor", "Fill application form with BPL proof", "Submit documents", "Get free LPG connection", "Refill subsidized via PAHAL"],
    applyLink: "https://pmuy.gov.in",
    tags: ["Women", "BPL", "Central Govt"], color: "women"
  },
  {
    id: 9, name: "Skill India (PMKVY)", ministry: "Ministry of Skill Development",
    category: "youth", icon: "🎓", type: "central",
    benefit: "Free skill training + ₹8000 reward after certification", description: "Free short-term skill training for youth to improve employment opportunities.",
    eligibility: { minAge: 15, maxAge: 45, occupation: ["student","unemployed","labour"] },
    documents: ["Aadhaar Card", "Educational Certificates", "Bank Account", "Photograph"],
    steps: ["Register on skillindiadigital.gov.in", "Select nearest training centre", "Choose a skill course", "Complete training (2-6 months)", "Appear for certification exam", "Receive certificate + reward"],
    applyLink: "https://skillindiadigital.gov.in",
    tags: ["Skill Training", "Youth"], color: "youth"
  },
  {
    id: 10, name: "Rajiv Gandhi Scholarships (Telangana)", ministry: "Telangana Govt - Backward Class",
    category: "education", icon: "📖", type: "state",
    benefit: "Up to ₹20,000/year for BC students", description: "Scholarships for Backward Class students in Telangana for professional courses.",
    eligibility: { categories: ["obc"], occupation: ["student"], states: ["Telangana"] },
    documents: ["Caste Certificate (BC)", "Income Certificate", "Bonafide Certificate", "Marks Memo", "Bank Account", "Aadhaar"],
    steps: ["Register on telanganaepass.cgg.gov.in", "Fill scholarship application", "Upload documents", "College principal verification", "DWO/BWO approval", "Scholarship credited to account"],
    applyLink: "https://telanganaepass.cgg.gov.in",
    tags: ["State Govt", "Scholarship", "OBC"], color: "education"
  },
  {
    id: 11, name: "KCC - Kisan Credit Card", ministry: "NABARD / Ministry of Agriculture",
    category: "agriculture", icon: "🌾", type: "central",
    benefit: "Credit limit of ₹3 Lakh at 4% interest", description: "Easy credit access for farmers for crop cultivation and allied activities.",
    eligibility: { occupation: ["farmer"], minAge: 18, maxAge: 75 },
    documents: ["Aadhaar Card", "Land Records", "Bank Account", "Passport Photo", "Crop Cultivation Plan"],
    steps: ["Visit nearest bank/cooperative", "Fill KCC application form", "Submit land & crop documents", "Bank verifies and sanctions limit", "Receive KCC card", "Withdraw funds as needed"],
    applyLink: "https://www.nabard.org",
    tags: ["Agriculture", "Credit"], color: "agriculture"
  },
  {
    id: 12, name: "Sukanya Samriddhi Yojana", ministry: "Ministry of Finance",
    category: "women", icon: "👧", type: "central",
    benefit: "8.2% interest p.a. + tax benefits for girl child", description: "Savings scheme for parents of girl children to secure their future education and marriage.",
    eligibility: { maxAge: 10, gender: ["female"] },
    documents: ["Girl Child Birth Certificate", "Parents Aadhaar & PAN", "Address Proof"],
    steps: ["Visit Post Office or bank", "Fill SSY account opening form", "Submit girl child documents", "Make minimum ₹250 deposit", "Account earns 8.2% interest", "Maturity in 21 years"],
    applyLink: "https://www.indiapost.gov.in",
    tags: ["Girl Child", "Savings"], color: "women"
  }
];

// ===================== CAREER DATA =====================
const careerData = {
  "10th": [
    { icon: "💻", title: "Polytechnic Diploma", desc: "3-year technical diploma in engineering/technology", salary: "₹15,000 - ₹30,000/month", tags: ["Engineering", "Technical"], exams: "State Polytechnic Entrance", skills: "Math, Science, Technical Drawing" },
    { icon: "🏥", title: "GNM / ANM Nursing", desc: "Nursing diploma for healthcare career", salary: "₹18,000 - ₹35,000/month", tags: ["Healthcare", "Government Jobs"], exams: "State Nursing Entrance", skills: "Biology, Patience, Care" },
    { icon: "🎨", title: "ITI Courses", desc: "Industrial Training Institute - 1-2 year skilled trade courses", salary: "₹12,000 - ₹25,000/month", tags: ["Vocational", "Trade"], exams: "ITI Entrance / NCVT", skills: "Hands-on skill, Mathematics" },
    { icon: "🖥️", title: "Computer Applications (CCA)", desc: "Short-term computer course for office work", salary: "₹10,000 - ₹20,000/month", tags: ["IT", "Office"], exams: "Institute Exam", skills: "Basic Computer, Typing" },
    { icon: "📚", title: "Continue 11th & 12th", desc: "Science/Commerce/Arts stream for higher education", salary: "Opens all career paths", tags: ["Academic", "Foundation"], exams: "Board Exams", skills: "Subject mastery, Time management" }
  ],
  "12th": [
    { icon: "⚕️", title: "MBBS / BDS (Medicine)", desc: "Bachelor of Medicine - become a doctor", salary: "₹50,000 - ₹2,00,000/month", tags: ["Medicine", "Top Career"], exams: "NEET UG", skills: "Biology, Physics, Chemistry, Dedication" },
    { icon: "🏗️", title: "B.Tech Engineering", desc: "CSE, ECE, Mechanical, Civil - 4 year degree", salary: "₹25,000 - ₹1,50,000/month", tags: ["Engineering", "IT", "Core"], exams: "JEE Main, JEE Advanced, EAMCET", skills: "Math, Physics, Logical Thinking" },
    { icon: "⚖️", title: "BA LLB (Law)", desc: "5-year integrated law degree", salary: "₹30,000 - ₹2,00,000/month", tags: ["Law", "Government"], exams: "CLAT, LSAT, AILET", skills: "English, Reasoning, Current Affairs" },
    { icon: "📊", title: "B.Com / CA (Commerce)", desc: "Commerce degree + Chartered Accountancy", salary: "₹20,000 - ₹1,00,000/month", tags: ["Finance", "Accounts"], exams: "CA Foundation, CUET", skills: "Math, Accounts, Finance" },
    { icon: "🎨", title: "BFA / Design (Arts)", desc: "Fine Arts, Graphic Design, Animation", salary: "₹15,000 - ₹80,000/month", tags: ["Creative", "Design"], exams: "NID, NIFT, State Entrance", skills: "Creativity, Drawing, Software" },
    { icon: "🌾", title: "B.Sc Agriculture", desc: "Agriculture science for farming-related careers", salary: "₹20,000 - ₹60,000/month", tags: ["Agriculture", "Government"], exams: "ICAR AIEEA, State Agri Entrance", skills: "Biology, Chemistry, Rural Knowledge" }
  ],
  "grad": [
    { icon: "🎓", title: "M.Tech / M.E (Engineering)", desc: "Masters in technical specializations", salary: "₹40,000 - ₹2,00,000/month", tags: ["Engineering", "Research", "IIT"], exams: "GATE", skills: "Technical expertise, Research aptitude" },
    { icon: "💼", title: "MBA (Management)", desc: "Master of Business Administration - management roles", salary: "₹30,000 - ₹3,00,000/month", tags: ["Management", "Corporate", "Finance"], exams: "CAT, XAT, MAT, GMAT", skills: "Leadership, Communication, Quant" },
    { icon: "📝", title: "Civil Services (IAS/IPS/IFS)", desc: "Prestigious government administrative roles", salary: "₹56,100 - ₹2,50,000/month", tags: ["Government", "IAS", "Prestigious"], exams: "UPSC CSE", skills: "Current Affairs, Essay, Interview" },
    { icon: "🔬", title: "M.Sc Research / PhD Track", desc: "Research career in universities and labs", salary: "₹25,000 - ₹1,00,000/month", tags: ["Research", "Academia"], exams: "CSIR NET, GATE, University Entrance", skills: "Research aptitude, Subject depth" },
    { icon: "🌐", title: "Software Engineer / IT", desc: "Direct industry placement after B.Tech", salary: "₹25,000 - ₹2,00,000/month", tags: ["IT", "Software", "Startup"], exams: "Campus placements, AMCAT, Coding tests", skills: "Coding (Python/Java), DSA, Problem-solving" },
    { icon: "🏦", title: "Banking (IBPS/SBI)", desc: "Bank PO, SO, Clerk - government bank jobs", salary: "₹25,000 - ₹60,000/month", tags: ["Banking", "Government", "Stable"], exams: "IBPS PO/Clerk, SBI PO, RBI Grade B", skills: "Quant, Reasoning, English, GK" }
  ],
  "pg": [
    { icon: "🏫", title: "Assistant Professor / Teaching", desc: "Teach in colleges and universities", salary: "₹40,000 - ₹1,50,000/month", tags: ["Academia", "Teaching"], exams: "UGC NET, State SET", skills: "Subject expertise, Communication" },
    { icon: "🏭", title: "Senior Industry Roles", desc: "Tech Lead, Product Manager, Senior Engineer", salary: "₹80,000 - ₹5,00,000/month", tags: ["Corporate", "Leadership"], exams: "Work experience + interviews", skills: "Domain expertise, Management" },
    { icon: "🚀", title: "Startup / Entrepreneurship", desc: "Start your own company or join early-stage startups", salary: "Variable - potentially unlimited", tags: ["Entrepreneur", "Innovation"], exams: "Incubation programs, pitch competitions", skills: "Business acumen, Risk tolerance, Networking" },
    { icon: "🌍", title: "MS Abroad (USA/Germany/Canada)", desc: "Study abroad for global career opportunities", salary: "$60,000 - $1,50,000 USD/year", tags: ["International", "Global"], exams: "GRE, IELTS/TOEFL, University Applications", skills: "Subject, English, Financial planning" },
    { icon: "🏛️", title: "Indian Forest Service (IFS)", desc: "Forest and environment administration", salary: "₹56,100 - ₹2,50,000/month", tags: ["Government", "IFS", "Environment"], exams: "UPSC IFS", skills: "Science, Botany, Current Affairs" }
  ]
};

// ===================== QUIZ QUESTIONS =====================
const quizQuestions = [
  {
    q: "Which subjects do you enjoy the most?",
    options: [
      { label: "Mathematics & Science", value: "stem" },
      { label: "Commerce & Accounts", value: "commerce" },
      { label: "Arts, History & Literature", value: "arts" },
      { label: "Computers & Technology", value: "tech" }
    ]
  },
  {
    q: "What kind of work environment do you prefer?",
    options: [
      { label: "Office / Corporate setting", value: "corporate" },
      { label: "Outdoors / Field work", value: "field" },
      { label: "Laboratory / Research", value: "research" },
      { label: "Work from anywhere (Freelance)", value: "freelance" }
    ]
  },
  {
    q: "What is your current education level?",
    options: [
      { label: "Completed 10th grade", value: "10th" },
      { label: "Completed 12th grade", value: "12th" },
      { label: "Completed Graduation", value: "grad" },
      { label: "Post-Graduate", value: "pg" }
    ]
  },
  {
    q: "What motivates you the most in a career?",
    options: [
      { label: "High salary & financial security", value: "salary" },
      { label: "Social impact & helping others", value: "impact" },
      { label: "Creativity & expression", value: "creative" },
      { label: "Power & administration", value: "power" }
    ]
  },
  {
    q: "How do you rate your academic performance?",
    options: [
      { label: "Excellent (Above 85%)", value: "excellent" },
      { label: "Good (60–85%)", value: "good" },
      { label: "Average (40–60%)", value: "average" },
      { label: "Below Average (Below 40%)", value: "below" }
    ]
  },
  {
    q: "Which of these activities do you enjoy?",
    options: [
      { label: "Solving puzzles & coding", value: "logical" },
      { label: "Painting, music, writing", value: "artistic" },
      { label: "Leading groups & debates", value: "leadership" },
      { label: "Helping sick/elderly people", value: "caring" }
    ]
  },
  {
    q: "What is your preferred career sector?",
    options: [
      { label: "Government / Public Sector", value: "govt" },
      { label: "Private / Corporate", value: "private" },
      { label: "Healthcare / Medicine", value: "health" },
      { label: "Technology / Startups", value: "tech" }
    ]
  },
  {
    q: "How long are you willing to study/train?",
    options: [
      { label: "1–2 years max", value: "short" },
      { label: "3–4 years degree", value: "medium" },
      { label: "5+ years (includes PG)", value: "long" },
      { label: "Learning never stops", value: "lifelong" }
    ]
  }
];

// ===================== CAREER PREDICTION LOGIC =====================
function predictCareers(answers) {
  const scores = {
    "Software Engineer / IT": 0,
    "MBBS / Medicine": 0,
    "Civil Services (IAS/IPS)": 0,
    "MBA / Management": 0,
    "B.Tech Engineering": 0,
    "CA / Finance": 0,
    "Graphic Design / Creative Arts": 0,
    "Teaching / Professor": 0
  };

  if (answers[0] === "stem" || answers[0] === "tech") { scores["Software Engineer / IT"] += 30; scores["B.Tech Engineering"] += 25; }
  if (answers[0] === "commerce") { scores["CA / Finance"] += 30; scores["MBA / Management"] += 20; }
  if (answers[0] === "arts") { scores["Civil Services (IAS/IPS)"] += 20; scores["Graphic Design / Creative Arts"] += 25; }
  if (answers[1] === "research") { scores["MBBS / Medicine"] += 20; scores["Teaching / Professor"] += 20; }
  if (answers[1] === "corporate") { scores["MBA / Management"] += 20; scores["Software Engineer / IT"] += 15; }
  if (answers[3] === "salary") { scores["Software Engineer / IT"] += 20; scores["MBA / Management"] += 20; }
  if (answers[3] === "impact") { scores["MBBS / Medicine"] += 25; scores["Civil Services (IAS/IPS)"] += 25; }
  if (answers[3] === "creative") { scores["Graphic Design / Creative Arts"] += 30; }
  if (answers[3] === "power") { scores["Civil Services (IAS/IPS)"] += 30; scores["MBA / Management"] += 15; }
  if (answers[4] === "excellent") { scores["MBBS / Medicine"] += 20; scores["Civil Services (IAS/IPS)"] += 15; scores["Software Engineer / IT"] += 15; }
  if (answers[5] === "logical") { scores["Software Engineer / IT"] += 25; scores["B.Tech Engineering"] += 20; }
  if (answers[5] === "artistic") { scores["Graphic Design / Creative Arts"] += 30; }
  if (answers[5] === "leadership") { scores["Civil Services (IAS/IPS)"] += 25; scores["MBA / Management"] += 25; }
  if (answers[5] === "caring") { scores["MBBS / Medicine"] += 30; scores["Teaching / Professor"] += 20; }
  if (answers[6] === "govt") { scores["Civil Services (IAS/IPS)"] += 25; scores["Teaching / Professor"] += 15; }
  if (answers[6] === "health") { scores["MBBS / Medicine"] += 30; }
  if (answers[6] === "tech") { scores["Software Engineer / IT"] += 25; scores["B.Tech Engineering"] += 20; }

  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  return sorted.slice(0, 4);
}

// ===================== CAREER RESULT DETAILS =====================
const careerDetails = {
  "Software Engineer / IT": {
    desc: "Build software, apps, websites, and systems. High demand globally with excellent growth.",
    courses: "B.Tech CSE, BCA, B.Sc Computer Science", salary: "₹4L - ₹50L per annum",
    exams: "JEE Main, EAMCET, Campus Placements", skills: "Python, Java, DSA, Problem Solving",
    jobs: "Software Developer, Data Scientist, App Developer, DevOps Engineer"
  },
  "MBBS / Medicine": {
    desc: "Become a doctor and serve patients. Most respected and impactful profession.",
    courses: "MBBS, BDS, BAMS, BHMS", salary: "₹6L - ₹30L per annum",
    exams: "NEET UG", skills: "Biology, Chemistry, Patience, Communication",
    jobs: "Doctor, Surgeon, Specialist, Medical Researcher"
  },
  "Civil Services (IAS/IPS)": {
    desc: "Administer districts, lead government policy, serve the nation at the highest level.",
    courses: "Any graduation + UPSC prep", salary: "₹7L - ₹25L per annum (+ perks)",
    exams: "UPSC CSE (3 stages: Prelims, Mains, Interview)", skills: "Current Affairs, Essay, Reasoning, Integrity",
    jobs: "IAS, IPS, IFS, IRS, Group A Central Services"
  },
  "MBA / Management": {
    desc: "Lead businesses, teams, and strategy. Opens doors in every industry.",
    courses: "MBA, PGDM, BBA + MBA", salary: "₹5L - ₹50L per annum",
    exams: "CAT, XAT, GMAT, CMAT", skills: "Leadership, Quant, Communication, Decision-making",
    jobs: "Manager, Consultant, Entrepreneur, Finance Analyst"
  },
  "B.Tech Engineering": {
    desc: "Design and build the systems that run the modern world.",
    courses: "B.Tech (CSE/ECE/ME/CE/EE), BE", salary: "₹3L - ₹30L per annum",
    exams: "JEE Main, JEE Advanced, EAMCET", skills: "Math, Physics, Technical analysis",
    jobs: "Core Engineer, Software Engineer, R&D Engineer, Govt PSU"
  },
  "CA / Finance": {
    desc: "Manage money, taxes, audits for companies. Extremely valued profession.",
    courses: "CA (Foundation → Inter → Final), B.Com", salary: "₹6L - ₹40L per annum",
    exams: "CA Foundation (ICAI)", skills: "Accounts, Taxation, Math, Attention to detail",
    jobs: "Chartered Accountant, CFO, Tax Consultant, Auditor"
  },
  "Graphic Design / Creative Arts": {
    desc: "Express creativity through visual design, animation, UI/UX, and digital art.",
    courses: "BFA, BDes, Graphic Design Diploma, NIFT", salary: "₹2L - ₹20L per annum",
    exams: "NID, NIFT, UCEED, State Design Entrance", skills: "Creativity, Adobe Suite, Drawing, Aesthetics",
    jobs: "Graphic Designer, UI/UX Designer, Animator, Art Director"
  },
  "Teaching / Professor": {
    desc: "Shape the next generation. Respected, stable career with good work-life balance.",
    courses: "B.Ed, M.Ed, UGC NET Qualified PG", salary: "₹3L - ₹15L per annum",
    exams: "UGC NET, CTET, State TET, B.Ed Entrance", skills: "Communication, Subject mastery, Patience",
    jobs: "School Teacher, College Lecturer, Assistant Professor"
  }
};

// ===================== FAQ DATA =====================
const faqData = [
  { q: "How does the AI Career Predictor work?", a: "Our AI Predictor analyzes your quiz responses about interests, strengths, academic performance, and goals. It uses a scoring algorithm to match you with the most suitable career paths based on your unique profile." },
  { q: "What careers are available after 10th grade?", a: "After 10th, you can pursue Polytechnic Diploma, ITI courses, GNM Nursing, or continue to 11th-12th. Polytechnic is especially good for technical skills and quick employment." },
  { q: "Is NEET mandatory for all medical careers?", a: "NEET is mandatory for MBBS, BDS, BAMS, BHMS, and BVSC. For paramedical courses like GNM, BSc Nursing, or medical lab technician, separate state-level exams are conducted." },
  { q: "What is the best career after B.Com?", a: "After B.Com, top options include CA (Chartered Accountancy), MBA (Finance/Marketing), Banking (IBPS/SBI), Government jobs, or M.Com for teaching." },
  { q: "How to prepare for UPSC Civil Services?", a: "Start by reading NCERT books thoroughly, then standard books for each subject. Read newspapers daily, solve previous year papers, and take test series. Most successful candidates take 2-3 years of dedicated preparation." },
  { q: "What are the best technology careers for 2025?", a: "AI/ML Engineer, Data Scientist, Cybersecurity Analyst, Cloud Architect, Full Stack Developer, and DevOps Engineer are among the highest-demand and highest-paying tech careers in 2025." },
  { q: "Can I change my career field after graduation?", a: "Yes! Many people switch fields. MBA, Civil Services, and short-term certifications allow career switching. Online platforms also offer reskilling in tech, data science, and design." },
  { q: "Which government exams can I give after B.Tech?", a: "B.Tech graduates can apply for GATE (for M.Tech/PSU jobs), UPSC CSE, SSC CGL, IBPS SO (IT Officer), state PSC exams, and defence services (CDS, AFCAT)." }
];
