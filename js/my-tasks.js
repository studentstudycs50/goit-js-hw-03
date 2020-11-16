// Решите эти задачи сначала через цикл while, а затем через цикл for.
//  1 Выведите столбец чисел от 1 до 100.


// let counter = 1;
// while (counter <= 100) {
//     console.log(counter);
//     counter += 1;
//  }



// for (let count = 1; count <= 100; count++){
//     console.log(count);
// }



// // 2 Выведите столбец чисел от 11 до 33.


// let i = 11;
// while (i <= 33) {
//     console.log(i);
//     i += 1;
// }


// for (let i = 11; i <= 33; i++){
//     console.log(i);
// }




// 3 Выведите столбец четных чисел в промежутке от 0 до 100.

// let i = 0;
// while (i <= 100) {
//     console.log(i);
//     i += 2;
// }

// for (let i = 0; i <= 100; i += 2){
// console.log(i);

// }


//4 С помощью цикла найдите сумму чисел от 1 до 100.

// let sum = 0;
// for (let i = 0; i <= 100; i++){
//     sum += i;
// }
// console.log(sum);





//Дан объект obj. С помощью цикла for-in выведите на экран ключи и элементы этого объекта.

// const obj = {
//     green: 'зеленый',
//     red: 'красный',
//     blue: 'голубой'
// }
// for (const key in obj) {
//     console.log('color: ', key);
// }



// Дан объект obj с ключами Коля, Вася, Петя с элементами '200', '300', '400'.
// С помощью цикла for-in выведите на экран строки такого
// формата: 'Коля - зарплата 200 долларов.'.


// const object = {
//     kolya: 200,
//     vasya: 300,
//     petya: 400
// }
// for (const key in object) {
//     console.log(key + ' - зарплата ' + object[key] + ' долларов.' );
// }


// const object = {
//     nul: 0,
//     one: 1,
//     two: 2
// }
// for (const key in object) {
//     console.log(key + 'this is pzdc' + object[key] + 'but we with lopata');
// }

// Дан массив с элементами 2, 5, 9, 15, 0, 4.
// С помощью цикла for и оператора if выведите на экран
// столбец тех элементов массива, которые больше 3 - х, но меньше 10.

// let arr = [2, 5, 9, 15, 0, 4];
// for (let i = 0; i <= 10; i++){
//     if (i >= 3 && i <= 10) {
//         console.log(i);
//     }
// }



// / Объекты
// // ==============================================================================
// const products = [
//   {
//     id: "1",
//     name: "milk",
//     value: "Молоко",
//     price: 20,
//     sale: true,
//     quantity: 10,
//   },
//   {
//     id: "2",
//     name: "water",
//     value: "Вода",
//     price: 10,
//     sale: false,
//     quantity: 50,
//   },
//   {
//     id: "3",
//     name: "juice",
//     value: "Сок",
//     price: 34,
//     sale: true,
//     quantity: 24,
//   },
//   {
//     id: "4",
//     name: "fruitDrink",
//     value: "Морс",
//     price: 32,
//     sale: true,
//     quantity: 25,
//   },
//   {
//     id: "5",
//     name: "milkShake",
//     value: "Молочный коктейль",
//     price: 37,
//     sale: false,
//     quantity: 37,
//   },
// ];
// 1. Создайте функцию getSaleProducts(),
//которая вернет новый массив со свойством sale равным true.

// const products = [
//   {
//     id: "1",
//     name: "milk",
//     value: "Молоко",
//     price: 20,
//     sale: true,
//     quantity: 10,
//   },
//   {
//     id: "2",
//     name: "water",
//     value: "Вода",
//     price: 10,
//     sale: false,
//     quantity: 50,
//   },
//   {
//     id: "3",
//     name: "juice",
//     value: "Сок",
//     price: 34,
//     sale: true,
//     quantity: 24,
//   },
//   {
//     id: "4",
//     name: "fruitDrink",
//     value: "Морс",
//     price: 32,
//     sale: true,
//     quantity: 25,
//   },
//   {
//     id: "5",
//     name: "milkShake",
//     value: "Молочный коктейль",
//     price: 37,
//     sale: false,
//     quantity: 37,
//   },
// ];
// 1. Создайте функцию getSaleProducts(),
//которая вернет новый массив со свойством sale равным true.

// function getSaleProducts(array, prop) {
//     const arr = [];
//     for (const item of array) {
//         if (item[prop]) {
//             arr.push(item)
//         }
//         console.log(products);
//     }
//     return arr;
// }
// console.log(getSaleProducts(products,'sale'));

// function getSaleProducts(array, prop) {
//     const arr = [];
//     for (const item of array) {
//         if (item[prop] > 30) { // фильтрация по цене если больше 30  если хоти добавить диапазон && item[prop < 35)                                                                           ]
//             arr.push(item)
//         }
//         console.log(products);
//     }
//     return arr;
// }
// console.log(getSaleProducts(products,'price'));

// 2. Создайте функцию getProductsName(), 
// которая вернет новый массив со всеми названиями
// продуктов на русском языке.


// const products = [
//   {
//     id: "1",
//     name: "milk",
//     value: "Молоко",
//     price: 20,
//     sale: true,
//     quantity: 10,
//   },
//   {
//     id: "2",
//     name: "water",
//     value: "Вода",
//     price: 10,
//     sale: false,
//     quantity: 50,
//   },
//   {
//     id: "3",
//     name: "juice",
//     value: "Сок",
//     price: 34,
//     sale: true,
//     quantity: 24,
//   },
//   {
//     id: "4",
//     name: "fruitDrink",
//     value: "Морс",
//     price: 32,
//     sale: true,
//     quantity: 25,
//   },
//   {
//     id: "5",
//     name: "milkShake",
//     value: "Молочный коктейль",
//     price: 37,
//     sale: false,
//     quantity: 37,
//   },
// ];

// function getProductsName(array) {
//     const arr = [];
//     for (const item of array) {
//         console.log(item);
//         arr.push(item.value)
//     }
//     return arr;
// }
// console.log(getProductsName(products));

// 3. Создайте функцию getTotalQuantity(),
//которая вернет общую сумму всех товаров
//на складе(свойство quantity).

// const products = [
//   {
//     id: "1",
//     name: "milk",
//     value: "Молоко",
//     price: 20,
//     sale: true,
//     quantity: 10,
//   },
//   {
//     id: "2",
//     name: "water",
//     value: "Вода",
//     price: 10,
//     sale: false,
//     quantity: 50,
//   },
//   {
//     id: "3",
//     name: "juice",
//     value: "Сок",
//     price: 34,
//     sale: true,
//     quantity: 24,
//   },
//   {
//     id: "4",
//     name: "fruitDrink",
//     value: "Морс",
//     price: 32,
//     sale: true,
//     quantity: 25,
//   },
//   {
//     id: "5",
//     name: "milkShake",
//     value: "Молочный коктейль",
//     price: 37,
//     sale: false,
//     quantity: 37,
//   },
// ];
 //==================== 

// function getSaleProducts(array, prop) {
//     const arr = [];
//     for (const item of array) {
//         if (item[prop]) {
//             arr.push(item)
//         }
//     //    console.log(products);
//     }
//     return arr;
// }
// console.log(getSaleProducts(products, 'sale'));

// function getTotalQuantity(array) {
//     let sum = 0;
//     for (const item of array) {
//      sum += item.quantity
//         //console.log('item :>> ', item);
//     }
//     return sum
// } 
// const result = getTotalQuantity(getSaleProducts(products, 'sale'))
// console.log(result);
 
//=============================
// function getTotalQuantity(array) {
//     let sum = 0;
//     for (const item of array) {
//      sum += item.quantity
//         //console.log('item :>> ', item);
//     }
//     return sum
// } 
// const result = getTotalQuantity(products)
// console.log(result);
 


// 4. Создайте функцию getProductById(), 
//которая будет возвращать продукт по id.
// const products = [
//   {
//     id: "1",
//     name: "milk",
//     value: "Молоко",
//     price: 20,
//     sale: true,
//     quantity: 10,
//   },
//   {
//     id: "2",
//     name: "water",
//     value: "Вода",
//     price: 10,
//     sale: false,
//     quantity: 50,
//   },
//   {
//     id: "3",
//     name: "juice",
//     value: "Сок",
//     price: 34,
//     sale: true,
//     quantity: 24,
//   },
//   {
//     id: "4",
//     name: "fruitDrink",
//     value: "Морс",
//     price: 32,
//     sale: true,
//     quantity: 25,
//   },
//   {
//     id: "5",
//     name: "milkShake",
//     value: "Молочный коктейль",
//     price: 37,
//     sale: false,
//     quantity: 37,
//   },
// ];
// function getProductById(array, id) {
   
//     for (const arrItem of array) {
//         if (arrItem.id === id) {
//             return arrItem
//         }
//     }
//  }

// const result = getProductById(products, '1')
// console.log(result);

                            


// 5. Создайте функцию deleteProductById(), 
//которая будет удялять из исходного массива products 
//товар по id.
//  const products = [
//   {
//     id: "1",
//     name: "milk",
//     value: "Молоко",
//     price: 20,
//     sale: true,
//     quantity: 10,
//   },
//   {
//     id: "2",
//     name: "water",
//     value: "Вода",
//     price: 10,
//     sale: false,
//     quantity: 50,
//   },
//   {
//     id: "3",
//     name: "juice",
//     value: "Сок",
//     price: 34,
//     sale: true,
//     quantity: 24,
//   },
//   {
//     id: "4",
//     name: "fruitDrink",
//     value: "Морс",
//     price: 32,
//     sale: true,
//     quantity: 25,
//   },
//   {
//     id: "5",
//     name: "milkShake",
//     value: "Молочный коктейль",
//     price: 37,
//     sale: false,
//     quantity: 37,
//   },
// ];
// const deleteProductById = (array, prop, val) =>{
//     for (const item of array) {
//         if (item[prop] === val) {
//             console.log(item);
//             array.splice(array.indexOf(item), 1)
//         }
//     }
//     return array
// }
// console.log(deleteProductById (products, 'id', '4'));



// 6. Создайте функцию createProduct(),
// которая будет добавлять новый продукт в исходный
// массив products.Товар передается в функцию в виде объекта
// const products = [
//   {
//     id: "1",
//     name: "milk",
//     value: "Молоко",
//     price: 20,
//     sale: true,
//     quantity: 10,
//   },
//   {
//     id: "2",
//     name: "water",
//     value: "Вода",
//     price: 10,
//     sale: false,
//     quantity: 50,
//   },
//   {
//     id: "3",
//     name: "juice",
//     value: "Сок",
//     price: 34,
//     sale: true,
//     quantity: 24,
//   },
//   {
//     id: "4",
//     name: "fruitDrink",
//     value: "Морс",
//     price: 32,
//     sale: true,
//     quantity: 25,
//   },
//   {
//     id: "5",
//     name: "milkShake",
//     value: "Молочный коктейль",
//     price: 37,
//     sale: false,
//     quantity: 37,
//   },
// ];
//6. Создайте функцию createProduct(),
// которая будет добавлять новый продукт в исходный
// массив products.Товар передается в функцию в виде объекта

// function createProduct(array, newObject) {
//  array.push(newObject)
 
// }
// const coffee = {
//     id: "6",
//     name: "coffee",
//     value: "cocou",
//     price: 37,
//     sale: false,
//     quantity: 37,
// }
    
// createProduct(products, coffee)
//     console.log(products);
    
// 7. Создайте функцию findProductByName(), 
// которая будет возвращать объект из массива products в
// зависимости от передаваемого значения name или value.

// const products = [
//   {
//     id: "1",
//     name: "milk",
//     value: "Молоко",
//     price: 20,
//     sale: true,
//     quantity: 10,
//   },
//   {
//     id: "2",
//     name: "water",
//     value: "Вода",
//     price: 10,
//     sale: false,
//     quantity: 50,
//   },
//   {
//     id: "3",
//     name: "juice",
//     value: "Сок",
//     price: 34,
//     sale: true,
//     quantity: 24,
//   },
//   {
//     id: "4",
//     name: "fruitDrink",
//     value: "Морс",
//     price: 32,
//     sale: true,
//     quantity: 25,
//   },
//   {
//     id: "5",
//     name: "milkShake",
//     value: "Молочный коктейль",
//     price: 37,
//     sale: false,
//     quantity: 37,
//   },
// ];

 
// const findProductByName = (array, option) => {
//     for (const item of array) {
//         if (item.name === option || item.value === option){
//     return item
//     }
//     }
// } 
// console.log(findProductByName(products, "Морс")); 

// 8. Создайте функцию editProduct(), которая будет изменять объект products. В качестве аргументов, в функцию будут передаваться id, а также ключ и его значение, которое нужно перезаписать.
// 9. Создайте функцию modifyProductList(), которая будет возвращать новый массив с продуктами у которых будут только свойства id, name, value и price
// 10. Создайте функцию addToCart(), которая будет записывать товар по id в новый массив cart.



//ФУНКЦИЯ КОТОРАЯ ВОЗВРАЩАЕТ 
//СУММУ ВСЕХ ЭЛЕМЕНТОВ МАССИВА

// const arr = [1, 2, 3, 4, 9,8] //27
// const returnSum = (array) => {
//     //let sum; undefined нужно ее оюязательно инициализировать
//     let sum = 0;
//     for (let i = 0; i < array.length; i += 1){
//        // console.log(array[i]); 
//         sum = sum + array[i] 
//     }
//     // for (const item of array) {}
//     //console.log(sum);
//     return sum;
// }
// console.log(returnSum(arr));




// // decomposition
// const num = [1, 2, 3, 4, 5, 6]
// for (let i = 0; i < num.length; i += 1){
//     console.table(num[i])// выводит индексы
//     //console.log(num.length); // всегда выводит последний элемент массива
// }



//найти элемент массива если элемент 
//массива есть верни true иначе false 


// const arr = ['bob', 'doc', 'rom', 'cat']
// const findElement = (array, toFind) => {
//     let length = array.length; 
//     for (let i = 0; i < length; i += 1){
//        // console.log(array[i]);  
//         if (toFind === arr[i]) {
//             return true
//         }
//     }
// return false
// }

//  const result = findElement(arr,'rom')
//  console.log(result)


// const carArray = ['bmw', 'audi', 'ford', 'audi']

// const letFindCar = (anyArray, anyElemToFind) => {
//     for (const elem of anyArray) {
//         if (elem === anyElemToFind) {
            
//             return true
//         }
//     }
//     return false
// }
// const result = letFindCar(carArray, 'ford')
// console.log(result);
