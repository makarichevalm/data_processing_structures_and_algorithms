let res = document.getElementById('line_results');
let mass = document.getElementById('line_mass');
let arr = [];
let dop = [];
let size = 10;
function sort() {
    for (let i = 0; i < size; i++) {
        arr[i] = Math.floor(Math.random() * 10);
    }
    console.log(arr);
    res.innerHTML = '';
    mass.innerHTML = '';
    console.log('arr', arr);
    for (let i = 0; i < size; i++) {
        mass.innerHTML += arr[i] + '  ';
    }
    countingSort();
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
        for (let k = 0; k < size; k++) {
            res.innerHTML += arr[k] + '    ';
        }
        res.innerHTML += '<br>';
    }
}
