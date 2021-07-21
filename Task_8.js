/* В данном случае я запустил цикл, который перебирает элементы массива и суммирует их в переменную sum, а затем
в переменную result присваиваю результат деления sum на количество элементов массива (которое равно длине массива) */
function halfNumber (arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    let result = sum/arr.length;
    console.log(result);
}
halfNumber([10,20,30,40,50]);