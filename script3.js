//Cambio el nombre
let Titulo=document.getElementsByClassName("TT");
TT.textContent = "Sotck"

let lista = document.getElementById("List");

let arreglo_items = new Array();
arreglo_items.push("Collares");


for (let i = 0 ; i < arreglo_items.length;i++){


    let item = arreglo_items[i];
    agregar_item(item);


}



let input = document.getElementById("Ingreso");
input.addEventListener("keypress",(e)=>{

    //El número 13 es igual a la tecla enter
    if (e.keyCode===13)

    mostrar_item();




})


function mostrar_item(){


    if (input.value.trim() != "") {

        agregar_item(input.value);
        input.value = "" ;
    }

}

let boton = document.getElementById("boton");
boton.addEventListener("click",()=>{

    mostrar_item();



})


input.addEventListener("input", () => {
    console.log(input.value)
})

boton.onclick = () => {console.log("Click")}
boton.onmousemove = () => {console.log("Move")}



function  agregar_item (item){

    let  li = document.createElement("li");

    li.textContent = item ;

    lista.appendChild(li);


    li.addEventListener("click",()=>{

        if (li.style.textDecoration === "line-through"){

            li.style.textDecoration = "none";

        }else{

            li.style.backgroundColor = "green";

        }


    })


}