
console.log(
`
Acceso a variables directamente:
-------------------------------
`  
);
console.table([
  ['msg1:::', msg1],
  ['msg2:::', msg2],
  ['msg3:::', msg3],
  ['msg4:::', msg4]
]);

/* 
  Todas las variables declaradas en el espacio global de main.js existen en other.js
*/

console.log(
`
Acceso a parámetros de 'this':
------------------------------
`  
);
console.table([
  ['this.msg1:::', this.msg1],
  ['this.msg2:::', this.msg2],
  ['this.msg3:::', this.msg3],
  ['this.msg4:::', this.msg4]
]);

/* 
  Las dos primeras propiedades no existen en `this`.
*/

console.log(
`
Acceso a parámetros de 'window':
--------------------------------
`  
);
console.table([
  ['window.msg1:::', window.msg1],
  ['window.msg2:::', window.msg2],
  ['window.msg3:::', window.msg3],
  ['window.msg4:::', window.msg4]
]);

/* 
  Ídem a lo anterior, como es de esperar.
  ¿Por qué pasó lo que pasó?
*/