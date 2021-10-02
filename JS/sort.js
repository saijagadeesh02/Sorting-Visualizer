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

const fillSortedArray = async (start, end, nodeList) => {
    for(let i=start; i<end; i++){
        nodeList[i].style.backgroundColor = 'green';
        // nodeList[i].style.transition = '0.2s ease-in-out';
        await makeSleep()
    }
}

export { bubbleSort, insertionSort };