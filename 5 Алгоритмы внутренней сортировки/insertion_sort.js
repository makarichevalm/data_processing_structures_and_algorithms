//Прямой выбор
let res = document.getElementById('insert_results');
let mass = document.getElementById('insert_mass');
let size = 10;
let arr = [];
function sort() {
    for (let i = 0; i < size; i++) {
        arr[i] = Math.floor(Math.random() * (100 - 10)) + 10; //Максимум не включается, минимум включается 10-99
    }
    res.innerHTML = '';
    mass.innerHTML = '';
    console.log('arr', arr);
    for (let i = 0; i < size; i++) {
        mass.innerHTML += arr[i] + '  ';
    }
    insertionSort();
}
function insertionSort() {
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
        for (let k = 0; k < size; k++) {
            res.innerHTML += arr[k] + '    ';
        }
        res.innerHTML += '<br>';
    }
}
