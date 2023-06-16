function contato() {
    let pNome = document.getElementById("pNome").value;
    let sNome = document.getElementById("sNome").value;
    let eMail = document.getElementById("eMail").value;

    alert("Bem vindo: " + pNome + " " + sNome + " seu e-mail foi enviado com sucesso. Em breve retornaremos no seu e-mail informado: " + eMail);
}

function cadastro() {
    let nome = document.getElementById("nome").value;
    let email1 = document.getElementById("email1").value;
    let email2 = document.getElementById("email2").value;
    let senha1 = document.getElementById("senha1").value;
    let senha2 = document.getElementById("senha2").value;
    let nascimento = document.getElementById("nascimento").value;
    if (senha1 == "" || senha2 == "" || email1 == "" || email2 == "" || nome == "" || nascimento == "") {
        alert("Preencha todos os campos");
    } else if (senha1 != senha2) {
        alert("As senhas não conferem");
    } else if (email1 != email2) {
        alert("Os e-mails não conferem");
    } else {
        alert("Casdastro realizado com sucesso");
    }
}
