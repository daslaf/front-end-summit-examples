
/***************
  Ejemplo 2.A
***************/
/*
console.log("this - Window");
console.log('Window:', Window);
console.log('window:', window);
console.log('this:', this);
console.log('this === window -> ', this === window, "\n\n\n");
*/

/***************
  Ejemplo 2.B
***************/

// Tarea -> 
// Implementar un script que comience una cuenta regresiva y en ignición
// abra una ventana con la siguiente url 'https://www.youtube.com/watch?v=xmgByMO0tEI'



// document.addEventListener('DOMContentLoaded', () => {
//   let counter = 3;
  
//   console.log(`Commencing countdown`);
  
//   const interval = setInterval(() => {
//     console.log(counter);
//     counter--;
//   }, 1000);
  
//   const timer1 = setTimeout(() => {
//     console.log('We have Lift Off');
    
//     const beyonce = open('https://www.youtube.com/watch?v=xmgByMO0tEI', '_blank');
    
//     clearInterval(interval);
    
//     const timer2 = setTimeout(() => {
//       beyonce.close();
//       clearTimeout(timer1);
//       clearTimeout(timer2);
//     }, 10000);



//   }, (counter + 1)*1000);
  
// });


/***************
  Ejemplo 2.C
***************/
/*
*/
  // Trivia, a qué variables podremos acceder desde otro .js?

  const msg1 = "Kitten Request";
    let msg2 = "Doge Request";
    var msg3 = "Bird-o Request";
        msg4 = "Wena compa";

  console.log(
    `
    Declaración de variables en main.js

    const msg1 = "Kitten Request";
    let msg2 = "Doge Request";
    var msg3 = "Bird-o Request";
    msg4 = "Wena compa";
    `
  );
