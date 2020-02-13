//captura de botones
let botones = document.querySelectorAll("button");

//función que comprueba si un número es par
let esPar=numero=>numero%2===0;

const NUM = 20;
//ej1
botones[0].addEventListener("click",e=>{
  let i =0;
  let par=0;
  let arrayPares=[];
  while(par<NUM){
    if(esPar(i)){
        par++;
        arrayPares.push(i);
    }
    i++;
  }
  alert(arrayPares.join());
});

//ej2
//El elemento entero del cuadro de texto del factorial
let elInputFactorial=document.querySelector("#f");

const esNumeroEnteroPositivo=(numero)=>{
 return (!isNaN(numero) && numero.length>0 && Number(numero)>0 && Number(numero)%1===0);
}
const calcularFactorial=(numeroEnteroPosivo)=>{
  let arrayNumeros=[];
  let ac=1;
  for(let i=numeroEnteroPosivo;i>0;i--){
    arrayNumeros.push(i);
    ac*=i;//ac=ac*i;
  }
  alert(`${arrayNumeros.join("*")}=${ac}`);
}

botones[1].addEventListener("click",e=>{
  if(esNumeroEnteroPositivo(elInputFactorial.value)){
    //calculamos factorial
    calcularFactorial(Number(elInputFactorial.value));
  }else{
    alert(`ERROR "[ ${elInputFactorial.value} ]" NO ES NÚMERO ENTERO POSITIVO`);
  }
});
//ej3
botones[2].addEventListener("click",e=>{

});
//ej4
botones[3].addEventListener("click",e=>{

});