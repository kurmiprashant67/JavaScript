async function accessdata(){
    let apidata = await fetch('https://jsonplaceholder.typicode.com/comments')
    let resdata = await apidata.json()
   // let em = resdata.map((e)=>{return e.id})
  //console.log(em);

  //============== opne wether api(for more api link)================= 

  let finaldata = resdata.map((e)=>`



  <tr>
  <td> ${e.id} </td>
   <td> ${e.name} </td>
    <td> ${e.email} </td>

  `).join("")
    
    document.querySelector('#showdata').innerHTML = finaldata
}

accessdata()