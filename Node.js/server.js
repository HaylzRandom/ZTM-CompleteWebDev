import express from 'express';
import path from 'path';

const app = express();

app.use(express.static(path.resolve() + '/public'));

//Middleware
/* app.use((req, res, next) => {
	next();
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json()); */

/* app.get('/', (req, res) => {
	res.send('test test');
}); */

/* app.get('/:id', (req, res) => {
	//console.log(req.query);
	//req.body
	//console.log(req.headers);
	//console.log(req.params);
	//console.log('root');
	res.status(404).send('not found');
}); */

/* app.get('/profile', (req, res) => {
	res.send('getting profile');
});

app.post('/profile', (req, res) => {
	console.log(req.body);
	res.send('success');
}); */

app.listen(3000);
