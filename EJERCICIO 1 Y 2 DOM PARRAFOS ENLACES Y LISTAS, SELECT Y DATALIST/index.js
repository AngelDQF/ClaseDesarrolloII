//EJERCICIO 1 DOM parrafos, enlaces y listas
function inicial(){
    let contenedor=document.getElementById("resultado");

    //parrafos
    let p1=document.createElement("p");
    let p1text=document.createTextNode("parrafo");
    p1.appendChild(p1text);

    let p2=document.createElement("p");
    let p2text=document.createTextNode("parrafo");
    p2.appendChild(p2text);

    let p3=document.createElement("p");
    let p3text=document.createTextNode("parrafo");
    p3.appendChild(p3text);

    contenedor.appendChild(p1);
    contenedor.appendChild(p2);
    contenedor.appendChild(p3);

    //enlace
    let enlace=document.createElement("a");
    enlace.setAttribute("href", "https://www.unicah.edu/");

    let enlacetexto=document.createTextNode("enlace");
    enlace.appendChild(enlacetexto);

    contenedor.appendChild(enlace);

    //Lista desordenada
    let lista=document.createElement("ul");
    
    for (let index = 0; index < 3; index++) {
        let li=document.createElement("li");
        let litext=document.createTextNode("elemento" + index);
        li.appendChild(litext);
        lista.appendChild(li);
    }

    contenedor.appendChild(lista);      
}
window.onload=inicial;

