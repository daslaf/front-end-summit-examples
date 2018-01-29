
/***************
  Ejemplo 1.A
***************/

console.log("Interface - HTMLHeadingElement");
console.log(HTMLHeadingElement);

console.log("Interface - Comment");
console.log(Comment);

console.log("Interface - Text");
console.log(Text);

/*
  const h1 = new HTMLHeadingElement('h1') -> Falla!

  La expresión anterior falla porque `HTMLHeadingElement` es sólo una interface,
  es decir, define un set de propiedades a las que cualquier elemento de heading 
  (<h1>, <h2>, <h3>, <h4>, <h5>, <h6>) debe suscribirse y su función, es descri-
  bir dichas propiedades y métodos asociados al elemento.
*/

/***************
  Ejemplo 1.B
***************/

document.addEventListener('DOMContentLoaded', () => {

  const collection = document.querySelectorAll('.foo');

  collection.forEach(nodo => {

    if ( !(nodo instanceof HTMLHeadingElement) ) {
      nodo.classList.remove('foo');
    }

  });

});

/*
  document.addEventListener('DOMContentLoaded', () => {
    
    const collection = document.querySelectorAll('.foo');

    collection.forEach(node => {
      if ( !(node instanceof HTMLHeadingElement) ) {
        node.classList = node.classList.remove( 'foo' );
      }
    });
  });
*/
