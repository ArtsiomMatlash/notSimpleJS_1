/* Аналогично предыдущей */
function season(month){
    if (month >=3 && month <=5){
        console.log("Весна");
    }
    else if (month>5 && month<=8){
        console.log("Лето");
    }
    else if (month >8 && month <=11){
        console.log("Осень");
    }
    else if ((month = 12) || (month >=1 && month<=2)){
        console.log("Зима");
    }
    else {
        console.log("Не является месяцем");
    }

}
season(3);
season(6);
season(9);
season(12);
season(1);