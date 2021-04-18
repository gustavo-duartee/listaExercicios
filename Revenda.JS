function VerPromocao(){

    //Capturar os Campos
    var txtVeiculo = document.getElementById('txtVeiculo');
    var txtPreco = document.getElementById('txtPreco');
    var txtParcela = document.getElementById('txtParcela')
    var outVeiculo = document.getElementById('outVeiculo');
    var outPreco = document.getElementById('outPreco');
    var outParcela = document.getElementById('outParcela')

    // Capturar os valores
    var veiculo = txtVeiculo.value;
    var preco = (txtPreco.value);

    //Calculo
    var entrada = (preco*50/100);
    var parcela = (entrada/12);
    
    // Exibir Resultado

    outVeiculo.textContent = veiculo;
    outPreco.textContent = `Entrada de R$ ${entrada}`;
    outParcela.textContent = `+ 12 de R$ ${parcela}`;
    
    

}


    //Capturar o botão
   var btnVerPromocao = document.getElementById('btnVerPromocao')
   btnVerPromocao.addEventListener('click', VerPromocao)



   