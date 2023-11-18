console.clear();
function MyArray() {
    this.cars = ['Audi', 'BMW', 'Toyota', 'Mercedes-Benz'];
    this.shiftedCar = this.cars.shift();
    this.unshiftedCar = this.cars.unshift('Lada');
}
const myNewArray = new MyArray();
console.log(myNewArray.shiftedCar);
console.log(myNewArray.cars);

console.log(myNewArray.unshiftedCar);
console.log(myNewArray.cars);
