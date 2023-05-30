const ingresoTexto = document.getElementById ("ingresoTexto");

const Encriptador = document.getElementById ("Encriptador");

const Desencriptar = document.getElementById ("Desencriptar");

const botoncopiar = document.getElementById ("botoncopiar");

const mensajeFinal = document.getElementById ("mensajeFinal");

const Muneco = document.getElementById ("Muneco");

const rightInfo = document.getElementById ("rightInfo");

const Right = document.getElementById ("Right");

let remplazar = [
    ["e", "enter"],
    ["o", "ober"],
    ["i", "imes"],
    ["a", "ai"],
    ["u", "ufat"],
]

const remplace = (nuevoValor) => {
    mensajeFinal.innerHTML = nuevoValor;
    
    Muneco.style.display = "none";

    rightInfo.style.display = "none";

    botoncopia.style.display = "block";

    Right.classList.add = ("ajustar");

    mensajeFinal.classList.add ("ajustar");

    ingresoTexto.value = "";

}

Encriptador.addEventListener("click", () => {

    const texto = ingresoTexto.value.toLowerCase()

    function encriptar(newText){
        for(let i = 0; i < remplazar.length; i++){
            if (newText.includes(remplazar[i][0])){
                newText = newText.replaceAll(remplazar[i][0],remplazar[i][1]);
                
            };
        };
        return newText
    }
    // const textoEncriptado = encriptar(texto);

    remplace (encriptar(texto));

   
});

Desencriptar.addEventListener("click",() => {
    const texto = ingresoTexto.value.toLowerCase();
    function desencriptar(newText) {
        for (let i = 0; i < remplazar.length; i++) {
            if(newText.includes(remplazar [i][1])){
            newText = newText.replaceAll(remplazar[i][1], remplazar[i][0]);
            };
        };
        return newText
    };
    remplace(desencriptar (texto))
});

botoncopiar.addEventListener("click", () => {
    let texto = mensajeFinal;
    // navigator.clipboard.writeText(texto.value);
    texto.select();
    document.execCommand('copy');

    mensajeFinal.innerHTML = "";

    Muneco.style.display = "block";
    rightInfo.style.display = "block";
    botoncopiar.style.display = "none";
    Right.classList.remove("ajustar");
    mensajeFinal.classList.remove("ajustar");
    ingresoTexto.focus();
})