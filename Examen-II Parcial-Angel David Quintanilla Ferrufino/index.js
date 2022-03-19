function inicio() {
    /*Ejercicio 1*/
    let div = document.getElementById("examen");
    let Examenh4 = document.getElementsByTagName("h4");
    let examenP = document.getElementsByTagName("p");

    div.removeChild(Examenh4.item(0));
    div.removeChild(examenP.item(0));
    //Ejercicio 2
    document.getElementById("nombre").textContent = "Nombre y apellido del cliente";
    // Ejercico 3
    let input = document.getElementById("inputPrice");
    input.type='number';
    
    //Ejercicio 4
    let button = document.createElement('button'); 
    button.type = 'button'; 
    button.innerText = 'LIMPIAR'; 
    document.body.appendChild(button); 
    let copy = document.getElementById("copy").style.color="blue";
    /*No lo pude finalizar ing */
}

window.onload = inicio