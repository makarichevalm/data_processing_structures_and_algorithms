let mess = document.getElementById('mess');
/**структура элемента дерева */
class newNode {
    constructor(value) {
        this.value = value;// значение
        this.down = null;// вниз
        this.right = null;//вправо
    }
}   
class Tree {
    constructor() {
        this.root = '*';
    }
    add(word){
        let newword = word + '*';
        console.log(newword);
        if(this.root ==='*'){
            this.root = new newNode(newword[0]);
        }
        let cur = this.root;
        for(let i= 0; i < newword.length-1; i++){
            while(cur.value !== newword[i]){
                    if(cur.right !== null){
                        cur = cur.right;
                    }
                    else{
                        break;
                    }
            }
                if(cur.value !== newword[i]){
                    cur.right = new newNode(newword[i]);
                    cur =  cur.right;
                }
                if(cur.down === null){
                    cur.down = new newNode(newword[i+1]);
                }
                cur = cur.down;
        }           
    }
    search(word){
        let newword = word + '*';
        if(this.root ==='*'){
            return false;
        }
        let cur = this.root;
        for(let i= 0; i < newword.length; i++){
            while(cur.value !== newword[i]){
                    if(cur.right !== null){
                        cur = cur.right;
                    }
                    else{
                        break;
                    }
            }
                if(cur.value !== newword[i]){
                   return false;
                }
                cur = cur.down;
                if(newword[i] === '*'){
                    return true;
                }
        }
    }
}
const tree = new Tree();
function add(){
    let word = document.getElementById('word').value;
    for(let i = 0; i < word.length; i++){
        console.log(word[i]);
    }
    let area = document.getElementById('area_words');
    if(!tree.search(word)){
        tree.add(word);
        if(area.value ===''){
      
            area.innerHTML = word;
        }
        else{
            area.innerHTML = area.value +'\n'+ word;
        }
    }else{
        mess.value='Дублирование слова';
        return;

    }
    console.log(tree);
    mess.value = '';
    return;
    
}
console.log(tree);
function search(){
    let word = document.getElementById('word').value;
    for(let i = 0; i < word.length; i++){
        console.log(word[i]);
    }
    let flag = tree.search(word);
    console.log(flag);
       flag? mess.value='Слово '+ word+ ' найдено': mess.value='Слово '+ word+ ' не найдено';
}