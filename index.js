

const screen = document.querySelector('.screen');
const barFragments = document.createDocumentFragment();
function createRandomElements(size) {
    screen.innerHTML = ``;
    for (let i = 0; i < size; i++) {
        let bar = document.createElement('div');
        bar.style.height = `${Math.floor(Math.random()*95 + 5)}%`;
        bar.style.width = "3%";
        bar.style.backgroundColor = 'black';
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
    if (event.target.className === "bubble-sort")
        bubbleSort(screen.childNodes)
}

coreButtons.addEventListener('click', handleSortClick);

// Slider operations
const sizeSlider = document.getElementById('mySize');

sizeSlider.addEventListener('input', () => {
    createRandomElements(sizeSlider.value)
})

function bubbleSort(nodeList) {
    const totalLen = nodeList.length
    for (let i=0; i<totalLen; i++) {
        for (let j=i+1; j<totalLen; j++){
            if (getInteger(nodeList[i]) > getInteger(nodeList[j]))
                swap(i, j, nodeList)
        }
    }
}

function getInteger(node) {
    return parseInt(node.style.height)
}

function swap(i, j, nodeList){
    let temp = nodeList[j].cloneNode()
    nodeList[j] = nodeList[i].cloneNode()
    nodeList[i] = temp.cloneNode()
}