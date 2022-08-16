var boton=document.getElementById('agregarProducto');
var lista=document.getElementById('lista');
var data=[];
var cant=0;

boton.addEventListener("click",agregar)

function agregar(){
  var nombreProducto=document.getElementById('nombreProducto').value;
  var precio=parseFloat(document.getElementById('precio').value);
  var cantidad=parseFloat(document.getElementById('cantidad').value);
  var total=precio*cantidad;
  // console.log(total)
  //agragar elemento al arreglo
  data.push(
    {
      "id":cant,
      "nombreProducto":nombreProducto,
      "precio":precio,
      "cantidad":cantidad,
      "total":total

    }
  );
 
  document.getElementById("lista").innerHTML += '<tr"><td>'+nombreProducto+'</td><td>'+precio+'</td><td>'+cantidad+'</td><td>'+total+'</td></tr>';
  document.getElementById("nombreProducto").value ="";
  document.getElementById("precio").value ="";
  document.getElementById("cantidad").value ="";

  cant++


}




 
function calcularElTotal(){
  
  var tot=0;
  for(x of data){
    tot=tot+x.total;
  }
  document.getElementById('total').innerHTML="Total   "+tot;
}

function eliminarUltimo  () {
  data.pop()
  lista.removeChild(lista.lastChild);
  //console.log("escucha el boton")
  document.getElementById('total').innerHTML="";

}

function eliminarTodos () {
  data.pop()
  lista.innerHTML ='';
  document.getElementById('total').innerHTML="";

}


let botoneliminarUltimo = document.querySelector("#eliminarProducto");
botoneliminarUltimo.addEventListener("click",eliminarUltimo);

let calcularTotales = document.querySelector("#calcularTotal");
calcularTotales.addEventListener("click",calcularElTotal);

let eliminarTodosLosProductos = document.querySelector("#eliminarTodosLosProductos");
eliminarTodosLosProductos.addEventListener("click",eliminarTodos);











// 'use strict'

// let miEntrada = document.querySelector(".productoAingresar");
// let miEntrada2 = document.querySelector(".precioProducto");
// let miLista = document.querySelector(".myProduct");
// let miPrecio = document.querySelector(".myPrice");


// let arregloProductos = [];


// let agregarProducto = () => {
//     let nuevoProducto = miEntrada.value;
//     let precioDelProducto = miEntrada2.value;
//     arregloProductos.push(nuevoProducto, precioDelProducto);
//     miEntrada.value = '';
//     miEntrada2.value = '';
//     let miProducto = document.createElement("li");
//     miProducto.innerHTML = nuevoProducto;
//     miLista.appendChild(miProducto);
//     let miPrecio = document.createElement("li");
//     miPrecio.innerHTML = precioDelProducto;
//     miLista.appendChild(miPrecio);
// };

// let eliminarUltTarea = () => {
//     miLista.removeChild(miLista.lastChild);
// };

 
// let eliminarTodas = () => {
//     miLista.innerHTML ='';

// }

// let eliminarOrdenTarea = () => {
//     let valor = miIndice.value;
//     miLista.removeChild(miLista.children[valor -1]);
// }

// let botonAgregar = document.querySelector(".addBtn");
// botonAgregar.addEventListener("click",agregarProducto);

// let botonEliminarUlt = document.querySelector(".removeBtn");
// botonEliminarUlt.addEventListener("click",eliminarUltTarea);

// let botonEliminarTodas = document.querySelector(".removeAllBtn");
// botonEliminarTodas.addEventListener("click",eliminarTodas);

