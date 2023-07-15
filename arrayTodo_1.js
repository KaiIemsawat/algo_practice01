let arr1 = [5, 7, 2, 3];

function pushFront(arr, num) {
    let tempArr = [];
    tempArr.push(num);
    for (let i = 0; i < arr.length; i++) {
        tempArr[i + 1] = arr[i];
    }
    return tempArr;
}
console.log(pushFront(arr1, 8));
// ------------------

let arr2 = [0, 5, 10, 15];
function popFront(arr) {
    let temp1 = arr[0];
    let temp2 = [];
    for (let i = 1; i < arr.length; i++) {
        temp2[i - 1] = arr[i];
    }
    console.log(temp2);
    return temp1;
}
console.log(popFront(arr2));
// ------------------

let arr3 = [100, 200, 5];
function insertAt(arr, num1, num2) {
    let temp = [];
    let j = 0;
    for (let i = 0; i < arr.length; i++) {
        if (j === num1) {
            temp[j] = num2;
            j++;
        }
        temp[j] = arr[i];
        j++;
    }
    return temp;
}
console.log(insertAt(arr3, 2, 311));
// ------------------

let arr4 = [1000, 3, 204, 77];
function removeAt(arr, num) {
    let temNum;
    let temArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (i !== num) {
            temArr.push(arr[i]);
        } else {
            temNum = arr[i];
        }
    }
    console.log(temArr);
    return temNum;
}
console.log(removeAt(arr4, 1));
// ------------------
