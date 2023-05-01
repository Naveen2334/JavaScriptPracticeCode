// function si(p,r,t)
// {
//     return (p*r*t)/100;
// }
// si(10,20,30);

/*let obj = {name:"Rohit",age:23};
let obj1 = obj;
// console.log(obj1);
obj1.name = "Ashish"
console.log(obj);
let obj2 = {};
for(prop in obj) {
    obj2[prop] = obj[prop];
}
obj2.name= "Rohit";
console.log(obj2);
*/
let count = 0;
let arr = [10,20,30,5,80];
for (let i = 0; i < arr.length; i++) {
    count++;
    console.log(arr[i]);
    console.log(`Array element ${arr[i]} is of index at ${count}`);  
}
console.log(count);
for (let i = arr.length , let j = 0; j<i; j++,i--) {
    arr[j]= arr[i];
    
}







