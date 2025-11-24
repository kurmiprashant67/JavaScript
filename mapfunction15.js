/*


//================deStructure of array===========




let students=[
    {
        stname: "deepak",
        stage:23
    },
    {
        stname:"aniket",
        stage:24
    },
    {
        stname:"jay",
        stage:26
    },
    {
         stname:"jay",
        stage:50
    },
     {
         stname:"atul",
        stage:70
    },
    {
         stname:"prashant",
        stage:47
    }
]
console.log(students);

//students.push({stname:"radhe",stage:32})
//console.log(students);


//students.pop()
//console.log(students);

//let std2 =students.splice(0,1)
//console.log(students);
//==========================================map function===================

let newAr = students.map((e)=>{return e.stname})
console.log(newAr);

//=========================filter fUNCTION=============

let newstage = students.filter((e)=>{return e.stage>=24 && e.stage<=50})
console.log(newstage);

*/

let store =[
        {
        sname:"store-1",
        sAdd:"indp",
        storeRe:40000
    
        },
        {
        sname:"store-2",
        sAdd:"mp-nagar",
        storeRe:5000000
    
        },{
        sname:"store-3",
        sAdd:"visal",
        storeRe:200000
    
        },{
        sname:"store-4",
        sAdd:"indp",
        storeRe:30000000
    
        },{
        sname:"store-5",
        sAdd:"mp-nagar",
        storeRe:8000000
        },

]

let max = store.filter((a)=>{return a.sAdd=="indp" && a.storeRe>=1000000});
console.log(max);


