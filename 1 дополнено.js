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

// Добавлено:
// Реализация тестового сервиса
class MockNotificationService extends NotificationService {
    sendMessage(message) {
        console.log(`Тестовое уведомление: ${message}`);
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

// Использование с реальным EmailService
const emailService = new EmailService();
const notification = new Notification(emailService);
notification.notify("Важное сообщение");

// Использование с тестовым MockNotificationService
const mockService = new MockNotificationService();
const testNotification = new Notification(mockService);
testNotification.notify("Тестовое сообщение");
