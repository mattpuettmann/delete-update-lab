const express = require('express');
const app = express();
const Pizzas = require('./models/pizzas');




app.get('/pizzas', (req, res) => {
	res.render('index.ejs', {
		Pizzas: Pizzas
	})
});














app.listen(3000, () => {
	console.log("I'm listening");
})