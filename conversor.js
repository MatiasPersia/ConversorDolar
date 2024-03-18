/* PRIMER INTENTO */
/* let respuesta, montoPesos;

const totalOficial = (montoPesos) => {return montoPesos/867.5}
const totalBlue = (montoPesos) => {return montoPesos/1020}
const totalTarjeta = (montoPesos) => {return montoPesos/1388}

for (let i = 1; i < 4; i++) {
  respuesta = prompt(
    "¿A que tipo de DOLAR quiere hacer su conversion? \n OFICIAL - BLUE - TARJETA\n Para SALIR presione X "
  );
  if (respuesta == "X") break;

  montoPesos = prompt("Ingrese el monto en pesos que desea convertir");

  if (respuesta == "OFICIAL") {
    alert("El valor que usted ingreso equivale a " + totalOficial + "USD");
  } else if (respuesta == "BLUE") {
    alert("El valor que usted ingreso equivale a " + totalBlue + "USD");
  } else if (respuesta == "TARJETA") {
    alert("El valor que usted ingreso equivale a " + totalTarjeta + "USD");
  } else {
    alert("El tipo de conversion es INVALIDO❌");
    break;
  }
}
 */
/* SEGUNDO INTENTO */
const totalOficial = (montoPesos) => {return montoPesos/867.5}
const totalBlue = (montoPesos) => {return montoPesos/1020}
const totalTarjeta = (montoPesos) => {return montoPesos/1388}

for (let i = 1; i < 4; i++) {
  let respuesta = prompt("¿A qué tipo de DÓLAR quiere hacer su conversión? \nOFICIAL - BLUE - TARJETA\nPara SALIR presione X");
  if (respuesta == "X")
    break;

  let montoPesos = prompt("Ingrese el monto en pesos que desea convertir");

  let total;
  if (respuesta == 'OFICIAL') {
    total = totalOficial(montoPesos);
  } else if (respuesta == 'BLUE') {
    total = totalBlue(montoPesos);
  } else if (respuesta == 'TARJETA') {
    total = totalTarjeta(montoPesos);
  }else {
        alert("El tipo de conversion es INVALIDO❌");
  }

  alert("El valor que usted ingresó equivale a " + total + " USD");
}
