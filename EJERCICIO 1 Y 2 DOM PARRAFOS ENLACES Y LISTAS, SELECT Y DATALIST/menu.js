//EJERCICIO 2 DOM SELECT Y DATALIST
function inicial(){

    //select
    let select=document.createElement("select");

    let option1=document.createElement("option");
    option1.setAttribute("value","value1");
    let option1text = document.createTextNode("opcion 1");
    option1.appendChild(option1text);

    let option2=document.createElement("option");
    option2.setAttribute("value","value2");
    let option2text = document.createTextNode("opcion 2");
    option2.appendChild(option2text);

    let option3=document.createElement("option");
    option3.setAttribute("value","value3");
    let option3text = document.createTextNode("opcion 3");
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

