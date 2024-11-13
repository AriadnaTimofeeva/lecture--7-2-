/*
Задание 3.
Понять, какой принцип нарушен в каждой задаче; Написать правильное решение, не нарушая принципы SOLID

Нарушено:
Single Responsibility Principle (SRP):
Класс User содержит метод save, который отвечает за логику сохранения, 
что включает ответственность за управление данными пользователя и взаимодействие с базой данных.
*/

// Класс пользователя
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getName() {
        return this.name;
    }
}

// Сервис для управления пользователями
class UserService {
    save(user) {
        console.log(`Сохранение пользователя ${user.getName()} в базу данных`);
    }
}

// Использование
const user = new User("Алексей", 30);
const userService = new UserService();
userService.save(user);