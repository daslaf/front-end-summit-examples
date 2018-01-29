
/***************
  Ejemplo 3.A
***************/
var speaker1 = "Sopapiglobo";
let speaker2 = "Waripolo";

(function() {

  // Esta es una IIFE (immediately invoked function expression) y crea un scope
  // apartado del contexto global, todas las variables declaradas en el contexto
  // global pueden ser accedidas desde acá

  speaker1 = "Nicasio Fallido";
  speaker2 = "Bongo Stingo";

  // Las variables declaradas acá, sin embargo no son accesibles desde el scope global

  var speaker3 = "JC Bodoque";
  speaker4 = "Huachimingo"

  console.log('Dentro de un scope, this === window -> ',this === window);
})();

console.log('speaker1::: ', speaker1);
console.log('window.speaker1::: ', window.speaker1);
console.log('this.speaker1::: ', this.speaker1);


console.log('speaker2::: ', speaker2);
console.log('window.speaker2::: ', window.speaker2);
console.log('this.speaker2::: ', this.speaker2);


// console.log('speaker3::: ', speaker3);
console.log('window.speaker3::: ', window.speaker3);
console.log('this.speaker3::: ', this.speaker3);


console.log('speaker4::: ', speaker4);
console.log('window.speaker4::: ', window.speaker4);
console.log('this.speaker4::: ', this.speaker4);


// Comentarios al respecto???