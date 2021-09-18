

const screen = document.querySelector('.screen');
const barFragments = document.createDocumentFragment();
function createRandomElements(size) {
    screen.innerHTML = ``;
    for (let i = 0; i < size; i++) {
        let bar = document.createElement('div');
        let randomNum = Math.floor(Math.random()*95 + 5)
        bar.style.height = `${randomNum}%`;
        if (size < 40){
            bar.innerText = `${randomNum}`;
            bar.style.textAlign = 'center';
            bar.style.color = 'black';
        }
        bar.style.width = "3%";
        bar.style.backgroundColor = 'blue';
        bar.style.transition = '0.5s';
        bar.style.marginLeft = size > 77 ? "0.2%" : "0.5%";
        barFragments.append(bar);
    }
    screen.append(barFragments)
}

createRandomElements(6);

const coreButtons = document.querySelector('.header');

function handleSortClick(event) {
    if (event.target.nodeName.toLowerCase() !== "button")
        return;
    if (event.target.className.split(' ')[0] === "bubble-sort")
        bubbleSort([...screen.childNodes])
}

coreButtons.addEventListener('click', handleSortClick);

// Slider operation for size
const sizeSlider = document.getElementById('mySize');

sizeSlider.addEventListener('input', () => {
    createRandomElements(sizeSlider.value)
})

// Slider operation for speed
const speedSlider = document.getElementById('mySpeed');

speedSlider.addEventListener('input', () => {
    console.log(speedSlider.value)
})

// Bubble sort
async function bubbleSort(nodeList){

    for(let i = 0 ; i < nodeList.length ; i++){
        for(let j = 0 ; j < nodeList.length - i - 1; j++){
            if(getInteger(nodeList[j]) > getInteger(nodeList[j+1])){
                nodeList[j].style.backgroundColor = 'white';nodeList[j+1].style.backgroundColor = 'white';
                await swap(j, j+1, nodeList);
                await makeSleep()
                nodeList[j].style.backgroundColor = 'blue';nodeList[j+1].style.backgroundColor = 'blue';
            }
        }
        nodeList[nodeList.length - i -1].style.backgroundColor = 'rgb(231, 103, 103)';
    }
}

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
