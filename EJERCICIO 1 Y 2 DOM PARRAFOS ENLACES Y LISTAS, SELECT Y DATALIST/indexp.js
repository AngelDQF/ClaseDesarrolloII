//ejercicio 1 
/*
//parrafos, enlaces y listas
function inicial(){
    let contenedor=document.getElementById("resultado");

    //parrafo 1
    let p1=document.createElement("p");
    let p1text=document.createTextNode("parrafo 1");
    p1.appendChild(p1text);

    //parrafo 2
    let p2=document.createElement("p");
    let p2text=document.createTextNode("parrafo 2");
    p2.appendChild(p2text);

    //parrafo 3
    let p3=document.createElement("p");
    let p3text=document.createTextNode("parrafo 3");
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

    //lista desordenada
    let lista=document.createElement("ul");

    for(let index=0; index<3; index++){
        let li=document.createElement("li");
        let litext=document.createTextNode("Elemento"+index);

        li.appendChild(litext);
        lista.appendChild(li);
    }

    contenedor.appendChild(lista);
}
window.onload=inicial;*/

//EJERCICIO 2 DOM SELECT Y DATALIST
function inicial(){

    //select
    let select=document.createElement("select");

    let option1=document.createElement("option");
    option1.setAttribute("value","value1");
    let option1text=document.createTextNode("opcion 1");
    option1.appendChild(option1text);

    let option2=document.createElement("option");
    option2.setAttribute("value","value2");
    let option2text=document.createTextNode("opcion 2");
    option2.appendChild(option2text);

    let option3=document.createElement("option");
    option3.setAttribute("value","value3");
    let option3text=document.createTextNode("opcion 3");
    option3.appendChild(option3text);

    select.appendChild(option1);
    select.appendChild(option2);
    select.appendChild(option3);
    
    let selectcontenedor=document.getElementById("selectcontenedor");
    selectcontenedor.appendChild(select);

    //datalist
    let input=document.createElement("input");
    input.setAttribute("list","lista");

    let datalist=document.createElement("datalist");
    datalist.setAttribute("id","lista");

    let optiondatalist1=document.createElement("option");
    optiondatalist1.setAttribute("value","option 1");

    let optiondatalist2=document.createElement("option");
    optiondatalist2.setAttribute("value","option 2");

    let optiondatalist3=document.createElement("option");
    optiondatalist3.setAttribute("value","option 3");

    datalist.appendChild(optiondatalist1);
    datalist.appendChild(optiondatalist2);
    datalist.appendChild(optiondatalist3);

    let datalistcontenedor=document.getElementById("datalistcontenedor");
    datalistcontenedor.appendChild(input);
    datalistcontenedor.appendChild(datalist);



}
window.onload=inicial;
