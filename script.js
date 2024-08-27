const textArea = document.querySelector(".areadetexto");
const mensagem = document.querySelector(".mensagem");

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
    removerImagem(); 
    verificarTexto(); 
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = "";
    removerImagem(); 
    verificarTexto(); 
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringEncriptada;
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return stringDesencriptada;
}

function copiarTexto() {
    const textoParaCopiar = mensagem.value;
    navigator.clipboard.writeText(textoParaCopiar)
        .then(() => {
            alert('Texto copiado e recortado com sucesso!');
            mensagem.value = "";
            verificarTexto();
        })
        .catch(err => {
            console.error('Erro ao copiar o texto: ', err);
        });
}

function removerImagem() {
    mensagem.style.backgroundImage = "none"; 
}

function verificarTexto() {
    if (mensagem.value === "") {
        mensagem.style.backgroundImage = "url('/assets/cadeado3.png')"; 
    }
}

textArea.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        btnEncriptar();
        removerImagem(); 
        verificarTexto(); 
    }
});

mensagem.addEventListener("input", verificarTexto);