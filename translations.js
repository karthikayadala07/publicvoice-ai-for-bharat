// ===================== TRANSLATIONS =====================
const translations = {
  en: {
    nav_home: "Home", nav_schemes: "Find Schemes", nav_career: "Career Guide",
    nav_about: "About", nav_login: "Login", nav_register: "Register",
    hero_badge: "India's #1 Scheme Discovery Platform",
    hero_title: "Find Government Schemes Made For You",
    hero_sub: "Enter your details once. Discover all government benefits you're eligible for — instantly.",
    hero_cta1: "Find My Schemes", hero_cta2: "Career Guide",
    stat1: "Schemes Listed", stat2: "Users Helped", stat3: "Languages", stat4: "States Covered",
    hiw_title: "How It Works", hiw_sub: "Get matched to government schemes in 4 simple steps",
    step1_title: "Enter Your Details", step1_desc: "Provide basic info: age, income, occupation, category",
    step2_title: "Eligibility Check", step2_desc: "Our system checks eligibility rules for hundreds of schemes",
    step3_title: "View Matching Schemes", step3_desc: "Get a personalized list of all schemes you qualify for",
    step4_title: "Apply with Guidance", step4_desc: "See benefits, required documents, and apply directly",
    fs_title: "Popular Schemes", fs_sub: "Most searched government schemes across India", fs_btn: "View All Schemes →",
    cat_title: "Browse by Category", cat_agri: "Agriculture", cat_edu: "Education",
    cat_health: "Health", cat_house: "Housing", cat_women: "Women",
    cat_biz: "Business", cat_pension: "Pension", cat_youth: "Youth",
    gp_title: "Step-by-Step Application Guidance",
    gp_desc: "We don't just show you schemes — we walk you through every step of the application process.",
    gp1: "Document checklist for each scheme", gp2: "Office/portal where to apply",
    gp3: "Common mistakes to avoid", gp4: "Status tracking guidance", gp_btn: "Get Guidance →",
    login_welcome: "Welcome Back!", login_sub: "Login to access your saved schemes and recommendations",
    login_title: "Sign In", login_no_acc: "Don't have an account?", login_register_link: "Register here",
    login_phone: "Mobile Number / Email", login_pass: "Password",
    login_remember: "Remember me", login_forgot: "Forgot password?", login_btn: "Login",
    login_or: "OR", login_google: "Continue with Google", login_voice: "Voice Input",
    reg_welcome: "Join SchemeFinder", reg_sub: "Create your free account",
    reg_title: "Create Account", reg_have_acc: "Already have an account?", reg_login_link: "Sign in",
    reg_fname: "First Name", reg_lname: "Last Name", reg_phone: "Mobile Number",
    reg_email: "Email (Optional)", reg_state: "State", reg_cat: "Category",
    reg_pass: "Create Password", reg_terms: "I agree to Terms & Conditions",
    reg_btn: "Create Account", reg_voice: "Voice Input",
    filter_title: "Find Your Schemes", voice_search: "Tap & Speak your details",
    f_age: "Age", f_income: "Annual Income (₹)", f_occ: "Occupation",
    f_cat: "Category", f_gender: "Gender", f_state: "State", f_type: "Scheme Type",
    f_search_btn: "Find Schemes", f_reset: "Reset Filters",
    schemes_found: "schemes found", sort_rel: "Most Relevant", sort_az: "A - Z", sort_ben: "Highest Benefit",
    nsy_title: "Enter your details to find matching schemes",
    nsy_sub: "Fill the filters on the left to get personalized results", nsy_btn: "Show All Schemes",
    ch_title: "Discover Your Perfect Career Path",
    ch_sub: "Personalized career guidance for every student.",
    ch_btn1: "AI Career Predictor", ch_btn2: "Explore Careers",
    st_10: "After 10th", st_12: "After 12th", st_grad: "After Graduation", st_pg: "After Post-Grad",
    cp_title: "AI Career Predictor", cp_sub: "Answer a few questions and our AI will suggest the best career paths",
    faq_title: "Frequently Asked Questions",
    bot_name: "Sahayak AI", bot_status: "Online • Support & Complaints",
    bot_welcome: "Namaste! 🙏 I'm Sahayak AI. I can help you find schemes, file complaints, or answer any questions. What do you need help with?",
    qb1: "Find Schemes", qb2: "File Complaint", qb3: "How to Apply", qb4: "Career Help",
    lm_title: "Choose Language",
    footer_desc: "Connecting citizens with government benefits. Your rights, made simple.",
    fl_schemes: "Schemes", fl_career: "Career", fl_support: "Support",
    af1: "Saved Schemes", af2: "Scheme Alerts", af3: "Application History",
    rf1: "Personalized Scheme Matches", rf2: "7 Language Support", rf3: "24/7 AI Support"
  },
  hi: {
    nav_home: "होम", nav_schemes: "योजनाएं खोजें", nav_career: "करियर मार्गदर्शन",
    nav_about: "जानकारी", nav_login: "लॉगिन", nav_register: "रजिस्टर",
    hero_badge: "भारत का #1 सरकारी योजना पोर्टल",
    hero_title: "आपके लिए सरकारी योजनाएं खोजें",
    hero_sub: "एक बार अपनी जानकारी दें और सभी पात्र सरकारी लाभ तुरंत जानें।",
    hero_cta1: "मेरी योजनाएं खोजें", hero_cta2: "करियर गाइड",
    stat1: "योजनाएं सूचीबद्ध", stat2: "लाभार्थी", stat3: "भाषाएं", stat4: "राज्य",
    hiw_title: "कैसे काम करता है", hiw_sub: "4 आसान चरणों में योजनाएं खोजें",
    step1_title: "विवरण भरें", step1_desc: "आयु, आय, पेशा और वर्ग की जानकारी दें",
    step2_title: "पात्रता जांच", step2_desc: "हमारा सिस्टम सैकड़ों योजनाओं की पात्रता जांचता है",
    step3_title: "मिलान योजनाएं देखें", step3_desc: "आपकी पात्र सभी योजनाओं की सूची मिलेगी",
    step4_title: "आवेदन करें", step4_desc: "लाभ, दस्तावेज और आवेदन लिंक देखें",
    fs_title: "लोकप्रिय योजनाएं", fs_sub: "भारत में सबसे अधिक खोजी गई सरकारी योजनाएं", fs_btn: "सभी योजनाएं देखें →",
    cat_title: "श्रेणी के अनुसार खोजें", cat_agri: "कृषि", cat_edu: "शिक्षा",
    cat_health: "स्वास्थ्य", cat_house: "आवास", cat_women: "महिला",
    cat_biz: "व्यवसाय", cat_pension: "पेंशन", cat_youth: "युवा",
    gp_title: "चरण-दर-चरण आवेदन मार्गदर्शन",
    gp_desc: "हम केवल योजनाएं नहीं दिखाते — हम आपको आवेदन के हर चरण में मार्गदर्शन करते हैं।",
    gp1: "दस्तावेज सूची", gp2: "आवेदन स्थान", gp3: "सामान्य गलतियां", gp4: "स्थिति ट्रैकिंग", gp_btn: "मार्गदर्शन लें →",
    login_welcome: "वापस आपका स्वागत है!", login_title: "लॉगिन",
    login_no_acc: "खाता नहीं है?", login_register_link: "यहां रजिस्टर करें",
    login_phone: "मोबाइल नंबर / ईमेल", login_pass: "पासवर्ड",
    login_remember: "याद रखें", login_forgot: "पासवर्ड भूल गए?", login_btn: "लॉगिन",
    login_or: "या", login_google: "Google से जारी रखें", login_voice: "आवाज़ से भरें",
    reg_title: "खाता बनाएं", reg_btn: "खाता बनाएं",
    filter_title: "योजनाएं खोजें", voice_search: "टैप करें और बोलें",
    f_age: "आयु", f_income: "वार्षिक आय (₹)", f_occ: "पेशा",
    f_cat: "वर्ग", f_gender: "लिंग", f_state: "राज्य", f_type: "योजना प्रकार",
    f_search_btn: "योजनाएं खोजें", f_reset: "रीसेट करें",
    schemes_found: "योजनाएं मिलीं",
    nsy_title: "मिलान योजनाएं खोजने के लिए विवरण भरें",
    nsy_sub: "बाईं ओर फ़िल्टर भरें", nsy_btn: "सभी योजनाएं दिखाएं",
    ch_title: "अपना सर्वश्रेष्ठ करियर खोजें",
    ch_btn1: "AI करियर प्रेडिक्टर", ch_btn2: "करियर खोजें",
    st_10: "10वीं के बाद", st_12: "12वीं के बाद", st_grad: "ग्रेजुएशन के बाद", st_pg: "पोस्ट-ग्रेड के बाद",
    cp_title: "AI करियर प्रेडिक्टर", cp_sub: "कुछ सवालों के जवाब दें और AI सबसे उपयुक्त करियर सुझाएगा",
    faq_title: "अक्सर पूछे जाने वाले प्रश्न",
    bot_name: "सहायक AI", bot_status: "ऑनलाइन • सहायता और शिकायत",
    bot_welcome: "नमस्ते! 🙏 मैं सहायक AI हूं। मैं योजनाएं खोजने, शिकायत दर्ज करने में मदद कर सकता हूं।",
    qb1: "योजनाएं खोजें", qb2: "शिकायत करें", qb3: "आवेदन कैसे करें", qb4: "करियर सहायता",
    lm_title: "भाषा चुनें",
    footer_desc: "नागरिकों को सरकारी लाभ से जोड़ना। आपके अधिकार, सरल भाषा में।"
  },
  te: {
    nav_home: "హోమ్", nav_schemes: "పథకాలు కనుగొనండి", nav_career: "కెరీర్ గైడ్",
    nav_login: "లాగిన్", nav_register: "రిజిస్టర్",
    hero_badge: "భారతదేశం యొక్క #1 పథకాల వేదిక",
    hero_title: "మీకు అర్హమైన ప్రభుత్వ పథకాలు కనుగొనండి",
    hero_sub: "ఒకసారి మీ వివరాలు నమోదు చేయండి. అన్ని ప్రభుత్వ పథకాలు వెంటనే తెలుసుకోండి.",
    hero_cta1: "నా పథకాలు కనుగొనండి", hero_cta2: "కెరీర్ గైడ్",
    stat1: "పథకాలు జాబితా", stat2: "సహాయం పొందిన వినియోగదారులు", stat3: "భాషలు", stat4: "రాష్ట్రాలు",
    hiw_title: "ఎలా పని చేస్తుంది", hiw_sub: "4 సులభమైన దశలలో పథకాలు కనుగొనండి",
    step1_title: "వివరాలు నమోదు చేయండి", step1_desc: "వయస్సు, ఆదాయం, వృత్తి, వర్గం అందించండి",
    step2_title: "అర్హత తనిఖీ", step2_desc: "మా సిస్టమ్ వందల పథకాల అర్హత నిబంధనలు తనిఖీ చేస్తుంది",
    step3_title: "మ్యాచింగ్ పథకాలు చూడండి", step3_desc: "మీకు అర్హమైన అన్ని పథకాల వ్యక్తిగత జాబితా పొందండి",
    step4_title: "దరఖాస్తు చేయండి", step4_desc: "లాభాలు, పత్రాలు మరియు దరఖాస్తు లింక్ చూడండి",
    fs_title: "ప్రముఖ పథకాలు", fs_sub: "భారతదేశంలో అత్యధికంగా వెతకబడే ప్రభుత్వ పథకాలు", fs_btn: "అన్ని పథకాలు చూడండి →",
    cat_title: "వర్గం వారీగా చూడండి", cat_agri: "వ్యవసాయం", cat_edu: "విద్య",
    cat_health: "ఆరోగ్యం", cat_house: "గృహం", cat_women: "మహిళ",
    cat_biz: "వ్యాపారం", cat_pension: "పెన్షన్", cat_youth: "యువత",
    filter_title: "పథకాలు కనుగొనండి", voice_search: "టాప్ చేసి మాట్లాడండి",
    f_age: "వయస్సు", f_income: "వార్షిక ఆదాయం (₹)", f_occ: "వృత్తి",
    f_cat: "వర్గం", f_gender: "లింగం", f_state: "రాష్ట్రం", f_type: "పథకం రకం",
    f_search_btn: "పథకాలు కనుగొనండి", f_reset: "రీసెట్",
    schemes_found: "పథకాలు దొరికాయి",
    nsy_title: "పథకాలు కనుగొనడానికి వివరాలు నమోదు చేయండి",
    nsy_btn: "అన్ని పథకాలు చూపించు",
    ch_title: "మీ ఉత్తమ కెరీర్ మార్గాన్ని కనుగొనండి",
    ch_btn1: "AI కెరీర్ ప్రెడిక్టర్", ch_btn2: "కెరీర్లు చూడండి",
    st_10: "10వ తర్వాత", st_12: "12వ తర్వాత", st_grad: "గ్రాడ్యుయేషన్ తర్వాత", st_pg: "పోస్ట్-గ్రాడ్ తర్వాత",
    cp_title: "AI కెరీర్ ప్రెడిక్టర్", cp_sub: "కొన్ని ప్రశ్నలకు సమాధానం ఇవ్వండి",
    bot_name: "సహాయక్ AI", bot_status: "ఆన్‌లైన్ • మద్దతు",
    bot_welcome: "నమస్కారం! 🙏 నేను సహాయక్ AI. పథకాలు కనుగొనడంలో, ఫిర్యాదులు దాఖలు చేయడంలో సహాయం చేయగలను.",
    qb1: "పథకాలు కనుగొనండి", qb2: "ఫిర్యాదు దాఖలు", qb3: "దరఖాస్తు ఎలా చేయాలి", qb4: "కెరీర్ సహాయం",
    lm_title: "భాష ఎంచుకోండి",
    footer_desc: "పౌరులను ప్రభుత్వ పథకాలతో కలుపుతోంది.",
    faq_title: "తరచుగా అడిగే ప్రశ్నలు"
  },
  ta: {
    nav_home: "முகப்பு", nav_schemes: "திட்டங்களை தேடுங்கள்", nav_career: "தொழில் வழிகாட்டி",
    nav_login: "உள்நுழை", nav_register: "பதிவு",
    hero_badge: "இந்தியாவின் #1 திட்டங்கள் தளம்",
    hero_title: "உங்களுக்கு ஏற்ற அரசு திட்டங்களை கண்டறியுங்கள்",
    hero_sub: "ஒரு முறை உங்கள் விவரங்களை உள்ளிடுங்கள். உடனே அனைத்து அரசு திட்டங்களையும் அறியுங்கள்.",
    hero_cta1: "என் திட்டங்கள் தேடு", hero_cta2: "தொழில் வழிகாட்டி",
    f_search_btn: "திட்டங்கள் தேடு", schemes_found: "திட்டங்கள் கிடைத்தன",
    bot_welcome: "வணக்கம்! 🙏 நான் சஹாயக் AI. திட்டங்கள் கண்டறிய, புகார்கள் தாக்கல் செய்ய உதவ முடியும்.",
    lm_title: "மொழி தேர்ந்தெடுக்கவும்"
  },
  kn: {
    nav_home: "ಮನೆ", nav_schemes: "ಯೋಜನೆಗಳನ್ನು ಹುಡುಕಿ", nav_career: "ವೃತ್ತಿ ಮಾರ್ಗದರ್ಶಿ",
    nav_login: "ಲಾಗಿನ್", nav_register: "ನೋಂದಣಿ",
    hero_badge: "ಭಾರತದ #1 ಸರ್ಕಾರಿ ಯೋಜನೆ ವೇದಿಕೆ",
    hero_title: "ನಿಮಗಾಗಿ ಸರ್ಕಾರಿ ಯೋಜನೆಗಳನ್ನು ಹುಡುಕಿ",
    hero_sub: "ಒಮ್ಮೆ ನಿಮ್ಮ ವಿವರಗಳನ್ನು ನಮೂದಿಸಿ ಮತ್ತು ಎಲ್ಲಾ ಸರ್ಕಾರಿ ಪ್ರಯೋಜನಗಳನ್ನು ತಕ್ಷಣ ತಿಳಿಯಿರಿ.",
    hero_cta1: "ನನ್ನ ಯೋಜನೆಗಳು", hero_cta2: "ವೃತ್ತಿ ಮಾರ್ಗದರ್ಶಿ",
    f_search_btn: "ಯೋಜನೆಗಳನ್ನು ಹುಡುಕಿ", schemes_found: "ಯೋಜನೆಗಳು ಕಂಡುಬಂದಿವೆ",
    bot_welcome: "ನಮಸ್ಕಾರ! 🙏 ನಾನು ಸಹಾಯಕ್ AI. ಯೋಜನೆಗಳನ್ನು ಹುಡುಕಲು, ದೂರುಗಳನ್ನು ದಾಖಲಿಸಲು ಸಹಾಯ ಮಾಡಬಲ್ಲೆ.",
    lm_title: "ಭಾಷೆ ಆಯ್ಕೆ ಮಾಡಿ"
  },
  mr: {
    nav_home: "मुख्यपृष्ठ", nav_schemes: "योजना शोधा", nav_career: "करिअर मार्गदर्शन",
    nav_login: "लॉगिन", nav_register: "नोंदणी",
    hero_badge: "भारताचा #1 सरकारी योजना पोर्टल",
    hero_title: "तुमच्यासाठी सरकारी योजना शोधा",
    hero_sub: "एकदा तुमची माहिती द्या आणि सर्व पात्र सरकारी योजना तात्काळ जाणून घ्या.",
    hero_cta1: "माझ्या योजना शोधा", hero_cta2: "करिअर मार्गदर्शन",
    f_search_btn: "योजना शोधा", schemes_found: "योजना सापडल्या",
    bot_welcome: "नमस्कार! 🙏 मी सहायक AI आहे. योजना शोधणे, तक्रारी दाखल करण्यात मदत करू शकतो.",
    lm_title: "भाषा निवडा"
  },
  bn: {
    nav_home: "হোম", nav_schemes: "প্রকল্প খুঁজুন", nav_career: "ক্যারিয়ার গাইড",
    nav_login: "লগইন", nav_register: "নিবন্ধন",
    hero_badge: "ভারতের #1 সরকারি প্রকল্প প্ল্যাটফর্ম",
    hero_title: "আপনার জন্য সরকারি প্রকল্প খুঁজুন",
    hero_sub: "একবার আপনার তথ্য দিন এবং সমস্ত যোগ্য সরকারি সুবিধা জানুন।",
    hero_cta1: "আমার প্রকল্প খুঁজুন", hero_cta2: "ক্যারিয়ার গাইড",
    f_search_btn: "প্রকল্প খুঁজুন", schemes_found: "প্রকল্প পাওয়া গেছে",
    bot_welcome: "নমস্কার! 🙏 আমি সহায়ক AI। প্রকল্প খুঁজতে, অভিযোগ দাখিল করতে সাহায্য করতে পারি।",
    lm_title: "ভাষা বেছে নিন"
  }
};

let currentLang = 'en';

function setLanguage(lang) {
  currentLang = lang;
  const t = translations[lang] || translations['en'];
  const base = translations['en'];

  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.getAttribute('data-key');
    el.textContent = t[key] || base[key] || el.textContent;
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    btn.classList.toggle('selected', btn.getAttribute('data-lang') === lang);
  });

  const labels = { en: 'EN', hi: 'HI', te: 'TE', ta: 'TA', kn: 'KN', mr: 'MR', bn: 'BN' };
  const el = document.getElementById('currentLangLabel');
  if (el) el.textContent = labels[lang] || 'EN';

  localStorage.setItem('schemefinder_lang', lang);
}
