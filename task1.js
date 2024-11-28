function demo(n = "john"){
    console.log(`my name is ${n}`);
    
}
demo()


// copy using spread operator
var a=[1,2,3]
var da = [...a]
 da[0] =3
 console.log(da);
 

 var arr = {name : "john",age : 31}
var da = {...arr}
 da.name="manu"
 console.log(da);
 
 var da = {...arr,name : "j"}