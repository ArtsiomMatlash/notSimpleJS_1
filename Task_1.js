/*Cортировка массива по возрастанию.
Порыскав в интернете, нашел не самый лучший, но на данном уровне знаний самый эффектиный способ - пузырьковый метод.
Разобравшись как он работает, получилось это "творение". */
function arrSort1(arrSort123){
  for (let i = arrSort123.length - 1; i > 0; i--){
    for (let x = 0; x < i; x++ ){
      if (arrSort123[x] > arrSort123[x+1]){
            let swapNumbers = arrSort123[x];
            arrSort123[x] = arrSort123[x+1];
            arrSort123[x+1] = swapNumbers;
       }
     }
   }
   console.log(arrSort123);
}
arrSort1([12,43,356,13,-53,-1,]);

/*Сортировка массива по убыванию.
Аналогичная схема, Только в условии мы меняем знак, чтобы менять числа местами, если число меньше впередистоящего.*/
function arrSort2(arrSort321){
  for (let i = arrSort321.length - 1; i > 0; i--){
    for (let x = 0; x < i; x++ ){
      if (arrSort321[x] < arrSort321[x+1]){
            let swapNumbers2 = arrSort321[x];
            arrSort321[x] = arrSort321[x+1];
            arrSort321[x+1] = swapNumbers2;
       }
     }
   }
   console.log(arrSort321);
}
arrSort2([1,143,-14,57,-28,]);
