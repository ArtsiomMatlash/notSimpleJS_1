/* В данном случае я запустил цикл, который перебирает элементы массива и суммирует их в переменную sum, а затем
в переменную result присваиваю результат деления sum на количество элементов массива (которое равно длине массива) */
function halfNumber (arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    console.log(typeof(sum));
    console.log(typeof(arr.length));
    let result = sum/arr.length;
    console.log(typeof(result));
    console.log(result);
    
}
halfNumber([]);
console.log(0/0);