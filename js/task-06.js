// Напиши функцию calculateTotalPrice(allProdcuts, productName), 
//которая получает массив объектов и имя продукта(значение свойства name).
//Возвращает общую стоимость продукта(цена * количество).

// Вызовы функции для проверки работоспособности твоей реализации.


const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

// const calculateTotalPrice = function (allProducts, productName) {
//   let result = 0;
//   for (let product of allProducts) {
//     // console.log('object', product);
//     result += product.price * product.quantity;
//   }
//   return result;
// };
const calculateTotalPrice = function (allProducts, productName) {
  for (let product of allProducts) {
    // console.log('object', product);
    for (let key in product) {
      if (product[key] === productName) {
        return product.price * product.quantity
      }
    }
  }
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(calculateTotalPrice(products, 'Радар')); // 5200

console.log(calculateTotalPrice(products, 'Дроид')); // 2800