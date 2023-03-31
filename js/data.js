// TODO : use promise.all to fetch all data at once
const baseURL = 'https://wdmc-vsj1.onrender.com'

function dataFilter(apiData) {
  const data = apiData.filter((n) => n.show === true)
  data.sort((a, b) => {
    return b.order - a.order
  })
  return data
}

fetch(`${baseURL}/news/`)
  .then((response) => response.json())
  .then((apiData) => {
    const data = dataFilter(apiData)

    const newsCards = document.getElementById('news-cards')
    newsCards.innerHTML = ''
    data.forEach((news) => {
      const newsCard = document.createElement('div')
      newsCard.setAttribute(
        'class',
        `relative rounded-xl p-4 shadow-md odd:bg-blue-100/50 even:bg-blue-200`
      )
      newsCard.innerHTML = `
      
            <a 
        
            
                      ${
                        news.newPage
                          ? `target = "_blank" href= "${news.pdfLink}"`
                          : `href = "/template/index.html?id=${news._id}?category=latestEvent"`
                      }
            
            >
              <div class="flex flex-col items-start justify-start space-y-1 border-l-4 border-gray-800 pl-5">
              
              <p class="w-full text-lg font-semibold">
              ${
                news.new
                  ? `
                
                <span class="absolute -top-1 -left-1">
                  <span class="relative flex h-3 w-3">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                    <span class="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
                  </span>
                </span>
                `
                  : ''
              }  
              ${news.title}</p>

                <p class="w-full line-clamp-2">
                  ${news.desc}
                </p>
              </div
            </a>
      `
      newsCards.appendChild(newsCard)
    })
  })

fetch(`${baseURL}/testimonial/get/all`)
  .then((response) => response.json())
  .then((apidata) => {
    const data = dataFilter(apidata)
    // console.log(data)
    // //////////////////////
    // Original Element
    // //////////////////////
    //  <div class='text-xl flex flex-col gap-5'>
    //    <p>
    //      One of the best educational institutes in Punjab. Experienced faculty and
    //      staff with modern classrooms
    //    </p>
    //    <div>
    //      <p class='text-lg font-bold text-accent'>- Ria Mehta</p>
    //      <p class='ml-2 text-sm text-gray-600 font-bold'>CEO, Vector</p>
    //    </div>
    //  </div>
    const randNums = new Array(
      parseInt(Math.random() * data.length),
      parseInt(Math.random() * data.length)
    )
    const testimonial = document.getElementById('testimonial')

    randNums.forEach((randNum) => {
      const testimonialImg = document.createElement('img')
      testimonialImg.src = data[randNum].image
      testimonialImg.setAttribute('class', 'object-cover rounded-lg h-28 w-28')
      const testimonialCard = document.createElement('div')
      const card = document.createElement('a')
      card.href = '/alumni/alumni.html'
      card.setAttribute(
        'class',
        'col-start-1 row-start-1 col-end-2 row-end-2 md:mr-6 bg-white rounded-lg flex flex-col md:flex-row p-5 ring-2 hover:ring-4 transition-all duration-300 gap-5 ring-accent'
      )
      testimonialCard.setAttribute('class', 'text-xl flex flex-col gap-5')
      testimonialCard.innerHTML = `
        <div class='text-xl flex flex-col gap-5'>
          <p>
            ${data[randNum].messageText}
          </p>
          <div>
            <p class='text-lg font-bold text-accent'>- ${data[randNum].name}</p>
            <p class='ml-2 text-sm text-gray-600 font-bold'>${data[randNum].designation}</p>
          </div>
        </div>
      `
      card.append(testimonialImg, testimonialCard)

      testimonial.appendChild(card)
    })
  })

function dateManipulator(data) {
  const date = new Date(data)
  const year = date.getFullYear()
  const day = date.getDate()
  const months = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUNE',
    'JULY',
    'AUG',
    'SEPT',
    'OCT',
    'NOV',
    'DEC',
  ]
  const month = months[date.getMonth()]
  const FullDate = month + ' ' + day + ',' + year
  return FullDate
}
fetch(`${baseURL}/latestEvent/get/all`)
  .then((response) => response.json())
  .then((APIdata) => {
    const data = dataFilter(APIdata)
    const cards = document.getElementById('cards')
    cards.innerHTML = ''
    data.forEach((e) => {
      const card = document.createElement('div')
      card.setAttribute('id', 'card')
      card.setAttribute('class', 'min-h-full')
      card.innerHTML = `
              
            <div
                class="flex flex-col overflow-hidden rounded-xl bg-light-purple shadow-xl border-t-4 border-b-4 border-accent h-full w-60">
                <div class="flex h-full w-full flex-col p-2.5">
                  <img class="h-44 basis-full w-full object-cover rounded-lg" src="${
                    e.image
                  }" />
                  <div class="flex flex-col p-4 basis-full">
                  <div>
                    <p class="text-sm font-bold uppercase text-gray-900 opacity-50">
                        ${dateManipulator(e.updatedAt)}
                    </p>
                    <p class="text-lg line-clamp-3 mt-5 font-semibold text-gray-900">
                      ${e.title}
                    </p>
                    </div>
                    <div class="pt-5 mt-auto whitespace-nowrap">
                      <a

                      ${
                        e.newPage
                          ? `target = "_blank" href= "${e.pdfLink}"`
                          : `href = "/template/index.html?id=${e._id}?category=latestEvent"`
                      }
                       
                      class="cursor-pointer font-medium text-sky-500 hover:text-sky-600"
                      >Read More &rarr;</a>
                    </div>
                  </div>
                </div>
              </div>
      `
      cards.appendChild(card)
    })
  })
fetch(`${baseURL}/researchHighlights/get/all`)
  .then((response) => response.json())
  .then((APIdata) => {
    const data = dataFilter(APIdata)
    // ///////////////
    // Original Element
    // ///////////////
    // <div id='card'>
    //   <div class='flex flex-col items-start justify-start overflow-hidden rounded-xl bg-light-purple shadow-xl border-t-4 border-b-4 border-accent w-60'>
    //     <div class='flex h-full w-full flex-col p-2.5'>
    //       <img
    //         class='h-44 w-full object-cover rounded-lg'
    //         src='./public/assets/images/img6.png'
    //       />
    //       <div class='flex h-full w-full flex-col items-start justify-start space-y-5 p-4'>
    //         <p class='text-lg line-clamp-3 font-semibold text-gray-900'>
    //           Card 7 Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    //           Iure autem id illum nostrum veniam totam officiis nam, dolores
    //           quas voluptas qui reprehenderit accusamus quo delectus quis
    //           molestiae. Rerum, nostrum praesentium.
    //         </p>
    //         <div class='mt-auto flex whitespace-nowrap items-center justify-start space-x-3'>
    //           <a class='cursor-pointer font-medium text-sky-500 hover:text-sky-600'>
    //             Read More &rarr;
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    const cards = document.getElementById('slides')
    cards.innerHTML = ''
    data.forEach((e) => {
      const card = document.createElement('div')
      card.setAttribute('id', 'card')
      card.setAttribute('class', 'min-h-full')
      card.innerHTML = `
              
           <div
                class="rounded-xl h-full bg-light-purple shadow-xl border-t-4 border-b-4 border-accent w-60">
                <div class=" h-full w-full flex flex-col p-2.5">
                  <img class="h-44 basis-3/5 object-cover rounded-lg" src="${
                    e.image
                  }" />
                  <div class="flex flex-col justify-between p-4 basis-2/5">
                    <p class="text-lg line-clamp-3 font-semibold text-gray-900">
                      ${e.desc}
                    </p>
                    <div class="mt-auto pt-5 flex whitespace-nowrap items-center justify-start space-x-3">
                      <a

                      ${
                        e.newPage
                          ? `target = "_blank" href= "${e.pdfLink}"`
                          : `href = "/template/index.html?id=${e._id}?category=researchHighlights"`
                      }
                       
                      class="cursor-pointer font-medium text-sky-500 hover:text-sky-600">
                      
                      Read More &rarr;
                      </a>
                    </div>
                  </div>
                </div>
              </div>

      `
      cards.appendChild(card)
    })
  })
fetch(`${baseURL}/administration/get/all`)
  .then((response) => response.json())
  .then((data) => {
    // Original Element
    // //////////////////
    // <div class="flex flex-col space-y-6 rounded-lg bg-light-purple p-6 shadow-md md:flex-row md:space-y-0 md:space-x-6">
    //       <img src="${data[0].image}" class="h-32 w-32 rounded-xl shadow-lg"
    //         alt="Director's Image" />
    //       <div id="content" class="flex flex-col space-y-4">
    //         <div class="flex space-x-4 items-center justify-start group">
    //           <h1 class="text-4xl font-bold text-accent">
    //             Director's <span class="text-dark-purple">Message</span>
    //           </h1>
    //           <span class="material-symbols-outlined group-hover:animate-shake animate-delay"
    //             style="font-size: 40px; color: var(--accent)">
    //             history_edu
    //           </span>
    //         </div>
    //         <h2 class="text-xl font-medium text-dark-purple">
    //          ${data[0].name}
    //         </h2>
    //         <p>
    //         ${data[0].messageText}
    //          </p>
    //         <div class="mt-auto flex whitespace-nowrap items-center justify-start space-x-3">
    //           <a class="cursor-pointer font-medium text-sky-500 hover:text-sky-600">Read All &rarr;</a>
    //         </div>
    //       </div>
    // </div>

    const directorMessage = document.getElementById('director-message')
    directorMessage.innerHTML = ''
    const msg = document.createElement('div')
    msg.setAttribute(
      'class',
      'flex flex-col space-y-6 rounded-lg bg-light-purple overflow-hidden shadow-md md:flex-row md:space-y-0 md:space-x-6'
    )

    // msg.setAttribute('class', 'flex flex-col')
    msg.innerHTML = `

        <div class="basis-4/12">
    <img src="${data[0].image}" class="basis-4/12 h-full w-full object-cover" alt="Director's Image" />
</div>
<div id="content" class="flex flex-col basis-8/12 space-y-4 p-6">
    <div class="flex space-x-4 items-center justify-start group">
        <h1 class="text-4xl font-bold text-accent">
            Director's <span class="text-dark-purple">Message</span>
        </h1>
        <span class="material-symbols-outlined group-hover:animate-shake animate-delay" style="font-size: 40px; color: var(--accent)">
            history_edu
        </span>
    </div>
    <h2 class="text-xl font-medium text-dark-purple">
        ${data[0].name}
    </h2>
    <p class="line-clamp-3">
        ${data[0].messageText}
    </p>
    <div class="mt-auto flex whitespace-nowrap items-center justify-start space-x-3">
        <a href="/admin/director" class="cursor-pointer font-medium text-sky-500 hover:text-sky-600">Read All &rarr;</a>
    </div>
</div>
`
    directorMessage.appendChild(msg)
  })
fetch(`${baseURL}/placementStat/get/all`)
  .then((response) => response.json())
  .then((data) => {
    // console.log(data)
    data.sort((a, b) => {
      a.order - b.order
    })

    const element = document.getElementById('placement-stats')
    // console.log(statsData)
    data.map((statData) => {
      // console.log(metric, stat, stat[metric])
      const stat = document.createElement('div')
      stat.setAttribute('class', 'number')
      stat.innerHTML = `
      <h1 class="text-5xl font-bold uppercase">${statData.placementStatValue}</h1>
      <p class="text-lg uppercase">${statData.placementStatName}</p>
      `
      element.appendChild(stat)
    })
  })

fetch(`${baseURL}/publication/get/all`)
  .then((res) => res.json())
  .then((apidata) => {
    const data = apidata
    // console.log(data)
    const parentDiv = document.getElementById('publication-cards')
    data.forEach((e) => {
      const content = e.Publication
      const div = document.createElement('div')
      div.setAttribute('id', 'publication-card')
      div.innerHTML = `  
      <div id="publication-card" class="w-full flex flex-col gap-4 py-2">
            <a href="${content?.url || '#'}">
              <p>
              <p
              class = "inline font-semibold text-accent cursor-pointer">
              ${content?.authors}</p>&nbsp;&nbsp;

               ${content?.desc}
              </p>
            </a>
          <!--  <a href="${content?.url || '#'}"
              class="mr-[10px] inline-block font-semibold  text-2xl text-accent cursor-pointer hover:underline hover:text-sky-500">
              More Details
            </a> -->
          </div>`
      e.show && parentDiv.appendChild(div)
    })
  })

fetch(`${baseURL}/club/get/all`)
  .then((res) => res.json())
  .then((apidata) => {
    // console.log(data)
    const data = dataFilter(apidata)

    const parentDiv = document.getElementById('clubs-and-socs')
    parentDiv.innerHTML = ''
    data.forEach((e) => {
      // console.log(e)
      // const content = e
      const div = document.createElement('div')
      div.setAttribute('id', 'club-card')
      div.setAttribute(
        'class',
        'overflow-hidden rounded-xl bg-white w-full shadow-lg'
      )
      div.innerHTML = `
        <div class="flex w-full flex-col items-stretch justify-start sm:flex-row">
          <div class="w-2/5 bg-cover bg-center bg-no-repeat">
          <img src ='${e.img}' class="w-full h-full object-cover" alt="Club Image" />
          </div>
          <div class="flex flex-col p-6 w-full sm:w-3/5">
            <div class="flex flex-col items-start justify-start space-y-3">
              <h4 class="text-2xl font-bold uppercase">${e.name}</h4>
              <div
                class="flex items-start justify-start rounded-full border-2 border-purple-500 bg-purple-100 px-2 py-0.5 mt-2">
                <p class="text-xs font-bold uppercase text-purple-500">
                  ${e.type}&nbsp;Club
                </p>
              </div>
              <p class="line-clamp-3 leading-5">
                ${e.desc}
              </p>
            </div>
            <div class="mt-5 flex items-center justify-start space-x-3">
              <a href='#' class="uppercase cursor-pointer font-semibold text-sm text-sky-500">Learn more
                <span>&rarr;</span></a>
            </div>
          </div>
        </div>
      `
      e.show && parentDiv.appendChild(div)
    })
  })

// Making the cards dynamic
var size_images = 0
img_arr = []
// Fetching the images in the photo gallery

fetch(`${baseURL}/photoGallery/`)
  .then((res) => res.json())
  .then((data) => {
    // console.log(data)

    // const images = data.sort((a, b) => 0.5 - Math.random())
    const images = data.filter((img) => {
      return img.type === 'photoGallery'
    })
    images.sort((a, b) => 0.5 - Math.random())
    size_images = images.length
    img_arr = images
    // const images = shuffledArray.slice(0,12)
    // console.log(data)

    const parentDiv = document.getElementById('gallery')
    const firstRow = document.createElement('div')
    const secondRow = document.createElement('div')
    const thirdRow = document.createElement('div')
    const rows = [firstRow, secondRow, thirdRow]
    rows.map((row) => row.setAttribute('class', 'flex h-[22vh] w-full'))

    let i = 0
    let y = 1
    images.forEach((img, key) => {
      // img.link
      if (y > 12) {
        return
      }
      if (i > 2) {
        i = 0
      }

      const imgContainer = document.createElement('div')
      imgContainer.classList.add('box')
      imgContainer.innerHTML = `
        <img class= "gallery-image" data-index="${key}" src="${img.link}" />
        `

      if (y % 4 == 0 && window.innerWidth <= 800) {
      } else {
        rows[i].append(imgContainer)
      }
      imgContainer.addEventListener('click', (e) => {
        const imgSample = document.getElementById('sample-img')

        imgSample.src = e.srcElement.currentSrc
        showImg()
      })
      i++
      y++
    })
    parentDiv.append(firstRow, secondRow, thirdRow)
  })
  .finally(() => {
    const loadingTemplate = document.getElementById('gallery-loading-template')
    loadingTemplate.innerHTML = ''
  })

const crossbutton = document.getElementById('crossbutton')
crossbutton.addEventListener('click', (e) => {
  showImg()
})

const arrow_forward = document.getElementById('arrow_forward')
arrow_forward.addEventListener('click', (e) => {
  const imgSample = document.getElementById('sample-img')
  const imgArray = img_arr
  for (let i = 0; i < imgArray.length; i++) {
    if (
      imgArray[i].link.toLowerCase().trim() ==
      imgSample.src.toLowerCase().trim()
    ) {
      if (i == imgArray.length - 1) {
        imgSample.src = imgArray[0].link
      } else {
        imgSample.src = imgArray[i + 1].link
      }
      break
    }
  }
})
const arrow_backward = document.getElementById('arrow_back')
arrow_backward.addEventListener('click', (e) => {
  const imgSample = document.getElementById('sample-img')
  const imgArray = img_arr
  for (let i = 0; i < imgArray.length; i++) {
    if (
      imgArray[i].link.toLowerCase().trim() ==
      imgSample.src.toLowerCase().trim()
    ) {
      if (i == 0) {
        imgSample.src = imgArray[imgArray.length - 1].link
      } else {
        imgSample.src = imgArray[i - 1].link
      }
      break
    }
  }
})

function showImg() {
  // const body = document.getElementsByTagName('body')
  const big_viewer = document.getElementById('big-viewer')
  const imgSample = document.getElementById('sample-img')
  const crossbutton = document.getElementById('crossbutton')
  const arrow_forward = document.getElementById('arrow_forward')
  const arrow_back = document.getElementById('arrow_back')
  if (imgSample.classList.contains('hidden')) {
    document.body.classList.add('overflow-hidden')
    big_viewer.classList.remove('hidden')
    imgSample.classList.remove('hidden')
    crossbutton.classList.remove('hidden')
    arrow_forward.classList.remove('hidden')
    arrow_back.classList.remove('hidden')
  } else {
    document.body.classList.remove('overflow-hidden')
    big_viewer.classList.add('hidden')
    imgSample.classList.add('hidden')
    crossbutton.classList.add('hidden')
    arrow_forward.classList.add('hidden')
    arrow_back.classList.add('hidden')
  }
}
// function hideT{his(e) {
//   e.querySelector('img').src = ''
// }
