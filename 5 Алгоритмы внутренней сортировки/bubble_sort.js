let res = document.getElementById('bubble_results');
let mass = document.getElementById('bubble_mass');
let size = 10;
let arr = [];
function sort() {
    for (let i = 0; i < size; i++) {
        arr[i] = Math.floor(Math.random() * (100 - 10)) + 10; //Максимум не включается, минимум включается 10-99
    }
    console.log('arr', arr);
    mass.rows[0].cells.innerText = '';
    for (let k = 0; k < size; k++) {
        for (let i = 0; i <= size; i++) {
            res.rows[k].cells[i].innerText = '';
        }
    }
    for (let i = 0; i < size; i++) {
        mass.rows[0].cells[i + 1].innerText = arr[i];
    }
    bubbleSort();
}

function bubbleSort() {
    for (let i = 0; i < size; i++) {
        let flag = true;
        for (let j = 0; j < size - i - 1; j++) {
            //size-i-1: -1 т.к. возможен выход за границу массива при j+1=10 [0...9]
            if (arr[j] > arr[j + 1]) {
                let t = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = t;
                flag = false;
            }
        }
        if (flag) {
            break;
        }
        console.log('j= ', i, 'arr ', arr);
        for (let k = 0; k < size; k++) {
            res.rows[i].cells[0].innerText = 'Проход ' + (i + 1);
            res.rows[i].cells[k + 1].innerText = arr[k];
        }
    }
}
