/*
Задание 1.
Понять, какой принцип нарушен в каждой задаче; Написать правильное решение, не нарушая принципы SOLID
*/

/*
Нарушено:
Single Responsibility Principle (SRP):
Класс Notification отвечает за уведомления и одновременно создает экземпляр EmailService. 
Это делает его ответственным за 2 момента: управление уведомлениями и управление зависимостями. 
Dependency Inversion Principle (DIP):
Notification зависит от конкретной реализации EmailService, 
что делает его трудным для тестирования и расширения ( другие способы уведомления)
 */


// Интерфейс для сервиса уведомлений
class NotificationService {
    sendMessage(message) {
        throw new Error("Метод sendMessage должен быть реализован");
    }
}

// Реализация EmailService
class EmailService extends NotificationService {
    sendMessage(message) {
        console.log(`Отправка email с сообщением: ${message}`);
    }
}

// Класс Notification, который принимает зависимость через конструктор
class Notification {
    constructor(notificationService) {
        this.notificationService = notificationService;
    }

    notify(message) {
        this.notificationService.sendMessage(message);
    }
}

// Использование
const emailService = new EmailService();
const notification = new Notification(emailService);
notification.notify("Важное сообщение");