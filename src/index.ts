rotulo1.innerHTML = "ingrese el primer valor";
rotulo2.innerHTML = "ingrese el segundo valor";
rotulo3.innerHTML = "ingrese 1 para sumar o 2 para restar";
  
let btn1 = document.getElementById("btn1");

btn1.addEventListener("click", () => {
  let valor1: number = Number(dato1.value);
  let valor2: number = Number(dato2.value);
  let valor3: number = Number(dato3.value);

  function dibujarGuiones(n:number){
    let guion: string = "-";
    for (let i = 0; i <= n; i++) {
      guion = guion + "-";
    }
    console.log(guion);
  };

  if(valor3 == 1){
    dibujarGuiones(20);
    console.log("el resultado es : " valor1 + valor2);
    dibujarGuiones(20);
  }else if(valor3 == 2){
    dibujarGuiones(40);
    console.log("el resultado es :" valor1 - valor2);
    dibujarGuiones(40);
  }else{
    dibujarGuiones(5);
    console.log("fin del algoritmo");
    dibujarGuiones(5);
  }

});