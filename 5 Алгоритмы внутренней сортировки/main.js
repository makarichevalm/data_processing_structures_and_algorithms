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
//let CountNumComps = document.getElementById('comp_count');
//let CountNumSwaps = document.getElementById('swap_count');

let arr = [];
let dop = [];
let arrCount = [];
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
    for (let i = 0; i < size; i++) {
        arrCount[i] = Math.floor(Math.random() * size);
    }
    console.log(arrCount);
    console.log(arr);
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

    let resShell = shellSort(arr, size);
    ShellNumComps.value = resShell[0];
    ShellNumSwaps.value = resShell[1];
    ShellTime.value = resShell[2];
    console.log(resShell);

    let resCount = countingSort(size, arrCount);
    CountTime.value = resCount;
    console.log(resCount);
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
        let flag = true;
        for (let j = 0; j < size - i - 1; j++) {
            //size-i-1: -1 т.к. возможен выход за границу массива при j+1=10 [0...9]
            ks++; //сравнения
            if (arrSort[j] > arrSort[j + 1]) {
                kp++; //перестановки
                let t = arrSort[j];
                arrSort[j] = arrSort[j + 1];
                arrSort[j + 1] = t;
                flag = false;
            }
        }
        if (flag) {
            break;
        }
    }
    let time = performance.now() - start;
    return [ks, kp, time];
}
/**Число сравнений: минимальное – (n–1), среднее – (n^2/4), максимальное – (n^2/2).
 * Число перемещений: минимальное – 0, среднее – (n^2/4), максимальное – (n^2/2).
 * Алгоритм сортировки методом прямого включения имеет сложность O(n^2).
 */
function insertionSort(arr, size) {
    let arrSort = [...arr];
    let start = performance.now();
    let kp = 0;
    let ks = 0;
    for (let i = 1; i < size; i++) {
        let t = arrSort[i];
        let j = i - 1;

        while (j >= 0 && t < arrSort[j]) {
            ks++;
            arrSort[j + 1] = arrSort[j];
            j--;
        }
        arrSort[j + 1] = t;
        kp++;
        //console.log(arrSort);
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
function selectionSort(arr, size) {
    let arrSort = [...arr];
    const start = performance.now();
    let kp = 0;
    let ks = 0;
    for (let k = size - 1; k > 0; k--) {
        // в массиве больше 1 неотсортированного элемента
        let max = 0;
        for (let j = 0; j <= k; j++) {
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
    const end = performance.now();
    let time = end - start;
    console.log(arrSort);
    return [ks, kp, time];
}
// сложность O(n·log n)
function shellSort(arr, size) {
    let arrSort = [...arr];
    let kp = 0;
    let ks = 0;
    let start = performance.now();
    let t = Math.floor(Math.log2(size)) - 1;
    //console.log(t);
    let h = [];
    h[t - 1] = 1; //7 3 1

    for (let i = t - 1; i > 0; i--) {
        h[i - 1] = h[i] * 2 + 1;
    }
    //console.log(h);

    for (let m = 0; m < t; m++) {
        //console.log(h[m]);
        for (let i = h[m]; i < size; i++) {
            let cur = arrSort[i];
            let j = i;
            while (j > 0 && cur < arrSort[j - h[m]]) {
                ks++;
                arrSort[j] = arrSort[j - h[m]];
                j -= h[m];
            }
            arrSort[j] = cur;
            kp++;
        }
        //console.log(arrSort);
    }
    let time = performance.now() - start;
    return [ks, kp, time];
}
// сложность определяется как O(3*n)
function countingSort(size, arrCount) {
    arrSort = [...arrCount];
    let start = performance.now();
    for (let i = 0; i < size; i++) {
        dop[i] = 0;
    }
    for (let i = 0; i < size; i++) {
        dop[arrSort[i]] += 1;
    }
    //console.log('dop', dop);
    let t = 0; //перемещение по arrSort
    for (let i = 0; i < size; i++) {
        //цикл для прохода по dop
        for (let j = dop[i]; j > 0; j--) {
            //цикл для уменьшения значения dop
            arrSort[t] = i;
            t++;
        }
        //console.log(arrSort);
    }
    let time = performance.now() - start;
    return time;
}
