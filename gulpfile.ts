import * as express from "express";
import * as gm from "gm";
import * as multer from "multer";
import { fileURLToPath } from "url";

const app = express();

const storage1 = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, __dirname)
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
 
const upload = multer({ storage: storage1 });

app.get('/home', function(req: express.Request, res: express.Response) {
    res.sendFile(__dirname + '/index.html');
  });
  
  app.listen(process.env.PORT || 4000, function(){
    console.log('Your node js server is running');
  });
  app.post('/api/files', upload.single('files'),function(req: express.Request, res,next){
    console.log(req);
    gm(req.file.filename)
    .resize(300, null)
    .write('./changed/medium/' + req.file.filename, function (err) {
      if (err)  console.log(err);
     
    })
    gm(req.file.filename)
    .resize(200, null)
    .write('./changed/small/' + req.file.filename, function (err) {
      if (err)   console.log(err);
     
    })
    gm(req.file.filename)
    .resize(400, null)
    .write('./changed/large/'+req.file.filename, function (err) {
      if (err)   console.log(err);
    
    })
    //Get File.original
    //Do stuff with gm
    //Filetypes
    res.sendStatus(200);
  })