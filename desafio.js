// Variáveis
let nick = "Seu nome"
let XP = 7000
let nivel = " "

//CASO O XP ESTEJA ENTRE TAL, RETORNE O VALOR DE NIVEL
if(XP < 1000){
    nivel = "Ferro"
}
else if(XP >= 1001 && XP <= 2000){
    nivel = "Bronze"
}
else if(XP >= 2001 && XP <= 5000){
    nivel = "Prata"
}
else if(XP >= 5001 && XP <= 7000){
    nivel = "Ouro"
}
else if(XP >= 7001 && XP <= 8000){
    nivel = "Platina"
}
else if(XP >= 8001 && XP <= 9000){
    nivel = "Ascendente"
}
else if(XP >= 9001 && XP <= 10000){
    nivel = "Imortal"
}
else{
    nivel = "Radiante"
}

//SAIDA
console.log("O Herói de nome " + nick + " está no nível " + nivel + " com " + XP + "XP")

//Vi que no desafio também incluia os Laços de repetição, não sabia como encaixa-lo no desafio, então acabei
//não colocando, se puder me ajudar a como incluir um laço de repetição, me dê uma dica porfavor!
