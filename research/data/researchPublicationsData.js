let data_url = "https://wdmc-vsj1.onrender.com/";
const loop = function (auths, authsLink) {
  let loopdata = "";
  for (let i = 0; i < auths.length; i++) {
    loopdata += `<a href="${authsLink[i]}" target="_blank">${auths[i]} </a> `;
  }
  console.log(loopdata);
  return loopdata;
};

fetch(`${data_url}` + 'research/publications/citedResearches/top10')
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const ugupdates = document.getElementById("top10");
    var i = 1;
    data.forEach((update) => {
      var auths = [];
      var authsLink = [];
      update.authors.forEach((auth) => {
        auths.push(auth.name);
        authsLink.push(auth.link);
      });

      const ugupdate = document.createElement("tr");
      ugupdate.innerHTML = `
                    <td scope="row" class="py-4 px-6 text-gray-900 dark:text-white">
                        <a href="${update.document.link}">${
        update.document.name
      }</a>
                    </td>
              
      
                    <td class="py-4 px-6">
                    ${loop(auths, authsLink)}
</td>
                    <td class="py-4 px-6">${update.year}</td>
                    <td class="py-4 px-6">
                        <a href="${update.source.link}">${
        update.source.name
      }</a>
                    </td>
                    <td class="py-4 px-6">${update.cites.number}</td>

                  
    
      `;
      ugupdates.appendChild(ugupdate);
      i++;
    });
  });

fetch(
  `${data_url}` + 'research/publications/refereedResearches/get?visible=visible'
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const ugupdates = document.getElementById("referredPublicationData");
    var i = 1;
    data.forEach((update) => {
      const ugupdate = document.createElement("ol");
      ugupdate.innerHTML = `
    <li class="mb-2">
                <div class="w-[80%] mx-auto bg-slate-50 rounded-r-md shadow-lg px-2 py-3">${update.description}
                    <!-- <br> -->
                    <a href="${update.link}" class="text-accent" target="_black"> <span><i
                                class="fa-solid fa-arrow-up-right-from-square"></i></span> </a>
                </div>
            </li>
      `;
      ugupdates.appendChild(ugupdate);
      i++;
    });
  });
