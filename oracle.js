/*Muestra una alerta con el mensaje "¡Bienvenida y bienvenido a nuestro sitio web!".
Declara una variable llamada nombre y asígnale el valor "Lua".
Crea una variable llamada edady asígnale el valor 25.
Establece una variable numeroDeVentas y asígnale el valor 50.
Establece una variable saldoDisponible y asígnale el valor 1000.
Muestra una alerta con el texto "¡Error! Completa todos los campos".
Declara una variable llamada mensajeDeError y asígnale el valor "¡Error! Completa todos los campos". Ahora muestra una alerta con el valor de la variable mensajeDeError .
Utiliza un prompt para preguntar el nombre del usuario y almacénalo en la variable nombre.
Pide al usuario que ingrese su edad usando un prompt y almacénala en la variable edad.
Ahora, si la edad es mayor o igual a 18, muestra una alerta con el mensaje "¡Puedes obtener tu licencia de conducir!".Si necesitas ayuda, las soluciones a las actividades estarán disponibles en la sección*/


/* 1 let mensaje = "¡Bienvenida y bienvenido a nuestro sitio web! . ";
alert(mensaje); */

 /* 2 let nombre = "Lua"; */

 /* 3 let edad = 25; */

/* 4 let numeroDeVentas = 50; */

/* 5 let saldoDisponible = 1000; */

/* 6 let mensajeDeError = "¡Error! Completa todos los campos . ";
alert(mensajeDeError); */



/* 8 let nombre = prompt("¿Cuál es tu nombre?"); */
/* 9 let edad = prompt("¿Cuál es tu edad?"); */

/* 10 if (edad >= 18 ) {"¡Puedes obtener tu licencia de conducir! . "  } */

/*Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".

Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.

Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intentalo nuevamente para ganar.".

Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string para incluir el valor del saldo.

Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.*/

/*let pregunta = prompt("¿Cuál dia de la semana es ?");
if (pregunta === "Sábado" || pregunta === "Domingo") {
    alert("¡Buen fin de semana!");
}else {
    alert("¡Buena semana!");
}*/

/*let numero = prompt("¿Ingresa un numero decimal?");
if (numero > 0) {alert("el numero es positivo!")}
else if (numero < 0) {alert("el numero es negativo")}
else {alert("el numero es 0")};*/

/*let puntuacion = prompt("¿Cuál es la puntuacion del juego?");
if (puntuacion >= 100) {alert("¡Felicidades, has ganado!. ")
    }else {alert("Intentalo nuevamente para ganar.")};*/

 /*let saldoDeCuenta = prompt("¿Cuál es el saldo de tu cuenta?")
    alert(`Tu saldo de la cuenta es: ${saldoDeCuenta} `)*/

/*let nombre = prompt("¿Cuál es tu nombre?");
    alert(`¡Bienvenido/a ${nombre}!`);*/


   /* Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.
Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.
Crea un programa de cuenta regresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.*/

/*let contador = 1;
while (contador <= 10) 
  {console.log(contador);
    contador++
  }

let contador2 = 10;
while (contador2 >= 0)
    {console.log(contador2);
        contador2--
    }

let numero = prompt("Cual es tu numero para la cuenta regresiva")
let contador3 = 0;
while (contador3 <= numero)
    {console.log(contador3);
        contador3++
        }*/



/*
        Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.

Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza console.log para mostrar el mensaje "¡Hola, [tu nombre]!" en la consola del navegador.*/


/*let nombre = prompt("¿Cual es tu numbre?")
console.log(`¡Hola, ${nombre}!`)
*/ 
/*Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza alert para mostrar el mensaje "¡Hola, [tu nombre]!".*/
/*let nombre = "Carlos Andres Pinilla"
alert(`"¡Hola, ${nombre} !"`.)*/ 
/*Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación que más te gusta?. Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador.

let respuesta = prompt("¿Cuál es el lenguaje de programación que más te gusta?");
console.log(respuesta);*/

/*Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la suma de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola.*/


/*let "valor1" = 10;
let "valor2" = 20;
let "resultado" = valor1 + valor2;
console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultado}.`);*/




/*Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la resta de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La diferencia entre [valor1] y [valor2] es igual a [resultado]." en la consola.*/



/*Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada, utiliza un if para verificar si la persona es mayor o menor de edad y muestra un mensaje apropiado en la consola.

let edad = prompt("¿Cuál es tu edad?");
if (edad >= 18) {
    console.log("Eres mayor de edad");
}else {
    console.log("Eres menor de edad");
}

Crea una variable "numero" y solicita un valor con prompt. Luego, verifica si es positivo, negativo o cero utilizando un if-else y muestra el mensaje correspondiente.*/


/*let numero = prompt("¿Cuál es tu número?");
if (numero > 0) {
    console.log("El número es positivo")
}else {
    console.log("El numero es negativo o es 0")
}*/


/*Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.

let i = 1;
while (i <= 10) {
    console.log(i);
}*/

/*Crea una variable "nota" y asígnale un valor numérico. Utiliza un if-else para determinar si la nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.*/

/*let nota = 8;
if (nota >= 7) {
    console.log("Aprobado");
}else {
    console.log("Reprobado");
}*/


/*Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola.*/

/*let numeroAleatorio = Math.random();
console.log(numeroAleatorio);*/



/*Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola.*/




/*Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola. */
        
/*let numeroAleatorio = Math.floor(Math.random() * 1000) + 1;
console.log(numeroAleatorio);*/

/*Cambia el contenido de la etiqueta h1 con document.querySelector y asigna el siguiente texto: "Hora del Desafío".

let h1 = document.querySelector("h1");
h1.textContent = "Hora del Desafío";
Crea una función que muestre en la consola el mensaje "El botón fue clicado" siempre que se presione el botón "Console".

function mensaje(){
    console.log(El botón fue clicado")
}*/
/*Crea una función que se ejecute cuando se haga clic en el botón "prompt", preguntando el nombre de una ciudad de Brasil. Luego, muestra una alerta con el mensaje concatenando la respuesta con el texto: "El botón fue clicado".


function ciudadDeBrasil() {
    let ciudad = prompt("¿Cuál es tu ciudad de Brasil?");
     alert("Estuve en " + ciudad + " y me acordé de ti.");
}


Crea una función que muestre una alerta con el mensaje: "Yo amo JS" siempre que se presione el botón "Alerta".
Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de la suma en una alerta.


function sumaDosNumeros(){
    let primerNumero = parseInt(prompt('Digite el primer numero'));
    let segunNumero = parseInt(prompt('Digite el segundo numero'));
    let resultado = primerNumero + segunNumero;
    alert('${primerNumero} + ${segunNumero} = ${resultado}')
}*/
/*manipulacion de DOM*/
/*let h2 = document.querySelector('h2');
h2.innerHTML = 'Has agregado una nueva canción!';*/

/*Crear una función que muestre "¡Hola, mundo!" en la consola.

/*let holaMundo = function(){
    console.log("¡Hola, mundo!");
}*/
/*Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.

let holaNombre = function(nombre){
    console.log("¡Hola, " + nombre + "!");
}*/
/*Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
let dobleNumero = function(numero){
    return numero * 2;
}*/

/*Crear una función que reciba tres números como parámetros y devuelva su promedio.


let promedio = function(a, b, c){
    return (a + b + c ) / 3;
}*/ 

/*Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.

let numeroMayor = function(a, b){
    (a > b) ? console.log(a) : console.log(b);
}*/
/*Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.

let numeroMultiplicado = function(numero){
    return numero * numero;
}*/

/*const nombre = "Juan";
const edad = 30;
const mensaje = `Hola, soy ${nombre} y tengo ${edad} años.`;
console.log(mensaje);

// Salida: Hola, soy Juan y tengo 30 años.*/


/*Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.



/*function calcularImc(altura, peso) {
    let peso = 80 ;
    let altura = 1.80;
    let imc = peso / (altura * altura;
        return imc;
}
Crea una función que calcule el valor del factorial de un número pasado como parámetro.
function calcularFactorial(numero) {
    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
}

Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
function calcularReal(dolares){
    let real = dolares * 4.80;
    
}*/
/*Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
function calcularArea(altura, anchura) {
    let area = altura * anchura;
    let perimetro = 2 * (altura + anchura);
}
console.log("area :" + area);
console.log("perimetro :" + perimetro);*/



/*Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.

function perimetroDelaSala(radio) {
    let pi = 3.14;
    let perimetro = 2 * pi * radio;
    let area = pi * radio * radio;
}
console.log("perimetro :" + perimetro);
console.log("area :" + area);

Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.

function tablaDeMultiplicar(numero) {
    for (let i = 0; i <= 10; i++) {
        let resultado = numero * i;
        console.log(numero + " x " + i + " = " + numero * i;

    
}

let numero = 5;
tablaDeMultiplicar(numero);*/


/*Crea una lista vacía llamada "listaGenerica".
let listaGenerica = [];
Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');
Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.

function mostrarLenguages() {
   
    for (let i = 0; i < lenguagesDeProgramacion.length - 1; i++) {
        console.log(lenguagesDeProgramacion[i]);
}
mostrarLenguages();
Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
function mostrarLenguagesInverso() {
    for (let i = lenguagesDeProgramacion.length - 1; i >= 0; i--) {
        console.log(lenguagesDeProgramacion[i]);
}
mostrarLenguagesInverso();
Crea una función que calcule el promedio de los elementos en una lista de números.
function calcularPromedio(listaDeNumeros) {
    let suma = 0;
    for (let i = 0; i < listaDeNumeros.length; i++) {
        suma += listaDeNumeros[i];
}
return suma / listaDeNumeros.length;
}

Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.


function encontarElNumeroMayorYElMasPequeño(lista) {
    
    let numeroMayor = lista[0];
    let numeroMenor = lista[0];
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] > numeroMayor) {
            numeroMayor = lista[i];
        } if (lista[i] < numeroMenor) {
            numeroMenor = lista[i];
        }
}
console.log('El número más grande es :', numeroMayor);
console.log('El número más pequeño es :', numeroMenor);*/

/*let numeros = [3, 7, 10, 17, 27]
encontarElNumeroMayorYElMasPequeño(numeros)*/

/*Crea una función que devuelva la suma de todos los elementos en una lista.

function sumaDeTodosLosNumeros(lista) {
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
        suma += lista[i];
    }
    return suma;

}
let numeros = [3, 7, 10, 17, 27];
let suma = sumaDeTodosLosNumeros(numeros)
console.log(`La Suma de todos los numeros es : ${suma}`)



Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.

function devolverPosicion(lista, elemento) {
for (let i = 0; i < lista.length; i++) {
   function devolverPosicion(lista, elemento) {
        if (lista[i] == elemento) {
            return i;// indice encontrado
        }
    }
    return -1; // Retorna -1 si el elemento no se encuentra en la lista
}
*/

/*Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.


function devolverNumerosDelMismoTamaño(lista1, lista2) {
    for (let i = 0; i < lista.length; i++) {
        if (lista1[i] + lista2[i] > 10) {
            return lista1[i] + lista2[i];
            }
        }
}
let lista1 = [1, 2, 3, 4, 5,]
let lista2 = [6, 7, 8, 9, 10]
console.log(devolverNumerosDelMismoTamaño(lista1, lista2))




Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.

function entregaNumeroAlCuadrado(lista,) {
    return lista.map( num => num ** 2 );
    }
    let lista = [1, 2, 3, 4, 5];
    console.log(entregaNumeroAlCuadrado(lista)); // [1, 4,
    
}/*