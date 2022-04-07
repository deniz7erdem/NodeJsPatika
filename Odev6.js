// PatikaDev Node.JS Modülü Ödev 6
// Kendi Web Sunucumuz

//Koa modülünü çağırıp app sabitine atıyorum
const Koa = require('koa');
const app = new Koa();



/* Burada use metoduna bir arrow metodu yazarak
ctx isimli değişkene gelen değerler ile url sorgulayarak
dönecek cevapları atıyorum.

Buradaki işlemleri koa-router isimli modül ile de yapabilirsiniz
ancak ödevde istenmediği için kullanmadım*/
app.use(ctx => {

    const url = ctx.url;

    if (url === "/" || url === "/index") {
        ctx.body = "<h1>Index sayfasina hosgeldiniz.<h1>";
    } else if (url === "/hakkimda") {

        ctx.body = "<h1>Hakkimda sayfasina hosgeldiniz.<h1>";
    } else if (url == "/iletisim") {

        ctx.body = "<h1>Iletisim sayfasina hosgeldiniz.<h1>";
    } else {
        ctx.body = "<h1>Sayfa bulunamadı<h2>";
    }

});

//Sunucumuzun hangi portta çalışacağını belirliyorum
app.listen(3000);