
// Slider operation for speed
const speedSlider = document.getElementById('mySpeed');

speedSlider.addEventListener('input', () => {
    // console.log(speedSlider.value)
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

function enableButtons(){
    let buttons = document.querySelectorAll('.btn')
    for (let i=0;i < buttons.length; i++){
        // console.log(buttons[i].disabled)
        buttons[i].disabled = false;
    }

    let rangeSlider = document.getElementById('mySize')
    rangeSlider.disabled = false
}

function disableButtons(){
    let buttons = document.querySelectorAll('.btn')
    for (let i=0;i < buttons.length; i++){
        // console.log(buttons[i].disabled)
        buttons[i].disabled = true;
    }

    let rangeSlider = document.getElementById('mySize')
    rangeSlider.disabled = true
}


function makeSleep(sleep_time=null){
    if (sleep_time === null)
        sleep_time = (1/speedSlider.value)*7000
    return new Promise((resolve,reject) => {
        (setTimeout(()=>{
            resolve();
        },sleep_time))
    })
}

export {makeSleep, swap, getInteger, enableButtons, disableButtons};