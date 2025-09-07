export const languages: { code: string; name: string; nativeName: string }[] = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिंदी' },
  { code: 'sa', name: 'Sanskrit', nativeName: 'संस्कृतम्' }
];

type TranslationValue = string | Record<string, string>;
type TranslationObject = Record<string, TranslationValue>;

export const translations: Record<string, TranslationObject> = {
  en: {
    // Common
    welcome: 'Welcome',
    login: 'Login',
    logout: 'Logout',
    dashboard: 'Dashboard',
    profile: 'Profile',
    settings: 'Settings',
    contactUs: 'Contact Us',
    
    // Authentication
    email: 'Email',
    password: 'Password',
    loginAs: 'Login as',
    doctor: 'Doctor',
    patient: 'Patient',
    loginButton: 'Sign In',
    
    // Dashboard
    patientManagement: 'Patient Management',
    dietCharts: 'Diet Charts',
    foodDatabase: 'Food Database',
    reports: 'Reports',
    myDietCharts: 'My Diet Charts',
    healthMetrics: 'Health Metrics',
    
    // Patient Management
    addPatient: 'Add Patient',
    editPatient: 'Edit Patient',
    patientName: 'Patient Name',
    age: 'Age',
    gender: 'Gender',
    weight: 'Weight (kg)',
    height: 'Height (cm)',
    constitution: 'Ayurvedic Constitution',
    
    // Diet Generation
    generateDiet: 'Generate Diet Chart',
    downloadDiet: 'Download Diet Chart',
    breakfast: 'Breakfast',
    lunch: 'Lunch',
    dinner: 'Dinner',
    snack: 'Snack',
    
    // Ayurvedic Terms
    vata: 'Vata',
    pitta: 'Pitta',
    kapha: 'Kapha',
    rasa: 'Rasa (Taste)',
    virya: 'Virya (Potency)',
    vipaka: 'Vipaka (Post-digestive effect)',
    
    // Food Properties
    sweet: 'Sweet',
    sour: 'Sour',
    salty: 'Salty',
    bitter: 'Bitter',
    pungent: 'Pungent',
    astringent: 'Astringent',
    hot: 'Hot',
    cold: 'Cold',
    
    // App Info
    appTitle: 'Ayurvedic Diet Management',
    appDescription: 'Comprehensive diet management with Ayurvedic principles'
  },
  hi: {
    // Common
    welcome: 'स्वागत',
    login: 'लॉगिन',
    logout: 'लॉगआउट',
    dashboard: 'डैशबोर्ड',
    profile: 'प्रोफाइल',
    settings: 'सेटिंग्स',
    contactUs: 'संपर्क करें',
    
    // Authentication
    email: 'ईमेल',
    password: 'पासवर्ड',
    loginAs: 'लॉगिन करें',
    doctor: 'डॉक्टर',
    patient: 'मरीज़',
    loginButton: 'साइन इन',
    
    // Dashboard
    patientManagement: 'मरीज़ प्रबंधन',
    dietCharts: 'आहार चार्ट',
    foodDatabase: 'भोजन डेटाबेस',
    reports: 'रिपोर्ट्स',
    myDietCharts: 'मेरे आहार चार्ट',
    healthMetrics: 'स्वास्थ्य मेट्रिक्स',
    
    // Patient Management
    addPatient: 'मरीज़ जोड़ें',
    editPatient: 'मरीज़ संपादित करें',
    patientName: 'मरीज़ का नाम',
    age: 'उम्र',
    gender: 'लिंग',
    weight: 'वजन (किलो)',
    height: 'ऊंचाई (सेमी)',
    constitution: 'आयुर्वेदिक प्रकृति',
    
    // Ayurvedic Terms
    vata: 'वात',
    pitta: 'पित्त',
    kapha: 'कफ',
    rasa: 'रस',
    virya: 'वीर्य',
    vipaka: 'विपाक',
    
    // App Info
    appTitle: 'आयुर्वेदिक आहार प्रबंधन',
    appDescription: 'आयुर्वेदिक सिद्धांतों के साथ व्यापक आहार प्रबंधन'
  },
  sa: {
    // Common
    welcome: 'स्वागतम्',
    login: 'प्रवेशः',
    logout: 'निर्गमः',
    dashboard: 'नियन्त्रणपट्टिका',
    
    // Ayurvedic Terms
    vata: 'वातः',
    pitta: 'पित्तम्',
    kapha: 'कफः',
    rasa: 'रसः',
    virya: 'वीर्यम्',
    vipaka: 'विपाकः',
    
    // App Info
    appTitle: 'आयुर्वेदिक आहार प्रबन्धनम्',
    appDescription: 'आयुर्वेदिक सिद्धान्तैः सह आहार प्रबन्धनम्'
  }
};

export const useTranslation = (language: string = 'en') => {
  const t = (key: string): string => {
    const keys = key.split('.');
    let value: TranslationValue | undefined = translations[language as keyof typeof translations] || translations.en;
    
    for (const k of keys) {
      if (typeof value === 'object' && value !== null) {
        value = value[k];
      } else {
        value = undefined;
        break;
      }
    }
    
    return typeof value === 'string' ? value : key;
  };
  
  return { t };
};