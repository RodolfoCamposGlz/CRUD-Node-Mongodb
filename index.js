const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000; 
require('./database');

const Movie=require('./models/movie');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());
app.get('/', (req, res) => {
    res.send("It's alive!");
});

//Crud 
//Create
app.post('/api/movies',(req,res)=>{
    //Primera forma
    // //1) Pedir el body del cliente 
    // const json={
    //     name:req.body.name
    // };
    // //2) Usar el body para crear un documento
    // const newMovie= new Movie(json);
    //3)Salvar el doc y responderle al cliente

    //Segunda forma
    const newMovie= new Movie(req.body);
    newMovie.save()
            .then((movie)=> res.status(201).send(movie))
            .catch((err)=> res.status(400).send(err));
});

//Read All
app.get('/api/movies',(req,res)=>{
    Movie.find()
         .then(movies => res.send(movies))
         .catch(err=> res.send(err));
})

//Read by id
app.get('/api/movies/:id',(req,res)=>{
    const id =req.params.id;
    Movie.findById(id)
         .then(movies => res.send(movies))
         .catch(err=> res.send(err));
})

//Update one
app.patch('/api/movies/:id',(req,res)=>{
    const id =req.params.id;
    Movie.findByIdAndUpdate(id,req.body,{new:true})
         .then(updatedmovie => res.send(updatedmovie))
         .catch(err=> res.send(err));
})

//Delete 
app.delete('/api/movies/:id',(req,res)=>{
    const id =req.params.id;
    Movie.findByIdAndDelete(id)
         .then(() => res.status(204).send())
         .catch(err=> res.status(404)('Movie could not remove'));
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));