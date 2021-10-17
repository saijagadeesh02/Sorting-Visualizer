import { bubbleSort, insertionSort, selectionSort, quickSort, mergeSort } from './sort.js'


const screen = document.querySelector('.screen');
const coreButtons = document.querySelector('.header');
coreButtons.addEventListener('click', handleSortClick);
// Slider operation for size
const sizeSlider = document.getElementById('mySize');

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

function handleSortClick(event) {
    if (event.target.nodeName.toLowerCase() !== "button")
        return;
    if (event.target.className.split(' ')[0] === "bubble-sort")
        bubbleSort([...screen.childNodes])
    if (event.target.className.split(' ')[0] === "insertion-sort")
        insertionSort([...screen.childNodes])
    if (event.target.className.split(' ')[0] === "selection-sort")
        selectionSort([...screen.childNodes])
    if (event.target.className.split(' ')[0] === "quick-sort")
        quickSort(0, screen.childNodes.length, [...screen.childNodes])
    if (event.target.className.split(' ')[0] === "merge-sort")
        mergeSort(0, screen.childNodes.length-1, [...screen.childNodes])
}

sizeSlider.addEventListener('input', () => {
    createRandomElements(sizeSlider.value)
})

createRandomElements(10);
