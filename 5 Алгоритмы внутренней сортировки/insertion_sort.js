let res = document.getElementById('insert_results');
let mass = document.getElementById('insert_mass');
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
    insertionSort();
}
function insertionSort() {
    for (let i = 1; i < size; i++) {
        let t = arr[i];
        let j = i - 1;
        while (j >= 0 && t < arr[j]) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = t;
        console.log(arr);
        for (let k = 0; k < size; k++) {
            res.rows[i - 1].cells[0].innerText = 'Проход ' + i;
            res.rows[i - 1].cells[k + 1].innerText = arr[k];
        }
    }
}
