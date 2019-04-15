const express = require('express');
const app = express();
const Pizzas = require('./models/pizzas');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');

app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended: false}));


app.put('/pizzas/:id', (req, res) => {
	
	Pizzas[req.params.id] = req.body;
	res.redirect('/pizzas');

});

app.get('/pizzas', (req, res) => {
	res.render('index.ejs', {
		Pizzas: Pizzas
	})
});


app.get('/pizzas/:id/edit', (req, res) => {
	res.render('edit.ejs', {pizzas: Pizzas[req.params.id], id: req.params.id});
});



app.delete('/pizzas/:id', (req, res) => {
	Pizzas.splice(req.params.id, 1);
	res.redirect('/pizzas');
});














app.listen(3000, () => {
	console.log("I'm listening");
})