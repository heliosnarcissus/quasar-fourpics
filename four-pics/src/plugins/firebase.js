import * as firebase from 'firebase'

// Initialize Firebase
var config = {
   // your firebase config here
 };
  firebase.initializeApp(config);
// leave the export, even if you don't use it
export default ({ app, router, Vue }) => {
  Vue.prototype.$firebase = firebase
}
