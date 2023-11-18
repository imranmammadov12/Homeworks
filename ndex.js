
// first


[second]
const arr = [1, 2, 3];
const element = 'begin';

for (let i = arr.length; i > 0; i--) {
    arr[i] = arr[i - 1];
}
arr[0] = element;

console.log(arr); 


//second

let arr = [1,2,3,4,5];

for ( let k = arr.length - 1; k >= 0; --k){
    console.log(user[k]);
}; 


//third

const user = {
  name: 'Imran',
  surname: 'Mammadov',
  age: 26,
  birthday: '12 may',
  birthplace: 'Ganja'
};

const fieldsInObject = [];
const fieldsNotInObject = [];

const maxAttempts = 10;

for (let attempts = 0; attempts < maxAttempts; attempts++) {
  const userInput = prompt(`Введите название поля `);

  if (userInput in user) {
    fieldsInObject.push(userInput);
  } else {
    fieldsNotInObject.push(userInput);
  }
}

console.log('Поля, которые были в объекте:', fieldsInObject);
console.log('Поля, которых не было в объекте:', fieldsNotInObject);