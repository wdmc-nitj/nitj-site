var sideMenu = document.querySelector('#nav-menu')
var crossBtn = document.querySelector('#nav-menu .menu-btn')
var leastpri = 5
function executor() {
  if (priority < leastpri) {
    leastpri = priority
  } else {
    leastpri++
    return
  }
  switch (leastpri) {
    case 1:
      close_menu()
      break
    case 2:
      keep_menu_open()
      break
    case 3:
      close_menu()
      break
    case 4:
      close_menu()
      break
  }
  leastpri++
}
function open_menu() {
  if (sideMenu.style.display == 'none') {
    sideMenu.setAttribute('style', 'display:block;')
    leastpri = 5
  }
}
function keep_menu_open() {
  if (sideMenu.style.display == 'block') {
    sideMenu.setAttribute('style', 'display:block;')
  }
  if (onmenu) {
    closeDropDowns()
    openDropDowns(9)
  }
  onmenu = true
}
function close_menu() {
  if (sideMenu.style.display == 'block') {
    sideMenu.setAttribute('style', 'display:none;')
  }
}

let dropdownmenus = document.getElementsByClassName('DropDowns')
let subdropdownmenus = document.getElementsByClassName('subDropDowns')
let dropdownmenubuttons = document.getElementsByClassName('dropdown-buttons')
let subdropdownmenubuttons = document.getElementsByClassName('subDropButtons')
let droparrows = document.getElementsByClassName('DropArrows')
function openDropDowns(id) {
  for (var i = 0; i < dropdownmenubuttons.length; i++) {
    if (
      dropdownmenubuttons[i].id[dropdownmenubuttons[i].id.length - 1] !=
      id[id.length - 1]
    ) {
      if (dropdownmenubuttons[i].classList.contains('hidden')) {
        dropdownmenubuttons[i].classList.remove('hidden')
      } else {
        dropdownmenubuttons[i].classList.add('hidden')
      }
    } else {
      if (dropdownmenubuttons[i].children[0].classList.contains('rotate-180')) {
        dropdownmenubuttons[i].children[0].classList.remove('rotate-180')
      } else {
        dropdownmenubuttons[i].children[0].classList.add('rotate-180')
      }
      dropdownmenubuttons[i].classList.remove('hidden')
    }
  }
  for (var i = 0; i < dropdownmenus.length; i++) {
    if (
      id[id.length - 1] == dropdownmenus[i].id[dropdownmenus[i].id.length - 1]
    ) {
      if (dropdownmenus[i].classList.contains('hidden')) {
        dropdownmenus[i].classList.remove('hidden')
      } else {
        dropdownmenus[i].classList.add('hidden')
      }
    } else {
      dropdownmenus[i].classList.add('hidden')
    }
  }
}
function closeDropDowns() {
  for (var i = 0; i < dropdownmenus.length; i++) {
    dropdownmenubuttons[i].classList.add('hidden')
    dropdownmenubuttons[i].children[0].classList.remove('rotate-180')
    subdropdownmenus[i].classList.add('hidden')
    subdropdownmenubuttons[i].children[0].classList.remove('rotate-180')
    dropdownmenus[i].classList.add('hidden')
  }
}

function openSubDropDowns(id) {
  for (var i = 0; i < subdropdownmenubuttons.length; i++) {
    if (
      id[id.length - 1] ==
        subdropdownmenus[i].id[subdropdownmenus[i].id.length - 1] &&
      id[id.length - 2] ==
        subdropdownmenus[i].id[subdropdownmenus[i].id.length - 2]
    ) {
      if (
        subdropdownmenubuttons[i].children[0].classList.contains('rotate-180')
      ) {
        subdropdownmenubuttons[i].children[0].classList.remove('rotate-180')
      } else {
        subdropdownmenubuttons[i].children[0].classList.add('rotate-180')
      }
      if (subdropdownmenus[i].classList.contains('hidden')) {
        subdropdownmenus[i].classList.remove('hidden')
      } else {
        subdropdownmenus[i].classList.add('hidden')
      }
    } else {
      subdropdownmenus[i].classList.add('hidden')
    }
  }
}

let navnames = [
  'Administration',
  'Academics',
  'Admissions',
  'Research',
  'Alumni',
  'LifeatNITJ',
]
export default async function createNavMob(obj) {
  let data = await obj
  const menu1 = document.getElementById('menu-content')
  for (var i = 0; i < navnames.length; i++) {
    const dropdownbutton1 = document.createElement('button')
    dropdownbutton1.setAttribute('id', `dropdown-button${i + 1}`)
    dropdownbutton1.setAttribute('type', 'button')
    dropdownbutton1.setAttribute(
      'onclick',
      'onmenu=false;openDropDowns(this.id);'
    )
    dropdownbutton1.setAttribute(
      'class',
      'dropdown-buttons capitalize z-10 w-full inline-flex flex-shrink-0 items-center border border-gray-300 py-2.5 px-4 text-center text-sm font-medium bg-white text-black hover:bg-blue-800 focus:bg-blue-800 focus:text-white'
    )
    dropdownbutton1.innerHTML = `${
      navnames[i] == 'LifeatNITJ' ? 'Life at NITJ' : navnames[i]
    }
        <svg class="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"></path>
        </svg>`
    const dropdown1 = document.createElement('div')
    dropdown1.setAttribute('id', `dropdown${i + 1}`)
    dropdown1.setAttribute(
      'class',
      'DropDowns capitalize absolute top-18 z-10 w-full hidden rounded bg-white shadow'
    )
    data[navnames[i]].forEach((array, i) => {
      navbarmobilehelper(array, dropdownbutton1, i, dropdown1)
    })
    menu1.appendChild(dropdownbutton1)
    menu1.appendChild(dropdown1)
  }
}

function navbarmobilehelper(array, dropdownbutton, i, dropdown1) {
  const droplist = document.createElement('ul')
  droplist.setAttribute('class', 'text-sm font-semibold text-black')
  const listele = document.createElement('li')
  const subdropdownbutton = document.createElement('button')
  subdropdownbutton.setAttribute(
    'id',
    `subdropdown-button-${dropdownbutton.id[dropdownbutton.id.length - 1]}${
      i + 1
    }`
  )
  subdropdownbutton.setAttribute('type', 'button')
  subdropdownbutton.setAttribute(
    'onclick',
    'onmenu=false;openSubDropDowns(this.id)'
  )
  subdropdownbutton.setAttribute(
    'class',
    'subDropButtons capitalize border border-gray-300 z-10 w-full inline-flex flex-shrink-0 items-center py-1.5 px-4 text-center text-sm font-medium bg-white text-black hover:bg-blue-800 focus:bg-blue-800 focus:text-white'
  )
  subdropdownbutton.innerHTML = `${array[0]}
        <svg class="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"></path>
        </svg>`
  const subDropDown = document.createElement('div')
  subDropDown.setAttribute(
    'id',
    `subdropdown${dropdownbutton.id[dropdownbutton.id.length - 1]}${i + 1}`
  )
  subDropDown.setAttribute(
    'class',
    'subDropDowns normal-case absolute z-10 w-full hidden divide-y divide-gray-100 rounded bg-white shadow'
  )

  const subDropDownList = document.createElement('ul')
  subDropDownList.setAttribute('class', 'text-sm font-semibold text-black')

  const subListEle = document.createElement('li')
  for (var i = 2; i < array.length; i++) {
    const ListEle = document.createElement('button')
    ListEle.setAttribute('type', 'button')
    ListEle.setAttribute(
      'class',
      'inline-flex w-full py-1 px-4 border border-gray hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-left'
    )
    ListEle.innerHTML = `<a href="${array[i]['link']}">${array[i]['name']}</a>
      `
    subListEle.appendChild(ListEle)
  }
  subDropDownList.appendChild(subListEle)
  subDropDown.appendChild(subDropDownList)
  listele.appendChild(subdropdownbutton)
  listele.appendChild(subDropDown)
  droplist.append(listele)
  dropdown1.appendChild(droplist)
}
