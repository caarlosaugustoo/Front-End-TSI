const curtida = document.querySelector("#quantidadeCurtidas");
const mensagem = document.querySelector("#mensagem")
const botao = document.querySelector("#btnCurtir");

let curtidas = 0;
let curtiu = false;

function curtir () {
    if (curtiu == false){
        curtidas = curtidas +1;
        curtida.textContent = curtidas;
        mensagem.textContent = "Você curtiu essa pubicação!";
        botao.textContent = "Descurtir";
    } 
    else{
        curtidas = curtidas - 1;
        curtida.textContent = curtidas;
        mensagem.textContent = "Você ainda não curtiu essa pubicação!";
        botao.textContent = "Curtir";
    }
    curtiu = !curtiu;
}

botao.addEventListener("click", curtir);