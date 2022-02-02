let mass = document.getElementById('select_mass');
let res = document.getElementById('select_results');
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
    selectionSort();
}
function selectionSort() {
    //let max = arr[0];
    //let ind = 0;
    for (let k = size - 1; k > 0; k--) {
        // в массиве больше 1 неотсортированного элемента
        let max = 0;
        for (let j = 0; j <= k; j++) {
            //j<=k если убрать = то элемент??
            if (arr[j] > arr[max]) {
                max = j;
                //ind = j;
            }
        }
        console.log(max, arr[k]);
        //arr[ind] = arr[k];
        //arr[k] = max;
        let t = arr[k];
        arr[k] = arr[max];
        arr[max] = t;
        console.log(arr);
        for (let i = 0; i < size; i++) {
            res.innerHTML += arr[i] + '  ';
        }
        res.innerHTML += '<br>';
    }
}
