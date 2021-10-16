let a = 10;

function fun1(){
    let b = 20;
        return a + b;  
    
}

function one() {   
    let c = 1;
    function second() { 
        let d = 5;
    return c + d; 
    }
return second();       
}


console.log(fun1())
console.log(one())

let meal = (mealOfDay)=>{
    console.log(`Let's have a ${mealOfDay}`)
}

let choose = (time, fn) => {
    if(time < 11){
        fn("breakfast")
    }else if(time > 11 && time < 17){
        fn("lunch")
    }else{
        fn("dinner")
    }
}

choose(17, meal)

let myFunction=()=>{
    return ()=>{
        console.log("hello")
    }
}

console.log(myFunction())

console.log("----------challenge 1------------------------")
function hello(){
    return "Hello Code Nation"
}

function fiveTimes(fn){
    for (let i = 0; i < 5; i++) {
    console.log(fn)
        
    }
}

console.log(hello())
console.log(fiveTimes(hello()))
console.log("----------challenge 2------------------------")

function sum(a,b){
    return a + b;
}

function higherSum(fun, num1, num2){
    let total = 0;
    for (let i = 0; i < 5; i++) {
    const result =(fun + num1 + num2)*i;
    total =+ result;
    } 
return total ;
}

console.log(higherSum(sum(1,2),3,4))

console.log("----------challenge 3------------------------")

const array = [
    1,2,3,4,5
]
console.log(array.map(x => x * 3))
console.log("----------challenge 4------------------------")
const multiply = (a,b) =>{
    return a * b
}
const add = (a,b)=> {
    return a + b
}
const divide = (a,b)=>{
    return a / b
}
const subtract = (a,b)=>{
    return a - b
}
const doMath = (num1)=>{
    return (num2,fn)=>{
        return fn(num1,num2)
    }
}

