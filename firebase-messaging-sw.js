// Importa o script do Firebase para permitir o uso de Cloud Messaging
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging.js');

// Suas configurações do Firebase
const firebaseConfig = {
apiKey: "AIzaSyCNSzDh0tC80lhoFewOCCWFgF4ec2tCqQQ",
authDomain: "inovabarapp.firebaseapp.com",
databaseURL: "https://inovabarapp-default-rtdb.firebaseio.com",
projectId: "inovabarapp",
storageBucket: "inovabarapp.appspot.com",
messagingSenderId: "341811259005",
appId: "1:341811259005:web:55cbc721257b0b2ff63314"
  };

// Inicializa o Firebase
firebase.initializeApp(firebaseConfig);

// Cria uma instância do Firebase Messaging
const messaging = firebase.messaging();

// Manipula mensagens em segundo plano
messaging.onBackgroundMessage((payload) => {
    console.log('Received background message: ', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/path/to/icon.png' // Altere para o caminho do seu ícone
    };

    // Exibe a notificação
    self.registration.showNotification(notificationTitle, notificationOptions);
});

