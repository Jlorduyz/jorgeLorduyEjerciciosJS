// NUMERO 1

let numA = 40;
let numB = 30;

if (numA > numB) {
  console.log("El primer numero es mayor al segundo");
}

//NUMERO 2

let numC = 30;
let numD = 50;

if (numC === numD) {
  console.log("Los dos numeros son iguales");
} else {
  console.log("Los dos numeros son diferentes");
}

//NUMERO 3
let numE = 40;
let numF = 30;

if (numE === numF) {
  console.log("Ambos digitos son iguales");
} else {
  if (numE > numF) {
    console.log("El mayor es el numero " + numE);
  } else {
    console.log("El mayor es el numero " + numF);
  }
}

//NUMERO 4

let numG = 10;
let numH = 30;
let numI = 5;

if (numG < numH && numG < numI) {
  alert("El menor es " + numG);
} else if (numH < numG && numH < numI) {
  alert("El menor es " + numH);
} else {
  alert("El menor es " + numI);
}

//NUMERO 5

let personaUno = {
  nombre: "Ester",
  edad: 56,
  altura: 160,
};
let personaDos = {
  nombre: "Jorge",
  edad: 62,
  altura: 150,
};

if (personaUno.altura > personaDos.altura) {
  alert(personaUno.nombre + " es mas alta/alto");
} else {
  alert(personaDos.nombre + " es mas alta/alto");
}
if (personaUno.edad > personaDos.edad) {
  alert(personaUno.nombre + " es mayor");
} else {
  alert(personaDos.nombre + " es mayor");
}

//NUMERO 6
let nombreB = prompt("Ingrese su nombre");
let edad = prompt("Ingrese su edad");
let altura = prompt("Ingrese su altura");
let vision = prompt("Ingrese su nivel de vision  1 <---> 10");

if (edad >= 18 && altura >= 150 && vision >= 8) {
  console.log(
    "Hola " + nombreB + ", estas perfectamente capacitado para conducir"
  );
} else if (edad < 18) {
  if (altura < 150) {
    if (vision < 8) {
      console.log(
        "Joven " +
          nombreB +
          " por favor vayase para su casa, y cuidado se tropieza con una piedra"
      );
    } else {
      console.log(
        "Joven " +
          nombreB +
          ", ni su edad ni su altura lo capacitan para conducir."
      );
    }
  } else if (vision < 8) {
    console.log(
      "Joven " +
        nombreB +
        " lastima pero su edad y problemas de vision no lo capacitan para conducir."
    );
  } else {
    console.log(
      "Joven " + nombreB + " su minoria de edad no lo capacita para conducir"
    );
  }
} else if (altura < 150) {
  if (vision < 8) {
    console.log(
      "Amigo " +
        nombreB +
        " su baja estatura y problemas de vision no lo capacitan para conducir"
    );
  } else {
    console.log(
      "Joven " +
        nombreB +
        " no cuenta con la edad ni la altura necesaria para conducir."
    );
  }
} else {
  console.log(
    "Amigo " + nombreB + " su problema de vision no lo capacita para conducir"
  );
}

// NUMERO 7

let nombre = prompt("Ingresar nombre");

let tipoDePase = prompt("Que tipo de pase tiene, vip o normal?");

let entrada = prompt("Cuenta con entrada, si o no? ");

let sameName = "jorge";

if (nombre == sameName) {
  console.log("Buenas " + sameName + " sea Bienvenido");
} else if (tipoDePase == "vip") {
  console.log("Buenas " + nombre + " sea Bienvenido");
} else if (entrada == "si") {
  let uso = prompt("Desea usar su entrada? si o no ?");
  if (uso == si) {
    console.log("Buenas " + sameName + " sea Bienvenido");
  } else {
    console.log("Ok " + nombre + " se puede retirar");
  }
} else {
  let intencionDeCompra = prompt("Desea comprar una entrada?");
  if (intencionDeCompra == "si") {
    let monto = prompt("Cuanto dinero tiene disponible en su cuenta ?");
    if (monto >= 1000) {
      console.log("Buenas " + nombre + " sea Bienvenido");
    } else {
      console.log(
        "Amigo " + nombre + " no cuenta con el dinero suficiente, se retira"
      );
    }
  } else {
    console.log(
      "Hasta luego señor " + nombre + " se retira de la entrada por favor"
    );
  }
}

// NUMERO 8

const numeroIncognita = 5;

alert(
  "Este es un juego de adivinanzas , tienes 3 intentos para adivinar un numero del 1 al 10"
);

let numeroIngrersado = prompt(
  "Ingrese un numero del 1 al 10, primer intento :"
);

if (numeroIngrersado == numeroIncognita) {
  alert("Ganaste, haz adivinado el número.");
} else {
  if (numeroIngrersado > numeroIncognita) {
    alert("el numero ingresado es mayor, vuelve a intentarlo");
  } else {
    alert("el numero ingresado es menor, vuelve a intentarlo");
  }
  numeroIngrersado = prompt("Ingrese un numero del 1 al 10, segundo intento :");
  if (numeroIngrersado == numeroIncognita) {
    alert("Ganaste, haz adivinado el número.");
  } else {
    if (numeroIngrersado > numeroIncognita) {
      alert("el numero ingresado es mayor, vuelve a intentarlo");
    } else {
      alert("el numero ingresado es menor, vuelve a intentarlo");
    }
    numeroIngrersado = prompt(
      "Ingrese un numero del 1 al 10, tercero intento :"
    );
    if (numeroIngrersado == numeroIncognita) {
      alert("Ganaste, haz adivinado el número.");
    } else {
      alert("Has quemado tus 3 intentos , juego fallido");
    }
  }
}

// NUMERO 9
let tuEdad = prompt("Cual es tu edad");

if (tuEdad <= 12) {
  console.log("Eres un infante");
} else if (tuEdad <= 18) {
  console.log("Eres un adolecente");
} else if (tuEdad <= 45) {
  console.log("Eres un mayor joven");
} else if (tuEdad >= 100) {
  console.log("Enrealidad es tu edad ???");
} else {
  console.log("Eres un anciano");
}

// NUMERO 10

let jugadorUno = prompt(
  "ingrese piedra, papel ,tijera jugador#1 (en letra minuscula por favor)"
);
let jugadorDos = prompt(
  "ingrese piedra, papel ,tijera jugador#2 (en letra minuscula por favor)"
);

if (
  (jugadorUno == "piedra" && jugadorDos == "tijera") ||
  (jugadorUno == "papel" && jugadorDos == "piedra") ||
  (jugadorUno == "tijera" && jugadorDos == "papel")
) {
  alert("Gano el jugador #1");
} else if (
  (jugadorDos == "piedra" && jugadorUno == "tijera") ||
  (jugadorDos == "papel" && jugadorUno == "piedra") ||
  (jugadorDos == "tijera" && jugadorUno == "papel")
) {
  alert("Gano el jugador #2");
} else if (jugadorUno == jugadorDos) {
  alert("Ambos jugdores han quedado empatados");
} else {
  alert("Uno de los jugadores hizo trampa");
}

//NUMERO 11

let color = prompt("Ingrese un Color");

switch (color) {
  case "blanco":
    alert("Falta de color.");
    break;

  case "negro":
    alert("Falta de color.");
    break;

  case "verde":
    alert("El color de la naturaleza.");
    break;

  case "azul":
    alert("El color del agua.");
    break;

  case "amarillo":
    alert("El color del sol.");
    break;

  case "rojo":
    alert("El color del fuego.");
    break;

  case "marron":
    alert("El color de la tierra.");
    break;

  default:
    alert("Excelente elección, no lo teníamos pensado.");
    break;
}

//NUMERO 12

let operacion = prompt(
  "Que operacion desea realizar , suma ,resta,multiplicacion o division ?"
);

let digitoUno;
let digitoDos;

switch (operacion) {
  case "suma":
    digitoUno = parseInt(prompt("ingrese el primer digito"));
    digitoDos = parseInt(prompt("ingrese el segundo digito"));
    alert("Resultado: " + (digitoUno + digitoDos));
    break;
  case "resta":
    digitoUno = prompt("ingrese el minuendo");
    digitoDos = prompt("ingrese el sustraendo");
    alert("Resultado: " + (digitoUno - digitoDos));
    break;
  case "multiplicacion":
    digitoUno = prompt("ingrese el primer factor");
    digitoDos = prompt("ingrese el multiplicador");
    alert("Resultado: " + digitoUno * digitoDos);
    break;
  case "division":
    digitoUno = prompt("ingrese el dividendo");
    digitoDos = prompt("ingrese el divisor");
    if (digitoDos == 0) {
      alert("ERROR divisor no puede ser igual a 0");
    } else {
      alert("Resultado: " + digitoUno / digitoDos);
    }
    break;

  default:
    break;
}

//NUMERO 13

alert("A continuacion va a ingresar los datos de su documento de identidad");

let idNombre = prompt("ingrese su primer nombre");
let idApellido = prompt("ingrese primer apellido");
let idNumero = prompt("ingrese su numero de identificacion");
let idAño = prompt("ingrese su año de nacimiento");
let idMes = prompt("ingrese su mes de nacimiento");
let idDia = prompt("ingrese su dia de nacimiento");
let idAñoExp = prompt("ingrese el año de expedicion de su documento");
let idMesEpx = prompt("ingrese el mes de expedicion de su documento");
let idSexo = prompt("ingrese su sexo");

let confirm = prompt(
  "nombre: " +
    idNombre +
    "  apellido: " +
    idApellido +
    "  Fecha de nacimiento: " +
    idAño +
    "/" +
    idMes +
    "/" +
    idDia +
    "  Fecha de expedicion: " +
    idAñoExp +
    "/" +
    idMesEpx +
    "  Sexo: " +
    idSexo +
    "    Los datos ingresados fueron correctos , si o no?"
);

if (confirm == "si") {
  let dni = {
    nombre: idNombre,
    apellido: idApellido,
    id: idNumero,
    fecha_de_nacimiento: idAño + "/" + idMes + "/" + idDia,
    fecha_de_expedicion: idAñoExp + "/" + idMesEpx,
    sexo: idSexo,
  };
  console.table(dni);
} else {
  alert("Vuelva a intentarlo en un mes(pailas)");
}
