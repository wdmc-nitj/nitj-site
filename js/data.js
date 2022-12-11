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


