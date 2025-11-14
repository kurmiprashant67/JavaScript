/*         time function
----------- time functin thre are 2 type---------------

1-> setInterval( functin,timer)---------> this function work contine for given time;
2-> setTimelout( function,timer)-------->this function only work one time;


*/
//setInterval(()=>{document.write("working   ")},3000)

let btn = document.querySelector('#btn')
var vl=0
let st

btn.addEventListener('click',()=>{
  st=  setInterval(()=>{
        document.querySelector('#valuee').textContent=++vl
    },10)
})


let btn1 = document.querySelector('#btn1')
btn1.addEventListener('click',()=>{
    clearInterval(st)
})

let reset = document.querySelector('#reset')
document.addEventListener('#reset').textContent=""
})
