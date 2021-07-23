/* Для начала я привел строку в верхний регистр, чтобы не прописывать оба регистра в условии проверки. Далее перебираем
каждый символ строки, и если он равен главной (в нашем случае одному из значений ИЛИ), то counter увеличивается на один
и тем сама считает гласные буквы в строке */
function inputString (str){
    let counter = 0;
    let strUp = str.toUpperCase();
    let lettersObj = {
        A: 0,
        I: 0,
        U: 0,
        E: 0,
        O: 0,
    }
    for(let key in lettersObj){
        for (let i = 0; i < strUp.length; i++){
            if (strUp[i] === key){
                counter++
            }
        }
    }
    console.log(`Число гласных в строке: ${counter}`);
}
inputString('Hello Eugene');