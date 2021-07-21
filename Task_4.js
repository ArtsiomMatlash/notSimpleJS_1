/* Здесь, мне кажется, всё просто) Числа перебираются и проходят проверки, при нужном значении число заменяется подходящим
словом*/

function fizzBuzz (n) {
    for (let i = 1; i<=n; i++){
        if (i%3 === 0 && i%5 === 0){
            console.log('fizzbuzz')
        }
        else if (i%5 === 0){
            console.log('buzz')
        }
        else if (i%3 ===0){
            console.log('fizz')
        }
        else {
            console.log(i);
        } 
    }
}
fizzBuzz(30);