rotulo1.innerHTML = "ingrese el primer valor";
rotulo2.innerHTML = "ingrese el segundo valor";
rotulo3.innerHTML = "ingrese 1 para sumar o 2 para restar";

let btn1 = document.getElementById("btn1");

btn1.addEventListener("click", () => {
  let valor1: number = Number(dato1.value);
  let valor2: number = Number(dato2.value);
  let valor3: number = Number(dato3.value);

  function guionesParaTodos(n:number){
    let guion: string = "-";
    for (let i = 0; i <= n; i++) {
      guion = guion + "-";
    }
    
    console.log(guion);
  };

  let sumar :number = valor1 + valor2;
  let restar :number = valor1 - valor2;
  let operacion:number = valor3;

  switch(operacion){
    case 1:
      guionesParaTodos();
      console.log("el resultado es: " sumar);
      guionesParaTodos();
      break;
    case 2:
      guionesParaTodos();
      console.log("el resultado es: " restar);
      guionesParaTodos();
      break;
    default:
      guionesParaTodos(1);
      console.log(" *Fin del Algoritmo* ");
      guionesParaTodos(1);
  }
});