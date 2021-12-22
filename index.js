function calcularCuota(monto, numeroDeCuotas, interes) {
  let aux = Math.pow(1 + interes, numeroDeCuotas);
  let cuota = monto * ((aux * interes) / (aux - 1));
  cuota = Math.floor(cuota * 10) / 10;
  return cuota;
}
function digitoESC(texto) {
  return texto.toLowerCase() == "esc";
}

while (true) {
  alert("Calcular cuotas");

  let monto = prompt("Digite el monto");
  if (digitoESC(monto)) break;

  let numeroDeCuotas = prompt("Digite el numero de cuotas");
  if (digitoESC(numeroDeCuotas)) break;

  let interes = prompt("Digite el interes");
  if (digitoESC(interes)) break;

  alert(calcularCuota(+monto, +numeroDeCuotas, +interes));
}
