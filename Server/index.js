const express = require('express');
const cors = require('cors');
const mysql2 = require('mysql2');
const multer = require('multer');

const app = express();  

app.use(cors());
app.use(express.json());

app.listen(3001, () => {
  console.log('Escuchando');
});

const db = mysql2.createConnection({
host: 'localhost',
user: 'root',
password: '',
database: 'marinaDB',
port: '3306'
})


const filtro = function (req, file, cb) {
  const formatos = ['image/png', 'image/jpg', 'image/jpeg'];
  if (formatos.includes(file.mimetype)) {
   cb(null, true); 
  } else {
    return cb(new Error('Formato no válido'));
  }
}

const espacio = multer.memoryStorage();
const archivo = multer(
  {
    storage: espacio,
    fileFilter: filtro
  }
) 


app.post('/registro', archivo.single('file'),
(req, resp) => {
  const {name, email, pass} = req.body;

  const imagen = req.file.buffer.toString('base64');

  db.query("INSERT INTO usuario(nombre, correo, contra, foto) VALUES (?,?,?,?)",
  [name, email, pass, imagen], 
  (err,result) => {
    if (err) {
      resp.json({
        msg: "ErrBD"
      })
      console.log(err);
    } else {
      resp.json({
        msg: "OK"
      })
      
    }

  });



});


app.post("/login",

  (req, resp) => {

    db.query("SELECT * FROM usuario WHERE correo = ? AND contra = ?", 
      [req.body.email, req.body.pass], 
      (err, result) => {
        if (err) {
          console.log(err);
          resp.json({
            msg: "ErrBD"
          });
        }else{
          if (result.length > 0) {
            resp.json({
              msg: "encontrado",
              info: result[0].nombre
            })
            console.log(result);
          }else{
            resp.json({
              msg: "noEncontrado"
            });
            console.log(result);
          }
        }
      }
    )


  }
 


)