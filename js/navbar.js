getNavbar();

async function getNavbar(){
  let obj=await fetch('https://wdmc.onrender.com/navbar');
  d = await obj.json();
  console.log()
  createNav(d)
  createNavMob(d)
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
        'absolute mt-0.5 hidden -translate-x-28 gap-5  bg-white p-5 text-sm shadow-sm group-hover:flex'
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
        'absolute mt-0.5 hidden -translate-x-1/3 gap-5  bg-white p-5 text-sm shadow-sm group-hover:flex'
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
        'absolute mt-0.5 hidden -translate-x-1/2 gap-5  bg-white p-5 text-sm shadow-sm group-hover:flex'
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
        'absolute mt-0.5 hidden -translate-x-1/2 gap-5  bg-white p-5 text-sm shadow-sm group-hover:flex'
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
        'absolute mt-0.5 hidden gap-5 self-center  bg-white p-5 text-sm shadow-sm group-hover:flex right-0'
      )
      dropdown6.setAttribute('id','drop-down')
      dropdown6.innerHTML = ``
  data["LifeatNITJ"].forEach((array) => {
    navbarhelper(array,dropdown6)
  })
  menu6.appendChild(LifeatNITJ)
  menu6.appendChild(dropdown6)


}

const merge = document.createElement('div')
merge.setAttribute('class','')

let prevCol = null

function navbarhelper(array,dropdown){
    const col = document.createElement('div')
    col.setAttribute('id','col')
    col.setAttribute('class','flex flex-col h-full w-52 gap-5 border-2 rounded-b-xl border-accent hover:bg-orange-500 hover:border-orange-500')
    col.innerHTML = ``

    const block = document.createElement('div')
    block.setAttribute('id','block')
    block.setAttribute('class','min-h-full')

    const head = document.createElement('div')
    head.setAttribute('class','rounded-b-xl h-full overflow-clip  bg-accent hover:bg-orange-500 uppercase')
    head.setAttribute('id','head')
    head.innerHTML=`<div class="p-2 text-center"><a href='/admin/index.html'>${array[0]}</a></div>`

    const listdiv = document.createElement('div')
    listdiv.setAttribute('class','h-full rounded-b-xl bg-white normal-case')
    listdiv.innerHTML = ``

    const list = document.createElement('ul')
    list.setAttribute('class','flex flex-col min-h-full gap-1 px-2 font-normal text-black')

    for(i=2;i<array.length;i++){
      const listItem = document.createElement('li')
      listItem.setAttribute('class','hover:text-[#FF6600]')
      listItem.innerHTML = `<a href="${array[i]["link"]}">${array[i]["name"]}</a>
      `
      list.appendChild(listItem)
    }
 const bigCol = document.createElement('div')
    bigCol.setAttribute('class','flex flex-col gap-5 min-h-full')

  
    listdiv.appendChild(list)
    head.appendChild(listdiv)
    block.appendChild(head)
    col.appendChild(block)
    bigCol.appendChild(col)


  
  array[1] ? prevCol.appendChild(col) : prevCol = bigCol

    dropdown.appendChild(bigCol)
  
}