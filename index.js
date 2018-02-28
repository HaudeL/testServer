const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://codebzh:codebzh29@ds261755.mlab.com:61755/gestionlivres';

// Connexion au serveur avec la méthode connect
mongoClient.connect(url, function (err, db) {
    if (err) {
        return console.error('Connection failed', err);
    }
    console.log('Connection successful on ', url);

    //app.use(bodyParser.urlencoded({ extended: false }));
   // app.use(bodyParser.json());

    app.get('/', (req, res) => {
        res.send('Hello World!');
    });

    //app.post('/vehicule', (req, res) => {
    // res.send('Got a POST request');
    // });
    //app.listen(3030, function () {
    //   console.log('listening on port 3030');
   // });
   // app.get('/recup', (req, res) => {
    //    res.send('c écolo !');
    //});
    // Récupération de la collection users
var collection = gestionlivres.collection('vehicule');

// Création de deux objets users
var vehicule1 = {couleur: 'bleu', marque: 'Mazda', modele: '3'};
var vehicule2 = {couleur: 'gris', marque: 'Peugeot', modele: '206'};

// Enregistrement de plusieurs objets en db avec insertMany
collection.insertMany([vehicule1, vehicule2], function (err, result) {
    if (err) {
        console.error('Insert failed', err);
    } else {
        console.log('Insert successful', result);
    }
   // app.post('/vehicule', (req, res) => {
       // res.json({
           // message: "Ajoute un vehicule",
           // couleur: req.body.couleur,
          //  marque: req.body.marque,
          //  modele: req.body.modele,
           // methode: req.method
       // });
    });


    db.close()
});