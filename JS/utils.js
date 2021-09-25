
// Slider operation for speed
const speedSlider = document.getElementById('mySpeed');

speedSlider.addEventListener('input', () => {
    console.log(speedSlider.value)
})


function getInteger(node) {
    return parseInt(node.style.height)
}

function swap(i, j, nodeList){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            [nodeList[i].style.height,nodeList[j].style.height] =  [nodeList[j].style.height,nodeList[i].style.height];
            [nodeList[i].innerText,nodeList[j].innerText] =  [nodeList[j].innerText,nodeList[i].innerText];
            resolve();
        }, (1/speedSlider.value)*7000);
    })
}

function makeSleep(){
    return new Promise((resolve,reject) => {
        (setTimeout(()=>{
            resolve();
        },(1/speedSlider.value)*7000))
    })
}

export {makeSleep, swap, getInteger};