const http = require("http");
const data = require("./data.json");
const URL = require("url");
const fs = require("fs");
const path = require("path");

const write = (cb) => {
  fs.writeFile(
    path.join(__dirname, "data.json"),
    JSON.stringify(data, null, 2),
    (err) => {
      if (err) throw err;

      cb(JSON.stringify({ message: "ok" }));
    }
  );
};

http
  .createServer((req, res) => {
    const { id, descricao, valor, tipo, del } = URL.parse(req.url, true).query;

    console.log(tipo);

    res.writeHead(200, {
      "Access-Control-Allow-Origin": "*",
    });
    
    if (del) {
       const entradaLog = data.entradas = data.entradas.filter(
          (item) => String(item.id) !== String(id))
          if ( !entradaLog) {
            return write((message) => res.end(message))
          } else {
            
            data.saidas = data.saidas.filter(
              (item) => String(item.id) !== String(id)
              );
              return write((message) => res.end(message))
          }
      // } else if ( tipo == "saidas") {
      //   return write((message) => res.end(message));
      // }
    }

    //all recurces
    if (!descricao || !valor || !tipo) {
      return res.end(JSON.stringify({ data }));
    }


    if (tipo == "saidas") {
      data.saidas.unshift({ descricao, valor: parseFloat(valor), id : Math.floor(Math.random() * 100000) });
      return write((message) => res.end(message));
    } else if (tipo == "entradas") {
      data.entradas.unshift({ descricao, valor: parseFloat(valor), id : Math.floor(Math.random() * 100000)});
      return write((message) => res.end(message));
    }
  })
  .listen(3001, () => console.log("API is running"));
