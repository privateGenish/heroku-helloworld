const app = require('fastify')();

const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
    console.log("app is listening to port: " + PORT);
});
var helloWorld = async function(req,replay){
    await replay.send({body: "Hello World"}).code(200);
    console.log("Hello World: " + replay.statusCode);
}
app.get("/", helloWorld)