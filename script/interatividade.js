var botao = document.getElementById ("submit-button");
var formulario = document.getElementsByName("lead");

formulario.onsubmit = function() {
    let resposta = confirm("Tem certeza que esta tudo certo?");
    if(resposta) {console.log("vamooo");}
    else {console.log("no");
    document.getElementById("message").textContent = "Revisa então aí"
    }
    return resposta;
}
