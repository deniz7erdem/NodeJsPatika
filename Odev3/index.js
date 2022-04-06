// PatikaDev Node.JS Modülü Ödev 3
// Daire Modülü

//Require ve Object destructing yöntemleri ile modülleri çağırma
const circle = require('./circle');
const { circleArea, circleCircumference } = require('./circle');


//Require ile kullanım
console.log("Require:\nAlan: " + circle.circleArea(5));
console.log("Çevre: " + circle.circleCircumference(5));

//Object destructing ile kullanım
console.log("\nObject destructing\nAlan: " + circleArea(5));
console.log("Çevre: " + circleCircumference(5));
