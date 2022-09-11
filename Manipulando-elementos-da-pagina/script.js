//Criando um botão

function clicou() {
    // alert("CUIDADO, não fique clicando em botoes por AI");
    document.getElementById("agradecimento").innerHTML = "<b>Não vá clicando em tudo por ai</b>";
}

function redirecionar() {
    // window.open("https://www.youtube.com/watch?v=KiaBp6RRz2k&list=RDKiaBp6RRz2k&start_radio=1/");
    window.location.href = "https://www.youtube.com/watch?v=KiaBp6RRz2k&list=RDKiaBp6RRz2k&start_radio=1/";
}

function trocar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Pegeui você seu curioso";
    elemento.innerHTML = "Peguei você curioso :-() "
    //Alert trocar de textos
}

function voltar() {
    //document.getElementById("mousemove").innerHTML = "Passe o mause para descobrir meu segredo";
    elemento.innerHTML = "CLIQUE AQUI PARA DESCOBRIR MEU SEGREDOO!"
    //Alert trocar de textos
}

function load() {
    alert("pagina carregada com sucesso!!!");
}

function funcaoChange(elemento) {
    console.log(elemento.value)
}
