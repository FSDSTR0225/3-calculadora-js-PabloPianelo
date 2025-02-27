


let dato = [];
let result = null;
let operador = null;

const input = document.getElementById("display");
const bNumber = document.querySelectorAll(".number");
const bOperador = document.querySelectorAll(".operator");
const bDecimal = document.querySelector(".decimal");
const bClear = document.querySelector(".clear");
const bIgual = document.querySelector(".resolve");
bNumber.forEach(boton => {
    boton.addEventListener("click", () => {
      input.value += boton.innerText;
    });
  });


  bOperador.forEach(boton => {
    boton.addEventListener("click", () => {
        guardar();
        operador = boton.innerText; 
        console.log(operador);
    });
  });


  bDecimal.addEventListener("click", () => {
    if (!input.value.includes('.')) {
        input.value += '.';
    }
});

  function guardar() {
    console.log("Guardar", input.value);
    if (!isNaN(input.value)) {
    if(Number(input.value) === result){
      
      input.value = "";  // Limpia la pantalla
      result=null;
    }else if (input.value !== "") {
      dato.push(Number(input.value));  // Guarda el número actual
      input.value = ""; 
    }
}
  }


  function operation(params) {
    if (params === "+") {
      result = dato.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
    }else if (params === "-") {
        result= dato.reduce((acumulador, valorActual) => acumulador - valorActual, );
    }else if (params === "*") {
        result= dato.reduce((acumulador, valorActual) => acumulador * valorActual, 1);
    }else if (params === "/") {
        result= dato.reduce((acumulador, valorActual) => acumulador / valorActual, );

    }
  }

  bClear.addEventListener("click", () => {
    input.value = "";
    operador = null;
    dato = [];
    result = null;
  })


  function igual() {
    guardar();  
    if (dato.length >= 2) {  // Si hay al menos dos números en el array
        operation(operador);
        input.value = result;  // Muestra el resultado en la pantalla
        dato = [result];  // Guarda el resultado como base para una nueva operación
        operador = null;  // Reinicia el operador
      }
  }

  bIgual.addEventListener("click", () => {
   
  
   igual();
  });


  document.addEventListener("keydown", (event) => {
    let key = event.key;

    if (!isNaN(key) || key === ".") { // Si es un número o el punto decimal
        if (key === "." && !input.value.includes(".")) { // Verifica si ya hay un punto
          input.value += key; // Si no hay punto, lo agrega
        } else if (!isNaN(key)) { // Si es un número, lo agrega
          input.value += key;
        }
      }  else if (["+", "-", "*", "/"].includes(key)) { // Si es un operador
        operador = key;
        guardar();
    } else if (key === "Enter") {
     
        igual();
    }
});