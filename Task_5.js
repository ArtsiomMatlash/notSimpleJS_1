/* Проверка на анаграмность. По сути склеено из решений предыдущих задач. Так как в условии сказано, что регистр
не учитывается, то чтобы исключить ложное срабатывание/несрабатывание при разнице регистра сначала я привел строки в 
один регистр. Затем повторил действия из предыдущих задач. Добавил элементы строк в пустые массивы. Рассортировал 
элементы массива. Затем сравнил их и вывел ответ. */
let str1arr = [];
let str2arr = [];
let counter = 0
function anagram (str1, str2){
   let strDn1 = str1.toLowerCase();
   let strDn2 = str2.toLowerCase();
   for (let i = 0; i < str1.length; i++){
    str1arr.push(str1[i]);
  }
   for (let x = 0; x < str2.length; x++){
    str2arr.unshift(str2[x]);
  }
  for (let i = str1.length - 1; i > 0; i--){
    for (let x = 0; x < i; x++ ){
      if (str1arr[x] > str1arr[x+1]){
            let swapSymbols = str1arr[x];
            str1arr[x] = str1arr[x+1];
            str1arr[x+1] = swapSymbols;
       }
    }
  }
  for(let y=0; y < str1arr.length; y++){
    if(str1arr[y] != str2arr[y]){ 
        counter ++;
    }
   }   
    if (counter>0){
    console.log('Строки не анаграммы')
    }
    else {
    console.log('Строки являются анаграммами');
    } 
}
anagram('nap','pna');

/* Минус этого решения заключается в том, что функцию можно вызвать только один раз,т.к. при повторном вызове функции
в массивах уже будут лежать данные из прошлого вызова и будут ложные срабатывания, но с текущим уровнем знаний других
решений я придумать не смог =( */