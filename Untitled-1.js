var listaDePecas = ["Amortecedor", "Motor", "Filtro de ar"]

let peso = 100
if (peso < 100){
    console.log("A peça deve pesar no minimo 100g")
}else{
    console.log("A peça possui peso adequado")
}

var listaDePecas = ["Amortecedor", "Motor", "Filtro de ar"]

if (listaDePecas.length < 10){
    console.log("Aida possui espaço")
}else{
    console.log("Não possui mais espaço")
}

let nomeDaPeca = "Disco de Freio"
if (nomeDaPeca.length > 3){
console.log ("Nome da peça esta adequado")
}else if (nomeDaPeca.lenght == 0) {
    console.log ("Nome da peça não pode ser vazio")

}else {
console.log ("Nome da peça precisa ter no minimo 3 caracteres")
}