import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
import {getDatabase, limitToLast} from 'firebase/database';
import {get, query, orderByChild, ref, push, set, onValue} from "firebase/database";
import {limit} from 'firebase/firestore'
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

export default function updateCoords(target, ratio, map, callback){
    const database = getDatabase(app)
    var toFindRef = ref(database, 'toFind/');

    onValue(toFindRef, (snapshot) => {
        if (snapshot.val()[target][map]){
            if ((snapshot.val()[target][map]['xCoordMax'] >= ratio[0] && ratio[0] >= snapshot.val()[target][map]['xCoordMin'])
            &&
            (snapshot.val()[target][map]['yCoordMax'] >= ratio[1] && ratio[1] >= snapshot.val()[target][map]['yCoordMin'])
            ){
                callback(true, target)
            }else{
                callback(false, target);
            }
                
        }else{
            console.log((new Error('Not a target')))
        }
    });


};


export function getHighscore(map, callback){
    const database = getDatabase(app)
    var scoreref = ref(database, `${map}/`);

    onValue(scoreref, (snapshot) => {
        const dict = snapshot.val()
        
        let sorted = Object.values(dict)

        sorted.sort(function(first, second){
            return second.scoreTime-first.scoreTime
        })

        let top5 = sorted.reverse().slice(0, 5)


        callback(top5, map)

    })
}

//tryna get it to w
export function writeData(name, time, map){
    const database = getDatabase(app)

    const postListRef = ref(database, map)

    const newPostRef = push(postListRef)

    set(newPostRef, {
            scoreName: name,
            scoreTime: time,
       
    });
}
