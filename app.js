// O primeiro passo será criar uma função chamada sortear para o botão
function sortear() {
    //Precisaremos recuperar os campos 'quantidade', 'de' e 'ate' para isso iremos criar variáveis para esses elementos
    // Para forçar que o número que chegará nessas variáveis seja um número inteiro, podemos usar o parseInt
    let quantidade = parseInt(document.getElementById('quantidade').value);
    // O ponto value no final indica que eu quero guardar na vaiável apenas o valor que está dentro desse input
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    // Para garantir que a quantidade de números sorteados seja menor do que a quantidade de números disponíveis usaremos a seguinte estrutura
    if(quantidade > ate - de + 1) {
        alert('Para a "Quantidade de números" escolha um número menor ou igual ao intervalo de números para o sorteio.');
        return   ;
    }
    
    // Implementando uma proteção para que os valores máximos do sorteio sejam sempre maiores que os valores mínimos.
    if(de >= ate){
        alert('O número limite tem que ser maior do que o número inicial');
        return;
    }

    let sorteados = []
    let numero;
    
    // Para retornar a quantidade de valores que foi solicitada no campo 'quantidade' podemos umsar um loop for
    // O loop for repete um bloco de código enquanto uma condição é verdadeira, geralmente utilizado para percorrer elementos em um array
    for(let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);
    
   // Includes retorna um verdadeiro ou falso
        while(sorteados.includes(numero)){
            numero = obterNumeroAleatorio(de, ate);
        }

        sorteados.push(numero);
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '<label class="texto__paragrafo">Números sorteados: ' + sorteados +'. </label>'
    // Agora vamos chamar uma função para alterar o status do botão
    alterarStatusBotao();
}


// Agora iremos fazer implementar uma função para realiizar o sorteio dos números
function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    if(botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

// Agora criaremos uma função para limpar todos os campos ao clicar no botão reiniciar 
function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();
}