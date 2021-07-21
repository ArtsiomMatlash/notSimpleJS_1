/*Реверс цикла. Я реализовал эту задачу таким способом. Удалял последний элемент массива, который является
аргументом функции и добавлял его в конец нового массива. */
function reverseArray(arr){
    let arrNew = [];
    let length = arr.length;
    for (let i = 0; i< length; i++){
        arrNew.push(arr.pop());
    }
    console.log(arrNew);
}

reverseArray([1,2,3,4,5,6,7,]);