const nodeStatic = require("node-static");
const http = require("http");

const file = new nodeStatic.Server(__dirname);

http.createServer(function(req,res){

    

    file.serve(req,res);
})
.listen(3000);
console.log("server is running on 3000...");

//ngrok http -host-header=localhost http://localhost:3000