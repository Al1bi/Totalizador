import SellPoint from "./sellpoint";

const cantidad = document.querySelector("#cantidad");
const precio = document.querySelector("#precio")
const form = document.querySelector("#ventas-form");
const div = document.querySelector("#resultado-div");
const estado = document.querySelector("#estados");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const cantidadItem = Number.parseInt(cantidad.value);
  const precioItem = Number.parseFloat(precio.value)
  const estadoSeleccionado = estado.value;
  const SP1 = new SellPoint(estadoSeleccionado, cantidadItem, precioItem);
  div.innerHTML = "<p> Precio neto ("+cantidad.value+"*$"+ precioItem+"): $" + SP1.getPrecioNeto() + "</p>";
  div.innerHTML += "<p> Descuento ("+SP1.getDescuento()*100+"%): $"+SP1.getTotalDescuento()+"</p>";
  div.innerHTML += "<p> Impuesto para "+estadoSeleccionado+"(%"+SP1.getPorcentaje()*100+"): $" + SP1.getTotalImpuesto() +"</p>";
  div.innerHTML += "<p> Precio total (descuento e impuesto): $" + SP1.getTotalAbsoluto() +"</p>";
});


