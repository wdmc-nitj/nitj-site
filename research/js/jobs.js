let data_url = "https://wdmc-vsj1.onrender.com/";
let slug = window.location.href.match(/[^#]+/g)
console.log(slug);
if(slug[slug.length-1]=="research"){

  const resJob = document.getElementById("researchButton");
  resJob.click()
}
else{
  var button = document.getElementById("facultybutton");
setTimeout(() => button.click(), 1000);
}

fetch(`${data_url}`+ `/recruitments/updates/defaultTab`)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((update) => {
      if(update.defaultTabName==="research")
      {
        const resJob = document.getElementById("researchButton");
        resJob.click()
      }
      else if(update.defaultTabName==="faculty-contract")
      {
        const facultycontract = document.getElementById("facultycontractButton");
        facultycontract.click()
      }
      else if(update.defaultTabName==="nonFaculty")
      {
        const nonfaculty= document.getElementById("nonfacultyButton");
        nonfaculty.click()
      }
      else if(update.defaultTabName==="nonFaculty-contract")
      {
        const nonfacultycontract = document.getElementById("nonfacultycontractButton");
        nonfacultycontract.click()
      }
      else{
        const faculty = document.getElementById("facultyButton");
        faculty.click()
      }
    });
  });
window.onhashchange = function(){
  let slug = window.location.href.match(/[^#]+/g)
  console.log(slug)
  if(slug[slug.length-1]=="research"){

    const resJob = document.getElementById("researchButton");
    resJob.click()
  }

}
fetch(`${data_url}` + `/news/getNewsByType?type=Jobsfaculty`)
  .then((response) => response.json())
  .then((data) => {
    const faculty = document.getElementById("faculty");
    data.forEach((update) => {
      const list = document.createElement("li");
      list.innerHTML = `
  <span class="font-bold text-4xl">.</span>
  <a
  href=${update.link}
  class="hover:text-[#FF6600]"
>
${update.title}
 </a
>

    `;
      faculty.appendChild(list);
    });
  });

fetch(`${data_url}` + `/news/getNewsByType?type=Jobsnonfaculty`)
  .then((response) => response.json())
  .then((data) => {
    const faculty = document.getElementById("nonFaculty");
    data.forEach((update) => {
      const list = document.createElement("li");
      list.innerHTML = `
  <span class="font-bold text-4xl">.</span>
  <a
  href=${update.link}
  class="hover:text-[#FF6600]"
>
${update.title}
 </a
>

    `;
      faculty.appendChild(list);
    });
  });

fetch(
  `${data_url}` + `/news/getNewsByType?type=Jobsfacultycontract`
)
  .then((response) => response.json())
  .then((data) => {
    const faculty = document.getElementById("faculty-contract");
    data.forEach((update) => {
      const list = document.createElement("li");
      list.innerHTML = `
  <span class="font-bold text-4xl">.</span>
  <a
  href=${update.link}
  class="hover:text-[#FF6600]"
>
${update.title}
 </a
>

    `;
      faculty.appendChild(list);
    });
  });

fetch(
  `${data_url}` +
  `/news/getNewsByType?type=Jobsnonfacultycontract`
)
  .then((response) => response.json())
  .then((data) => {
    const faculty = document.getElementById("nonFaculty-contract");
    data.forEach((update) => {
      const list = document.createElement("li");
      list.innerHTML = `
  <span class="font-bold text-4xl">.</span>
  <a
  href=${update.link}
  class="hover:text-[#FF6600]"
>
${update.title}
 </a
>

    `;
      faculty.appendChild(list);
    });
  });

fetch(`${data_url}` + `/news/getNewsByType?type=researchjobs`)
  .then((response) => response.json())
  .then((data) => {
    const faculty = document.getElementById("researchJob");
    data.forEach((update) => {
      const list = document.createElement("li");
      list.innerHTML = `
  <span class="font-bold text-4xl">.</span>
  <a
  href=${update.link}
  class="hover:text-[#FF6600]"
>
${update.title}
 </a
>

    `;
      faculty.appendChild(list);
    });
  });


