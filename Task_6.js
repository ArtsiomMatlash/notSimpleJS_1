/* Для начала я привел строку в верхний регистр, чтобы не прописывать оба регистра в условии проверки. Далее перебираем
каждый символ строки, и если он равен главной (в нашем случае одному из значений ИЛИ), то counter увеличивается на один
и тем сама считает гласные буквы в строке */
function inputString (str){
    let strUp = str.toUpperCase();
    let lettersObj = {
        A: 0,
        I: 0,
        U: 0,
        E: 0,
        O: 0,
    }
    for (let i = 0; i < str.length; i++){
        if (strUp[i] === 'A'){
            lettersObj.A++
        }
        else if (strUp[i] === 'E'){
            lettersObj.E++
        }
        else if (strUp[i] === 'I'){
            lettersObj.I++
        }
        else if (strUp[i] === 'U'){
            lettersObj.U++
        }
        else if (strUp[i] === 'O'){
            lettersObj.O++
        }
        else{
            continue;
        }
    }
    let sum = lettersObj.O + lettersObj.A + lettersObj.U + lettersObj.E + lettersObj.I;
    console.log(`Число гласных в строке: ${sum}`);
}
inputString("Hello World");