let res = document.getElementById('bubble_results');
let mass = document.getElementById('bubble_mass');
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
        mass.innerHTML += arr[i] + '    ';
    }
    //mass.innerHTML = str;
    bubbleSort();
}

function bubbleSort() {
    //let k = 0;
    //let l = 0;
    for (let i = 0; i < size; i++) {
        //let flag = true;
        for (let j = 0; j < size - i - 1; j++) {
            //size-i-1: -1 т.к. возможен выход за границу массива при j+1=10 [0...9]
            //l++; сравнения
            if (arr[j] > arr[j + 1]) {
                //k++; перестановки
                let t = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = t;
                //flag = false;
            }
        }
        //if (flag) {
        // break;
        // }
        console.log('j= ', i, 'arr ', arr);
        for (let k = 0; k < size; k++) {
            res.innerHTML += arr[k] + '    ';
        }
        res.innerHTML += '<br>';
    }
    //console.log(k, l);
}
//сортировка продолжается даже когда все отсортировано уже: устранено с помощью break,
/*function bubbleSort() {
    for (let i = size - 1; i > 0; i--) {
        //let flag = true;
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                let t = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = t;
                //flag = false;
            }
        }
        // if (flag) {
        //break;
        // }
        console.log('j= ', i, 'arr ', arr);
        for (let k = 0; k < size; k++) {
            res.innerHTML += arr[k] + '    ';
        }
        res.innerHTML += '<br>';
    }
}*/
