
let arrKey1 = $(".arr-key1");
arrKey1.val(Math.floor(0 + Math.random() * 1000));
let arrKey2 = $(".arr-key2");
arrKey2.val(Math.floor(0 + Math.random() * 1000));
let mynumber = 10000; //1000 000
let newArr = [];
let suboptSearchTimeOfDisordArr = $(".neup-neopt-time");
let suboptSearchIndOfDisArr = $(".neup-neopt-ind");
let optSearchTimefDisArr = $(".neup-opt-time");
let optSearchIndOfDisArr = $(".neup-opt-ind");
let optSearchTimeofOrdArr = $(".up-neopt-time");
let optSearchIndOfOrdArr = $(".up-neopt-ind");
let searchTimeOfOrdArr = $(".up-opt-time");
let searchIndOfOrdArr = $(".up-opt-ind");
let btn1 = $(".btn-find");
let btn2 = $(".btn-find2");
for (let i = 0; i < mynumber; i++) {
    newArr.push(Math.floor(0 + Math.random() * 10000)); //1000-50 000
}
console.log(newArr);
// упорядоченный массив
let sortedArr = [...newArr];
let orderedArr = sortedArr.sort(function (a, b) {
return a - b;
});
console.log(orderedArr);
function suboptimalSearchDisorderedArr(searchValue) {//неоптимальный поиск(неупорядоченный массив)
    let ind = -1;
    let flag = false;
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] === searchValue) {
            flag = true;
            ind = i;
            break;
        }
    }
    if (flag === true){
        suboptSearchIndOfDisArr.val(ind);
    }else{
        suboptSearchIndOfDisArr.val("не найдено");
    }
}
function optSearchDisordArr(arr, index, searchValue) {//оптимальный поиск (неупорядоченный массив)
  
    let newArr2 = [...arr];
    newArr2.push(searchValue);
    let i = 0;
    while (newArr2[i] !== searchValue)
       i++;
    if(i < newArr2.length-1){
        index.val(i);
    }
    else {
        index.val("не найдено");
    }
    
}
function optSearchOrdrdArr(searchValue, arr, index){//оптимальный поиск (упорядоченный массив)
    let newArr2 = [...arr];
    newArr2.push(searchValue+1);
    let i = 0;
    while (newArr2[i]< searchValue) 
        i++;
    if(searchValue === newArr2[i]){
        index.val(i);
    }
    else
        index.val("не найдено");
    
}
arrKey1.on("click", function () {
    arrKey1.val(Math.floor(0 + Math.random() * 10000));
});
arrKey2.on("click", function () {
    arrKey2.val(Math.floor(0 + Math.random() * 10000));
});
btn1.on("click", function () {
    let start = performance.now();
    suboptimalSearchDisorderedArr(Number(arrKey1.val()));
    let end = performance.now();
    let time = end - start;
    suboptSearchTimeOfDisordArr.val(Math.floor(time*10000));
    let start2 = window.performance.now();
    optSearchDisordArr(newArr, optSearchIndOfDisArr, Number(arrKey1.val()));
    let end2 = window.performance.now();
    let time2 = end2 - start2;
    optSearchTimefDisArr.val(Math.floor(time2*10000));
});
btn2.on("click", function () {
    let start = window.performance.now();
    optSearchDisordArr(orderedArr, optSearchIndOfOrdArr, Number(arrKey2.val()));
    let end = window.performance.now();
    let time = end - start;
    optSearchTimeofOrdArr.val(Math.floor(time*10000));
    let start2 = window.performance.now();
    optSearchOrdrdArr(Number(arrKey2.val()), orderedArr,searchIndOfOrdArr);
    let end2 = window.performance.now();
    let time2 = end2 - start2;
    searchTimeOfOrdArr.val(Math.floor(time2*10000));
});