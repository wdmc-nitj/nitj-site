import getNavbar from '../js/navbar.js'
const bodyEl = document.body

// <link rel="icon" type="image/x-icon" href="./public/assets/images/nitj-logo.png" />

window.addEventListener('load', () => {
  handlingPDFs()
  // document.head.appendChild('link')

  const newFavIcon = document.createElement('link')
  newFavIcon.setAttribute('rel', 'icon')
  newFavIcon.setAttribute('type', 'image/x-icon')
  newFavIcon.setAttribute('href', '/public/assets/images/nitj-logo.png')
  document.head.appendChild(newFavIcon)
})

function handlingPDFs() {
  const allLinks = [...document.getElementsByTagName('a')]
  allLinks.forEach((link) => {
    let currSrc =
      link.getAttribute('href').includes('pdf') ||
      link.getAttribute('href').includes('https')
    // console.log(currSrc)
    if (currSrc) {
      // console.log(link)
      link.setAttribute('target', '_blank')
    }
    // console.log(currSrc)
  })
}

window.onscroll = navbarUtil
fetch('/template/navbar.html')
  .then((res) => res.text())
  .then((html) => {
    const navEl = document.createElement('header')
    navEl.innerHTML = html
    bodyEl.prepend(navEl)
    carousel()
    getNavbar()
    handlingPDFs()
    const scrollToTopButton = document.querySelector('#scroll-to-top-button')

    const checkScrollPos = () => {
      if (window.scrollY > 20) {
        scrollToTopButton.style.display = 'block'
      } else {
        scrollToTopButton.style.display = 'none'
      }
    }
    const backToTop = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })
    }

    scrollToTopButton.addEventListener('click', backToTop)
    window.addEventListener('scroll', checkScrollPos)
    // scroll to top functions
  })

let slideIndex = 0
function carousel() {
  const x = document.getElementsByClassName('mySlides')

  for (let slide of x) {
    slide.style.display = 'none'
  }
  slideIndex += 1
  if (slideIndex > x.length) {
    slideIndex = 1
  }
  x[slideIndex - 1].style.display = 'block'
  setTimeout(carousel, 2500)
}

function navbarUtil() {
  const insti_name_cont = document.getElementById('instituteNameContainer')
  const institute_name = document.getElementsByClassName('institute_name')
  const full_navbar = document.getElementsByTagName('header')
  const logo = document.getElementById('logo_250')
  const topbar = document.getElementById('top_bar')
  const diff_lang = document.getElementsByClassName('mySlides')
  // animateValueIntiator()
  // animateValueIntiatorInstitute()
  // resAutoScroll()

  if (window.scrollY > 100) {
    insti_name_cont.classList.remove('sm:h-20', 'sm:max-h-20')
    insti_name_cont.classList.add('sm:h-10', 'sm:max-h-10')
    // insti_name_cont.classList.add(' sm:max-h-20')
    topbar.style.transform = 'translateY(-50px)'
    for (let i = 0; i < diff_lang.length; i++) {
      diff_lang[i].classList.remove('mt-7')
    }
    for (let i = 0; i < institute_name.length; i++) {
      if (window.innerWidth > 620) {
        logo.style.width = '90px'
        logo.style.height = '90px'
      }
      logo.classList.remove('top-9')
      logo.classList.add('top-0', 'py-4')
      logo.classList.remove('sm:translate-y-0')
      if (institute_name[i].classList.contains('sm:text-xl')) {
        institute_name[i].classList.remove('sm:text-xl')
        institute_name[i].classList.add('sm:text-lg')
        institute_name[i].classList.add('tracking-widest')
      } else if (institute_name[i].classList.contains('sm:text-lg')) {
        institute_name[i].classList.remove('sm:text-lg')
        institute_name[i].classList.add('sm:text-sm')
        institute_name[i].classList.remove('tracking-widest')
      }
    }
  } else {
    insti_name_cont.classList.remove('sm:h-10', 'sm:max-h-10')
    insti_name_cont.classList.add('sm:h-20', 'sm:max-h-20')
    logo.style.width = '120px'
    logo.style.height = '120px'
    topbar.style.transform = 'translateY(0)'
    for (let i = 0; i < diff_lang.length; i++) {
      diff_lang[i].classList.add('mt-7')
    }
    logo.classList.add('sm:translate-y-0')
    logo.classList.add('top-9')
    logo.classList.remove('top-0', 'py-4')
    for (var i = 0; i < institute_name.length; i++) {
      // console.log(institute_name[i].classList);
      if (institute_name[i].classList.contains('sm:text-lg')) {
        institute_name[i].classList.remove('sm:text-lg')
        institute_name[i].classList.add('sm:text-xl')
        institute_name[i].classList.remove('tracking-widest')
      } else if (institute_name[i].classList.contains('sm:text-sm')) {
        institute_name[i].classList.remove('sm:text-sm')
        institute_name[i].classList.add('sm:text-lg')
        institute_name[i].classList.remove('tracking-widest')
      } else if (institute_name[i].classList.contains('sm:text-lg')) {
      }
    }
  }
}
