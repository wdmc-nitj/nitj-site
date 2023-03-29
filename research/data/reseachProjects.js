var years;
const teamdBaseURL = "https://teamd.onrender.com";
fetch(`https://teamd.onrender.com/research/sponsoredProjects/groupedByYear`)
  .then((response) => response.json())
  .then((data) => {
    years = Object.keys(data);
    years.sort();
    years.reverse();

    const ugupdates = document.getElementById("sidetab");
    var i = 1;
    years.forEach((update) => {
      const ugupdate = document.createElement("ul");
      if (i == 1) {
        ugupdate.innerHTML = `
    <li class="active2 bg-accent mb-1 rounded-md  text-white  hover:text-black">
    <span class="text" onclick=dataComing(${update}) >Ongoing Projects (${Number(update)}-${
          Number(update) + 1
        }) Onwards</span>
    </li>
      `;
      } else {
        ugupdate.innerHTML = `
        <li class=" bg-accent mb-1 rounded-md  text-white  hover:text-black">
        <span class="text" onclick=dataComing(${update})  >Ongoing Projects (${update}-${
          Number(update) + 1
        }) Onwards</span>
        </li>
          `;
      }
      ugupdates.appendChild(ugupdate);
      i++;
    });
  }
  
  ).then(()=>{
    console.log(years[0]);

    fetch(`https://teamd.onrender.com/research/sponsoredProjects/year?startYear=${years[0]}`)
  .then((response) => response.json())
    .then((data) => {
      const ugupdates = document.getElementById('dataComing')
      var i=1;
      data.forEach((update) => {
        const ugupdate = document.createElement('tr')
      ugupdate.innerHTML = `
      <td class="border px-8 py-2 text-sm  ">${i}</td>
                          <td class="border px-8 py-2 text-sm  ">${update.title}</td>
                          <td class="border px-8 py-2 text-sm  ">${update.yearOfSanctionStart-Number(update.yearOfSanctionStart)+1}</td>
                          <td class="border px-8 py-2 text-sm  ">${update.fundingAgency}</td>
                          <td class="border px-8 py-2 text-sm  ">${update.amountInLakhs}</td>
        `
        ugupdates.appendChild(ugupdate)
        i++;
      })
    })
  });



function dataComing(update){
    document.getElementById('dataComing').innerHTML=``
    fetch(`https://teamd.onrender.com/research/sponsoredProjects/year?startYear=${update}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        const ugupdates = document.getElementById('dataComing')
        var i=1;
        data.forEach((update) => {
        const ugupdate = document.createElement('tr')
        ugupdate.innerHTML = `
        <td class="border px-8 py-2 text-sm  ">${i}</td>
                        <td class="border px-8 py-2 text-sm  ">${update.title}</td>
                        <td class="border px-8 py-2 text-sm  ">${update.yearOfSanctionStart-Number(update.yearOfSanctionStart)+1}</td>
                        <td class="border px-8 py-2 text-sm  ">${update.fundingAgency}</td>
                        <td class="border px-8 py-2 text-sm  ">${update.amountInLakhs}</td>
        `
        ugupdates.appendChild(ugupdate)
        i++;
        })
    })
    }
