// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class ClientList {

    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

// створити пустий масив, наповнити його 10 об'єктами Client
let client = [
    new ClientList(25, 'Igor', 'RRR', 'rrr@gmail.com', '+380677771112', ["product1", "product2", "product3", "product4", "product 5"] ),
    new ClientList(45, 'Petro', 'VVV', 'vvv@gmail.com', '+380677772223', ["product1", "product2"] ),
    new ClientList(12, 'Ivan', 'SSS', 'sss@gmail.com', '+380677773334', ["product1", "product2", "product4", "product 5"] ),
    new ClientList(85, 'Misha', 'JJJ', 'jjj@gmail.com', '+380677774445', ["product1"] ),
    new ClientList(105, 'Taras', 'LLL', 'lll@gmail.com', '+380677775556', ["product1", "product2", "product3", "product4", "product 5","product6", "product7", "product8", "product9", "product 10"] ),
    new ClientList(5, 'Roman', 'PPP', 'ppp@gmail.com', '+380677776667', ["product1", "product2", "product3", "product4", "product 5","product6", "product7", "product8", "product9","product10", "product11", "product12", "product13",] ),
    new ClientList(135, 'Yurii', 'HHH', 'hhh@gmail.com', '+380677777778', ["product1", "product2", "product3", "product4", "product 5","product6", "product7", "product8", "product9"] ),
    new ClientList(88, 'Kostia', 'FFF', 'fff@gmail.com', '+380677778889', ["product1", "product2", "product3", "product4", "product 5","product6", "product7", "product8",] ),
    new ClientList(175, 'Oksana', 'UUU', 'uuu@gmail.com', '+380677779990', ["product1", "product2", "product3", "product4", "product 5","product6", "product7", "product8", "product9"] ),
    new ClientList(31, 'Ira', 'KKK', 'kkk@gmail.com', '+380677770001', ["product1", "product2", "product3", "product4", "product 5","product6", "product7", "product8",] )
]
console.log(client)

// Взяти масив (Client []).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sort = client.sort( function (client1, client2){
    return client1.order.length - client2.order.length;
});
console.log(sort);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель,
// виробник, рік випуску, максимальна швидкість, об'єм двигуна.

function  Car(manufacturer, year_of_manufacture, maximum_speed, engine_capacity) {
    this.manufacturer = manufacturer;
    this.year_of_manufacture = year_of_manufacture;
    this.maximum_speed = maximum_speed;
    this.engine_capacity = engine_capacity;
    // Додати в об'єкт функції:
    // -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
    this.drive = function () {
        console.log("їдемо зі швидкістю " + this.maximum_speed + " на годину");
        }
    // -- info () - яка виводить всю інформацію про автомобіль
    this.info = function () {
        console.log(this.manufacturer +' ' + this.year_of_manufacture + ' ' + this.maximum_speed + ' ' + this.engine_capacity)
    }
    // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    this.increaseMaxSpeed = function (newSpeed) {
        this.maximum_speed += newSpeed
    }

// -- changeYear (newValue) - змінює рік випуску на значення newValue
    this.changeYear = function (newValue) {
        this.year_of_manufacture = newValue
    }

    // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
    this.addDriver = function (newDriver){
        this.driver = newDriver
    }
}
let cars1 = new Car('China', 2000, 250, 0.5);
cars1.drive();
cars1.info();
cars1.increaseMaxSpeed(50);
cars1.changeYear(2010);
cars1.addDriver('Igor');
console.log(cars1);

// - (Те саме, тільки через клас)
class Car1 {
    constructor(manufacturer, year_of_manufacture, maximum_speed, engine_capacity) {
        this.manufacturer = manufacturer;
        this.year_of_manufacture = year_of_manufacture;
        this.maximum_speed = maximum_speed;
        this.engine_capacity = engine_capacity;
        // -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
        this.drive = function () {
            console.log("їдемо зі швидкістю " + this.maximum_speed + " на годину");
        }
        // -- info () - яка виводить всю інформацію про автомобіль
        this.info = function () {
            console.log(this.manufacturer +' ' + this.year_of_manufacture + ' ' + this.maximum_speed + ' ' + this.engine_capacity)
        }
        // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
        this.increaseMaxSpeed = function (newSpeed) {
            this.maximum_speed += newSpeed
        }

// -- changeYear (newValue) - змінює рік випуску на значення newValue
        this.changeYear = function (newValue) {
            this.year_of_manufacture = newValue
        }

        // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
        this.addDriver = function (newDriver){
            this.driver = newDriver
        }
    }
}
let cars2 = new Car('China', 2000, 250, 0.5);
cars2.drive();
cars2.info();
cars2.increaseMaxSpeed(100);
cars2.changeYear(2020);
cars2.addDriver('Misha');
console.log(cars2);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити 10 попелюшок , покласти їх в масив.
class Cinderella {
    constructor(name, age, foot_size) {
        this.name = name;
        this.age = age;
        this.foot_size = foot_size;
    }
}
let cinderella = [
    new  Cinderella('Ira', 18, 36),
    new  Cinderella('Vira', 19, 37),
    new  Cinderella('Katia', 20, 38),
    new  Cinderella('Tanya', 21, 39),
    new  Cinderella('Galia', 22, 38),
    new  Cinderella('Roma', 23, 37),
    new  Cinderella('Oksana', 24, 36),
    new  Cinderella('Olia', 25, 35),
    new  Cinderella('Olesia', 26, 40),
    new  Cinderella('Polina', 27, 34)
]
console.log(cinderella);

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince {
    constructor(name, age, the_shoe_he_found) {
        this.name = name;
        this.age = age;
        this.the_shoe_he_found = the_shoe_he_found;
    }
}
let prince = new Prince('Max', 23, 35)
;
console.log(prince)

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
for (let i of cinderella){
    if (i.foot_size === prince.the_shoe_he_found){
        console.log(i.name + ' - ' + prince.name)
    }
}

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
let findOlia = cinderella.find(function (name) {
    console.log(name);
    return name.name === 'Olia'
})