import * as firebase from "../../../node_modules/firebase";
import "../../../node_modules/firebase/auth";

const firebaseConfig = firebase.initializeApp({
	apiKey: "AIzaSyAOPVxZSS8NuHfJJNj9sYYEHaai3Dv4LSc",
	authDomain: "mapator-3bc03.firebaseapp.com",
	databaseURL: "https://mapator-3bc03.firebaseio.com",
	projectId: "mapator-3bc03",
	storageBucket: "mapator-3bc03.appspot.com",
	messagingSenderId: "1029740031742",
	appId: "1:1029740031742:web:993a7c31acd725d49f3faf",
	measurementId: "G-TG9TQ0NB3S"
});
export default firebaseConfig;