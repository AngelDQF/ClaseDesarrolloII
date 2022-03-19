function Ejercicio7(){
    let parrafo = document.getElementById("contenedor");
    let item = parrafo.querySelector("#parrafo1");
    parrafo.removeChild(item);
};
window.onload=Ejercicio7;