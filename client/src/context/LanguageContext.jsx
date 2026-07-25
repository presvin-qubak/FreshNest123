
import React, { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext();

const translations = {
  English: {
    home: "Home",
    shop: "Shop",
    category: "Categories",
    offer: "Offers",
    contact: "Contact",
    account: "My Account",
    orders: "My Orders",
    address: "My Address",
    settings: "Settings",
    wishlist: "Wishlist",
    cart: "Cart",
    logout: "Logout",

    settingsTitle: "Settings",
    settingsSubtitle: "Manage your account preferences",

    accountSection: "Account",
    preferences: "Preferences",

    profile: "Profile",
    profileDescription: "Manage your personal information",

    password: "Password & Security",
    passwordDescription:
      "Manage your password and account security",

    notifications: "Notifications",
    notificationsDescription:
      "Receive updates about your orders",

    darkMode: "Dark Mode",
    darkModeDescription:
      "Change the appearance of FreshMart",

    language: "Language",
    languageDescription:
      "Choose your preferred language",

    manage: "Manage",
  },

  Tamil: {
    home: "முகப்பு",
    shop: "கடை",
    category: "வகைகள்",
    offer: "சலுகைகள்",
    contact: "தொடர்பு",
    account: "என் கணக்கு",
    orders: "என் ஆர்டர்கள்",
    address: "என் முகவரி",
    settings: "அமைப்புகள்",
    wishlist: "விருப்பப்பட்டியல்",
    cart: "கார்ட்",
    logout: "வெளியேறு",

    settingsTitle: "அமைப்புகள்",
    settingsSubtitle: "உங்கள் கணக்கு விருப்பங்களை நிர்வகிக்கவும்",

    accountSection: "கணக்கு",
    preferences: "விருப்பங்கள்",

    profile: "சுயவிவரம்",
    profileDescription:
      "உங்கள் தனிப்பட்ட தகவல்களை நிர்வகிக்கவும்",

    password: "கடவுச்சொல் மற்றும் பாதுகாப்பு",
    passwordDescription:
      "உங்கள் கடவுச்சொல் மற்றும் கணக்கு பாதுகாப்பை நிர்வகிக்கவும்",

    notifications: "அறிவிப்புகள்",
    notificationsDescription:
      "உங்கள் ஆர்டர்களுக்கான புதுப்பிப்புகளைப் பெறுங்கள்",

    darkMode: "டார்க் மோட்",
    darkModeDescription:
      "FreshMart தோற்றத்தை மாற்றவும்",

    language: "மொழி",
    languageDescription:
      "உங்களுக்கு விருப்பமான மொழியைத் தேர்ந்தெடுக்கவும்",

    manage: "நிர்வகிக்கவும்",
  },

  Japanese: {
    home: "ホーム",
    shop: "ショップ",
    category: "カテゴリー",
    offer: "お得情報",
    contact: "お問い合わせ",
    account: "マイアカウント",
    orders: "注文履歴",
    address: "住所",
    settings: "設定",
    wishlist: "お気に入り",
    cart: "カート",
    logout: "ログアウト",

    settingsTitle: "設定",
    settingsSubtitle: "アカウントの設定を管理します",

    accountSection: "アカウント",
    preferences: "環境設定",

    profile: "プロフィール",
    profileDescription:
      "個人情報を管理します",

    password: "パスワードとセキュリティ",
    passwordDescription:
      "パスワードとアカウントのセキュリティを管理します",

    notifications: "通知",
    notificationsDescription:
      "注文に関する最新情報を受け取ります",

    darkMode: "ダークモード",
    darkModeDescription:
      "FreshMartの外観を変更します",

    language: "言語",
    languageDescription:
      "使用する言語を選択してください",

    manage: "管理",
  },
  Arabic: {
  home: "الرئيسية",
  shop: "المتجر",
  category: "الفئات",
  offer: "العروض",
  contact: "اتصل بنا",
  account: "حسابي",
  orders: "طلباتي",
  address: "عنواني",
  settings: "الإعدادات",
  wishlist: "المفضلة",
  cart: "السلة",
  logout: "تسجيل الخروج",

  settingsTitle: "الإعدادات",
  settingsSubtitle: "إدارة تفضيلات حسابك",

  accountSection: "الحساب",
  preferences: "التفضيلات",

  profile: "الملف الشخصي",
  profileDescription: "إدارة معلوماتك الشخصية",

  password: "كلمة المرور والأمان",
  passwordDescription:
    "إدارة كلمة المرور وأمان حسابك",

  notifications: "الإشعارات",
  notificationsDescription:
    "تلقي تحديثات حول طلباتك",

  darkMode: "الوضع الداكن",
  darkModeDescription:
    "تغيير مظهر FreshMart",

  language: "اللغة",
  languageDescription:
    "اختر لغتك المفضلة",

  manage: "إدارة",

  myAccountDescription:
    "إدارة حساب FreshMart وطلباتك",

  welcome: "مرحباً بك في FreshMart 👋",

  welcomeDescription:
    "إدارة ملفك الشخصي وطلباتك وتفضيلاتك",

  editProfile: "تعديل الملف الشخصي",

  trackOrders:
    "تتبع طلباتك وعرضها",

  savedProducts:
    "عرض المنتجات المحفوظة",

  manageAddresses:
    "إدارة عناوين التوصيل",

  searchProducts: "البحث عن المنتجات...",
  noProductsFound: "لم يتم العثور على منتجات",
  login: "تسجيل الدخول",
},
Hindi: {
  home: "होम",
  shop: "दुकान",
  category: "श्रेणियाँ",
  offer: "ऑफर",
  contact: "संपर्क करें",
  account: "मेरा खाता",
  orders: "मेरे ऑर्डर",
  address: "मेरा पता",
  settings: "सेटिंग्स",
  wishlist: "विशलिस्ट",
  cart: "कार्ट",
  logout: "लॉग आउट",

  settingsTitle: "सेटिंग्स",
  settingsSubtitle:
    "अपने अकाउंट की प्राथमिकताएँ प्रबंधित करें",

  accountSection: "अकाउंट",
  preferences: "प्राथमिकताएँ",

  profile: "प्रोफ़ाइल",
  profileDescription:
    "अपनी व्यक्तिगत जानकारी प्रबंधित करें",

  password: "पासवर्ड और सुरक्षा",
  passwordDescription:
    "अपना पासवर्ड और अकाउंट सुरक्षा प्रबंधित करें",

  notifications: "सूचनाएँ",
  notificationsDescription:
    "अपने ऑर्डर के अपडेट प्राप्त करें",

  darkMode: "डार्क मोड",
  darkModeDescription:
    "FreshMart का रूप बदलें",

  language: "भाषा",
  languageDescription:
    "अपनी पसंदीदा भाषा चुनें",

  manage: "प्रबंधित करें",

  myAccountDescription:
    "अपने FreshMart अकाउंट और ऑर्डर प्रबंधित करें",

  welcome: "FreshMart में आपका स्वागत है 👋",

  welcomeDescription:
    "अपनी प्रोफ़ाइल, ऑर्डर और प्राथमिकताएँ प्रबंधित करें",

  editProfile: "प्रोफ़ाइल संपादित करें",

  trackOrders:
    "अपने ऑर्डर देखें और ट्रैक करें",

  savedProducts:
    "अपने सेव किए गए उत्पाद देखें",

  manageAddresses:
    "अपने डिलीवरी पते प्रबंधित करें",

  searchProducts: "उत्पाद खोजें...",
  noProductsFound: "कोई उत्पाद नहीं मिला",
  login: "लॉगिन",
},
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "English"
  );

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider
      value={{
        language,
        changeLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};

