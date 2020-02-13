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
botones[1].addEventListener("click",e=>{

});
//ej3
botones[2].addEventListener("click",e=>{

});
//ej4
botones[3].addEventListener("click",e=>{

});