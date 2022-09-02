let express = require('express');
let app = express();

//middlewares
app.use(express.static(__dirname+'/dist/voluntech'));

app.get('/*', (req, res)=> {
    res.sendFile(__dirname+'/dist/voluntech/index.html');
});
//listening on specific port
app.listen(process.env.PORT || 8080);