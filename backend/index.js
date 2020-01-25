if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}


const express = require('express');
const morgan = require('morgan');
const multer = require('multer');
const path = require('path');



//Inicializar
const app = express();
require('./database');

//configuraciones
app.set('port', process.env.PORT || 3000);

//Middleware
app.use(morgan('dev'));

const storage = multer.diskStorage({
    destination: path.join(__dirname,'public/uploads'),
    filename(req,file, cb){
        cb(null, new Date().getTime() + path.extname(file.originalname));
    }
});

app.use(multer({storage}).single('image'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routes
app.use(require('./routes/books'));

//static file
app.use(
    express.static(
        path.join(
            __dirname, 'public'
        )
    )
);


//iniciar el servidor
app.listen(app.get('port'), ()=>{
    console.log('Servidor escuchando en el puerto', app.get('port'));
});