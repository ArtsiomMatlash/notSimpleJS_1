//ПОИСК МАКСИМАЛЬНОГО И МИНИМАЛЬНОГО ЗНАЧЕНИЯ МАССИВА
function findMaxNumber (arrFind1) {
max = arrFind1[0]; 
for (let i = 0; i < arrFind1.length; i++)  { 
    if (arrFind1[i] > max){ 
        max = arrFind1[i]; 
      
    }
  } console.log(max);
}
findMaxNumber([1,35,135,12,-3,-23]);


//Аналогичная ситуация для поиска наименьшего элемента массива

function findMinNumber (arrFind2) {
    min = arrFind2[0]; 
    for (let i = 0; i < arrFind2.length; i++)  { 
        if (arrFind2[i] < min){ 
            min = arrFind2[i]; 
          
        }
      } console.log(min);
    }
findMinNumber([1,35,135,12,-3,-23]);