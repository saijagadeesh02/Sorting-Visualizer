import { makeSleep, swap, getInteger } from './utils.js'

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
    fillSortedArray(0, nodeList.length, nodeList)

}


// Insertion Sort
const insertionSort = async (nodeList) => {
    
    for(let i=1; i<nodeList.length; i++){
        let cur_idx = i;let cur_sorted_idx = i
        for(let j=i-1;j>=0;j--){
            if (getInteger(nodeList[j]) > getInteger(nodeList[cur_idx])){
                nodeList[j].style.backgroundColor = 'red';nodeList[cur_idx].style.backgroundColor = 'white';
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
        nodeList[i].style.backgroundColor = 'white';
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
    return array;
}

const quickSort = async (start, end, nodeList) => {
    if (start < end){
        let p = await partitionArray(start, end, nodeList);
        console.log(p)
        nodeList[p].style.backgroundColor = 'green';
        quickSort(start, p, nodeList)
        quickSort(p+1, end, nodeList)
    }
}

const partitionArray = async (start, end, nodeList) => {
    let cur_pivot = end-1
    nodeList[cur_pivot].style.backgroundColor = 'red';
    let i = start - 1
    for (let j=start; j<end; j++){
        if (getInteger(nodeList[j]) < getInteger(nodeList[cur_pivot])){
            i = i+1
            await swap(i, j, nodeList)
            await makeSleep()
        }
    }
    nodeList[cur_pivot].style.backgroundColor = 'blue';
    await swap(i+1, cur_pivot, nodeList)
    await makeSleep()
    return i+1;
}

const fillSortedArray = async (start, end, nodeList) => {
    for(let i=start; i<end; i++){
        nodeList[i].style.backgroundColor = 'green';
        // nodeList[i].style.transition = '0.2s ease-in-out';
        await makeSleep()
    }
}

export { bubbleSort, insertionSort, selectionSort, quickSort };