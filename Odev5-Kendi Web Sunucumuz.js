// PatikaDev Node.JS Modülü Ödev 5
// Kendi Web Sunucumuz

//Http modülünü projeye dahil ettik
const http = require("http");

//Sunucumuzu oluşturan ve url adreslerine göre yanıtlarımızı yollayan createServer metodu
const server = http.createServer((req, res) => {
    const url = req.url;

    if (url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h2>Index sayfasina hosgeldiniz.<h2>");
    } else if (url === "/hakkimda") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h2>Hakkimda sayfasina hosgeldiniz.<h2>");
    } else if (url == "/iletisim") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h2>Iletisim sayfasina hosgeldiniz.<h2>");
    }
    res.end();
})


//Sunucumuzun hangi portta çalışacağını belirliyorum
server.listen(5000, () => {
    console.log("Sunucu başlatıldı.");
})