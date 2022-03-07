function select_DataGrid(){
    let contenedor = document.getElementById("select");//document es la palabra especial para acceder al Dom del navegador
    let select=document.createElement("select");
    //Opcion 1
    let opcion1=document.createElement("option");
    opcion1.setAttribute("value","value1");
    let opcion1Text=document.createTextNode("opcion1");
    opcion1.appendChild(opcion1Text); 
    //Opcion2
    let opcion2=document.createElement("option");
    opcion2.setAttribute("value","value2");
    let opcion2Text=document.createTextNode("opcion2");
    opcion2.appendChild(opcion2Text); 
    //Opcion3
    let opcion3=document.createElement("option");
    opcion3.setAttribute("value","value3");
    let opcion3Text=document.createTextNode("opcion3");
    opcion3.appendChild(opcion3Text);
    //Llamados
    select.appendChild(opcion1);
    select.appendChild(opcion2);
    select.appendChild(opcion3);
    contenedor.appendChild(select);
};
window.onload =select_DataGrid;