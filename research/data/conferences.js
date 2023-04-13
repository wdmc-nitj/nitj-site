let data_url = "https://wdmc-vsj1.onrender.com";
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];


function formatTime(timeString) {
  const [hourString, minute] = timeString.split(":");
  const hour = +hourString % 24;
  return (hour % 12 || 12) + ":" + minute + (hour < 12 ? "AM" : "PM");
}

fetch(`${data_url}` + '/research/events/get?visible=visible&upcoming=true&category=conference')
.then((response) => response.json())
  .then((data) => {
    
    const ugupdates = document.getElementById('upcoming_conferences')
    data.forEach((update) => {
      const ugupdate = document.createElement('div')
      var d = new Date(update.dateTime);
      console.log(d.getTime());
      console.log(d.getHours());
      console.log(d.getMinutes());
      console.log(d.getSeconds());
    ugupdate.innerHTML = `
    <div class="lg:flex shadow rounded-lg border w-[100%] mb-4 border-gray-400">
    <div class="bg-accent rounded-lg lg:w-[30%] w-[30%] py-4 block h-full shadow-inner mx-auto">
      <div class="text-center tracking-wide">
        <!--date-->
        <div class="text-white font-bold text-4xl ">${d.getDate()}</div>
                  <div class="text-white font-normal text-2xl">${month[d.getMonth()].substring(0, 3)}</div>
     
      </div>
    </div>
    <div class="w-full  lg:w-11/12 xl:w-full px-1 bg-white py-5 lg:px-2 lg:py-2 tracking-wide">
      <div class="flex flex-row lg:justify-start justify-center">
        <div class="text-gray-700 font-medium text-sm text-center lg:text-left px-2">
          <!--time-->
          <i class="far fa-clock"></i> ${d.getHours()}:${d.getMinutes().toString().length==1? 0+d.getMinutes().toString():d.getMinutes()}${d.getHours()<12? "AM":"PM"}
        </div>
        <div class="text-gray-700 font-medium text-sm text-center lg:text-left px-2">
          Organiser : ${update.organiser}
        </div>
      </div>
      <div class="font-semibold text-gray-800 text-xl text-center lg:text-left px-2">
        ${update.title}
      </div>

      <div class="text-gray-600 font-medium text-sm pt-1 text-center lg:text-left px-2">
        <!--address / location-->
        ${update.venue}
      </div>
    </div>

  </div>
  
      `
      ugupdates.appendChild(ugupdate)
    })
  })


  fetch(`${data_url}` + '/research/events/get?visible=visible&upcoming=false&category=conference')
.then((response) => response.json())
  .then((data) => {
    
    const ugupdates = document.getElementById('organizedConferences')
    data.forEach((update) => {
      const ugupdate = document.createElement('div')
      var d = new Date(update.dateTime);
      console.log(d)
      console.log(d.getDate()); // Hours
      
      console.log(month[d.getMonth()].substring(0, 3));
      console.log(d.getUTCSeconds());
    ugupdate.innerHTML = `
    <div class="lg:flex shadow rounded-lg border w-[100%] mb-4 border-gray-400">
    <div class="bg-accent rounded-lg lg:w-[30%] w-[30%] py-4 block h-full shadow-inner mx-auto">
      <div class="text-center tracking-wide">
        <!--date-->
        <div class="text-white font-bold text-4xl ">${d.getDate()}</div>
                  <div class="text-white font-normal text-2xl">${month[d.getMonth()].substring(0, 3)}</div>
     
      </div>
    </div>
    <div class="w-full  lg:w-11/12 xl:w-full px-1 bg-white py-5 lg:px-2 lg:py-2 tracking-wide">
      <div class="flex flex-row lg:justify-start justify-center">
        <div class="text-gray-700 font-medium text-sm text-center lg:text-left px-2">
          <!--time-->
          <i class="far fa-clock"></i> ${formatTime(update.dateTime.substring(11,19))}
        </div>
        <div class="text-gray-700 font-medium text-sm text-center lg:text-left px-2">
          Organiser : ${update.organiser}
        </div>
      </div>
      <div class="font-semibold text-gray-800 text-xl text-center lg:text-left px-2">
        ${update.title}
      </div>

      <div class="text-gray-600 font-medium text-sm pt-1 text-center lg:text-left px-2">
        <!--address / location-->
        ${update.venue}
      </div>
    </div>

  </div>
  
      `
      ugupdates.appendChild(ugupdate)
    })
  })
