/* Objetivo:
Crie uma função que recebe como parâmetro 
a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, 
o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
*/

let rankingResults = amountOfVictories(89, 23)

if (rankingResults < 10) {
    console.log("O Herói tem saldo de " + rankingResults + " vitorias, e está no nível de Ferro")
} else if (rankingResults >= 11 && rankingResults <= 20) {
    console.log("O Herói tem saldo de " + rankingResults + " vitorias, e está no nível de Bronze")
} else if (rankingResults >= 21 && rankingResults <= 50) {
    console.log("O Herói tem saldo de " + rankingResults + " vitorias, e está no nível de Prata")
} else if (rankingResults >= 51 && rankingResults <= 80) {
    console.log("O Herói tem saldo de " + rankingResults + " vitorias, e está no nível de Ouro")
} else if (rankingResults >= 81 && rankingResults <= 90) {
    console.log("O Herói tem saldo de " + rankingResults + " vitorias, e está no nível de Diamante")
} else if (rankingResults >= 91 && rankingResults <= 100) {
    console.log("O Herói tem saldo de " + rankingResults + " vitorias, e está no nível de Lendario")
} else if (rankingResults >= 101) {
    console.log("O Herói tem saldo de " + rankingResults + " vitorias, e está no nível de Imortal")
}

function amountOfVictories(victories, losses) {
    let totalVictories = victories - losses
    return totalVictories
}



