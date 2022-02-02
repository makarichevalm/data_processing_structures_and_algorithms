let BubbleTime = document.getElementById('time_bubble'); //время сортировки обменом
let BubbleNumComps = document.getElementById('comp_bubble'); //число сравнений для сортировки обменом
let BubbleNumSwaps = document.getElementById('swap_bubble'); //число перестановок для сортировки обменом

let SelectTime = document.getElementById('time_select'); //сортировка выбором
let SelectNumComps = document.getElementById('comp_select');
let SelectNumSwaps = document.getElementById('swap_select');

let InsertTime = document.getElementById('time_insert'); // сортировка включением(вставками)
let InsertNumComps = document.getElementById('comp_insert');
let InsertNumSwaps = document.getElementById('swap_insert');

let ShellTime = document.getElementById('time_shell');
let ShellNumComps = document.getElementById('comp_shell');
let ShellNumSwaps = document.getElementById('swap_shell');

let CountTime = document.getElementById('time_count');
let CountNumComps = document.getElementById('comp_count');
let CountNumSwaps = document.getElementById('swap_count');

let arr = [];
function perform() {
    let size = document.getElementById('num_arr').value;
    console.log(size);
    if (size == '') {
        alert('Введите размерность массива!');
        return;
    }
    for (let i = 0; i < size; i++) {
        arr[i] = Math.floor(Math.random() * (100 - 10)) + 10;
    }
    let res = bubbleSort(arr, size);
    BubbleNumComps.value = res[0];
    BubbleNumSwaps.value = res[1];
    BubbleTime.value = res[2];
    console.log(res);
}
function bubbleSort(arr, size) {
    let start = performance.now();
    let k = 0;
    let l = 0; //сравнения
    for (let i = 0; i < size; i++) {
        //let flag = true;
        for (let j = 0; j < size - i - 1; j++) {
            //size-i-1: -1 т.к. возможен выход за границу массива при j+1=10 [0...9]
            l++; //сравнения
            if (arr[j] > arr[j + 1]) {
                k++; //перестановки
                let t = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = t;
                //flag = false;
            }
        }
        //if (flag) {
        // break;
        // }
    }
    let time = performance.now() - start;
    return [l, k, time];
}
function insertionSort(arr, size) {
    for (let i = 2; i < size; i++) {
        //в условии i=1
        let t = arr[i];
        let j = i - 1;
        while (j > 0 && t < arr[j]) {
            //в условии j>=0
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = t;
        console.log(arr);
    }
}
