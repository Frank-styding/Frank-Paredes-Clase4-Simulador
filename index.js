function calcularCuota(monto, numeroDeCuotas, interes) {
  interes = interes / 100;
  let aux = Math.pow(1 + interes, numeroDeCuotas);
  let cuota = monto * ((aux * interes) / (aux - 1));
  cuota = Math.floor(cuota * 10) / 10;
  return cuota;
}

function esPositivo(num) {
  return num >= 0;
}

function digitoSi(text) {
  return text.toLowerCase() == "si";
}

let monto;
let numeroDeCuotas;
let interes;
let salir = false;

while (!salir) {
  alert("Calcular cuotas");

  monto = +prompt("Digite el monto");
  numeroDeCuotas = +prompt("Digite el numero de cuotas");
  interes = +prompt("Digite el interes");

  if (
    !esPositivo(monto) ||
    !esPositivo(numeroDeCuotas) ||
    !esPositivo(interes)
  ) {
    alert("Los datos de entrada no pueden ser negativos");
    salir = true;
    break;
  }

  alert(calcularCuota(monto, numeroDeCuotas, interes));

  let entrada = prompt("Desea salir");
  if (digitoSi(entrada)) {
    salir = true;
  }
}
if (interes == 0) {
  alert("El interest no puede ser 0");
}
