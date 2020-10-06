import app from 'firebase/app';

const config = {
    apiKey: "AIzaSyBx9rCRB4GPzFk37vtPqfW2rNEpBt8d25k",
    authDomain: "marvel-quiz-28407.firebaseapp.com",
    databaseURL: "https://marvel-quiz-28407.firebaseio.com",
    projectId: "marvel-quiz-28407",
    storageBucket: "marvel-quiz-28407.appspot.com",
    messagingSenderId: "434509648593",
    appId: "1:434509648593:web:2aebb36fd22c6c70f0abf0"
  };

class Firebase {
    constructor() {
        app.initializeApp(config);

    }
}

export default Firebase;