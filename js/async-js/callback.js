// function greet(name) {
//     console.log(`hello ${name}`);
// }

// function greetFEClass(fn) {
//     const className = "VTE FE 2403";
//     fn(className);
// }

// greetFEClass(greet);

// let count = 0;
// const intervaild = setInterval(() => {
//     count ++;
//     console.log(`Interval count: ${count}`);
//     if (count >= 5) {
//         clearInterval(intervaild);
//         console.log('Interval stopped');
//     }
// }, 5000);
// console.log("setInterval example has been called");

function callback1() {
    console.log("first");
}

function callback2() {
    console.log("second");
}

setTimeout(callback1, 0);
console.log("second");
console.log("third");