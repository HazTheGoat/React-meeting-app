import Rebase from 're-base'
import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyB4fEaPECuIb8Baz8quTKgSiosF0qtAq3M",
    authDomain: "react-meeting-app.firebaseapp.com",
    databaseURL: "https://react-meeting-app.firebaseio.com",
    projectId: "react-meeting-app",
    storageBucket: "react-meeting-app.appspot.com",
    messagingSenderId: "223664004554"
}

const app = firebase.initializeApp(config)
const base = Rebase.createClass(app.database())

export default base;