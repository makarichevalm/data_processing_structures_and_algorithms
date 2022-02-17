let res = document.getElementById('shell_results');
let mass = document.getElementById('shell_mass');
let arr = [];
let size = 20;
function sort() {
    for (let i = 0; i < size; i++) {
        arr[i] = Math.floor(Math.random() * (100 - 10)) + 10; //Максимум не включается, минимум включается 10-99
    }
    console.log('arr', arr);
    mass.rows[0].cells.innerText = '';
    for (let k = 0; k < 3; k++) {
        for (let i = 0; i <= 3; i++) {
            res.rows[k].cells[i].innerText = '';
        }
    }
    for (let i = 0; i < size; i++) {
        mass.rows[0].cells[i + 1].innerText = arr[i];
    }
    shellSort();
}

function shellSort() {
    let i = 0;
    let t = Math.floor(Math.log2(size)) - 1;
    console.log(t);
    let h = [];
    h[t - 1] = 1; //7 3 1

    for (let i = t - 1; i > 0; i--) {
        h[i - 1] = h[i] * 2 + 1;
    }
    console.log(h);

    for (let m = 0; m < t; m++) {
        console.log(h[m]);
        for (let i = h[m]; i < size; i++) {
            let cur = arr[i];
            let j = i;
            while (j >= h[m] && cur < arr[j - h[m]]) {
                arr[j] = arr[j - h[m]];
                j -= h[m];
            }
            arr[j] = cur;
        }
        console.log(arr);
        for (let k = 0; k < size; k++) {
            res.rows[i].cells[0].innerText = 'Проход ' + (i + 1);
            res.rows[i].cells[k + 1].innerText = arr[k];
        }
        i++;
    }
}
