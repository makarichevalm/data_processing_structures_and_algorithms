let arrKey = document.getElementById("arr-key");
let neoptBinInd = document.getElementById("neopt-bin-ind");
let neoptBinTime = document.getElementById("neopt-bin-time");
let optBinInd = document.getElementById("opt-bin-ind");
let optBinTime = document.getElementById("opt-bin-time");
let optPoslInd = document.getElementById("opt-posled-ind");
let optPoslTime = document.getElementById("opt-posled-time");
//let button =document.getElementById("btn-find");
let arr = [];
const size = 300000; // размер массива
const count = 1000;
function getArr() {
    for (let i = 0; i < size; i++) {
        arr.push(Math.floor(i * 2 + Math.random() * 2));
    }
}
getArr();
console.log(arr);
function randomKey() {
    let rand = Math.floor(Math.random() * arr.length);
        return arr[rand];
}
arrKey.value = randomKey();
function NeoptBinSearch(searchValue) {//неоптимальный бинарный поиск
    let L = 0;
    let R = size - 1;
    let i = 0;  
    let start = performance.now();
    for (it = 0; it < count; it++) {
        L = 0;
        R = size - 1;
        while (L <= R) {
            i = Math.floor((L + R) / 2);
            if (arr[i] == searchValue) {
                break;
            }
            if (searchValue < arr[i]) {
                R = i - 1;
            } else {
                L = i + 1;
            }
        }
    }
    let time = performance.now()-start;
    console.log(performance.now()-start);
    neoptBinTime.value = time;
    if (arr[i] == searchValue) {
        neoptBinInd.value = i;
    } else {
        neoptBinInd.value = "не найдено";
    }
}

function OptBinSearch(searchValue) {//оптимальный бинарный поиск
    let L = 0;
    let R = size - 1;
    let i;
    let start = performance.now();
    for (it = 0; it < count; it++) {
        L = 0;
        R = size - 1;
        while (R > L) { 
            i = Math.floor((L + R) / 2);
            if (searchValue <= arr[i]) {
                R = i;
            }
            else {
                L = i + 1;
            }       
        }
    }
    let time = performance.now()-start;
    console.log(performance.now()-start);
    optBinTime.value = time;
    if (arr[R] == searchValue) {
        optBinInd.value = R;
    } else {
        optBinInd.value = "не найдено";
    }
}

function PosledSearch(searchValue) {//последовательный поиск
    let newArr = [...arr];
    newArr.push(searchValue + 1);
    let i = 0;
    let start = performance.now();
    for (it = 0; it < count; it++) {
        i = 0;
        while (newArr[i] < searchValue) {
            i++;
        }
    }
    let time = performance.now()-start;//Math.ceil(performance.now()-start)
    console.log(performance.now()-start);
    optPoslTime.value=time;
    if (searchValue == newArr[i]) {
        optPoslInd.value = i;
    } else {
        optPoslInd.value = "не найдено";
    }
}

function setValue(){
    NeoptBinSearch(arrKey.value);
    OptBinSearch(arrKey.value);
    PosledSearch(arrKey.value);
}