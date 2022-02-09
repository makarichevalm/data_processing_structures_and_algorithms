let mass = document.getElementById('select_mass');
let res = document.getElementById('select_results');
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
    selectionSort();
}

function selectionSort() {
    let l = 0;
    for (let k = size - 1; k > 0; k--) {
        // в массиве больше 1 неотсортированного элемента
        let max = 0;
        for (let j = 0; j <= k; j++) {
            if (arr[j] > arr[max]) {
                max = j;
            }
        }
        //console.log(max, arr[k]);
        let t = arr[k];
        arr[k] = arr[max];
        arr[max] = t;
        //console.log(arr);
        for (let i = 0; i < size; i++) {
            res.rows[l].cells[0].innerText = 'Проход ' + (l + 1);
            res.rows[l].cells[i + 1].innerText = arr[i];
            //console.log(arr[k]);
        }
        l++;
    }
}
