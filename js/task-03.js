// Напиши функцию findBestEmployee(employees), 
//которая принимает объект сотрудников и возвращает имя самого
//продуктивного(который выполнил больше всех задач).
//Сотрудники и кол - во выполненых задач содержатся 
//как свойства объекта в формате "имя": "кол-во задач".


const num = [1, 2, 3, 4, 9];

console.log(Math.max(...num));



const findBestEmployee = function(employees) {
    let workResult = Object.values(employees)
  //console.log(workResult);

    const nameEmploee = Object.keys(employees)
    //console.log(nameEmploee);
  
    //console.log(Math.max(...workResult));
    let bestResult = Math.max(...workResult);
    // console.log(workResult.indexOf(bestResult));
    let indexBestResult = workResult.indexOf(bestResult)
   // console.log(nameEmploee[indexBestResult]);
    let bestEmploeeName = nameEmploee[indexBestResult];
    return bestEmploeeName
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux














































// const findBestEmployee = function (employees) {
//   'use strict';
//   // Write code under this line
//   let max = 0;
//   let name = '';
  
//   const keys = Object.keys(employees);
  
//   for(const key of keys){
//    if (max < employees[key]){
//      max = employees[key]
//    name = key
//    }
//   }
//   return name;
// };

// // Объекты и ожидаемый результат
// const developers = {
//   ann: 29,
//   david: 35,
//   helen: 1,
//   lorence: 99,
// }; 
// console.log(findBestEmployee(developers)); 
// // 'lorence'

// const supports = {
//   poly: 12,
//   mango: 17,
//   ajax: 4,
// }; 
// console.log(findBestEmployee(supports)); 
// // 'mango'

// const sellers = {
//   lux: 147,
//   david: 21,
//   kiwi: 19,
//   chelsy: 38,
// }
// console.log(findBestEmployee(sellers)); 