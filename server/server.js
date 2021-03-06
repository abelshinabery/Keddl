const express = require('express');
const app = express();

const mongoose = require('mongoose');
const teaSchema = require('./teaSchema.js');
const Tea = mongoose.model('tea', teaSchema, 'tea');

const path = require('path');
const connectionString = process.env.CONN_STRING;
const port = 4000;


const DIST_DIR = path.join(__dirname, '../dist');
const HTML_FILE = path.join(DIST_DIR, 'index.html');
app.use(express.static(DIST_DIR));

app.route('/')
.get((req, res) => {
	res.sendFile('HTML_FILE');
})

app.route('/api/teas')
.get(getTea);

async function getTea(req, res) {
	await mongoose.connect( connectionString, {useNewUrlParser: true, useUnifiedTopology: true})
	.then( async () => { 
		console.log('connected'); 

		Tea.find({}, (err, tea) => {
			if (err) {
				res.send(err);
			} else {
				res.json(tea);
			}
			mongoose.connection.close( () => {
				console.log('disconnected');
			});
		});
	})
	.catch(err => {
		console.log(err);
	})
}

app.listen(process.env.PORT || { port }, () => {
	console.log(`App listening at http://localhost:${port}`);
});
