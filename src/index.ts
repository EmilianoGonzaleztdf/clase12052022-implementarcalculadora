rotulo1.innerHTML = "ingrese el primer valor";
rotulo2.innerHTML = "ingrese el segundo valor";
rotulo3.innerHTML = "ingrese 1 para sumar o 2 para restar";

let valor1 = document.getElementById("dato1");
let valor2 = document.getElementById("dato2");
let valor3 = document.getElementById("dato3");


btn1.addEventListener("click", () => {
  let valor1: number = Number(dato1.value);
  let valor2: number = Number(dato2.value);
  let valor3: number = Number(dato3.value);

  console.log("--------------------------------------");
  if(valor3 == 1){
    console.log("el resultado es : " valor1 + valor2);
  }else{(valor3 == 2)
    console.log("el resultado es :" valor1 - valor2);
  }
  console.log("--------------------------------------");
});