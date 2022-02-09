let res = document.getElementById('line_results');
let mass = document.getElementById('line_mass');
let dop_mass = document.getElementById('line_dop');
let arr = [];
let dop = [];
let size = 10;
function sort() {
    for (let i = 0; i < size; i++) {
        arr[i] = Math.floor(Math.random() * 10);
    }
    console.log('arr', arr);
    mass.rows[0].cells.innerText = '';
    dop_mass.rows[0].cells.innerText = '';
    res.rows[0].cells.innerText = '';
    for (let i = 0; i < size; i++) {
        mass.rows[0].cells[i].innerText = arr[i];
    }
    countingSort();
    for (let i = 0; i < size; i++) {
        res.rows[0].cells[i].innerText = arr[i];
    }
    for (let i = 0; i < size; i++) {
        dop_mass.rows[0].cells[i].innerText = dop[i];
    }
}
function countingSort() {
    for (let i = 0; i < size; i++) {
        dop[i] = 0;
    }
    for (let i = 0; i < size; i++) {
        dop[arr[i]] += 1;
    }
    console.log('dop', dop);
    let t = 0; //перемещение по arr
    for (let i = 0; i < size; i++) {
        //цикл для прохода по dop
        for (let j = dop[i]; j > 0; j--) {
            //цикл для уменьшения значения dop
            arr[t] = i;
            t++;
        }
        console.log(arr);
    }
}
