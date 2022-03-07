function Initial() {
    let contenedor = document.getElementById("select");//document es la palabra especial para acceder al Dom del navegador
    let select = document.createElement("select");
    //Opcion 1
    let opcion1 = document.createElement("option");
    opcion1.setAttribute("value", "value1");
    let opcion1Text = document.createTextNode("opcion1");
    opcion1.appendChild(opcion1Text);
    //Opcion2
    let opcion2 = document.createElement("option");
    opcion2.setAttribute("value", "value2");
    let opcion2Text = document.createTextNode("opcion2");
    opcion2.appendChild(opcion2Text);
    //Opcion3
    let opcion3 = document.createElement("option");
    opcion3.setAttribute("value", "value3");
    let opcion3Text = document.createTextNode("opcion3");
    opcion3.appendChild(opcion3Text);
    //Llamados
    select.appendChild(opcion1);
    select.appendChild(opcion2);
    select.appendChild(opcion3);
    contenedor.appendChild(select);
    //DataList
    let input = document.createElement("input");
    input.setAttribute("list", "lista");

    let dataList = document.createElement("datalist");
    dataList.setAttribute("id", "lista");

    let optionDataList1 = document.createElement("option");
    optionDataList1.setAttribute("value", "opción 1");

    let optionDataList2 = document.createElement("option");
    optionDataList2.setAttribute("value", "opción 2 ");

    let optionDataList3 = document.createElement("option");
    optionDataList3.setAttribute("value", "opción 3");

    dataList.appendChild(optionDataList1);
    dataList.appendChild(optionDataList2);
    dataList.appendChild(optionDataList3);

    let dataListContenedor = document.getElementById("dataListContenedor");
    dataListContenedor.appendChild(input);
    dataListContenedor.appendChild(dataList);

};
window.onload = Initial;