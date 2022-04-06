// PatikaDev Node.JS Modülü Ödev 1
// NodeJS komut satırı kullanımı

var args = process.argv.slice(2);

var daire = 3.14*args[0]**2;

console.log('Yarıçapı ' + args[0] + " olan dairenin alanı: "+daire);
