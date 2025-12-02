

async function accessdata(){
    let apidata = await fatch('https://jsonplaceholder.typicode.com/posts');
    let resdata = await apidata.json()

    let finaldata = resdata.map((e)=>`
    
    <tr> 
   <td> ${e.id} </td>
   <td> ${e.title} </td>
   <td> ${e.body} </td>
    
    
    </tr>
    
    `).json("")

    document.querySelector('#showdata').innerHTML= finaldata

}


accessdata()