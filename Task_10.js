/* Мудрено, но работает. Привел строку к массиву, Каждое четное значение (2,4,6) поменял местами с предыдущим, затем
самым глупым способом (16 строка) сделал из массива строку и вывел. */
function elementsSwap (str){
    let strSwap = [];
    let strResult = "";
    for (let i = 0; i < str.length; i++){
        strSwap.push(str[i]);
    }
    for (let i=0; i < strSwap.length; i++){
        if (i%2 !== 0){
            let swap = strSwap[i-1];
            strSwap[i-1] = strSwap[i];
            strSwap[i] = swap;
        }
    }
    strResult += strSwap;
    console.log(strResult);
}
elementsSwap("123456");