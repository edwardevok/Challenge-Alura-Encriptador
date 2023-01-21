/* atrapando el boton */
const button = document.querySelector("#boton");
const button2 = document.querySelector("#boton2");
const button3 = document.querySelector("#boton3");
const button4 = document.querySelector("#boton4");
const input1 = document.querySelector("#in_1");
const input2 = document.querySelector("#in_2");
const imagen = document.querySelector(".img");
const mensaje1 = document.querySelector("#tx1");
const mensaje2 = document.querySelector("#tx2");

input1.value = "";
input1.placeholder = "escribí texto acá";

imagen.classList.remove("esconder");
mensaje1.classList.remove("esconder");
mensaje2.classList.remove("esconder");

const ocultarInText = () => {
  button3.classList.remove("esconder");
  imagen.classList.add("esconder");
  mensaje1.classList.add("esconder");
  mensaje2.classList.add("esconder");
  input2.classList.remove("esconder");
};

/* ENCRIPTAR */
button.addEventListener("click", () => {
  /* atrapando el valor de los inputs */

  let textoEncriptado = "";
  let texto1 = input1.value;
  for (let i = 0; i < texto1.length; i++) {
    let letras = texto1[i];
    /* encrpitando */
    if (letras === "a") {
      textoEncriptado += "ai";
    } else if (letras === "e") {
      textoEncriptado += "enter";
    } else if (letras === "i") {
      textoEncriptado += "imes";
    } else if (letras === "o") {
      textoEncriptado += "ober";
    } else if (letras === "u") {
      textoEncriptado += "ufat";
    } else {
      textoEncriptado += letras;
    }
  }
  input2.value = textoEncriptado;
  ocultarInText();
});

/* DESENCRIPTAR */
button2.addEventListener("click", () => {
  let texto1 = input1.value;

  texto1 = texto1.replaceAll("ai", "a");
  texto1 = texto1.replaceAll("enter", "e");
  texto1 = texto1.replaceAll("imes", "i");
  texto1 = texto1.replaceAll("ober", "o");
  texto1 = texto1.replaceAll("ufat", "u");

  input2.value = texto1;
  ocultarInText();
});

/* COPIAR  */
button3.addEventListener("click", () => {
  input2.select();
  document.execCommand("copy");
});

/* BORRAR */
button4.addEventListener("click", () => {
  input1.value = "";
  input2.value = "";
  input2.classList.add("esconder");
  button3.classList.add("esconder");
  mensaje1.classList.remove("esconder");
  mensaje2.classList.remove("esconder");
  imagen.classList.remove("esconder");
});
