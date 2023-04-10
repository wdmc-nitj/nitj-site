callAPi()
async function callAPi() {
  let result = await fetch('https://wdmc-vsj1.onrender.com/footer/get/all')
  result = await result.json()
  // result = result[2]
  console.log(result)
  //sort result according to order
  result.sort((a, b) => { 
    return a.order - b.order
  })

  // document.getElementById("quicklinks").innerHTML = footer;
  let x=`
  <h2 class="my-1 text-xl font-semibold">Quick Links</h2>
    <div class="flex flex-row p-[15px]">
        <div class="flex basis-1/4 flex-col text-[11px] lg:text-[14px]">
    `;
  
  for (let i = 0, j=0; i < result.length; i++, j<7) {
    if (result[i].column == 0) {
      x+=`<a href="${result[i].link}" class="hover:text-yellow-300 hover:underline">${result[i].title}</a>`

      j+=1;
      }


  }

  x+=`</div>
        <div class="flex basis-1/4 flex-col text-[11px] lg:text-[14px]">`
    
        for (let i = 0, j=0; i < result.length; i++,j<5) {
          if (result[i].column == 1) {
            x+=`<a href="${result[i].link}" class="hover:text-yellow-300 hover:underline">${result[i].title}</a>`
            j+=1;
            }
      
      
        }
        x+=` </div>
        <div class="flex basis-1/4 flex-col text-[11px] lg:text-[14px]">`


        
  
        for (let i = 0, j=0; i < result.length; i++, j<10) {

          if (result[i].column == 2) {
            x+=`<a href="${result[i].link}" class="hover:text-yellow-300 hover:underline">${result[i].title}</a>`
            j+=1;
            }
      
      
        }

        x+=` </div>
        <div class="flex basis-1/4 flex-col text-[11px] lg:text-[14px]">`


        
  
        for (let i = 0; i < result.length; i++) {

          if (result[i].column == 3) {
            x+=`<a href="${result[i].link}" class="hover:text-yellow-300 hover:underline">${result[i].title}</a>`
            }
      
      
        }
        x+=`</div>
        </div>
        </div>
        </div>`

  document.getElementById('quicklinks').innerHTML = x
}
