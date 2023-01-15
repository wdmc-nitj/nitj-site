// TODO : use promise.all to fetch all data at once
const baseURL = 'https://wdmc.onrender.com'

fetch(`${baseURL}/news/`)
  .then((response) => response.json())
  .then((data) => {
    // //////////////////////
    // Original News Card Element
    // //////////////////////
    // <div class="rounded-xl p-4 shadow-md odd:bg-blue-100/50 even:bg-blue-200">
    //   <div class="flex flex-col items-start justify-start space-y-1 border-l-4 border-gray-800 pl-5">
    //     <p class="w-full text-lg font-semibold">This is a headline</p>
    //     <p class="w-full line-clamp-2">
    //       Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
    //       ipsum dolor sit 2
    //     </p>
    //   </div>
    // </div>
    console.log(data)
    const newsCards = document.getElementById('news-cards')
    data.forEach((news) => {
      const newsCard = document.createElement('div')
      newsCard.setAttribute(
        'class',
        'rounded-xl p-4 shadow-md odd:bg-blue-100/50 even:bg-blue-200'
      )
      newsCard.innerHTML = `
            <a href="/template/index.html?id=${news._id}?category=news">
              <div class="flex flex-col items-start justify-start space-y-1 border-l-4 border-gray-800 pl-5">
                <p class="w-full text-lg font-semibold line-clamp-1">${news.title}</p>
                <p class="w-full line-clamp-2">
                  ${news.desc}
                </p>
              </div>
            </a>
      `
      newsCards.appendChild(newsCard)
    })
  })
fetch(`${baseURL}/testimonial/get/all`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
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
    const testimonial = document.getElementById('testimonial')
    const testimonialImg = document.createElement('img')
    testimonialImg.src = data[0].image
    testimonialImg.setAttribute('class', 'object-cover rounded-lg h-28 w-28')
    const testimonialCard = document.createElement('div')
    testimonialCard.setAttribute('class', 'text-xl flex flex-col gap-5')
    testimonialCard.innerHTML = `
    
            <div class='text-xl flex flex-col gap-5'>
              <p>
                ${data[0].messageText}
              </p>
              <div>
                <p class='text-lg font-bold text-accent'>- ${data[0].name}</p>
                <p class='ml-2 text-sm text-gray-600 font-bold'>${data[0].designation}</p>
              </div>
            </div>
      `
    testimonial.append(testimonialImg, testimonialCard)
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
  .then((data) => {
    const cards = document.getElementById('cards')
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
                      href = "/template/index.html?id=${
                        e._id
                      }?category=latestEvent" 
                      class="cursor-pointer font-medium text-sky-500 hover:text-sky-600">Read More &rarr;</a>
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
  .then((data) => {
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
    data.forEach((e) => {
      const card = document.createElement('div')
      card.setAttribute('id', 'card')
      card.setAttribute('class', 'min-h-full')
      card.innerHTML = `
              
           <div
                class="rounded-xl h-full bg-light-purple shadow-xl border-t-4 border-b-4 border-accent w-60">
                <div class=" h-full w-full flex flex-col p-2.5">
                  <img class="h-44 basis-3/5 object-cover rounded-lg" src="${e.image}" />
                  <div class="flex flex-col justify-between p-4 basis-2/5">
                    <p class="text-lg line-clamp-3 font-semibold text-gray-900">
                      ${e.desc}
                    </p>
                    <div class="mt-auto pt-5 flex whitespace-nowrap items-center justify-start space-x-3">
                      <a
                       href = "/template/index.html?id=${e._id}?category=researchHighlights" 
                      class="cursor-pointer font-medium text-sky-500 hover:text-sky-600">Read More &rarr;</a>
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

    const msg = document.createElement('div')
    msg.setAttribute(
      'class',
      'flex flex-col space-y-6 rounded-lg bg-light-purple p-6 shadow-md md:flex-row md:space-y-0 md:space-x-6'
    )

    // msg.setAttribute('class', 'flex flex-col')
    msg.innerHTML = `
        <img src="${data[0].image}" class="h-32 w-32 rounded-xl shadow-lg object-cover"
    alt="Director's Image" />
  <div id="content" class="flex flex-col space-y-4">
    <div class="flex space-x-4 items-center justify-start group">
      <h1 class="text-4xl font-bold text-accent">
        Director's <span class="text-dark-purple">Message</span>
      </h1>
      <span class="material-symbols-outlined group-hover:animate-shake animate-delay"
        style="font-size: 40px; color: var(--accent)">
        history_edu
      </span>
    </div>
    <h2 class="text-xl font-medium text-dark-purple">
      ${data[0].name}
    </h2>
    <p class = "line-clamp-3">
    ${data[0].messageText}
      </p>
    <div class="mt-auto flex whitespace-nowrap items-center justify-start space-x-3">
      <a href = "/admin/director" class="cursor-pointer font-medium text-sky-500 hover:text-sky-600">Read All &rarr;</a>
    </div>
`
    directorMessage.appendChild(msg)
  })
fetch(`${baseURL}/ranking/get/all`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
    const statsData = data.map((stat) => stat.Ranking)
    const element = document.getElementById('placement-stats')
    console.log(statsData)
    statsData.map((statData) => {
      // console.log(metric, stat, stat[metric])
      const stat = document.createElement('div')
      stat.setAttribute('class', 'number')
      stat.innerHTML = `
      <h1 class="text-5xl font-bold uppercase">${
        Object.values(statData)[0]
      }</h1>
      <p class="text-lg uppercase">${Object.keys(statData)[0]}</p>
      `
      element.appendChild(stat)
    })
  })

fetch('https://wdmc.onrender.com/publication/get/all')
  .then((res) => res.json())
  .then((data) => {
    const parentDiv = document.getElementById('publication-cards')
    data.forEach((e) => {
      const content = e.Publication
      const div = document.createElement('div')
      div.setAttribute('id', 'publication-card')
      div.innerHTML = `  
      <div id="publication-card" class="w-full flex flex-col gap-4 py-2">
            <p>
            ${content.authors} 
            <br>
             ${content.desc}
            </p>
            <a href="${content.url}"
              class="mr-[10px] inline-block font-semibold  text-2xl text-accent cursor-pointer hover:underline hover:text-sky-500">
              More Details
            </a>
          </div>`
      e.show && parentDiv.appendChild(div)
    })
  })

// Fetching the images in the photo gallery

fetch('https://wdmc.onrender.com/photoGallery/')
  .then((res) => res.json())
  .then((data) => {
    const images = data
    console.log(data)
    const parentDiv = document.getElementById('gallery')
    const firstRow = document.createElement('div')
    const secondRow = document.createElement('div')
    const thirdRow = document.createElement('div')
    const rows = [firstRow, secondRow, thirdRow]
    rows.map((row) => row.setAttribute('class', 'flex h-[22vh] w-full'))

    let i = 0

    images.forEach((img, key) => {
      // img.image.link
      if (i > 2) {
        i = 0
      }
      const imgContainer = document.createElement('div')
      imgContainer.classList.add('box')
      imgContainer.innerHTML = `
        <img class= "gallery-image" data-index="${key}" src="${img.image.link}" />
        `
      rows[i].append(imgContainer)
      // imgContainer.addEventListener('click', (e) => {
      //   const imgSample = document.getElementById('sample-img')

      //   imgSample.src = e.srcElement.currentSrc
      // })
      i++
    })
    parentDiv.append(firstRow, secondRow, thirdRow)
  })

// function hideThis(e) {
//   e.querySelector('img').src = ''
// }
