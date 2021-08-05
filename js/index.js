
var today = new Date();

for (let index = 0; index < 3456; index++) {
    var theDiv = document.getElementById("container");
    var content = document.createElement('div');
    content.classList.add("triangle")
    theDiv.appendChild(content);

}

let triangleList = document.getElementsByClassName('triangle');
let hoursPart = [];
let minutesPart = [];
let secondsPart = [];
for (let x = 2; x < 70; x++) {
    for (let y = 10; y < 38; y++) {
        let idx = y + (x * 48);
        if (x >= 0 && x < 24) {
            hoursPart.push(triangleList[idx]);
        }
        else if (x >= 26 && x < 48) {
            minutesPart.push(triangleList[idx]);
        }
        else if (x >= 50 && x < 72) {
            secondsPart.push(triangleList[idx]);
        }

    }

}


let counter = 0;

// minutesPart.forEach(element => {
//     element.classList.add("active");
// });
// secondsPart.forEach(element => {
//     element.classList.add("active");
// });
setInterval(() => {
    today = new Date();
    let hour = today.getHours();
    let  minute = today.getMinutes();
    let second= today.getSeconds();
    for (let index = 0; index < triangleList.length; index++) {
        triangleList[index].classList.remove("active");
        
    }
    numbers[hour].forEach(element => {
        hoursPart[element].classList.add("active");
        
    });
    numbers[minute].forEach(element => {
        minutesPart[element].classList.add("active");
        
    });
    
    numbers[second].forEach(element => {
        secondsPart[element].classList.add("active");
        
    });


}, 1000);