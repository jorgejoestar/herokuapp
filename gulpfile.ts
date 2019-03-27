import * as express from "express";
import * as gm from "gm";
import * as multer from "multer";
import { fileURLToPath } from "url";

const app = express();

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/tmp/my-uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})
 
var upload = multer({ storage: storage })

app.get('/home', function(req: express.Request, res: express.Response) {
    res.sendFile(__dirname + '/index.html');
  });
  
  app.listen(process.env.PORT || 4000, function(){
    console.log('Your node js server is running');
  });
  app.post('/api/files', upload.single('files'),function(req,res){
    gm('./Images/AestheticBottle.jpg')
    .resize(300, null)
    .write('./changed/medium', upload.file.filename), function (err) {
      if (!err) console.log(' hooray! ');
    }
    //Get File.original
    //Do stuff with gm
    //Filetypes
  })