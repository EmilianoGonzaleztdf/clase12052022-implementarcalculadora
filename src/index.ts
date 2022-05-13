rotulo1.innerHTML = "ingrese el primer valor";
rotulo2.innerHTML = "ingrese el segundo valor";
rotulo3.innerHTML = "ingrese 1 para sumar o 2 para restar";
rotulo4.innerHTML = "ingrese la cantidad de guiones";

let btn1 = document.getElementById("btn1");
let dato4 = document.getElementById("dato4");

btn1.addEventListener("click", () => {
  let valor1: number = Number(dato1.value);
  let valor2: number = Number(dato2.value);
  let valor3: number = Number(dato3.value);
  
  function guionesParaTodos(n:number){
    let guion: string = "-";
    for (let i = 0; i <= (n); i++) {
      guion = guion + "-";
    };
    
    console.log(guion);
  };
  let n: number = Number(dato4.value);
  let sumar :number = valor1 + valor2;
  let restar :number = valor1 - valor2;
  let operacion:number = valor3;

  switch(operacion){
    case 1:
      guionesParaTodos(n);
      console.log("el resultado es: " sumar);
      guionesParaTodos(n);
      break;
    case 2:
      guionesParaTodos();
      console.log("el resultado es: " restar);
      guionesParaTodos();
      break;
    default:
      guionesParaTodos(n);
      console.log(" *Fin del Algoritmo* ");
      guionesParaTodos(n);
  }
});