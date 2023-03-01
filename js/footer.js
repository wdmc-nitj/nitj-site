    callAPi()
    async function callAPi() {
      let result = await fetch(
        "https://wdmc.onrender.com/footer/get/all"
      );
      result = await result.json();
      result=result[2];
      console.log(result);
      // document.getElementById("quicklinks").innerHTML = footer;
    

      
    const links = result.links;
    const keys = Object.keys(links);
    console.log(keys[2]);
      
      var i=0;
      
      footer=`    
      <h2 class="my-1 text-xl font-semibold">Quick Links</h2>
      
      <div class="flex flex-row p-[15px]">
        <div class="flex basis-1/4 flex-col text-[11px] lg:text-[14px]">`
        ;
      for(i = 0; i <1 ; i++) {
      
           
            footer+= ' <a href="'+links[keys[i]]+'" class="hover:text-sky-500 hover:underline">'+keys[i]+'</a>' ;
            }
          
          footer+='<br>';
      
    for(i = 1; i <3 ; i++) {
      
              footer+= ' <a href="'+links[keys[i]]+'" class="hover:text-sky-500 hover:underline">'+keys[i]+'</a>' ;
        }
    
      footer+='<br>'; 

      for(i; i <6 ; i++) {
      
       
        footer+= ' <a href="'+links[keys[i]]+'" class="hover:text-sky-500 hover:underline">'+keys[i]+'</a>' ;

      }
      footer+='<br>';
      for(i; i <7 ; i++) {
      
       
        footer+= ' <a href="'+links[keys[i]]+'" class="hover:text-sky-500 hover:underline">'+keys[i]+'</a>' ;
        }

      footer+=' </div> <div class="flex basis-1/4 flex-col text-[11px] lg:text-[14px]">';
      for(i; i <10 ; i++) {
      
    
       
        footer+= ' <a href="'+links[keys[i]]+'" class="hover:text-sky-500 hover:underline">'+keys[i]+'</a>' ;
      }
      footer+='<br>';
      for(i; i <12 ; i++) {
      

        footer+= ' <a href="'+links[keys[i]]+'" class="hover:text-sky-500 hover:underline">'+keys[i]+'</a>' ;
    
      }
      footer+=' </div> <div class="flex basis-1/4 flex-col text-[11px] lg:text-[14px]">';
      for(i; i <22 ; i++) {
      
       
        footer+= ' <a href="'+links[keys[i]]+'" class="hover:text-sky-500 hover:underline">'+keys[i]+'</a>' ;
    
      }
      footer+=' </div> <div class="flex basis-1/4 flex-col text-[11px] lg:text-[14px]">';
      for(i; i <result.length ; i++) {
      

       
        footer+= ' <a href="'+links[keys[i]]+'" class="hover:text-sky-500 hover:underline">'+keys[i]+'</a>' ;
      }footer+=' </div>  </div>';
          


  document.getElementById("quicklinks").innerHTML = footer;
    }
    callAPi();
