const path = require('path');
const express = require('express');
const app = express();
const hbs = require('hbs');

const templatePath = path.join(__dirname, '../templates/views');
const partialPath = path.join(__dirname, '../templates/partials');

app.set('view engine', 'hbs');
app.set('views', templatePath);
hbs.registerPartials(partialPath);

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});
app.get('/contact', (req, res) => {
  res.render('contact');
});
app.get('/service', (req, res) => {
  res.render('service');
});
app.get('/blog', (req, res) => {
  res.render('blog');
});

app.listen(8000, () => {
  console.log('Server is running on port 8000');
});
