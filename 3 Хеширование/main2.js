let funcDel = document.getElementById("func_del");//метод деления
let funcCerKv = document.getElementById("func_cer_kv");//метод середины квадратов
let funcSvert = document.getElementById("func_sver");//метод свертывания
let funcUmn = document.getElementById("func_umn");//метoд умножения
let size = 1000;
let num= 10000;

let openAddressTime=document.getElementById("open_adress_time")
let openAddressMidCount=document.getElementById("open_adress_sr")
let openAddressKeyCount=document.getElementById("open_adress_k")

let cepochTime=document.getElementById("cepoch_time")
let cepochMidCount=document.getElementById("cepoch_mid_count")
let cepochKeyCount=document.getElementById("cepoch_key_count")

function calculateMet(){// кнопка для первой части
    let numIter = document.getElementById("num_iter").value;
    let arr1 = [];// массив из 65000 элементов
    let arrCep = []//структура для заполнения методом цепочек для части 1
    let counters = [];//число коллизий для каждого метода
    let mincount;
    let results = [0, 0, 0, 0];//количество колизий для вывода
    let obj = {val:0};
    for(let i = 0; i <numIter; i++){
        arr1 = [];
        for(let j = 0; j < size; j++){
            arr1.push(Math.floor(Math.random() * 65001));//65001
        }
        //console.log(arr1);
        arrCep = new Array(size).fill(0);

        for(let i = 0; i <size; i++){//мет цеп для хеш функции деления
            addToStructMetCep(1, arr1[i], arrCep, obj);
        }
        counters[0] = obj.val; 
        obj.val = 0;

        for( let i = 0; i < size; i++){//удаление данных из СД метода цепочек
            if(typeof arrCep[i]=='object'){
                arrCep[i] = Number(arrCep[i]);
                arrCep[i] = 0;
            }
        }
       
        arrCep = new Array(size).fill(0);

        for(let i = 0; i <size; i++){//мет цеп для хеш функции серед кв
            addToStructMetCep(2, arr1[i], arrCep, obj);
        }
        counters[1] = obj.val; 
        obj.val = 0;

        for( let i = 0; i < size; i++){//удаление данных из СД метода цепочек
            if(typeof arrCep[i]=='object'){
                arrCep[i] = Number(arrCep[i]);
                arrCep[i] = 0;
            }
        }

        arrCep = new Array(size).fill(0);

        for(let i = 0; i <size; i++){//мет цеп для хеш функции сверт
            addToStructMetCep(3, arr1[i], arrCep, obj);
        }
        counters[2] = obj.val; 
        obj.val = 0;

        for( let i = 0; i < size; i++){//удаление данных из СД метода цепочек
            if(typeof arrCep[i]=='object'){
                arrCep[i] = Number(arrCep[i]);
                arrCep[i] = 0;
            }
        }
        arrCep = new Array(size).fill(0);
        
        for(let i = 0; i <size; i++){//мет цеп для хеш функции умн для части 1
            addToStructMetCep(4, arr1[i], arrCep, obj);
        }
        counters[3] = obj.val; 
        obj.val = 0;

        for( let i = 0; i < size; i++){//удаление данных из СД метода цепочек
            if(typeof arrCep[i]=='object'){
                arrCep[i] = Number(arrCep[i]);
                arrCep[i] = 0;
            }
        }
        mincount = Math.min(...counters);
        for(let i = 0; i < counters.length; i++){
            if(mincount == counters[i]){
                results[i]++;
            }
        }
    }
    funcDel.value = results[0];
    funcCerKv.value = results[1];
    funcSvert.value = results[2];
    funcUmn.value = results[3];
}



function compareMet(){
    let arrCep = [];//массив для заполнения методом цепочек
    let arrOpenAdr1 = [];//массив для заполнения методом открыт адрес
    let obj = {val:0};
    let newArr1 = [];//массив значений для 2 части 0-10000
    let newArr2 = [];//массив значений для 2 части 0-20000
    let countOpenAdr = {val:0};// число сравнений для поиска методом открытой адресации
    let countCepoh = {val:0};//число сравнений методом цепочек
    arrOpenAdr1 = new Array(num).fill(-1);
    for(let i = 0; i < num; i++){
        newArr1.push(Math.floor(Math.random() * 10001));//0-10000
    }

    for(let i = 0; i < num; i++){
        newArr2.push(Math.floor(Math.random() * 20001));//0-20000
    }

    arrCep = new Array(num).fill(0);
    for(let i = 0; i <num; i++){//мет цеп для хеш функции умн для части 2
        addToStructMetCep(5, newArr1[i], arrCep, obj);
    }
   
    for(let i = 0; i <num; i++){
        addToStructOpenAdr(newArr1[i], arrOpenAdr1);
    }
   
    let resOpAd = 0;//количество сравнений для поиска мет отк адр
    let start1 = performance.now();
    for(let i = 0; i < num; i++){
        //let h = methodUmn(newArr2[i], num);
        let h = methodCeredKv2(newArr2[i]);
        resOpAd+= SearchInOpenAdr(h, newArr2[i], countOpenAdr, arrOpenAdr1);
    }
    let end1 = performance.now();
    let time1 = Math.round((end1-start1)*100)/100;
    let sredOpAd = countOpenAdr.val/10000;

    let resCep = 0;//количество сравнений для поиска мет цеп
    let start2 = performance.now();
    for(let i = 0; i <num; i++){
        //let h = methodUmn(newArr2[i], num);
        let h = methodCeredKv2(newArr2[i]);
        resCep+=SearchInCepoh(h, newArr2[i], countCepoh, arrCep);
    }
    let end2 = performance.now();
    let time2 = Math.round((end2-start2)*100)/100;
    let sredCep = countCepoh.val/10000;

    openAddressKeyCount.value = resOpAd;
    openAddressMidCount.value = sredOpAd;
    openAddressTime.value = time1;

    cepochKeyCount.value = resCep;
    cepochMidCount.value = sredCep;
    cepochTime.value = time2;
}

let methodDelenia = (key) =>{
    let result = key % 997;
    return result;
}
//675940
let methodCeredKv = (key) =>{
    let pow = Math.pow(key, 2);
    let n = Math.ceil(Math.log10(pow));//длина числа
    if(n < 4){
        return key;
    }
    else{
        k = Math.ceil((n-3)/2);// кол-во ненужных цифр справа
        key = Math.floor(pow/(Math.pow(10, k)));//отбрасываем цифры справа
        key = key % Math.pow(10, 3);
        return key;
    }
}

let methodSvert = (key) =>{
    let n = Math.ceil(Math.log10(key));//длина числа
    let sum  = 0;
    if(n < 4){
        return key;
    }
    else{
        while(n > 0){
            sum += key % 1000;//часть суммы
            key = Math.floor(key/1000);//убираем из числа последние 3 цифры
            n = n-3;//уменьшаем длину числа
        }
        sum = sum % Math.pow(10, 3);
        return sum;
    }
}
let methodUmn = (key, leng) => {
    const A = (Math.sqrt(5)-1)/2;
    let keyA = (key*A)%1;//дробная часть
    let prod = Math.floor(leng*keyA);
    return prod;
}

let methodCeredKv2 = (key) =>{
    let pow = Math.pow(key, 2);
    let n = Math.ceil(Math.log10(pow));//длина числа
    if(n < 5){
        return key;
    }
    else{
        k = Math.ceil((n-4)/2);// кол-во ненужных цифр справа
        key = Math.floor(pow/(Math.pow(10, k)));//отбрасываем цифры справа
        key = key % Math.pow(10, 4);
        return key;
    }
}
class newNode {// узел односвязного списка
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;//первый элемент списка
        this.length = 0; 
    }
    append(value){
        const node = new newNode(value);//узел
        if (this.length == 0) {//список пуст
            this.head = node;
        }
        else{
            let current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = new newNode(value);
        }
        this.length++;
    }
}

function addToStructMetCep(variant, key, arrCep,obj){//метод цепочек
    let hash = 0;
    switch(variant){
        case 1:
            hash = methodDelenia(key);
            break;
        case 2:
            hash = methodCeredKv(key);
            break;
        case 3:
            hash = methodSvert(key);
            break;
        case 4:
            hash = methodUmn(key, size);
            break;
        case 5:
            //hash = methodUmn(key, num);
            hash = methodCeredKv2(key);
            break;
    }
    if(arrCep[hash] !== 0){
        obj.val ++;
    }
    else{
        arrCep[hash] = new LinkedList();
    }
    if(arrCep[hash]!== undefined){

        arrCep[hash].append(key);
    }
}

function addToStructOpenAdr(key, array){//метод открытой адресации
    //let hash = methodUmn(key, num);
    let hash = methodCeredKv2(key);
    if(array[hash]===-1){
        array[hash]= key;
    }
    else{
        for(let i = hash; i < num; i++){
            if(array[i] === -1){
                array[i] = key;
                return;
            }
        }
        for(let i = 0; i < hash; i++){
            if(array[i] === -1){
                array[i] = key;
                return;
            }
        }
    }
}

function SearchInOpenAdr(hash, key, countOpenAdr, arrOpenAdr1){//поиск методом открытой адресации
    countOpenAdr.val++;
    if (arrOpenAdr1[hash] == key) {
        return 1;
    }
    else {
        for (let i = hash; i < num; i++){
            countOpenAdr.val++;
            if (arrOpenAdr1[i] == key){
                return 1;
            }
        }
        for (let i = 0; i < hash; i++){
            countOpenAdr.val++;
            if (arrOpenAdr1[i] == key){
                return 1;
            }
        }
    }
    return 0;
}
function SearchInCepoh(hash, key, countCepoh, arrCep){//поиск методом цепочек
    if (typeof arrCep[hash] == 'object'){
        countCepoh.val++;//проверка на наличие ветки
        let cur = arrCep[hash].head;
        while(cur){
            countCepoh.val++;
            if(cur.value == key){
                return 1;
            }
            cur = cur.next;
        }
    }
    return 0;
}


