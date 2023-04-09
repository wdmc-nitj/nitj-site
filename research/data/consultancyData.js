let data_url = "https://wdmc-vsj1.onrender.com/";
fetch(`${data_url}` + 'research/consultancies/year?startYear=2015')
.then((response) => response.json())
  .then((data) => {
    console.log(data)
    const ugupdates = document.getElementById('consultancyData')
    var i=1;
    data.forEach((update) => {
      const ugupdate = document.createElement('tr')
    ugupdate.innerHTML = `
    <td class="border px-8 py-2 text-sm whitespace-nowrap">${i}</td>
    <td class="border px-8 py-2 text-sm   ">${update.facultyName}</td>
    <td class="border px-8 py-2 text-sm   ">${update.clientOrg}</td>
    <td class="border px-8 py-2 text-sm   ">${update.title}</td>
    <td class="border px-8 py-2 text-sm   ">${update.amountDigits}</td>
    <td class="border px-8 py-2 text-sm   ">${update.amountWords}</td>
      `
      ugupdates.appendChild(ugupdate)
      i++;
    })
  })