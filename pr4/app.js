// app.js
const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const app = express();

// Настройка Mustache в качестве шаблонизатора
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

// Настройка Body-parser для обработки POST-запросов
app.use(bodyParser.urlencoded({ extended: true }));

// Статические файлы (CSS, изображения и т. д.)
app.use(express.static(__dirname + '/public'));

// Маршруты
app.get('/', (req, res) => {
  res.render('home', { title: 'Home Page' });
});

app.get('/page1', (req, res) => {
  res.render('page1', { title: 'Page 1', data: loadJsonData('data/page1.json') });
});

app.get('/page2', (req, res) => {
  res.render('page2', { title: 'Page 2', data: loadJsonData('data/page2.json') });
});

app.get('/page3', (req, res) => {
  res.render('page3', { title: 'Page 3', data: loadJsonData('data/page3.json') });
});

app.get('/page4', (req, res) => {
  res.render('page4', { title: 'Page 4', data: loadJsonData('data/page4.json') });
});

app.get('/page5', (req, res) => {
  res.render('page5', { title: 'Page 5', data: loadJsonData('data/page5.json') });
});

// Страница с формой
app.get('/form', (req, res) => {
  res.render('form', { title: 'Form Page' });
});

// Обработка данных из формы
app.post('/submit-form', (req, res) => {
  const formData = Object.entries(req.body).map(([key, value]) => ({
    fieldName: key,
    fieldValue: value,
  }));
  res.render('form-result', { title: 'Form Submission', formData });
});

// Функция для загрузки данных из JSON
const fs = require('fs');
function loadJsonData(filePath) {
  const data = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(data);
}

// Запуск сервера
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
