async function showLink(){
    let type = document.getElementById("type").value;
    let subtype = document.getElementById("subtype").value;

    await fetch(url,{
        method:'GET',
        headers:{
            'Content-Type':'application/json'
        }
    }).then((res)=>{
        res.json().then((data)=>{
            let tabledata=data[`${type}`][`${subtype}`];

            let table=document.getElementById('data');
            table.innerHTML='';

            let tr=document.createElement('tr');
            let th1=document.createElement('th');
            let th2=document.createElement('th');
            let th3=document.createElement('th');

            th1.innerHTML='Name';
            th2.innerHTML='Link';
            th3.innerHTML='Action';

            tr.appendChild(th1);
            tr.appendChild(th2);
            tr.appendChild(th3);
            table.append(tr);
            
            for(let i=0;i<tabledata.length;i++){
                let tr=document.createElement('tr');
                let td=document.createElement('td');
                td.innerHTML=tabledata[i].name;
                
                let td1=document.createElement('td');
                td1.innerHTML=tabledata[i].link;

                let td2=document.createElement('td');
                td2.innerHTML=`<button onclick="deleteLink(this.id)" id='${tabledata[i].id}' >Delete</button>`;

                tr.appendChild(td);
                tr.appendChild(td1);
                tr.appendChild(td2);
                table.appendChild(tr);
            }
        })
    });
} 
