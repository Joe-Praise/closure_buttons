/*
// Method 1
// Shitty Way of doing it

let increaseBtn = document.getElementById("increaseBtn");
let reduceBtn = document.getElementById("reduceBtn");
let resetBtn = document.getElementById("resetBtn");
let counter = document.getElementById("counter");

let count = 0;
counter.innerHTML= count;
const myCounter = (function (){
    function changeCount(){
        increaseCount()
        reduceCount()
        resetCount()
    }
    return changeCount;
})();

myCounter();
function increaseCount(){  
    increaseBtn.onclick = ()=>{
        count++;
        counter.innerHTML = count;
    }
}

function reduceCount(){
    reduceBtn.onclick = ()=>{
        count--;
        counter.innerHTML = count;
    }
}

function resetCount(){
    resetBtn.onclick = ()=>{
        count=0;
        counter.innerHTML = count;

    }
}
*/

/*
// Method 2
// Almost a pure fuction, but it maipulates the DOM which makes it an impure function
const myCounter = (function (){
    let count = 0;
    let counter = document.getElementById("counter");
    counter.innerHTML = count;
    function generalCount(val){
      count += val;
    }
  
    return {
      increment() {
        generalCount(1);
        counter.innerHTML = count;
      },
  
      decrement() {
        if(count <= 0){
            generalCount(0);
            counter.innerHTML = count;
        }else{
            generalCount(-1);
            counter.innerHTML = count;
        }
      },
  
      reset() {
        count = 0;
        counter.innerHTML = count;
        return count;
      }
    }
  })();
  
  let increaseBtn = document.getElementById("increaseBtn");
  let decreaseBtn = document.getElementById("deceraseBtn");
  let resetBtn = document.getElementById("resetBtn");
  
  increaseBtn.onclick = () => {
    myCounter.increment();
  };
  
  decreaseBtn.onclick = () => {
    myCounter.decrement();
  };
  
  resetBtn.onclick = () => {
    myCounter.reset();
  };
*/

// closure practice
//   function outer(){
//     const x = 7;
//     if(Math.random() > 0.5){
//         const y = 12;
//         return function (){
//             const e = 14;
//             return ()=> console.log(x, y, e);
//         }
//     }
//   }

//   outer()()();

const count = (function (){
    let count = 0;
    let counter = document.getElementById("counter");
    counter.innerHTML = count;

    function increaseCount(){
        count++;
        counter.innerHTML = count;
    }

    function decreaseCount(){
        if(count <=0){
            count = 0;
            counter.innerHTML = count;
        }else{
            count--;
            counter.innerHTML = count;
        }
    }

    function resetCount(){
        count= 0;
        counter.innerHTML = count;
    }

    return{
        increaseCount,
        decreaseCount,
        resetCount,
    }
})();

let increaseBtn = document.getElementById("increaseBtn");
let decreaseBtn = document.getElementById("deceraseBtn");
let resetBtn = document.getElementById("resetBtn");

increaseBtn.onclick = () => {
    count.increaseCount();
};
  
decreaseBtn.onclick = () => {
    count.decreaseCount();
};
  
resetBtn.onclick = () => {
    count.resetCount();
};


// functional programming
function formalGreeting(){
    alert("How are you doing?");
    // console.log("How are you doing?");
}

function casualGreeting(){
    alert("What's up fam?")
    // console.log("What's up fam?");
}

function greetings(type, greetFormal, greetCasual){
    if(type === "formal"){
        greetFormal()
    }else if(type === "casual"){
        greetCasual()
    }
}

// greetings("casual", formalGreeting, casualGreeting);