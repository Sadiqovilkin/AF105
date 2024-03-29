const head = document.querySelector(".heading")
function getFullName(fname,surname,age,city) {
    head.innerHTML += `${fname} ${surname} is ${age} years old and lives in ${city}  <br> `
}
getFullName("ilkin","sadiqov",20,"baku")
const fullname = function(fname,surname,age,city) {
    head.innerHTML += `${fname} ${surname} is ${age} years old and lives in ${city}  <br> `
}

fullname("adil","hesenov",20,"baku")

const arrowfullname = (fname,surname,age,city)=> {
    head.innerHTML += `${fname} ${surname} is ${age} years old and lives in ${city}  <br> `
}
fullname("sahin","melikov",20,"qobustan ")




function CheckNumber(num , numarr) {
    for (let index = 0; index < numarr.length; index++) {
        if (num === numarr[index]) {
            console.log("True");
            return true
        }  
    }
    console.log("False");
    return false
}
CheckNumber(5 , [1,2,3,6,45,5])