function CalcularPreco(){

  //Capturar campos
var txtQuilo = document.getElementById('txtQuilo');
var txtConsumo = document.getElementById('txtConsumo');
var txtValorAPagar = document.getElementById('txtValorAPagar');
var outQuilo = document.getElementById('outQuilo');
var outConsumo = document.getElementById('txtQuilo');
var outValorAPagar = document.getElementById('outValorAPagar');

// Capturar os Valores 
var Quilo = txtQuilo.value;
var  Consumo = txtConsumo.value;

//Calculo
var  valor = (Quilo/1000) * Consumo


//Exibir Resultado
outValorAPagar.textContent = `Valor a pagar R$ ${valor}`;

}



//Capturar Botao

var btnCalcularPreco = document.getElementById('btnCalcularPreco')
btnCalcularPreco.addEventListener('click', CalcularPreco)