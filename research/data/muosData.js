let data_url = "https://wdmc-vsj1.onrender.com/";
fetch(`${data_url}` + 'MOUs/get?visible=visible&category=international_institutes')
.then((response) => response.json())
  .then((data) => {
    const ugupdates = document.getElementById('internationalInstitutesData')
    var i=1;
    data.forEach((update) => {
      const ugupdate = document.createElement('tr')
    ugupdate.innerHTML = `
    <td class="border px-8 py-2 text-sm whitespace-nowrap">${i}</td>
                        <td class="border px-8 py-2 text-sm whitespace-nowrap">${update.orgName}</td>
                        <td class="border px-8 py-2 text-sm whitespace-nowrap">${update.dateOfMoU}</td>
                        <td class="border px-8 py-2 text-sm whitespace-nowrap">${update.validity}</td>
      `
      ugupdates.appendChild(ugupdate)
      i++;
    })
  })
  


fetch(`${data_url}` + 'MOUs/get?visible=visible&category=indian_institutes')
.then((response) => response.json())
  .then((data) => {
    var i=1;
    const ugupdates = document.getElementById('indian_institutesData')
    data.forEach((update) => {
      const ugupdate = document.createElement('tr')
    ugupdate.innerHTML = `
    <td class="border px-8 py-2 text-sm whitespace-nowrap">${i}</td>
                        <td class="border px-8 py-2 text-sm whitespace-nowrap">${update.orgName}</td>
                        <td class="border px-8 py-2 text-sm whitespace-nowrap">${update.dateOfMoU}</td>
                        <td class="border px-8 py-2 text-sm whitespace-nowrap">${update.validity}</td>
      `
      ugupdates.appendChild(ugupdate)
      i++;
    })
  })


fetch(`${data_url}` + 'MOUs/get?visible=visible&category=industries')
.then((response) => response.json())
  .then((data) => {
    var i=1;
    const ugupdates = document.getElementById('industriesdata')
    data.forEach((update) => {
      const ugupdate = document.createElement('tr')
    ugupdate.innerHTML = `
    <td class="border px-8 py-2 text-sm whitespace-nowrap">${i}</td>
                        <td class="border px-8 py-2 text-sm whitespace-nowrap">${update.orgName}</td>
                        <td class="border px-8 py-2 text-sm whitespace-nowrap">${update.dateOfMoU}</td>
                        <td class="border px-8 py-2 text-sm whitespace-nowrap">${update.validity}</td>
      `
      ugupdates.appendChild(ugupdate)
      i++;
    })
  })