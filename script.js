console.log("Calculadora de partidas Rankeadas")
const nomeHeroi = "Warpaplays "

let partidaVencida = 0

for(let i = 1; i <= 20 ; i++){
    partidaVencida += 1
    console.log( nomeHeroi + "Venceu uma partida " + i) 
}  

let derrotas = 0

for(let i = 1; i <= 10 ; i++){
    derrotas += 1
    console.log( nomeHeroi + "foi derrotado em uma partida " + i) 
} 

function subtrair(numero1, numero2) {
  return numero1 - numero2;
}

let resultado = subtrair(20, 10)
  console.log("Você possui " + resultado + " Vitórias")

 let regraPartida = "10";

switch (regraPartida) {
    case "10": 
      console.log(nomeHeroi + "tem de saldo " + regraPartida + " vitórias e está no nível de" + " Ferro");
      break;
    case "20":
      console.log(nomeHeroi + "tem de saldo " + regraPartida + "vitórias e está no nível de" + "Bronze");
      break;
    case "50":
      console.log(nomeHeroi + "tem de saldo " + regraPartida + "vitórias e está no nível de" + "Prata");
      break;
    case "80":
      console.log(nomeHeroi + "tem de saldo " + regraPartida + "vitórias e está no nível de" + "Ouro");
      break;
    case "90":
      console.log(nomeHeroi + "tem de saldo" + regraPartida + "vitórias e está no nível de" + "Diamante");
      break;
    case "100":
      console.log(nomeHeroi + "tem de saldo " + regraPartida + "vitórias e está no nível de" + "Lendário");
      break;
    case "101":
      console.log(nomeHeroi + "tem de saldo " + regraPartida + "vitórias e está no nível de" + "Imortal");
      break;
} 

