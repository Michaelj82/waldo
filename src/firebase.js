import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
import {getDatabase} from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyAXi-OOGGILQKTT13T42YdqJWv8Bg-YRKc",

    authDomain: "waldo-662ee.firebaseapp.com",
  
    projectId: "waldo-662ee",
  
    storageBucket: "waldo-662ee.appspot.com",
  
    messagingSenderId: "959185418769",
  
    appId: "1:959185418769:web:e563d38007cafbe2d7cfb0",
  
    measurementId: "G-JSWE1QR918",

    databaseURL: "https://waldo-662ee-default-rtdb.firebaseio.com"
}

//initialize firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app)
const database = getDatabase(app)