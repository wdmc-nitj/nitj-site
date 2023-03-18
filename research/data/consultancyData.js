
fetch('https://teamd.onrender.com/research/consultancies/groupByYear')
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