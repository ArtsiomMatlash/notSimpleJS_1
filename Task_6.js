/* Для начала я привел строку в верхний регистр, чтобы не прописывать оба регистра в условии проверки. Далее перебираем
каждый символ строки, и если он равен главной (в нашем случае одному из значений ИЛИ), то counter увеличивается на один
и тем сама считает гласные буквы в строке */
let counter = 0;
function inputString (str){
    let strUp = str.toUpperCase();
    for (let i = 0; i<=str.length; i++){
        if (strUp[i] === 'A' || strUp[i] === 'I' || strUp[i] === 'E' || strUp[i] === 'U' || strUp[i] === 'O'){
            counter++;  
        }
    }
  console.log(`Число гласных в строке: ${counter}`);
}
inputString("Hello World");
