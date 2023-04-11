let leastpri = 5;
function executor() {
  if (priority < leastpri) {
    leastpri = priority;
  } else {
    leastpri++;
    return;
  }
  switch (leastpri) {
    case 1:
      close_menu();
      break;
    case 2:
      keep_menu_open();
      break;
    case 3:
      close_menu();
      break;
    case 4:
      close_menu();
      break;
  }
  leastpri++;
}
function open_menu() {
  let sideMenu = document.querySelector("#nav-menu");
  if (sideMenu.style.display == "none") {
    sideMenu.setAttribute("style", "display:block;");
    leastpri = 5;
  }
}
function keep_menu_open() {
  let sideMenu = document.querySelector("#nav-menu");
  if (sideMenu.style.display == "block") {
    sideMenu.setAttribute("style", "display:block;");
  }
  if (onmenu) {
    closeDropDowns();
    openDropDowns(9);
  }
  onmenu = true;
}
function close_menu() {
  let sideMenu = document.querySelector("#nav-menu");
  if (sideMenu.style.display == "block") {
    sideMenu.setAttribute("style", "display:none;");
  }
}

let dropdownmenus = document.getElementsByClassName("DropDowns");
let subdropdownmenus = document.getElementsByClassName("subDropDowns");
let dropdownmenubuttons = document.getElementsByClassName("dropdown-buttons");
let subdropdownmenubuttons = document.getElementsByClassName("subDropButtons");
let droparrows = document.getElementsByClassName("DropArrows");
function openDropDowns(id) {
  for (var i = 0; i < dropdownmenubuttons.length; i++) {
    if (
      dropdownmenubuttons[i].id[dropdownmenubuttons[i].id.length - 1] !=
      id[id.length - 1]
    ) {
      if (dropdownmenubuttons[i].classList.contains("hidden")) {
        dropdownmenubuttons[i].classList.remove("hidden");
      } else {
        dropdownmenubuttons[i].classList.add("hidden");
      }
    } else {
      if (dropdownmenubuttons[i].children[0].classList.contains("rotate-180")) {
        dropdownmenubuttons[i].children[0].classList.remove("rotate-180");
      } else {
        dropdownmenubuttons[i].children[0].classList.add("rotate-180");
      }
      dropdownmenubuttons[i].classList.remove("hidden");
    }
  }
  for (var i = 0; i < dropdownmenus.length; i++) {
    if (
      id[id.length - 1] == dropdownmenus[i].id[dropdownmenus[i].id.length - 1]
    ) {
      if (dropdownmenus[i].classList.contains("hidden")) {
        dropdownmenus[i].classList.remove("hidden");
      } else {
        dropdownmenus[i].classList.add("hidden");
      }
    } else {
      dropdownmenus[i].classList.add("hidden");
    }
  }
}
function closeDropDowns() {
  for (var i = 0; i < dropdownmenus.length; i++) {
    dropdownmenubuttons[i].classList.add("hidden");
    dropdownmenubuttons[i].children[0].classList.remove("rotate-180");
    subdropdownmenus[i].classList.add("hidden");
    subdropdownmenubuttons[i].children[0].classList.remove("rotate-180");
    dropdownmenus[i].classList.add("hidden");
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
        subdropdownmenubuttons[i].children[0].classList.contains("rotate-180")
      ) {
        subdropdownmenubuttons[i].children[0].classList.remove("rotate-180");
      } else {
        subdropdownmenubuttons[i].children[0].classList.add("rotate-180");
      }
      if (subdropdownmenus[i].classList.contains("hidden")) {
        subdropdownmenus[i].classList.remove("hidden");
      } else {
        subdropdownmenus[i].classList.add("hidden");
      }
    } else {
      subdropdownmenus[i].classList.add("hidden");
    }
  }
}

function checkEnter(event) {
  if (event.keyCode == 13) {
    event.preventDefault();
    search_resources();
    display_resources();
  }
}

function showSearchPage(event) {
  // console.log(event.id)
  // if (event.id == 'search_form') {
  //   return
  // }
  var search_page = document.getElementById("search_page");
  if (search_page.classList.contains("hidden")) {
    document.body.classList.add("overflow-hidden");
    search_page.classList.add("overflow-scroll");
    search_page.classList.remove("hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
    search_page.classList.add("overflow-scroll");
    search_page.classList.add("hidden");
  }
}

function display_resources() {
  let input = document.getElementById("searchbar");
  if(input.reportValidity()){
    let resources = document.getElementById("resources");
    if (resources.classList.contains("hidden")) {
      resources.classList.remove("hidden");
    } else {
      resources.classList.add("hidden");
    }
  }
  else{
    let resources = document.getElementById("resources");
    if (!resources.classList.contains("hidden")) {
      resources.classList.add("hidden");
    }
  }
}

function displayWords(words, links) {
  let sortedWords = words.sort();
  let groupedWords = sortedWords.reduce((acc, word) => {
    let firstLetter = word[0].toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(word);
    return acc;
  }, {});
  for (let letter in groupedWords) {
    let Big_alphabets_heading = document.getElementById("Big_alphabets");
    let h2 = document.createElement("h2");
    h2.setAttribute("class", "head hidden");
    h2.textContent = letter;
    Big_alphabets_heading.appendChild(h2);
    let ul = document.createElement("ul");
    ul.setAttribute(
      "class",
      "uls inset-y-20 text-lg font-bold flex flex-col mx-auto w-full sm:w-1/2 text-gray-800 rounded-md p-2 shadow-md transition duration-500 ease-in-out"
    );
    for (let word of groupedWords[letter]) {
      let li = document.createElement("li");
      li.setAttribute(
        "class",
        "resource text-left mb-2 ml-2 px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 cursor-pointer transition duration-500 ease-in-out"
      );
      let lichild = document.createElement("a");
      lichild.setAttribute("href", links[word]);
      lichild.setAttribute("target", "_blank");
      lichild.textContent = word;
      li.appendChild(lichild);
      ul.appendChild(li);
      Big_alphabets_heading.appendChild(ul);
    }
  }
}
var displayWordsArr = [];
var links = {};
fetch('https://wdmc-vsj1.onrender.com/navbar')
  .then(async (res) => await res.json())
  .then((data) => {
    Object.keys(data).forEach(key => {
      for(let i=0;i<data[key].length;i++){
        for(let j=2;j<data[key][i].length;j++){
          // console.log(data[key][i][j].name)
          // console.log(data[key][i][j].link)
          displayWordsArr.push(data[key][i][j].name);
          links[data[key][i][j].name] = data[key][i][j].link;
        }
      }
    });
  })
// Make a fetch call to the API
var resources = document.getElementById("resources");
fetch("https://wdmc-vsj1.onrender.com/resource")
  .then((response) => response.json())
  .then((data) => {
    // Create an unordered list element
    data.forEach((element) => {
      if (element.resourceType === "other") {
        displayWordsArr.push(element["resourceName"]);
        links[element["resourceName"]] = element["resourceLink"];
      }
    });
    displayWords(displayWordsArr, links);
    // Loop through the properties of the data object
  });
function search_resources() {
  let input_element = document.getElementById("searchbar");
  let input = document.getElementById("searchbar").value;
  if(!input_element.reportValidity()){
    display_resources();
    return;
  }
  input = input.toLowerCase();
  let x = document.getElementsByClassName("resource");
  let header = document.getElementsByClassName("head");
  let uls = document.getElementsByClassName("uls");
  for (let i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input) && input != "") {
      x[i].style.display = "none";
    } else {
      x[i].style.display = "list-item";
    }
  }
  var count = 0;
  for (let j = 0; j < header.length; j++) {
    let listItems = header[j].nextElementSibling.children;
    let allHidden = true;
    for (let k = 0; k < listItems.length; k++) {
      if (listItems[k].style.display != "none") {
        allHidden = false;
        break;
      }
    }
    if (allHidden) {
      count++;
      header[j].style.display = "none";
      uls[j].classList.add("hidden");
    } else {
      uls[j].classList.remove("hidden");
    }
    if(count == header.length){
      let noresult = document.getElementById("noresult")
      noresult.classList.remove("hidden")
      // show no result found
    }
    else{
      let noresult = document.getElementById("noresult")
      noresult.classList.add("hidden")
    }
  }
}
