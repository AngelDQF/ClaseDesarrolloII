function Ejercicio6() {
    let contenedor = document.getElementById("parrafo");

    let parrafo = document.createElement("p");
    let parrafoTexto = document.createTextNode("No seas esclavo de tus decisiones, recuerda que mientras haya vida, hay esperanza.");

    parrafo.appendChild(parrafoTexto);
    contenedor.appendChild(parrafo);
}
window.onload = Ejercicio6;