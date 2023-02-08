import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
import {getDatabase} from 'firebase/database';
import {get, ref, push, set} from "firebase/database";

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

export function updateCoords(x, y, target){
    const database = getDatabase(app)


    set(ref (database, 'toFind/' + target),{
        xCoord: x,
        yCoord: y
    });



}

//tryna get it to w
export default function writeData(name, time, map){
    const database = getDatabase(app)

    const postListRef = ref(database, map)

    const newPostRef = push(postListRef)

    set(newPostRef, {
            scoreName: name,
            scoreTime: time,
       
    });
}
