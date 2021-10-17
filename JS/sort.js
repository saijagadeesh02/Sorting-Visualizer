import { makeSleep, swap, getInteger } from './utils.js'

// Bubble sort
async function bubbleSort(nodeList){

    for(let i = 0 ; i < nodeList.length ; i++){
        for(let j = 0 ; j < nodeList.length - i - 1; j++){
            if(getInteger(nodeList[j]) > getInteger(nodeList[j+1])){
                nodeList[j].style.backgroundColor = 'coral';nodeList[j+1].style.backgroundColor = 'coral';
                await swap(j, j+1, nodeList);
                await makeSleep()
                nodeList[j].style.backgroundColor = 'blue';nodeList[j+1].style.backgroundColor = 'blue';
            }
        }
        nodeList[nodeList.length - i -1].style.backgroundColor = 'rgb(231, 103, 103)';
    }
    fillSortedArray(0, nodeList.length, nodeList)

}


// Insertion Sort
const insertionSort = async (nodeList) => {
    
    for(let i=1; i<nodeList.length; i++){
        let cur_idx = i;let cur_sorted_idx = i
        for(let j=i-1;j>=0;j--){
            if (getInteger(nodeList[j]) > getInteger(nodeList[cur_idx])){
                nodeList[j].style.backgroundColor = 'red';nodeList[cur_idx].style.backgroundColor = 'coral';
                await swap(j, cur_idx, nodeList)
                await makeSleep()
                nodeList[j].style.backgroundColor = 'red';nodeList[cur_idx].style.backgroundColor = 'blue';
                cur_idx = j
            }
            else{
                break;
            }
        }
        await fillSortedArray(0, cur_sorted_idx+1, nodeList)
        
    }
}

// Selection sort
const selectionSort = async (nodeList) => {
    for(let i=0; i<nodeList.length; i++){
        let cur_min = i;
        nodeList[i].style.backgroundColor = 'coral';
        for(let j=i+1; j<nodeList.length; j++){
            if (getInteger(nodeList[j])  < getInteger(nodeList[cur_min])){
                cur_min = j;
            }
        }
        nodeList[cur_min].style.backgroundColor = 'red';
        await swap(i, cur_min, nodeList)
        await makeSleep()
        nodeList[i].style.backgroundColor = 'blue';
        nodeList[cur_min].style.backgroundColor = 'blue';
        await fillSortedArray(i, i+1, nodeList)
    }
    return nodeList;
}

const quickSort = async (start, end, nodeList) => {
    if (start < end){
        let p = await partitionArray(start, end, nodeList);
        nodeList[p].style.backgroundColor = ' #80ffbf';
        await quickSort(start, p, nodeList)
        await quickSort(p+1, end, nodeList)
    }
}

const partitionArray = async (start, end, nodeList) => {
    let cur_pivot = end-1;
    nodeList[cur_pivot].style.backgroundColor = 'red';
    let i = start - 1;
    for (let j=start; j<end; j++){
        if (getInteger(nodeList[j]) < getInteger(nodeList[cur_pivot])){
            i = i+1;
            nodeList[j].style.backgroundColor = 'coral';nodeList[i].style.backgroundColor = 'coral';
            await swap(i, j, nodeList)
            await makeSleep()
            nodeList[j].style.backgroundColor = 'blue';nodeList[i].style.backgroundColor = 'blue';
        }
    }
    await swap(i+1, cur_pivot, nodeList)
    await makeSleep()
    nodeList[cur_pivot].style.backgroundColor = 'blue';
    return i+1;
}

async function merge(bars, left, mid, right) {
    let temp_bars = [];
    let i = left,
      j = mid + 1,
      k = left;
  
    for (let itr1 = left; itr1 <= mid; itr1++) {
      bars[itr1].style.backgroundColor = `deepskyblue`;
    }
    for (let itr2 = mid + 1; itr2 <= right; itr2++) {
      bars[itr2].style.backgroundColor = `coral`;
    }
  
    while (i <= mid && j <= right) {
      if (parseInt(bars[i].style.height) < parseInt(bars[j].style.height)) {
        temp_bars.push(parseInt(bars[i].style.height));
        i++;
      } else {
        temp_bars.push(parseInt(bars[j].style.height));
        j++;
      }
    }
    while (i <= mid) {
      temp_bars.push(parseInt(bars[i].style.height));
      i++;
    }
    while (j <= right) {
      temp_bars.push(parseInt(bars[j].style.height));
      j++;
    }
    for (let i = 0; i < temp_bars.length; i++) {
    //   await makeSleep();
    //   changeHeightOfDomBar(bars[k++], temp_bars[i]);
        bars[k].style.height = `${temp_bars[i]}%`;
        bars[k].innerText = `${temp_bars[i]}`;
        k++;
        await makeSleep();
    }
  
    for (let itr1 = left; itr1 <= mid; itr1++) {
      bars[itr1].style.backgroundColor = ` #80ffbf`;
    }
    for (let itr2 = mid + 1; itr2 <= right; itr2++) {
      bars[itr2].style.backgroundColor = ` #80ffbf`;
    }
}

async function mergeSort(left, right, bars) {
    if (left >= right) return;
    let mid = Math.floor((left + right) / 2);
    await mergeSort(left, mid, bars);
    await mergeSort(mid + 1, right, bars);
    await merge(bars, left, mid, right);
}

const fillSortedArray = async (start, end, nodeList) => {
    for(let i=start; i<end; i++){
        nodeList[i].style.backgroundColor = ' #80ffbf';
        nodeList[i].style.transition = '0.2s ease-in-out';
        await makeSleep()
    }
}

export { bubbleSort, insertionSort, selectionSort, quickSort, mergeSort };