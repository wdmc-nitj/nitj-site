let leastpri = 5
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
  let sideMenu = document.querySelector('#nav-menu')
  if (sideMenu.style.display == 'none') {
    sideMenu.setAttribute('style', 'display:block;')
    leastpri = 5
  }
}
function keep_menu_open() {
  let sideMenu = document.querySelector('#nav-menu')
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
  let sideMenu = document.querySelector('#nav-menu')
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

function showSearchPage(event) {
  // console.log(event.id)
  // if (event.id == 'search_form') {
  //   return
  // }
  var search_page = document.getElementById('search_page')
  if (search_page.classList.contains('hidden')) {
    document.body.classList.add("overflow-hidden")
    search_page.classList.remove('hidden')
    search_page.classList.add('grid')
  } else {
    document.body.classList.remove("overflow-hidden")
    search_page.classList.remove('grid')
    search_page.classList.add('hidden')
  }
}