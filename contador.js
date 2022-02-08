let num = 0;

function aumentar() {
    num++
    mostrarTaTela()
}
function diminuir() {
    num--
    mostrarTaTela()
}
function mostrarTaTela(){
    const p = document.querySelector("p");
    p.innerText = num
}
mostrarTaTela