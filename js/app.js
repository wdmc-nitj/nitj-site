window.onscroll = function () {
  const institute_name = document.getElementsByClassName('institute_name')
  const full_navbar = document.getElementsByTagName('header')
  const logo = document.getElementById('logo_250')
  const topbar = document.getElementById('top_bar')
  const diff_lang = document.getElementsByClassName('mySlides')
  // animateValueIntiator()
  // animateValueIntiatorInstitute()
  // resAutoScroll()

  if (window.scrollY > 100) {
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
      logo.classList.add('top-0','py-4')
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
    logo.style.width = '120px'
    logo.style.height = '120px'
    topbar.style.transform = 'translateY(0)'
    for (let i = 0; i < diff_lang.length; i++) {
      diff_lang[i].classList.add('mt-7')
    }
    logo.classList.add('sm:translate-y-0')
    logo.classList.add('top-9')
    logo.classList.remove('top-0','py-4')
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

function openDropdown() {
  var dropdown = document.getElementById('dropdown')
  if (dropdown.classList.contains('hidden')) {
    dropdown.classList.remove('hidden')
  } else {
    dropdown.classList.add('hidden')
  }
}
function openDropdown2() {
  var dropdown = document.getElementById('dropdown3')
  if (dropdown.classList.contains('hidden')) {
  } else {
    dropdown.classList.add('hidden')
  }
  var dropdown = document.getElementById('dropdown2')
  if (dropdown.classList.contains('hidden')) {
    dropdown.classList.remove('hidden')
  } else {
    dropdown.classList.add('hidden')
  }
}
function openDropdown3() {
  var dropdown = document.getElementById('dropdown2')
  if (dropdown.classList.contains('hidden')) {
  } else {
    dropdown.classList.add('hidden')
  }
  var dropdown = document.getElementById('dropdown3')
  if (dropdown.classList.contains('hidden')) {
    dropdown.classList.remove('hidden')
  } else {
    dropdown.classList.add('hidden')
  }
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

// Check if element is in viewport

// Parallex Effect

// const numbers = document.getElementById('numbers')

// window.addEventListener('scroll', () => {
//   let offset = scrollY
//   const viewport = window.outerHeight
//   console.log('running')
//   if (offset >= numbers.offsetTop - viewport) {
//     console.log('touched')
//     numbers.style.backgroundPositionY =
//       -(numbers.offsetTop - offset) * 0.8 + 'px'
//   }
// })

// Old Image slider

// let home = 0
// window.onload = function () {
//   showHome()
// }
// function showHome() {
//   let i
//   let homeslider = document.getElementsByClassName('homeslide')
//   for (i = 0; i < homeslider.length; i++) {
//     homeslider[i].style.display = 'none'
//   }
//   home++
//   if (home > homeslider.length) {
//     home = 1
//   }
//   homeslider[home - 1].style.display = 'block'
//   setTimeout(showHome, 3000) // Change image every 3 seconds
// }

// ////////////////////////////
// Right and left buttons on the research and news section

function slideCards(direction) {
  var container = document.getElementById('cards')
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

function slideResearch(direction) {
  var container = document.getElementById('slides')
  scrollComp = 0
  var slide = setInterval(function () {
    if (direction == 'left') {
      container.scrollLeft -= container.clientWidth
    } else {
      container.scrollLeft += container.clientWidth
    }
    scrollComp += 10
    if (scrollComp >= 100) {
      window.clearInterval(slide)
    }
  }, 2)
}
// var resCards = document.getElementById('slides')
// var stopResCards = false
// resCards.addEventListener('mouseover', () => {
//   stopResCards = true
// })
// resCards.addEventListener('mouseleave', () => {
//   stopResCards = false
// })
// function resAutoScroll() {
//   let currScroll = 0
//   if (isInViewPort(resCards) && stopResCards) {
//     setInterval(() => {
//       currScroll = resCards.scrollLeft

//       if (currScroll === resCards.scrollLeft + 15) {
//         return
//       }
//       resCards.scrollLeft += 15
//     }, 300)
//   }
// }

// ///////////////////////////
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

const notificationTabs = (e) => {
  let tabcontent = document.getElementsByClassName('notice-content')
  let tablinks = document.getElementsByClassName('notif-link')

  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].classList.add('hidden')
  }

  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.add('hover:bg-blue-50', 'text-slate-400')
    tablinks[i].classList.remove(
      'bg-blue-100',
      'text-accent',
      'hover:bg-blue-200'
    )
  }
  e.classList.remove('hover:bg-blue-50', 'text-slate-400')
  e.classList.add('bg-blue-100', 'hover:bg-blue-200', 'text-accent')
  document.getElementById(e.dataset.notif).classList.remove('hidden')
}

// ///////////////////////////
// Image Slider Animation::

// const mainText = document.getElementById('main-slider-text')
const mainImg = document.getElementById('main-image')
const slider = [
  ['The Place of transformation', './public/assets/images/IMG_0196.JPG'],
  ['78th IN OVERALL NIRF RANKING', './public/assets/images/IMG_0198.JPG'],
  ['49th IN ENGINEERING NIRF', './public/assets/images/IMG_0195.JPG'],
]

let i = 0
setInterval(() => {
  // mainText.innerText = slider[i % slider.length][0]
  mainImg.style.backgroundImage = `url('${slider[i % slider.length][1]}')`
  i++
}, 2000)

// Animate the numbers on the stats section
// const stats = document.getElementById('placement-stats')
// const campusStats = document.getElementById('institute-numbers')

// let placeStatsVisited = false
// let campusStatsVisited = false
// window.addEventListener('scroll', () => {
//   if (isInViewPort(stats) && !placeStatsVisited) {
//     animateValueIntiator()
//     placeStatsVisited = true
//   }
//   if (isInViewPort(campusStats) && !campusStatsVisited) {
//     animateValueIntiatorInstitute()
//     campusStatsVisited = true
//   }
// })

function isInViewPort(el) {
  const rect = el.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

// assumes integer values for start and end

// function animateValue(obj, start, end, duration) {
//   let startTimestamp = null
//   const step = (timestamp) => {
//     if (!startTimestamp) startTimestamp = timestamp
//     const progress = Math.min((timestamp - startTimestamp) / duration, 1)
//     obj.innerText = Math.floor(progress * (end - start) + start)

//     if (progress < 1) {
//       window.requestAnimationFrame(step)
//     }
//   }
//   window.requestAnimationFrame(step)
// }

// function animateValueIntiator() {
//   const rolling_nums = document.querySelectorAll('.number h1 span')
//   rolling_nums.forEach((num) => {
//     animateValue(num, 0, Number(num.innerHTML), 3000)
//   })
// }

// function animateValueIntiatorInstitute() {
//   const rolling_nums = document.querySelectorAll('.number-in h1 span')
//   rolling_nums.forEach((num) => {
//     animateValue(num, 0, Number(num.innerHTML), 3000)
//   })
// }

// function animateValue(obj, start, end, duration) {
//   let range = end - start
//   let stepTime = Math.abs(Math.floor(duration / range))
//   let startTime = new Date().getTime()
//   let endTime = startTime + duration
//   let timer
//   function run() {
//     let now = new Date().getTime()
//     let remaining = Math.max((endTime - now) / duration, 0)
//     let value = Math.round(end - remaining * range)
//     obj.innerHTML = value
//     console.log(value)
//     if (value == end) {
//       clearInterval(timer)
//     }
//   }
//   timer = setInterval(run, stepTime)
//   run()
// }

var sideMenu = document.querySelector("#nav-menu");
var crossBtn = document.querySelector("#nav-menu .menu-btn");
var y = 0;
var z = 0;
function open_menu() {
  console.log("open")
    if (sideMenu.style.display == "none") {
      sideMenu.setAttribute("style", "display:block;");
    }
}
function keep_menu_open(){
  console.log("keeping open")
  if (sideMenu.style.display == "block") {
    sideMenu.setAttribute("style", "display:block;");
  }
}
function close_menu() {
  console.log("close")
  console.log(z)
    if (sideMenu.style.display == "block" && z==0){
      sideMenu.setAttribute("style", "display:none;");
    }
}


// News Cards Auto Scroll

const newsCardsContainer = document.getElementById('news-cards')
let cardContainerTop = newsCardsContainer.scrollTop


let my_time;
setTimeout('pageScroll()', 1500);




let direction = true
function pageScroll() {
  let currTop = cardContainerTop

  
  if (true) {
    let curr = 0
    if (direction) {
      curr = newsCardsContainer.scrollTop + 1
    }
    else {
      curr = newsCardsContainer.scrollTop - 1
    }
    newsCardsContainer.scrollTop = curr
    cardContainerTop = curr
  }
  if (cardContainerTop == currTop) {
    direction = !direction
  }
  my_time = setTimeout('pageScroll()', 20);
}

getNavbar();

async function getNavbar(){
  let obj=await fetch('https://wdmc.onrender.com/navbar');
  d = await obj.json();
  console.log()
  createNav(d)
}

async function createNav(obj){
  let data = await obj

  const menu1 = document.getElementById('menu-1')
  const Administration = document.getElementById('Administration')
  const dropdown1 = document.createElement('div')
      dropdown1.setAttribute(
        'class',
        'absolute mt-0.5 hidden gap-5 bg-white p-5 text-sm shadow-sm group-hover:flex'
      )
      dropdown1.setAttribute('id','drop-down')
      dropdown1.innerHTML = ``
  data["Administration"].forEach((array) => {
    navbarhelper(array,dropdown1)
  })
  menu1.appendChild(Administration)
  menu1.appendChild(dropdown1)
  
  const menu2 = document.getElementById('menu-2')
  const Academics = document.getElementById('Academics')
  const dropdown2 = document.createElement('div')
      dropdown2.setAttribute(
        'class',
        'absolute mt-0.5 hidden gap-5 bg-white p-5 text-sm shadow-sm group-hover:flex'
      )
      dropdown2.setAttribute('id','drop-down')
      dropdown2.innerHTML = ``
  data["Acadmeics"].forEach((array) => {
    navbarhelper(array,dropdown2)
  })
  menu2.appendChild(Academics)
  menu2.appendChild(dropdown2)
  
  const menu3 = document.getElementById('menu-3')
  const Admissions = document.getElementById('Admissions')
  const dropdown3 = document.createElement('div')
      dropdown3.setAttribute(
        'class',
        'absolute mt-0.5 hidden gap-5 bg-white p-5 text-sm shadow-sm group-hover:flex'
      )
      dropdown3.setAttribute('id','drop-down')
      dropdown3.innerHTML = ``
  data["Admissions"].forEach((array) => {
    navbarhelper(array,dropdown3)
  })
  menu3.appendChild(Admissions)
  menu3.appendChild(dropdown3)
  
  const menu4 = document.getElementById('menu-4')
  const Research = document.getElementById('Research')
  const dropdown4 = document.createElement('div')
      dropdown4.setAttribute(
        'class',
        'absolute mt-0.5 hidden gap-5 bg-white p-5 text-sm shadow-sm group-hover:flex'
      )
      dropdown4.setAttribute('id','drop-down')
      dropdown4.innerHTML = ``
  data["Research"].forEach((array) => {
    navbarhelper(array,dropdown4)
  })
  menu4.appendChild(Research)
  menu4.appendChild(dropdown4)
  
  const menu5 = document.getElementById('menu-5')
  const Alumni = document.getElementById('Alumni')
  const dropdown5 = document.createElement('div')
      dropdown5.setAttribute(
        'class',
        'absolute mt-0.5 hidden gap-5 bg-white p-5 text-sm shadow-sm group-hover:flex'
      )
      dropdown5.setAttribute('id','drop-down')
      dropdown5.innerHTML = ``
  data["Alumni"].forEach((array) => {
    navbarhelper(array,dropdown5)
  })
  menu5.appendChild(Alumni)
  menu5.appendChild(dropdown5)
  
  const menu6 = document.getElementById('menu-6')
  const LifeatNITJ = document.getElementById('Life at NITJ')
  const dropdown6 = document.createElement('div')
      dropdown6.setAttribute(
        'class',
        'absolute mt-0.5 hidden gap-5 bg-white p-5 text-sm shadow-sm group-hover:flex'
      )
      dropdown6.setAttribute('id','drop-down')
      dropdown6.innerHTML = ``
  data["Research"].forEach((array) => {
    navbarhelper(array,dropdown6)
  })
  menu6.appendChild(LifeatNITJ)
  menu6.appendChild(dropdown6)


}

const merge = document.createElement('div')
merge.setAttribute('class','flex flex-col gap-5')


function navbarhelper(array,dropdown){
    const col = document.createElement('div')
    col.setAttribute('id','col')
    col.setAttribute('class','flex flex-col w-52 gap-5 border-2 rounded-b-xl border-accent hover:bg-orange-500 hover:border-orange-500')
    col.innerHTML = ``

    const block = document.createElement('div')
    block.setAttribute('id','block')
    block.setAttribute('class','h-full')

    const head = document.createElement('div')
    head.setAttribute('class','h-full rounded-b-xl overflow-clip  bg-accent hover:bg-orange-500')
    head.setAttribute('id','head')
    head.innerHTML=`<div class="p-2 text-center"><a href='/admin/index.html'>${array[0]}</a></div>`

    const listdiv = document.createElement('div')
    listdiv.setAttribute('class','h-full rounded-b-xl bg-white')
    listdiv.innerHTML = ``

    const list = document.createElement('ul')
    list.setAttribute('class','flex flex-col gap-1 px-2 font-normal text-black')

    for(i=2;i<array.length;i++){
      const listItem = document.createElement('li')
      listItem.setAttribute('class','hover:text-[#FF6600]')
      listItem.innerHTML = `<a href="${array[i]["link"]}">${array[i]["name"]}</a>
      `
      list.appendChild(listItem)
    }

    listdiv.appendChild(list)
    head.appendChild(listdiv)
    block.appendChild(head)
    col.appendChild(block)
    dropdown.appendChild(col)
    // if(array[1]==false){
    //   while(merge.firstChild){
    //     console.log(merge)
    //   merge.removeChild(merge.firstChild)
    //   }
    //   merge.appendChild(col)
    //   dropdown.appendChild(merge)
    // }
    // else{
      // merge.appendChild(col)
      // dropdown.removeChild(dropdown.lastElementChild)
      // dropdown.appendChild(merge)
    // }
}