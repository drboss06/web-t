// Массив объектов товаров
const products = [
  {name: "apple", count: 5, price: 70},
  {name: "orange", count: 10, price: 90}
];

// Переменная для общей стоимости
let totalCost = 0;

// Подсчет общей стоимости с помощью forEach
products.forEach(item => {
  totalCost += item.count * item.price;
});

// Создание нового объекта
const resultObject = {
  bill: products,
  result: totalCost
};

// Вывод результата в консоль
console.log("Итоговый объект:", JSON.stringify(resultObject));

// Получение текущей даты и времени
const currentDate = new Date();
console.log("Текущая дата и время:", currentDate.toString());
