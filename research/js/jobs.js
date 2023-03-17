fetch('https://${teamdBaseURL}/recruitments/updates/categorised?category=faculty')
.then((response) => response.json())
  .then((data) => {
const faculty=document.getElementById("faculty");
data.forEach((update) => {
    const list = document.createElement('li')
  list.innerHTML = `
  <a
  href=${update.link}
  class="hover:text-[#FF6600]"
>
${update.title}
 </a
>

    `
    faculty.appendChild(list);
  })

    })
  

    fetch('https://${teamdBaseURL}/recruitments/updates/categorised?category=nonFaculty')
.then((response) => response.json())
  .then((data) => {
const faculty=document.getElementById("nonFaculty");
data.forEach((update) => {
    const list = document.createElement('li')
  list.innerHTML = `
  <a
  href=${update.link}
  class="hover:text-[#FF6600]"
>
${update.title}
 </a
>

    `
    faculty.appendChild(list);
  })

    })
  

    

    fetch('https://${teamdBaseURL}/recruitments/updates/categorised?category=faculty-contract')
.then((response) => response.json())
  .then((data) => {
const faculty=document.getElementById("faculty-contract");
data.forEach((update) => {
    const list = document.createElement('li')
  list.innerHTML = `
  <a
  href=${update.link}
  class="hover:text-[#FF6600]"
>
${update.title}
 </a
>

    `
    faculty.appendChild(list);
  })

    })
  

    
    fetch('https://${teamdBaseURL}/recruitments/updates/categorised?category=nonFaculty-contract')
.then((response) => response.json())
  .then((data) => {
const faculty=document.getElementById("nonFaculty-contract");
data.forEach((update) => {
    const list = document.createElement('li')
  list.innerHTML = `
  <a
  href=${update.link}
  class="hover:text-[#FF6600]"
>
${update.title}
 </a
>

    `
    faculty.appendChild(list);
  })

    })
  
var button=document.getElementById("facultybutton");

setTimeout(() => button.click(),2000);
    
