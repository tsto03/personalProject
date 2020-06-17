const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('mongodb');
const dotenv = require('dotenv'); 

const PORT = process.env.PORT || 3000;
const app = express();
dotenv.config(); 

const path = require('path');

app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

let db_handler;
const DB_URL = process.env.DB_URL;
const DB_NAME = process.env.DB_NAME;
const COLLECTION_NAME = process.env.COLLECTION_NAME;
// const COLLECTION_NAME = 'contactForm';
// const DB_URL = 'mongodb://localhost:27017';
// const DB_NAME = 'students_db';
// const COLLECTION_NAME = 'students';


let mongo_client = mongodb.MongoClient;
mongo_client.connect(DB_URL, (err, db_client) => {
    if (err) {
        console.log("Error: " + err);
    }
    else {
        console.log("Database Connected");
        db_handler = db_client.db(DB_NAME);
    }
});



app.get('/', (req, res) => {
    res.render('index', {});
});

app.get('/about', (req, res) => {
    res.render('about', {});

});

app.get('/blueprint', (req, res) => {
    res.render('blueprint', {});

});

app.get('/archives', (req, res) => {
    res.render('archives', {});

});

app.get('/contact', (req, res) => {
    res.render('contact', {});

});

app.get('/allstudents', (req, res) => {
    db_handler.collection(COLLECTION_NAME).find({}).toArray((err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.render('allstudents', {
                'all_students': result
            });
        };
    });
});



app.get('/yourblueprint', (req, res) => {
    res.render('yourblueprint', {
        'your_blueprint': your_blueprint
    });
});




app.get('/studentinfo', (req, res) => {
    db_handler.collection(COLLECTION_NAME).find({}).toArray((err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
            res.render('studentinfo', {
                'all_students': result
            });
        };
    });

});

let your_blueprint = {};

app.post('/add', (req, res) => {
    const form_data = req.body;

    const fname = form_data['fname'];
    const lname = form_data['lname'];
    let grade = form_data['grade'];
    const college = form_data['college'];
    const car = form_data['car'];
    const credit = form_data['credit'];
    const saving = form_data['saving'];
    const debt = form_data['debt'];
    const goal = form_data['goal'];

    const my_object = {
        fname: fname,
        lname: lname,
        grade: grade,
        college: college,
        car: car,
        credit: credit,
        saving: saving,
        debt: debt,
        goal: goal
    };

    db_handler.collection(COLLECTION_NAME).insertOne(my_object, (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log("Student info added");
            your_blueprint = my_object;
            res.redirect('yourblueprint');


        }
    });

});

app.post('/addContact', (req, res) => {
    const form_data = req.body;

    const fname = form_data['fname'];
    const lname = form_data['lname'];
    const email = form_data['email'];
    const pnumber = form_data['pnumber'];
    const message = form_data['message'];

    const my_obj = {
        fname: fname,
        lname: lname,
        email: email,
        pnumber: pnumber,
        message: message
    };

    db_handler.collection(COLLECTION_NAME).insertOne(my_obj, (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log("Contact info added");
            res.redirect('/contact');
        }
    });


})

app.listen(PORT, () => {
    console.log(`Server Started on Port: ${PORT}`)
});













