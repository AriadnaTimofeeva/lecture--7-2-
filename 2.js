/*
Задание 2.
Понять, какой принцип нарушен в каждой задаче; Написать правильное решение, не нарушая принципы SOLID

Нарушено:
Liskov Substitution Principle (LSP):
Penguin наследует от Bird, но не может выполнять метод fly как нужно. 
*/

// Интерфейс для летающих птиц
class Flyable {
    fly() {
        throw new Error("Метод fly должен быть реализован для летающих птиц!");
    }
}

// Базовый класс для птиц
class Bird {
    fly(){
    console.log("Птица летит");
    }
}

// Реализация летающей птицы (утка)
class Duck extends Bird {
    fly() {
        console.log("Утка летит");
    }
}

// Реализация нелетающей птицы (пингвин) 
class Penguin extends Bird {
}

// Использование
const birds = [new Duck(), new Penguin()];

birds.forEach(bird => {
    if (bird instanceof Flyable) {
        bird.fly(); // Вызывает fly только для летающих птиц
    } else {
        console.log("Эта птица не умеет летать");
    }
});