import imgSlider from './utils/app/imgSlider.js'
import navbarUtil from './utils/app/navUtils.js'
import {
  backToTop,
  checkScrollPos,
  newsCardsScroll,
  publicationCardsScroll,
} from './utils/app/scrollUtils.js'
import notificationTabs from './utils/app/tabUits.js'
import getNavbar from './navbar.js'
window.onscroll = navbarUtil
window.onload = getNavbar
function openDropdown() {
  var dropdown = document.getElementById('dropdown')
  if (dropdown.classList.contains('hidden')) {
    dropdown.classList.remove('hidden')
  } else {
    dropdown.classList.add('hidden')
  }
}

// Slide Cards on Scroll
function slideCards(e, direction) {
  // var container = document.getElementById('cards')
  const container = e.parentNode.querySelector('div')
  scrollCompleted = 0
  var slideVar = setInterval(function () {
    if (direction == 'left') {
      container.scrollLeft -= container.clientWidth
    } else {
      container.scrollLeft += container.clientWidth
    }
    scrollCompleted += 100
    if (scrollCompleted >= 1000) {
      window.clearInterval(slideVar)
    }
  }, 2)
}

function showSearchPage(event) {
  if (event.target.id == 'search_form') {
    return
  }
  var search_page = document.getElementById('search_page')
  if (search_page.classList.contains('hidden')) {
    search_page.classList.remove('hidden')
    search_page.classList.add('grid')
  } else {
    search_page.classList.remove('grid')
    search_page.classList.add('hidden')
  }
}

// Admission Section Tabs

const openCourse = (e) => {
  let tabcontent = document.getElementsByClassName('courseContent')
  let tablinks = document.getElementsByClassName('tab-link')

  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].classList.add('hidden')
  }

  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.add('bg-blue-100', 'hover:bg-blue-200', 'text-accent')
    tablinks[i].classList.remove('bg-accent', 'text-white')
  }
  e.classList.remove('bg-blue-100', 'hover:bg-blue-200', 'text-accent')
  e.classList.add('bg-accent', 'text-white')
  document.getElementById(e.dataset.course).classList.remove('hidden')
}

// function notificationTabs(e) {
//   let tabcontent = document.getElementsByClassName('notice-content')
//   let tablinks = document.getElementsByClassName('notif-link')

//   for (let i = 0; i < tabcontent.length; i++) {
//     tabcontent[i].classList.add('hidden')
//   }

//   for (let i = 0; i < tablinks.length; i++) {
//     tablinks[i].classList.add('hover:bg-blue-50', 'text-slate-400')
//     tablinks[i].classList.remove(
//       'bg-blue-100',
//       'text-accent',
//       'hover:bg-blue-200'
//     )
//   }
//   e.classList.remove('hover:bg-blue-50', 'text-slate-400')
//   e.classList.add('bg-blue-100', 'hover:bg-blue-200', 'text-accent')
//   document.getElementById(e.dataset.notif).classList.remove('hidden')
// }
const tabLinks = document.getElementsByClassName('notif-link')

window.addEventListener('load', () => {
  notificationTabs(tabLinks[0])
})

for (const link of tabLinks) {
  link.addEventListener('click', () => {
    console.log(link)
    notificationTabs(link)
  })
}
// ///////////////////////////
// Image Slider Animation::

setInterval(imgSlider, 2000)

// News Cards Auto Scroll

setTimeout(newsCardsScroll, 1000)

// Publication Cards Auto Scroll

setTimeout(publicationCardsScroll, 1000)

// Scroll to top Button

const scrollToTopButton = document.querySelector('#scroll-to-top-button')

scrollToTopButton.addEventListener('click', backToTop)

window.addEventListener('scroll', checkScrollPos)
