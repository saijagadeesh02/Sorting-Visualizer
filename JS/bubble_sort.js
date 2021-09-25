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
}

export { bubbleSort };