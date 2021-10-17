import { bubbleSort, insertionSort, selectionSort, quickSort, mergeSort } from './sort.js'
import { disableButtons, enableButtons } from './utils.js';

const screen = document.querySelector('.screen');
const coreButtons = document.querySelector('.header');
coreButtons.addEventListener('click', handleSortClick);
// Slider operation for size
const sizeSlider = document.getElementById('mySize');

const sortContainer = {
    'bubble-sort' : bubbleSort,
    'insertion-sort' : insertionSort,
    'selection-sort' : selectionSort,
    'quick-sort' : quickSort,
    'merge-sort' : mergeSort
}

function createRandomElements(size) {
    const barFragments = document.createDocumentFragment();
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

async function handleSortClick(event) {
    if (event.target.nodeName.toLowerCase() !== "button")
        return;
    
    let btnClicked = event.target.className.split(' ')[0]
    let btnTag = document.querySelector(`.${btnClicked}`)
    btnTag.style.backgroundColor = 'grey';
    
    disableButtons()
    if (btnClicked === "quick-sort")
        await sortContainer[btnClicked](0, screen.childNodes.length, [...screen.childNodes])
    else if (btnClicked === "merge-sort")
        await sortContainer[btnClicked](0, screen.childNodes.length-1, [...screen.childNodes])
    else
        await sortContainer[btnClicked]([...screen.childNodes])
    btnTag.style.backgroundColor = 'white';
    enableButtons()
}

sizeSlider.addEventListener('input', () => {
    createRandomElements(sizeSlider.value)
})

createRandomElements(10);
