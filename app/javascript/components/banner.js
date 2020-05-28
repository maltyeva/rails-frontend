import Typed from 'typed.js'

const loadDynamicBannerText = () => {
 new Typed('#banner-typed-text', {
    strings: ["Change ^3000 your life", "Learn to code"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText }