fetch('https://teamd.onrender.com/admissions/updates/BTECH/visible')
.then((response) => response.json())
  .then((data) => {
    
    const ugupdates = document.getElementById('ug-updates')
    data.forEach((update) => {
      const ugupdate = document.createElement('li')
    ugupdate.innerHTML = `
    <div class="flex">
      <a
       href='${update.link}'
        class="hover:text-orange-600 inline"
      >
        <span class="bg-[#0369A1] mr-1">|</span>
      ${update.title}
      </a>
      <img
        class="h-[14px] mt-2 pr-2"
        src="./img/New.gif"
      />
    </div>
  
      `
      ugupdates.appendChild(ugupdate)
    })
  })


