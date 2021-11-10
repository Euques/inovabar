importScripts('https://www.gstatic.com/firebasejs/7.14.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.14.2/firebase-messaging.js');

var firebaseConfig = {
apiKey: "AIzaSyCNSzDh0tC80lhoFewOCCWFgF4ec2tCqQQ",
authDomain: "inovabarapp.firebaseapp.com",
databaseURL: "https://inovabarapp-default-rtdb.firebaseio.com",
projectId: "inovabarapp",
storageBucket: "inovabarapp.appspot.com",
messagingSenderId: "341811259005",
appId: "1:341811259005:web:55cbc721257b0b2ff63314"
  };


  
  firebase.initializeApp(firebaseConfig);
  
  const messaging = firebase.messaging();
  
messaging.setBackgroundMessageHandler(function(payload) {  
 var  title = payload.data.title;
 var options = {
        body: payload.data.body,
        icon: payload.data.icon,
        image: payload.data.image,
     data:{
        time: new Date(Date.now()).toString(),
        click_action: payload.data.click_action
        }    
  };
 return self.registration.showNotification(title, options);
});

self.addEventListener('notificationclick', function(event) {
  var action_click = event.notification.data.click_action;
  event.notification.close();
  event.waitUntil(
    clients.openWindow(action_click)
  );
});
