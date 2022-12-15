// TODO : use promise.all to fetch all data at once

fetch('https://wdmc.onrender.com/news/')
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
        const newsCards = document.getElementById('news-cards')
        data.forEach((news) => {
            const newsCard = document.createElement('div')
            newsCard.setAttribute(
                'class',
                'rounded-xl p-4 shadow-md odd:bg-blue-100/50 even:bg-blue-200'
            )
            newsCard.innerHTML = `
            <div class="flex flex-col items-start justify-start space-y-1 border-l-4 border-gray-800 pl-5">
              <p class="w-full text-lg font-semibold line-clamp-1">${news.title}</p>
              <p class="w-full line-clamp-2">
                ${news.desc}
              </p>
            </div>
      `
            newsCards.appendChild(newsCard)
        })
    })

fetch('https://wdmc.onrender.com/testimonial/get/all')
    .then((response) => response.json())
    .then((data) => {
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
        testimonial.appendChild(testimonialCard)
    })
fetch('https://wdmc.onrender.com/latestEvent/get/all')
    .then((response) => response.json())
    .then((data) => {
        const date = new Date(data.updatedAt);
        const year = date.getFullYear();
        const day = date.getDate();
        const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUNE", "JULY", "AUG", "SEPT", "OCT", "NOV", "DEC"];
        const month = months[date.getMonth()];
        const FullDate = month + " " + day + "," + year;

        const latestEventCards = document.getElementById('cards')
        data.forEach((latestEvents) => {
            const latestEvent = document.createElement('div')
            latestEvent.setAttribute(
                'class',
                'scrollbar-hide flex space-x-6 overflow-x-scroll pl-1 pt-8 scroll-smooth'
            )
            latestEvent.innerHTML = `
              <div id="card">
              <div class="flex flex-col overflow-hidden rounded-xl bg-light-purple shadow-xl border-t-4 border-b-4 border-accent w-60">
            <div class = "flex h-full w-full flex-col p-2.5" >
         <img class = "h-44 w-full object-cover rounded-lg" src = "AAQIECBAgUBYQsMqgyhEgQIAAAQIEBCw9QIAAAQIECBAoCwhYZVDlCBAgQIAAAQIClh4gQIAAAQIECJQFBKwyqHIECBAgQIAAAQFLDxAgQIAAAQIEygICVhlUOQIECBAgQICAgKUHCBAgQIAAAQJlAQGrDKocAQIECBAgQEDA0gMECBAgQIAAgbKAgFUGVY4AAQIECBAgIGDpAQIECBAgQIBAWUDAKoMqR4AAAQIECBAQsPQAAQIECBAgQKAsIGCVQZUjQIAAAQIECAhYeoAAAQIECBAgUBYQsMqgyhEgQIAAAQIEBCw9QIAAAQIECBAoCwhYZVDlCBAgQIAAAQIClh4gQIAAAQIECJQFBKwyqHIECBAgQIAAAQFLDxAgQIAAAQIEygICVhlUOQIECBAgQICAgKUHCBAgQIAAAQJlAQGrDKocAQIECBAgQEDA0gMECBAgQIAAgbKAgFUGVY4AAQIECBAgIGDpAQIECBAgQIBAWUDAKoMqR4AAAQIECBAQsPQAAQIECBAgQKAsIGCVQZUjQIAAAQIECAhYeoAAAQIECBAgUBYQsMqgyhEgQIAAAQIEBCw9QIAAAQIECBAoCwhYZVDlCBAgQIAAAQIClh4gQIAAAQIECJQFBKwyqHIECBAgQIAAAQFLDxAgQIAAAQIEygICVhlUOQIECBAgQICAgKUHCBAgQIAAAQJlAQGrDKocAQIECBAgQEDA0gMECBAgQIAAgbKAgFUGVY4AAQIECBAgIGDpAQIECBAgQIBAWUDAKoMqR4AAAQIECBAQsPQAAQIECBAgQKAsIGCVQZUjQIAAAQIECAhYeoAAAQIECBAgUBYQsMqgyhEgQIAAAQIEBCw9QIAAAQIECBAoCwhYZVDlCBAgQIAAAQIClh4gQIAAAQIECJQFBKwyqHIECBAgQIAAAQFLDxAgQIAAAQIEygICVhlUOQIECBAgQICAgKUHCBAgQIAAAQJlAQGrDKocAQIECBAgQEDA0gMECBAgQIAAgbKAgFUGVY4AAQIECBAgIGDpAQIECBAgQIBAWUDAKoMqR4AAAQIECBAQsPQAAQIECBAgQKAsIGCVQZUjQIAic8Q3AAAAGElEQVQAAQIECAhYeoAAAQIECBAgUBb4P1dRPzH7+HphAAAAAElFTkSuQmCC" 
        />
         <div class = "flex flex-col space-y-5 p-4">
         <p class = "text-sm font-bold uppercase text-gray-900 opacity-50" >${FullDate} <
         /p> 
         <p class = "text-lg line-clamp-3 font-semibold text-gray-900">
         ${latestEvents.title} </p> 
     <div class = "mt-auto flex whitespace-nowrap items-center justify-start space-x-3" 
        <a class = "cursor-pointer font-medium text-sky-500 hover:text-sky-600" > Read More & rarr; </a> </div> 
        </div> 
        </div> 
        </div>
        </div>
      `
            latestEventCards.appendChild(latestEvent)
        })
    })

fetch('https://wdmc.onrender.com/administration/get/all')
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
    
        const directorMessage = document.getElementById("director-message")
        
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
      <a class="cursor-pointer font-medium text-sky-500 hover:text-sky-600">Read All &rarr;</a>
    </div>
`
            directorMessage.appendChild(msg)
  })
  

fetch('https://wdmc.onrender.com/ranking/get/all')
  .then((response) => response.json())
  .then((data) => {
    const statsData = data[0].Ranking
    console.log(statsData)
    const element = document.getElementById('placement-stats')


    for (const metric in statsData) {
      const stat = document.createElement('div')
      stat.setAttribute('class', 'number')
      stat.innerHTML = `
      <h1 class="text-5xl font-bold uppercase">${statsData[metric]}</h1>
      <p class="text-lg uppercase">${metric}</p>
      `
      element.appendChild(stat)
    }
  })