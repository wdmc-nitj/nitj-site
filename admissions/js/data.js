fetch('https://teamd.onrender.com/admissions/updates/get?visible=visible&degree=BTECH')
.then((response) => response.json())
  .then((data) => {
    
    const ugupdates = document.getElementById('ug-updates')
    data.forEach((update) => {
      const ugupdate = document.createElement('li')
    ugupdate.innerHTML = `
    <div class="flex">
    <div class="w-[80%]">
      <a
       href='${update.link}'
        class="hover:text-orange-600 inline"
      >
        <span class="bg-[#0369A1] mr-1">|</span>
      ${update.title}
      </a>
      </div>
      <div class="w-[15%]">
      <img
        class="h-[14px] mt-2 pr-2"
        src="./img/New.gif"
      />
      </div>
    </div>
  
      `
      ugupdates.appendChild(ugupdate)
    })
  })


  fetch('https://teamd.onrender.com/admissions/updates/get?visible=visible&degree=MTECH-CCMT')
  .then((response) => response.json())
    .then((data) => {
      
      const mtechupdates = document.getElementById('mtech-ccmt-updates')
      data.forEach((update) => {
        const mtechupdate = document.createElement('li')
      mtechupdate.innerHTML = `
      <div class="flex">
      <div class="w-[80%]">
        <a
         href='${update.link}'
          class="hover:text-orange-600 inline"
        >
          <span class="bg-[#0369A1] mr-1">|</span>
        ${update.title}
        </a>
        </div>
        <div class="w-[15%]">
        <img
          class="h-[14px] mt-2 pr-2"
          src="./img/New.gif"
        />
        </div>
      </div>
    
        `
        mtechupdates.appendChild(mtechupdate)
      })
    })


    fetch('https://teamd.onrender.com/admissions/updates/get?visible=visible&degree=MTECH-SELF')
    .then((response) => response.json())
      .then((data) => {
        
        const mtechselfupdates = document.getElementById('mtech-self-updates')
        data.forEach((update) => {
          const mtechselfupdate = document.createElement('li')
        mtechselfupdate.innerHTML = `
        <div class="flex">
        <div class="w-[80%]">
          <a
           href='${update.link}'
            class="hover:text-orange-600 inline"
          >
            <span class="bg-[#0369A1] mr-1">|</span>
          ${update.title}
          </a>
          </div>
          <div class="w-[15%]">
          <img
            class="h-[14px] mt-2 pr-2"
            src="./img/New.gif"
          />
          </div>
        </div>
      
          `
          mtechselfupdates.appendChild(mtechselfupdate)
        })
      })
    

      fetch('https://teamd.onrender.com/admissions/updates/get?visible=visible&degree=MSC')
      .then((response) => response.json())
        .then((data) => {
          
          const msc_updates = document.getElementById("msc-updates");
          data.forEach((update) => {
            const mscupdate = document.createElement('li')
          mscupdate.innerHTML = `
          <div class="flex">
          <div class="w-[80%]">
            <a
             href='${update.link}'
              class="hover:text-orange-600 inline"
            >
              <span class="bg-[#0369A1] mr-1">|</span>
            ${update.title}
            </a>
            </div>
            <div class="w-[15%]">
            <img
              class="h-[14px] mt-2 pr-2"
              src="./img/New.gif"
            />
            </div>
          </div>
        
            `
            msc_updates.appendChild(mscupdate)
          })
        })
      

        fetch('https://teamd.onrender.com/admissions/updates/get?visible=visible&degree=MBA')
        .then((response) => response.json())
          .then((data) => {
            
            const mba_updates = document.getElementById("mba-updates");
            data.forEach((update) => {
              const mbaupdate = document.createElement('li')
            mbaupdate.innerHTML = `
            <div class="flex">
            <div class="w-[80%]">
              <a
               href='${update.link}'
                class="hover:text-orange-600 inline"
              >
                <span class="bg-[#0369A1] mr-1">|</span>
              ${update.title}
              </a>
              </div>
              <div class="w-[15%]">
              <img
                class="h-[14px] mt-2 pr-2"
                src="./img/New.gif"
              />
              </div>
            </div>
          
              `
              mba_updates.appendChild(mbaupdate)
            })
          })

          fetch('https://teamd.onrender.com/admissions/updates/get?visible=visible&degree=PHD')
          .then((response) => response.json())
            .then((data) => {
              
              const phd_updates = document.getElementById("phd-updates");
              data.forEach((update) => {
                const phdupdate = document.createElement('li')
              phdupdate.innerHTML = `
              <div class="flex">
              <div class="w-[80%]">
                <a
                 href='${update.link}'
                  class="hover:text-orange-600 inline"
                >
                  <span class="bg-[#0369A1] mr-1">|</span>
                ${update.title}
                </a>
                </div>
                <div class="w-[15%]">
                <img
                  class="h-[14px] mt-2 pr-2"
                  src="./img/New.gif"
                />
                </div>
              </div>
            
                `
                phd_updates.appendChild(phdupdate)
              })
            })

