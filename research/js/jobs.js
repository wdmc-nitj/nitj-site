let data_url = "https://wdmc-vsj1.onrender.com";
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

window.onhashchange = function(){
  let slug = window.location.href.match(/[^#]+/g)
  console.log(slug)
  if(slug[slug.length-1]=="research"){

    const resJob = document.getElementById("researchButton");
    resJob.click()
  }

}
fetch(data_url + "/recruitments/updates/categorised?category=faculty")
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

fetch(`${data_url}` + "/recruitments/updates/categorised?category=nonFaculty")
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
  `${data_url}` + "/recruitments/updates/categorised?category=faculty-contract"
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
    "/recruitments/updates/categorised?category=nonFaculty-contract"
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

fetch(`${data_url}` + "/recruitments/updates/categorised?category=research")
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


