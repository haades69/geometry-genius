 function triangleArea(){
   const baseField= document.getElementById('triangle-base');
   const baseValue = baseField.value;
   const base      = parseFloat(baseValue);

   const heightField= document.getElementById('triangle-height');
   const heightValue = heightField.value;
   const height      = parseFloat(heightValue);

   const triangleArea= 0.5*base*height;
   const area =document.getElementById('triangle-area');
   area.innerText= triangleArea;
   baseField.value ='';
   heightField.value ='';
 }

 function rectangleArea(){
    const widthField= document.getElementById('rectangle-width');
    const widthValue = widthField.value;
    const width      = parseFloat(widthValue);
 
    const lengthField= document.getElementById('rectangle-length');
    const lengthValue = lengthField.value;
    const length      = parseFloat(lengthValue);
 
    const rectangleArea= width*length;
    const area =document.getElementById('rectangle-area');
    area.innerText= rectangleArea;
    widthField.value ='';
    lengthField.value ='';
 }

 function parallelogramArea(){
    const baseField= document.getElementById('parallelogram-base');
   const baseValue = baseField.value;
   const base      = parseFloat(baseValue);

   const heightField= document.getElementById('parallelogram-height');
   const heightValue = heightField.value;
   const height      = parseFloat(heightValue);

   const parallelogramArea= base*height;
   const area =document.getElementById('parallelogram-area');
   area.innerText= parallelogramArea;
   baseField.value ='';
   heightField.value ='';
 }