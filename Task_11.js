/* Тут всё просто. Пробовал через обьекты и ключи - не вышло =( */
function decade (num){
    if ( num>1 && num<=10 ){
        console.log('Первая декада');
    }
    else if (num > 10 && num <=20){
        console.log('Вторая декада');
    }
    else if (num > 20 && num <=31){
        console.log('Третья декада');
    }
    else {
        console.log('Некорректное число');
    }
}
decade(3);
decade(14);
decade(28);