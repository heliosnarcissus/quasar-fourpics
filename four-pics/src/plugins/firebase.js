import * as firebase from 'firebase'

// Initialize Firebase
var config = {
   apiKey: "AIzaSyDHoE64V6KRSyinTb4A5i5IjQ83WsIYshA",
   authDomain: "for-dana.firebaseapp.com",
   databaseURL: "https://for-dana.firebaseio.com",
   projectId: "for-dana",
   storageBucket: "",
   messagingSenderId: "948378395843"
 };
  firebase.initializeApp(config);
// leave the export, even if you don't use it
export default ({ app, router, Vue }) => {
  Vue.prototype.$firebase = firebase
}
