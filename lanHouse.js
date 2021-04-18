function valorPagar (){

//Capturar Campos
var txtValor = document.getElementById ('txtValor');
var txtTempo = document.getElementById ('txtTempo');
var txtvalorPagar = document.getElementById ('txtvalorPagar')
// var txtconversao = document.getElementById ('txtconversao');
var outValor = document.getElementById ('outValor');
var outTempo = document.getElementById ('outTempo');
var outvalorPagar = document.getElementById ('outvalorPagar')
// var outconversao = document.getElementById ('outconversao');

//Capturar Valores
var valor = txtValor.value;
var tempo = txtTempo.value;

//Calculo


var tempo = tempo/15
var total = Math.ceil (tempo) 
var valorPagar = total * valor 




//Exibir resultado 

outValor.textContent = `Valor a pagar R$ ${valorPagar}`



}

//Capturar Botão 


var btnvalorPagar = document.getElementById('btnvalorPagar')
btnvalorPagar.addEventListener('click', valorPagar)