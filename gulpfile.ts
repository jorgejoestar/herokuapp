import * as express from "express";
import * as gm from "gm";
import * as multer from "multer";

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
    
    //Get File.original
    //Do stuff with gm
    //Filetypes
  })