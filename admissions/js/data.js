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

// important links
            fetch('https://teamd.onrender.com/admissions/links/get?visible=visible')
            .then((response) => response.json())
              .then((data) => {
                
                const important_links = document.getElementById("important_links");
                
                data.forEach((update) => {
                  const important_link = document.createElement('li')
                important_link.innerHTML = `
                <li>
                <a
                  href=${update.link}
                  target="_blank"
                  class="ml-[3%] hover:text-orange-600"
                  >${update.title}</a
                >
                <hr class="border-1 border-gray-300" />
              </li>
              
                  `
                  important_links.appendChild(important_link)
                })
              })

              fetch('https://teamd.onrender.com/admissions/links/get?visible=visible')
              .then((response) => response.json())
                .then((data) => {
                  
                  const important_links2 = document.getElementById("important_links2");
                  
                  data.forEach((update) => {
                    const important_link = document.createElement('li')
                  important_link.innerHTML = `
                  <li>
                  <a
                    href=${update.link}
                    target="_blank"
                    class="ml-[3%] hover:text-orange-600"
                    >${update.title}</a
                  >
                  <hr class="border-1 border-gray-300" />
                </li>
                
                    `
                    important_links2.appendChild(important_link)
                  })
                })

                fetch('https://teamd.onrender.com/admissions/links/get?visible=visible')
                .then((response) => response.json())
                  .then((data) => {
                    
                    const important_links3 = document.getElementById("important_links3");
                    
                    data.forEach((update) => {
                      const important_link = document.createElement('li')
                    important_link.innerHTML = `
                    <li>
                    <a
                      href=${update.link}
                      target="_blank"
                      class="ml-[3%] hover:text-orange-600"
                      >${update.title}</a
                    >
                    <hr class="border-1 border-gray-300" />
                  </li>
                  
                      `
                      important_links3.appendChild(important_link)
                    })
                  })

                  fetch('https://teamd.onrender.com/admissions/links/get?visible=visible')
                  .then((response) => response.json())
                    .then((data) => {
                      
                      const important_links4 = document.getElementById("important_links4");
                      
                      data.forEach((update) => {
                        const important_link = document.createElement('li')
                      important_link.innerHTML = `
                      <li>
                      <a
                        href=${update.link}
                        target="_blank"
                        class="ml-[3%] hover:text-orange-600"
                        >${update.title}</a
                      >
                      <hr class="border-1 border-gray-300" />
                    </li>
                    
                        `
                        important_links4.appendChild(important_link)
                      })
                    })

                    fetch('https://teamd.onrender.com/admissions/links/get?visible=visible')
                    .then((response) => response.json())
                      .then((data) => {
                        
                        const important_links5 = document.getElementById("important_links5");
                        
                        data.forEach((update) => {
                          const important_link = document.createElement('li')
                        important_link.innerHTML = `
                        <li>
                        <a
                          href=${update.link}
                          target="_blank"
                          class="ml-[3%] hover:text-orange-600"
                          >${update.title}</a
                        >
                        <hr class="border-1 border-gray-300" />
                      </li>
                      
                          `
                          important_links5.appendChild(important_link)
                        })
                      })

                      fetch('https://teamd.onrender.com/admissions/links/get?visible=visible')
                      .then((response) => response.json())
                        .then((data) => {
                          
                          const important_links6 = document.getElementById("important_links6");
                          
                          data.forEach((update) => {
                            const important_link = document.createElement('li')
                          important_link.innerHTML = `
                          <li>
                          <a
                            href=${update.link}
                            target="_blank"
                            class="ml-[3%] hover:text-orange-600"
                            >${update.title}</a
                          >
                          <hr class="border-1 border-gray-300" />
                        </li>
                        
                            `
                            important_links6.appendChild(important_link)
                          })
                        })

                     
                      fetch('https://teamd.onrender.com/admissions/helplines/get?visible=visible&degree=BTECH')
                      .then((response) => response.json())
                        .then((data) => {
                          
                          const helplines = document.getElementById("helplines");
                          
                          data.forEach((update) => {
                            const helpline = document.createElement('li')
                          helpline.innerHTML = `
                          <li class="px-1">
                          <span class="bg-[#0369A1] text-[#0369A1] mr-1"
                            >|</span
                          ><span style="font-size: 14px"
                            ><span style="color: #000000"
                              ><span style="font-size: 14px" class="px-1"
                                >${update.number} (${update.name}, ${update.startTime} to ${update.endTime}, For
                                queries in ${update.languages})</span
                              ></span
                            ></span
                          >
                        </li>
                        
                            `
                            helplines.appendChild(helpline);
                          })
                        })

                        fetch('https://teamd.onrender.com/admissions/helplines/get?visible=visible&degree=MTECH-CCMT')
                        .then((response) => response.json())
                          .then((data) => {
                            
                            const helplines = document.getElementById("helplinesmtech");
                            
                            data.forEach((update) => {
                              const helpline = document.createElement('li')
                            helpline.innerHTML = `
                            <li class="px-1">
                            <span class="bg-[#0369A1] text-[#0369A1] mr-1"
                              >|</span
                            ><span style="font-size: 14px"
                              ><span style="color: #000000"
                                ><span style="font-size: 14px" class="px-1"
                                  >${update.number} (${update.name}, ${update.startTime} to ${update.endTime}, For
                                  queries in ${update.languages})</span
                                ></span
                              ></span
                            >
                          </li>
                          
                              `
                              helplines.appendChild(helpline);
                            })
                          })
  
                          fetch('https://teamd.onrender.com/admissions/helplines/get?visible=visible&degree=MTECH-SELF')
                          .then((response) => response.json())
                            .then((data) => {
                              
                              const helplines = document.getElementById("helplinesmtechss");
                              
                              data.forEach((update) => {
                                const helpline = document.createElement('li')
                              helpline.innerHTML = `
                              <li class="px-1">
                              <span class="bg-[#0369A1] text-[#0369A1] mr-1"
                                >|</span
                              ><span style="font-size: 14px"
                                ><span style="color: #000000"
                                  ><span style="font-size: 14px" class="px-1"
                                    >${update.number} (${update.name}, ${update.startTime} to ${update.endTime}, For
                                    queries in ${update.languages})</span
                                  ></span
                                ></span
                              >
                            </li>
                            
                                `
                                helplines.appendChild(helpline);
                              })
                            })

                            fetch('https://teamd.onrender.com/admissions/helplines/get?visible=visible&degree=MTECH-SELF')
                            .then((response) => response.json())
                              .then((data) => {
                                
                                const helplines = document.getElementById("helplinesmtechss");
                                
                                data.forEach((update) => {
                                  const helpline = document.createElement('li')
                                helpline.innerHTML = `
                                <li class="px-1">
                                <span class="bg-[#0369A1] text-[#0369A1] mr-1"
                                  >|</span
                                ><span style="font-size: 14px"
                                  ><span style="color: #000000"
                                    ><span style="font-size: 14px" class="px-1"
                                      >${update.number} (${update.name}, ${update.startTime} to ${update.endTime}, For
                                      queries in ${update.languages})</span
                                    ></span
                                  ></span
                                >
                              </li>
                              
                                  `
                                  helplines.appendChild(helpline);
                                })
                              })

                              fetch('https://teamd.onrender.com/admissions/helplines/get?visible=visible&degree=MSC')
                              .then((response) => response.json())
                                .then((data) => {
                                  
                                  const helplines = document.getElementById("helplinesmsc");
                                  
                                  data.forEach((update) => {
                                    const helpline = document.createElement('li')
                                  helpline.innerHTML = `
                                  <li class="px-1">
                                  <span class="bg-[#0369A1] text-[#0369A1] mr-1"
                                    >|</span
                                  ><span style="font-size: 14px"
                                    ><span style="color: #000000"
                                      ><span style="font-size: 14px" class="px-1"
                                        >${update.number} (${update.name}, ${update.startTime} to ${update.endTime}, For
                                        queries in ${update.languages})</span
                                      ></span
                                    ></span
                                  >
                                </li>
                                
                                    `
                                    helplines.appendChild(helpline);
                                  })
                                })

                                fetch('https://teamd.onrender.com/admissions/helplines/get?visible=visible&degree=MBA')
                                .then((response) => response.json())
                                  .then((data) => {
                                    
                                    const helplines = document.getElementById("helplinesmba");
                                    
                                    data.forEach((update) => {
                                      const helpline = document.createElement('li')
                                    helpline.innerHTML = `
                                    <li class="px-1">
                                    <span class="bg-[#0369A1] text-[#0369A1] mr-1"
                                      >|</span
                                    ><span style="font-size: 14px"
                                      ><span style="color: #000000"
                                        ><span style="font-size: 14px" class="px-1"
                                          >${update.number} (${update.name}, ${update.startTime} to ${update.endTime}, For
                                          queries in ${update.languages})</span
                                        ></span
                                      ></span
                                    >
                                  </li>
                                  
                                      `
                                      helplines.appendChild(helpline);
                                    })
                                  })

                                  fetch('https://teamd.onrender.com/admissions/helplines/get?visible=visible&degree=PHD')
                                  .then((response) => response.json())
                                    .then((data) => {
                                      
                                      const helplines = document.getElementById("helplinesphd");
                                      
                                      data.forEach((update) => {
                                        const helpline = document.createElement('li')
                                      helpline.innerHTML = `
                                      <li class="px-1">
                                      <span class="bg-[#0369A1] text-[#0369A1] mr-1"
                                        >|</span
                                      ><span style="font-size: 14px"
                                        ><span style="color: #000000"
                                          ><span style="font-size: 14px" class="px-1"
                                            >${update.number} (${update.name}, ${update.startTime} to ${update.endTime}, For
                                            queries in ${update.languages})</span
                                          ></span
                                        ></span
                                      >
                                    </li>
                                    
                                        `
                                        helplines.appendChild(helpline);
                                      })
                                    })


