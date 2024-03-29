// function name(params) {
//     var x = 2
//     console.log(x);
// }
// name()
 
// let x = Number(prompt("Ente your value"))
// if (x%7==0) {
//     alert(`7 ye bolunur`)
// }
// else{
//     const a=x%7
//     if (a<4) {
//         let c = x-a
//         alert(`eded ${c}-ye bolunur`)
//     }
//     else if(a>=4){
//         let c = x-a+7
//         alert(`eded ${c}-ye bolunur`)
//     }

// }

// ededin sade murekkeb olmasin yoxlamaq


// let x = Number(prompt("Ente your value"))
// let counter = 0
// if (x==0) {
//     alert("Eded ne sade nede murekkebdir")
// }
// else{
//     for (let index = 1; index < x; index++) {
//         if (x % 1 ==0 ) {
//          counter++
//         }  
//      }
//      if (counter>2) {
//          alert("Eded Murekkebdir")
//      }
//      else{
//          alert("Eded sadedir")
//      }
// }


// if (x%2===0 || x%3==0 || x%4==0 || x%5==0 || x%6==0 || x%7==0 || x%8==0 || x%9==0) {
//     alert("eded Murekkebdir")
// }
// else{
//     alert("eded sadedir")
// }


// END
let arr = [1, 'two', true, [4, 5]];

for (let i = 0; i < arr.length; i++) {
    console.log(Array.isArray(arr[i]));
}
