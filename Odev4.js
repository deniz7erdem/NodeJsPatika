// PatikaDev Node.JS Modülü Ödev 4
// Daire Modülü

const fs = require("fs");

//Dosyayı oluşturuyoruz
fs.writeFile("employees.json", '{"name": "Employee 1 Name", "salary": 2000}',"utf8",(err)=>{
    if(err){
        console.log(err);
    }
});

//Okuyoruz
fs.readFile("employees.json","utf8",(err,data)=>{
    if(err) console.log(err);
    console.log(data);

});

//Güncelliyoruz
fs.appendFile("employees.json",',\n{"name": "Employee 2 Name", "salary": 4000}',"utf8",(err)=>{
    if(err) console.log(err);
});

//Siliyoruz
fs.unlink("employees.json",(err)=>{
    if(err) console.log(err);
});