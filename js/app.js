import imgSlider from './utils/app/imgSlider.js'
import navbarUtil from './utils/app/navUtils.js'
import {
  backToTop,
  checkScrollPos,
  newsCardsScroll,
  publicationCardsScroll,
} from './utils/app/scrollUtils.js'
import notificationTabs from './utils/app/tabUits.js'

window.onscroll = navbarUtil

function openDropdown() {
  var dropdown = document.getElementById('dropdown')
  if (dropdown.classList.contains('hidden')) {
    dropdown.classList.remove('hidden')
  } else {
    dropdown.classList.add('hidden')
  }
}

// document.getElementById("nitj-numbers").addEventListener('click', ()=>{
//   window.location.replace('https://placement-q1bq.onrender.com/')
// })

document
  .getElementById('nav-search-btn')
  .addEventListener('click', (e) => showSearchPage(e))
document
  .getElementById('nav-search-btn-v2')
  .addEventListener('click', (e) => showSearchPage(e))
document
  .getElementById('search_page')
  .addEventListener('click', (e) => showSearchPage(e))
document
  .getElementById('search_form')
  .addEventListener('click', (e) => showSearchPage(e))
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

const tabLinks = document.getElementsByClassName('notif-link')

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
