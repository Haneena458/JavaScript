
function task(val1,val2){
    return val1 + val2
}
console.log(task(10,5));



let a=8;
if(a % 2==0){
    console.log("number is even");
}
else
    {
        console.log("number is odd");
    }
     

for (let i=2;i<=100;i++){
    let isPrime = true;
    for (let j = 2;j<= Math.sqrt(i);j++){
        if(i % j === 0)isPrime =false;
    }
    if(isPrime)console.log(i);
    
}



let text= "hello, JavaScript is amazing";
let length = text.length;
console.log(length);



let text1= "hello, JavaScript is amazing"; 
let Upper= text1.toUpperCase();
console.log(Upper);



let text3= "hello, JavaScript is amazing";
let replace = text3.replace("amazing","awesome");
console.log(replace);



let text4= "hello, JavaScript is amazing";
let text5="!!!";
let result = text4 +" "+text5
console.log(result);

