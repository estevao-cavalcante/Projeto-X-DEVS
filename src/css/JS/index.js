console.log(document.getElementById("btn-avancar"));

const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
let cartaoAtual = 0
const cartoes = document.querySelectorAll(".cartao")


btnAvancar.addEventListener("click", function () {
    console.log("cliquei");
    console.log(cartaoAtual);
    console.log(cartoes.length - 1);
    if (cartaoAtual === cartoes.length - 1) return;

    esconderCartaoSelecionado();


    cartaoAtual++;
    console.log(cartaoAtual);
    cartoes[cartaoAtual].classList.add("selecionado")
});

btnVoltar.addEventListener("click", function () {
    if (cartaoAtual === 0) return;
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");


    cartaoAtual--;
    cartoes[cartaoAtual].classList.add("selecionado")
});
function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}