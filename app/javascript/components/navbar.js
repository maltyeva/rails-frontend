const initUpdateNavbarOnScroll = () => {

  const navbar = document.querySelector('.navbar-lewagon')
  console.log(navbar)

  if (navbar) {
    window.addEventListener('scroll', () => {
      // console.log(window.scrollY)
      console.log(window.innerHeight)
      if (window.scrollY >= window.innerHeight)  {
        navbar.classList.add('navbar-lewagon-white')
      }
      else {
        navbar.classList.remove('navbar-lewagon-white')
      }
    })
  }

}

export default initUpdateNavbarOnScroll;


