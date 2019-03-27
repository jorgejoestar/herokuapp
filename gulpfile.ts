import * as express from "express";
import * as gm from "gm";
import * as multer from "multer";

const app = express();

app.get('/home', function(req: express.Request, res: express.Response) {
    res.sendFile(__dirname + '/index.html');
  });
  
  app.listen(process.env.PORT || 4000, function(){
    console.log('Your node js server is running');
  });