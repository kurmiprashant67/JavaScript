/*  // .........................fuction of array................



let person = [ "prashant", 21, "male"];
console.log(person);


// push() fuction  --> add element at index last
person.push("bhopal", "mp");
console.log(person);

//pop() fuction --> remove one element at list
person.pop()
console.log(person);

// unshift()  fuction--> add element at start

person.unshift("mr","hay")
console.log(person);

//shift() fuction ---> remove one element at start 

person.shift()
console.log(person);
----------------------------------------------------------------------------------------------------------------------------
//  slice (Start index , end index)-- it make sub array frome the given array..




let ar =["prashnat", 28, "bhopal", "india"]

let vl=ar.slice(1,3);

console.log(vl);
--------------------------------------------------------------

// splice()------------> numbar of elemnet add, numbar of element remove , then shude be go for splice;
------ for delet
splice(index valu, numbar of element)
------ for add
splice(index valu, numbar of element, add value)



let ar =["prashnat", 28, "bhopal", "india"]
 //ar.splice (1,1);
 console.log(ar);
 
 ar.splice(1,0,"patel")
 console.log(ar);
 -------------------------------------------------------------------
// spread opretor -------------- marging multipul array
-----(it is denoded by   "...")


 */
let ar1=[1,2,3,4,5]
let ar2=[6,7,8,9,10]
let ar3=[...ar1,...ar2];
console.log(ar3);
