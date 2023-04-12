let data_url = "https://wdmc-vsj1.onrender.com";

var  CopyrightGranted=0,ComputerGranted=0,DesignGranted=0,PatentGranted=0,Patentinprocess=0,Designinprocess=0,Computerinprocess=0,Copyrightinprocess=0;


  async function helper() {
    const res = await fetch(`${data_url}` + '/research/IPRs/get?visible=visible');
    const data = await res.json();
    const iprsbody = document.getElementById('iprsbody')
    var i=1;
    data.forEach((update) => {
         if(update.grantStatus && update.iprCategory==="Design")
        {
DesignGranted++;
        }
        else if(update.grantStatus && update.iprCategory==="Patent")
        {
PatentGranted++;
        }
        else if(update.grantStatus && update.iprCategory==="Copyright")
        {
CopyrightGranted++;
        }
        else if(update.grantStatus && update.iprCategory==="Computer Software")
        {
ComputerGranted++;
        }
        else if(!update.grantStatus && update.iprCategory==="Design")
        {
Designinprocess++;
        }
        else if(!update.grantStatus && update.iprCategory==="Patent")
        {
Patentinprocess++;
        }
        else if(!update.grantStatus && update.iprCategory==="Copyright")
        {
Copyrightinprocess++;
        }
        else if(!update.grantStatus && update.iprCategory==="Computer Software")
        {
Computerinprocess++;
        }
      const iprentry = document.createElement('tr');
    //   <tr class="bg-white text-gray-900 dark:text-black"
      iprentry.classList.add("bg-white","text-gray-900","dark:text-black");
  iprentry.innerHTML = `
    <td class="border px-8 py-2 text-sm whitespace-nowrap">${i}</td>
    <td class="py-4 px-6">${update.iprTitle}</td>
                        <td class="py-4 px-6"> <span class="text-red-800">
                        ${update.grantStatus ?
                         `
                        Granted : 
                         `   
                         :
                         `
                         In Process :
                         `
                        }
                        </span>


${update.iprCategory}


${update.iprNumber ? 
        `
        No. - ${update.iprNumber}
        `
        :
        ``
        }

${update.grantYear ? 
`
 (${update.grantYear})
`
:
``
}
                        </td>
                        <td class="py-4 px-6">${update.inventorList}</td>
      `
      iprsbody.appendChild(iprentry);
      i++;
    })

    helper2();
  }


  function helper2()
  {

document.getElementById("patentgranted").innerText=PatentGranted.toString();
document.getElementById("copyrightgranted").innerText=CopyrightGranted.toString();
document.getElementById("designgranted").innerText=DesignGranted.toString();
document.getElementById("computergranted").innerText=ComputerGranted.toString();
document.getElementById("patentinprocess").innerText=Patentinprocess.toString();
document.getElementById("copyrightinprocess").innerText=Copyrightinprocess.toString();
document.getElementById("designinprocess").innerText=Designinprocess.toString();
document.getElementById("computerinprocess").innerText=Computerinprocess.toString();
  }

  helper()