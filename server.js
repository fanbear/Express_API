const express = require('express');
const bodyParser = require('body-parser');
const artistsController = require('./controllers/artists');
const conectUrl = "mongodb://localhost:27017";
//brew services start mongodb-community@4.4
//brew services stop mongodb-community@4.4
//server strat in new tab mongo --host localhost:27017
//https://www.youtube.com/watch?v=ELslnuxdonw&list=PLY4rE9dstrJzrDaSPKOrhNgQ19GhVl19u&index=6
const app = express();
let db = require('./db');

app.use(bodyParser.json()); //for parse correct json from body-parser
app.use(bodyParser.urlencoded({ extended: true}));

// get
app.get('/', (req, res) => {
    res.send('Hello Worl');
})

app.get('/artists', artistsController.all);

app.get('/artists/:id', artistsController.findById);


//put  //change data in database
app.put('/artists/:id', artistsController.update);

//delete //delete data in database
app.delete('/artists/:id', artistsController.delete);

//post
app.post('/artists', artistsController.create);



db.connect(
    conectUrl, 
    (err) => {
        if(err) return console.log(err);

        app.listen(3012, () => {
        console.log('API server started');
    })
})