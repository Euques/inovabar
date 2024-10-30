// Importa as bibliotecas do Firebase
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

// Inicializa o Firebase
firebase.initializeApp({
    apiKey: "AIzaSyCNSzDh0tC80lhoFewOCCWFgF4ec2tCqQQ",
    authDomain: "inovabarapp.firebaseapp.com",
    databaseURL: "https://inovabarapp-default-rtdb.firebaseio.com",
    projectId: "inovabarapp",
    storageBucket: "inovabarapp.appspot.com",
    messagingSenderId: "341811259005",
    appId: "1:341811259005:web:55cbc721257b0b2ff63314"
});

// Cria uma instância do Firebase Messaging
const messaging = firebase.messaging();

// Manipula mensagens em segundo plano
messaging.setBackgroundMessageHandler((payload) => {
    console.log('Received background message: ', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/mstile-70x70.png' // Altere para o caminho do seu ícone
    };

    // Exibe a notificação
    return self.registration.showNotification(notificationTitle, notificationOptions);
});
