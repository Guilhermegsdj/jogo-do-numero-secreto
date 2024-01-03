let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = geradorDeNumero();
let tentativa = 1;
function exibirTextoNaTela (tag, texto){
 let campo = document.querySelector (tag);
campo.innerHTML = texto;
responsiveVoice.speak (texto, "Brazilian Portuguese Female", 1.2);
}

function mensagemInicial(){
    exibirTextoNaTela ("h1", "Jogo do número secreto.")

    exibirTextoNaTela ("p", "Escolha um número entre 1 e 10!")
}

mensagemInicial();

function verificarChute(){
    let chute = document.querySelector ("input").value; 

    if(numeroSecreto == chute){
        exibirTextoNaTela ("h1", "Acertou!");
        let palavraTentativa = tentativa > 1 ? "tentativas":"tentativa";
        let mensagemtentativas =`Você descobriu o número secreto com ${tentativa} ${palavraTentativa}`; 
        exibirTextoNaTela ("p", mensagemtentativas); 
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else{
        if(chute > numeroSecreto){
            exibirTextoNaTela("p", "O número secreto é menor!");
        }else{
            exibirTextoNaTela("p", "O número secreto é maior");
        }
        tentativa++;
        limparCampo();
    }
    
}

function geradorDeNumero() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quatidadeDeElementosNaLista = listaDeNumerosSorteados.length;

if (quatidadeDeElementosNaLista == numeroLimite){
    listaDeNumerosSorteados = [];
}

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return geradorDeNumero();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo(){
    numeroSecreto = geradorDeNumero();
    tentativa = 1;
    mensagemInicial();
    limparCampo();
    document.getElementById ("reiniciar").setAttribute("disabled",true)
}