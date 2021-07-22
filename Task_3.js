/*Проверка строки на палиндромность. В моем решении я добавил при помощи циклов элементы строки в пустые массивы,
в один - в том же порядке, что и дано в аргументе, во второй - в обратном порядке. Далее сравнил каждый элемент массива.
Если хоть один элемент не одинаков - счетчик становится не равен нулю и выводится False*/
function palindrome (str) {
    let arrNormal = []; 
    let arrReverse = [];
    let counter = 0;
    for (let i = 0; i < str.length; i++){
        arrNormal.push(str[i]);
    }
    for (let x = 0; x < str.length; x++){
        arrReverse.unshift(str[x]);
    }
    for(let y=0; y < arrNormal.length; y++){
        if(arrNormal[y] != arrReverse[y]){ 
            console.log('False');
            break;
        }
        if( y === arrNormal.length-1){
            console.log('True');
        }
    }
}
palindrome("1, 232 ,1");
