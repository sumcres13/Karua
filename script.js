const page = document.body.dataset.page || "home";

document.getElementById("site-header-mount").innerHTML = `
  <header class="site-header" id="site-header">
    <div class="header-inner container-wide">
      <a class="company-brand" href="index.html" aria-label="カルワ 小岩 ホーム" data-i18n-aria="companyHome"><img class="company-mark" src="assets/logo-transparent.png" alt=""></a>
      <nav class="desktop-nav" aria-label="メインナビゲーション" data-i18n-aria="mainNavigation">
        <a href="index.html" ${page === "home" ? 'aria-current="page"' : ""} data-i18n="navHome">ホーム</a>
        <a href="about.html" ${page === "about" ? 'aria-current="page"' : ""} data-i18n="navAbout">お店について</a>
        <a href="stores.html" ${page === "stores" ? 'aria-current="page"' : ""} data-i18n="navStore">店舗・アクセス</a>
        <a href="reservation.html" ${page === "reservation" ? 'aria-current="page"' : ""} data-i18n="navReservePlain">ご予約</a>
      </nav>
      <div class="header-actions"><button class="language-switch" type="button" id="language-switch" aria-label="英語に切り替える"><span class="language-option language-ja is-active">JP</span><span class="language-option language-en">EN</span></button><button class="menu-toggle" type="button" id="menu-toggle" aria-label="メニューを開く" data-i18n-aria="openMenu" aria-expanded="false" aria-controls="mobile-nav"><span></span><span></span></button></div>
    </div>
    <nav class="mobile-nav" id="mobile-nav" aria-label="モバイルナビゲーション" data-i18n-aria="mobileNavigation" hidden><a href="index.html" data-i18n="navHome">ホーム</a><a href="about.html" data-i18n="navAbout">お店について</a><a href="stores.html" data-i18n="navStore">店舗・アクセス</a><a href="reservation.html" data-i18n="navReservePlain">ご予約</a></nav>
  </header>`;

document.getElementById("site-footer-mount").innerHTML = `
  <footer class="site-footer"><div class="container footer-grid">
    <div class="footer-brand"><a href="index.html" aria-label="カルワ 小岩 ホーム" data-i18n-aria="companyHome"><img class="footer-mark" src="assets/logo-transparent.png" alt=""></a><p data-i18n="footerStatement">インドとネパールの本場の味を、小岩で。</p><div class="footer-social"><a href="https://line.me/R/ti/p/@842mwddb" target="_blank" rel="noopener noreferrer" aria-label="LINE"><img src="assets/line-icon.png" alt=""></a></div></div>
    <div class="footer-nav"><h2 data-i18n="navigationLabel">ナビゲーション</h2><a href="index.html" data-i18n="navHome">ホーム</a><a href="about.html" data-i18n="navAbout">お店について</a><a href="stores.html" data-i18n="navStore">店舗・アクセス</a><a href="reservation.html" data-i18n="navReservePlain">ご予約</a></div>
    <div class="footer-contact"><h2 data-i18n="contactLabel">店舗情報</h2><p class="footer-contact-row"><span class="footer-info-icon" aria-hidden="true">⌖</span><span data-i18n="addressFull">〒133-0057 東京都江戸川区西小岩１丁目２７−１５ ヒロセビル 2F</span></p><a class="footer-contact-row" href="tel:0363881762"><span class="footer-info-icon" aria-hidden="true">☎</span><span>03-6388-1762</span></a><div class="footer-meta"><p><span data-i18n="companyName">株式会社ＯＲＩＥＮＴＡＬ</span><br>© <span id="year">2026</span> <span data-i18n="rightsReserved">無断転載を禁じます。</span></p><a href="#main-content" data-i18n="footerBack">ページ上部へ ↑</a></div></div>
  </div></footer>`;

const en = {
  navHome:"Home", navAbout:"About us", navStore:"Store & access", navReservePlain:"Reservations",
  brandName:"KARUWA Koiwa", companyName:"ORIENTAL Co., Ltd.", companyHome:"KARUWA Koiwa Home",
  footerStatement:"Indian and Nepalese flavors in Koiwa.",
  heroLine1:"Indian & Nepalese flavors,", heroLine2:"here in Koiwa.",
  heroCopy:"Just a four-minute walk from Koiwa Station.<br class=\"desktop-break\">Enjoy curries made with our freshly blended spices.",
  heroReserve:"Reservations", heroAccess:"Store & access", heroImageAlt:"Spacious dining room at KARUWA Koiwa",
  aboutTitle:"Freshly blended spices,<br>authentic flavors.",
  aboutBody:"KARUWA Koiwa is an Indian and Nepalese restaurant just a four-minute walk from Koiwa Station. Every morning, we blend more than ten spices for our Indian and Nepalese curries. Choose your preferred level of heat and enjoy a dish made for you.",
  aboutLink:"About the restaurant", aboutDiningImageAlt:"Dining room and tables at KARUWA Koiwa", logoAlt:"KARUWA Koiwa logo", welcomeStamp:"Welcome<br>to KARUWA",
  shopName:"KARUWA Koiwa",
  homeQuality1Title:"More than ten spices", homeQuality1Text:"Freshly blended each morning for Indian and Nepalese curries.",
  homeQuality2Title:"Momo and cheese naan", homeQuality2Text:"Enjoy these popular dishes and other authentic flavors.",
  homeQuality3Title:"Room to gather", homeQuality3Text:"For family meals, group celebrations, and private events.",
  snsTitle:"Keep in touch with KARUWA.", snsCopy:"Find us on LINE.", lineFollow:"Open LINE",
  homeReserveTitle:"Reservations & inquiries", homeReserveCopy:"Find our phone number, restaurant listings, and delivery services.", reservePage:"Reservation page",
  aboutPageTitle:"About us", repRole:"Representative, ORIENTAL Co., Ltd.", representativeName:"Arjun Dhakal",
  representativeAlt:"Arjun Dhakal, representative of ORIENTAL Co., Ltd.",
  restaurantIntroTitle:"About KARUWA Koiwa",
  restaurantIntroP1:"KARUWA Koiwa is an Indian and Nepalese restaurant just a four-minute walk from Koiwa Station.",
  restaurantIntroP2:"Every morning, we blend more than ten spices for our Indian and Nepalese curries. Guests can choose the level of heat that suits them.",
  restaurantIntroP3:"The menu includes popular momo and homemade cheese naan. Our spacious dining room welcomes families, groups, and private events.",
  valuesTitle:"The KARUWA experience", value1Title:"Freshly blended spices", value1Text:"Indian and Nepalese curries made with more than ten spices.",
  value2Title:"Favorite dishes", value2Text:"Momo, homemade cheese naan, and more authentic flavors.",
  value3Title:"A place to gather", value3Text:"For family meals, banquets, and private use.",
  companyTitle:"Company information", companyNameLabel:"Company", companyRepLabel:"Representative", companyRepValue:"Arjun Dhakal",
  companyBusinessLabel:"Restaurant", companyBusiness:"KARUWA Koiwa", companyLocationLabel:"Restaurant address", companyPhoneLabel:"Company main phone",
  storesPageTitle:"Store & access", storeCuisine:"Indian & Nepalese cuisine",
  addressLabel:"Address", addressFull:"Hirose Building 2F, 1-27-15 Nishikoiwa, Edogawa-ku, Tokyo 133-0057",
  hoursLabel:"Hours", hoursValue:"11:00–15:00 / 17:00–23:00", closedLabel:"Regular holidays", closedValue:"None", phoneLabel:"Phone",
  galleryTitle:"Inside KARUWA", slideOne:"For family meals.", slideTwo:"For groups and celebrations.", slideThree:"A colorful dining room.",
  locationTitle:"Location", openMap:"Open in Google Maps ↗", mapTitle:"Map to KARUWA Koiwa",
  storeImageAlt:"KARUWA Koiwa logo wall inside the restaurant", terraceImageAlt:"Spacious dining room at KARUWA Koiwa", boothImageAlt:"Dining room and party area at KARUWA Koiwa", galleryThreeAlt:"Murals and table seating at KARUWA Koiwa",
  bookingTitle:"Reservations & inquiries", bookingIntro:"Visit a restaurant listing or call us directly.",
  tabelogTitle:"View on Tabelog", gurunaviTitle:"View on Rakuten Gurunavi", hotpepperTitle:"View on Hot Pepper", tabelogAlt:"Tabelog", bookingExternal:"Opens the restaurant listing", bookingAction:"View listing", telephoneTitle:"Inquire by phone", telephoneAction:"Call now",
  deliveryTitle:"Delivery", deliveryIntro:"Order through a delivery service.", orderAction:"Order now",
  uberAlt:"Uber Eats", demaeAlt:"Demae-can", rocketAlt:"Rocket Now", lineAlt:"LINE",
  mainNavigation:"Main navigation", mobileNavigation:"Mobile navigation", openMenu:"Open menu", closeMenu:"Close menu",
  contactLabel:"STORE INFORMATION", navigationLabel:"NAVIGATION", previousPhoto:"Previous photo", nextPhoto:"Next photo",
  galleryPhotos:"Choose a gallery photo", photoOne:"Photo 1", photoTwo:"Photo 2", photoThree:"Photo 3",
  skipLink:"Skip to content", footerBack:"BACK TO TOP ↑", rightsReserved:"All rights reserved."
};

const originalText = new Map();
document.querySelectorAll("[data-i18n]").forEach(element => originalText.set(element, element.innerHTML));
const originalAttributes = new Map();
document.querySelectorAll("[data-i18n-aria], [data-i18n-alt], [data-i18n-title]").forEach(element => originalAttributes.set(element, { aria: element.getAttribute("aria-label"), alt: element.getAttribute("alt"), title: element.getAttribute("title") }));
const languageButton = document.getElementById("language-switch");
let language = "ja";
try { language = localStorage.getItem("karuwaLanguage") === "en" ? "en" : "ja"; } catch {}
function renderLanguage(nextLanguage){
  language = nextLanguage;
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach(element => { element.innerHTML = language === "ja" ? originalText.get(element) : en[element.dataset.i18n] ?? originalText.get(element); });
  document.querySelectorAll("[data-i18n-aria], [data-i18n-alt], [data-i18n-title]").forEach(element => {
    const key = element.dataset.i18nAria || element.dataset.i18nAlt || element.dataset.i18nTitle;
    const attribute = element.dataset.i18nAria ? "aria-label" : element.dataset.i18nAlt ? "alt" : "title";
    const original = originalAttributes.get(element)?.[element.dataset.i18nAria ? "aria" : element.dataset.i18nAlt ? "alt" : "title"];
    element.setAttribute(attribute, language === "ja" ? original : en[key] ?? original);
  });
  languageButton.classList.toggle("is-en", language === "en");
  languageButton.querySelector(".language-ja").classList.toggle("is-active", language === "ja");
  languageButton.querySelector(".language-en").classList.toggle("is-active", language === "en");
  languageButton.setAttribute("aria-label", language === "ja" ? "英語に切り替える" : "Switch to Japanese");
  const descriptions = language === "ja"
    ? {home:"カルワ 小岩。小岩駅から徒歩4分の本格インド・ネパールレストラン。",about:"カルワ 小岩のレストラン紹介と株式会社ＯＲＩＥＮＴＡＬの会社情報。",stores:"カルワ 小岩の住所、営業時間、店内写真、アクセスをご案内します。",reservation:"カルワ 小岩のご予約・お問い合わせ、デリバリーサービスをご案内します。"}
    : {home:"KARUWA Koiwa, an Indian and Nepalese restaurant four minutes from Koiwa Station.",about:"About KARUWA Koiwa and ORIENTAL Co., Ltd.",stores:"Find KARUWA Koiwa's address, hours, and photos.",reservation:"Reservations, restaurant listings, and delivery for KARUWA Koiwa."};
  document.querySelector('meta[name="description"]').content = descriptions[page];
  document.title = (language === "ja"
    ? {home:"ホーム",about:"お店について",stores:"店舗・アクセス",reservation:"ご予約・ご注文"}
    : {home:"Home",about:"About us",stores:"Store & access",reservation:"Reservations"})[page] + " | " + (language === "ja" ? "カルワ 小岩" : "KARUWA Koiwa");
  const menuToggle = document.getElementById("menu-toggle");
  const mobileNav = document.getElementById("mobile-nav");
  if (menuToggle && mobileNav) menuToggle.setAttribute("aria-label", mobileNav.hidden ? (language === "ja" ? "メニューを開く" : "Open menu") : (language === "ja" ? "メニューを閉じる" : "Close menu"));
}

const header = document.getElementById("site-header");
const mobileNav = document.getElementById("mobile-nav");
const menuToggle = document.getElementById("menu-toggle");
renderLanguage(language);
languageButton.addEventListener("click", () => {
  const nextLanguage = language === "ja" ? "en" : "ja";
  try { localStorage.setItem("karuwaLanguage", nextLanguage); } catch {}
  renderLanguage(nextLanguage);
});
function updateHeader(){ header.classList.toggle("is-scrolled", window.scrollY > 24); }
updateHeader(); window.addEventListener("scroll",updateHeader,{passive:true});
menuToggle.addEventListener("click",()=>{ const opening=mobileNav.hidden; mobileNav.hidden=!opening; header.classList.toggle("menu-open",opening); menuToggle.setAttribute("aria-expanded",String(opening)); menuToggle.setAttribute("aria-label",opening?(language === "ja" ? "メニューを閉じる" : "Close menu"):(language === "ja" ? "メニューを開く" : "Open menu")); });
mobileNav.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>{mobileNav.hidden=true;header.classList.remove("menu-open");menuToggle.setAttribute("aria-expanded","false");}));

const slides=[...document.querySelectorAll(".gallery-slide")];
if(slides.length){ const dots=[...document.querySelectorAll(".gallery-dots button")];let current=0;function showSlide(index){current=(index+slides.length)%slides.length;slides.forEach((slide,i)=>{slide.classList.toggle("is-active",i===current);slide.setAttribute("aria-hidden",String(i!==current));});dots.forEach((dot,i)=>{dot.classList.toggle("is-active",i===current);if(i===current)dot.setAttribute("aria-current","true");else dot.removeAttribute("aria-current");});}showSlide(0);document.querySelector(".gallery-prev").addEventListener("click",()=>showSlide(current-1));document.querySelector(".gallery-next").addEventListener("click",()=>showSlide(current+1));dots.forEach((dot,i)=>dot.addEventListener("click",()=>showSlide(i)));}

const reveals=document.querySelectorAll(".reveal");
if("IntersectionObserver" in window&&!matchMedia("(prefers-reduced-motion: reduce)").matches){const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("is-visible");observer.unobserve(entry.target);}})},{threshold:.08,rootMargin:"0px 0px 30px 0px"});reveals.forEach(element=>observer.observe(element));}else reveals.forEach(element=>element.classList.add("is-visible"));
document.getElementById("year").textContent=new Date().getFullYear();
