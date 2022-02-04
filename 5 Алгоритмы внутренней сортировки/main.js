let BubbleTime = document.getElementById('time_bubble'); //время сортировки обменом
let BubbleNumComps = document.getElementById('comp_bubble'); //число сравнений для сортировки обменом
let BubbleNumSwaps = document.getElementById('swap_bubble'); //число перестановок для сортировки обменом

let SelectTime = document.getElementById('time_select'); //сортировка выбором
let SelectNumComps = document.getElementById('comp_select');
let SelectNumSwaps = document.getElementById('swap_select');

let InsertTime = document.getElementById('time_insert'); // сортировка включением(вставками)
let InsertNumComps = document.getElementById('comp_insert');
let InsertNumSwaps = document.getElementById('swap_insert');

let ShellTime = document.getElementById('time_shell');
let ShellNumComps = document.getElementById('comp_shell');
let ShellNumSwaps = document.getElementById('swap_shell');

let CountTime = document.getElementById('time_count');
let CountNumComps = document.getElementById('comp_count');
let CountNumSwaps = document.getElementById('swap_count');

let arr = [];
function perform() {
    let size = document.getElementById('num_arr').value;
    console.log(size);
    if (size == '') {
        alert('Введите размерность массива!');
        return;
    }
    for (let i = 0; i < size; i++) {
        arr[i] = Math.floor(Math.random() * (100 - 10)) + 10;
    }
    let resBub = bubbleSort(arr, size);
    BubbleNumComps.value = resBub[0];
    BubbleNumSwaps.value = resBub[1];
    BubbleTime.value = resBub[2];
    console.log(resBub);

    let resIns = insertionSort(arr, size);
    InsertNumComps.value = resIns[0];
    InsertNumSwaps.value = resIns[1];
    InsertTime.value = resIns[2];
    console.log(resIns);
    let resSel = selectionSort(arr, size);
    SelectNumComps.value = resSel[0];
    SelectNumSwaps.value = resSel[1];
    SelectTime.value = resSel[2];
    console.log(resSel);
}
/** 
 *Число сравнений: минимальное – (n-1), максимальное – n^2/2.
Число обменов: минимальное – 0, среднее – (n^2/4), максимальное – n^2/2.
Следовательно, алгоритм сортировки методом прямого обмена имеет сложность O(n^2).
 *
 * Для случайных данных количество перестановок в среднем составляет (N^2)/4,
 * то есть примерно в половину меньше, чем количество проходов.
 * Однако, в худшем случае количество перестановок также может составить N^2/2 – это в том случае,
 * если данные изначально отсортированы в обратном порядке.
 */
function bubbleSort(arr, size) {
    let arrSort = [...arr];
    let start = performance.now();
    let kp = 0; // перестановки
    let ks = 0; //сравнения
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size - i - 1; j++) {
            //size-i-1: -1 т.к. возможен выход за границу массива при j+1=10 [0...9]
            ks++; //сравнения
            if (arrSort[j] > arrSort[j + 1]) {
                kp++; //перестановки
                let t = arrSort[j];
                arrSort[j] = arrSort[j + 1];
                arrSort[j + 1] = t;
            }
        }
    }
    let time = performance.now() - start;
    return [ks, kp, time];
}
/**
 * Сортировка выбором вообще делает наименьшее количество перестановок (изо всех сортировок,
 * основанных на сравнениях и обменах) - не более n.
 * Число сравнений не зависит от начального порядка элементов и равно
 * n·(n–1)/2.
 * Число перестановок: минимальное – 0, максимальное – (n–1).
 * Алгоритм сортировки методом прямого выбора имеет сложность O(n^2).
 */
function insertionSort(arr, size) {
    let arrSort = [...arr];
    let start = performance.now();
    let kp = 0;
    let ks = 0;
    for (let i = 2; i < size; i++) {
        //в условии i=1

        let t = arrSort[i];
        let j = i - 1;
        ks++;
        while (j > 0 && t < arrSort[j]) {
            //в условии j>=0
            arrSort[j + 1] = arrSort[j];
            kp++;
            j--;
        }
        arrSort[j + 1] = t;

        //console.log(arrSort);
    }
    let time = performance.now() - start;
    return [ks, kp, time];
}

function selectionSort(arr, size) {
    let arrSort = [...arr];
    let start = performance.now();
    let kp = 0;
    let ks = 0;
    for (let k = size - 1; k > 0; k--) {
        // в массиве больше 1 неотсортированного элемента
        let max = 0;
        for (let j = 0; j <= k; j++) {
            //j<=k если убрать = то элемент??
            ks++;
            if (arrSort[j] > arrSort[max]) {
                max = j;
            }
        }
        //console.log(max, arrSort[k]);
        let t = arrSort[k];
        arrSort[k] = arrSort[max];
        arrSort[max] = t;
        kp++;
        //console.log(arrSort);
    }
    let time = performance.now() - start;
    return [ks, kp, time];
}
