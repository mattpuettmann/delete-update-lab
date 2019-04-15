const express = require('express');
const app = express();
const Pizzas = require('./models/pizzas');
const methodOverride = require('method-override');

app.use(methodOverride('_method'));


app.get('/pizzas', (req, res) => {
	res.render('index.ejs', {
		Pizzas: Pizzas
	})
});

app.delete('/pizzas/:id', (req, res) => {
	Pizzas.splice(req.params.id, 1);
	res.redirect('/pizzas');


	// res.send('delete route works');
});












app.listen(3000, () => {
	console.log("I'm listening");
})