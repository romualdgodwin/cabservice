//require('dotenv').config()
const express = require('express')
const app = express()
const mysql = require('mysql2')
const port = 3000;


const connexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'yoo',
    database: 'cabtoservice'
});


    



connexion.connect((err) => {
    if (err) {
        console.error('Error connection to database :', err);
    }
    else {
        console.log('Connection to database MySQL');
    }

})
;


app.get("/user/:email", (req, res) => {
    const email = req.params.email;
    connexion.query('SELECT * FROM `Passenger` WHERE `email` = ?', [email], (err, results) => {
        if (err) {
            console.error('Erreur requete :', err);
            res.status(500).send('Erreur lors de la récupération des données utilisateur');
        } else {
            if (results.length > 0) {
                res.status(200).json(results[0]);
            } else {
                res.status(404).send('Utilisateur non trouvé');
            }
        }
    });
});



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

 