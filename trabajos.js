let buttonRes = document.getElementById("menu-res-work");
buttonRes.addEventListener("click", mostrarRess);
let testResponsive = false;
let responsiveA = document.getElementById("nav-res-work");
function mostrarRess(){ 
     if(testResponsive == false){
      responsiveA.classList.add("nostrar-res");
      testResponsive = true;
} else if(testResponsive == true){
      responsiveA.classList.remove("nostrar-res");
      testResponsive = false;
 }
}

let imagenArray =[ 
      "t1.jpg", 
      "t2.jpg",
      "t3.jpg",
      "t4.jpg",];
i = 0;
function pasarImg(carrosel){ 
carrosel.addEventListener(`click`, e =>{
      let containerImage = document.getElementById(`containerImg`);
          flechaDerecha = document.getElementById(`flechaRight`);
          flechaIzquierda = document.getElementById(`flechaLeft`);
          target = e.target;
   if( target == flechaIzquierda){ 
        if(i > 0){ 
      containerImage.src =  imagenArray [i - 1];
      i--;
      } else{
            containerImage.src = imagenArray[imagenArray.length - 1];
            i = imagenArray.length - 1;
      }
 
   } else if(target == flechaDerecha){
            if( i < imagenArray.length - 1 ){
        containerImage.src = imagenArray[i + 1];
        i ++;
   } else {
              containerImage.src = imagenArray[0];
              i = 0 ;
    }
   }
 });
}
onload=function(){
      let carrosel = document.getElementById(`carrosel`);
      pasarImg(carrosel)
};
document.addEventListener(`scroll`, (e) => {
      let container = document.querySelector(`.carrosel`);
      animarFunct(container,`animacion-transform`, 500);
})
function animarFunct(animar,animacion, number){
      let srl = document.documentElement.scrollTop;
      let altura = animar.offsetTop;
            if(altura -number < srl){
                  let childs = animar.children;
                  for( let animarChilds of childs)
                  animarChilds.classList.add(animacion);
           }
}
