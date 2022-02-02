let res = document.getElementById('shell_results');
let mass = document.getElementById('shell_mass');
let arr = [];
let size = 20;
function sort() {
    for (let i = 0; i < size; i++) {
        arr[i] = Math.floor(Math.random() * (100 - 10)) + 10; //Максимум не включается, минимум включается 10-99
    }
    console.log(arr);
    res.innerHTML = '';
    mass.innerHTML = '';
    console.log('arr', arr);
    for (let i = 0; i < size; i++) {
        mass.innerHTML += arr[i] + '  ';
    }
    shellSort();
}
/*function shellSort() {
    let t = Math.floor(Math.log2(size)) - 1;
    console.log(t);
    let h = [];
    h[0] = 1;

    for (let i = 0; i < t - 1; i++) {
        h[i + 1] = h[i] * 2 + 1;
    }
    console.log(h);
}*/
function shellSort() {
    let h = Math.floor(size / 2);
    while (h >= 1) {
        for (let i = h; i < size; i++) {
            let cur = arr[i];
            let j = i;
            while (j > 0 && cur < arr[j - h]) {
                arr[j] = arr[j - h];
                j -= h;
            }
            arr[j] = cur;
        }
        h = Math.floor(h / 2);
        console.log(arr);
        for (let k = 0; k < size; k++) {
            res.innerHTML += arr[k] + '    ';
        }
        res.innerHTML += '<br>';
    }
}
