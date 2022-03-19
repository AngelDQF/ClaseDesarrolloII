function inicial() {
    let contenedor = document.getElementById("resultado");//document es la palabra especial para acceder al Dom del navegador
    //Parrafo 1
    let parrafo1 = document.createElement("p");//Especificamos que crearemos un parrafo
    let p1Text = document.createTextNode("Parrafo 1");//Crear texto al nodo
    parrafo1.appendChild(p1Text);//Agregar al arbol
    //Parrafo 2
    let parrafo2 = document.createElement("p");
    let p2Text = document.createTextNode("Parrafo 2");
    parrafo2.appendChild(p2Text);//Agregar al arbol

    //Parrafo 3
    let parrafo3 = document.createElement("p");
    let p3Text = document.createTextNode("Parrafo 3");
    parrafo3.appendChild(p3Text);//Agregar al arbol

    //a travez de el mos conectamos con el html ya que en el html se encuentra este id
    contenedor.appendChild(parrafo1);
    contenedor.appendChild(parrafo2);
    contenedor.appendChild(parrafo3);

    //Enlace
    let enlace = document.createElement("a");//Creamos un elemento de tipo a para el enlace 
    enlace.setAttribute("href", "https://login.sec.unicah.net/pages/login.php");//Agregamos el enlace al que nos va a dirigir 

    let enlaceText = document.createTextNode("enlace");
    enlace.appendChild(enlaceText);
    //Agregado del nodo para el enlace
    contenedor.appendChild(enlace);
    //Lista desordenada
    let lista = document.createElement("ul");
    //Creacion de los items de la lista
    for (let index = 0; index < 3; index++) {
        let li = document.createElement("li");
        let liText = document.createTextNode("Elemento " + index);
        li.appendChild(liText);//Agregamos el texto
        lista.appendChild(li); //Agregamos el nodo a la lista 
    }
    contenedor.appendChild(lista);
}
window.onload = inicial;//Con esto iniciamos nuestra funcion en html