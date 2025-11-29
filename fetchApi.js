async function accessdata(){
    let apidata = await fetch('https://jsonplaceholder.typicode.com/comments')
    let resdata = await apidata.json()
    let em = resdata.map((e)=>{return e.id})

    console.log(em);
    
    
}

accessdata()