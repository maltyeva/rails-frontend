import Typed from 'typed.js'

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Change your ^500 life", "Learn to code"],
    typeSpeed: 50,
    loop: true
  });


}

export default loadDynamicBannerText;