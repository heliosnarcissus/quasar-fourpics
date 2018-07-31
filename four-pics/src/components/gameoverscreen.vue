<template>

     <q-page class="flex flex-center">

    <div style="padding-bottom: 100px;">
    <q-card-main style="background-color:#FF8C00;" class="shadow-1">
     <div  class="qtn-button" style="background">
             <p> GAMEOVER </p>
           </div>
      </q-card-main></br>

      <q-card-main style="background-color:white;" class="shadow-1">

        <div >
    	   <q-btn id="choice1" @click="btnClick" class="choice-button" color="secondary"> Play Again </q-btn>
           <q-btn id="choice2" @click="fbLogin" class="choice-button" color="secondary">Facebook Share</q-btn>

           <q-btn id="choice3" @click="twitterShare" class="choice-button" color="secondary" >Twitter Share</q-btn>


        </div>

      </q-card-main>
    </div>

      </q-page>

</template>

<script>



export default {
    data(){
         return{

         tweetText: ''
      }
    },
   methods:{
      btnClick(event) {
         console.log(" ");
      },
       fbLogin(){

          this.provider = new this.$firebase.auth.FacebookAuthProvider();
          this.$firebase.auth().signInWithPopup(this.provider).then(function(result) {
          console.log("provider " + this.provider);

		  var token = result.credential.accessToken;

		  var user = result.user;

		}).catch(function(error) {

		  var errorCode = error.code;
		  var errorMessage = error.message;
		  // The email of the user's account used.
		  var email = error.email;
		  // The $firebase.auth.AuthCredential type that was used.
		  var credential = error.credential;
		  console.log(credential);

		});
		 /*
		 this.$firebase.auth().getRedirectResult().then(function(result) {
		  if (result.credential) {
		    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
		    var token = result.credential.accessToken;
		    // ...
		    console.log("fucker");
		  }
		  // The signed-in user info.
		  var user = result.user;
		  console.log("hello fucker");
		}).catch(function(error) {
		  // Handle Errors here.
		  var errorCode = error.code;
		  var errorMessage = error.message;
		  // The email of the user's account used.
		  var email = error.email;
		  // The firebase.auth.AuthCredential type that was used.
		  var credential = error.credential;
		  // ...
		}); */

       },

       twitterShare(){
       	  this.tweetText = "I managed to reach level "+
          window.open("https://twitter.com/intent/tweet?text='123456789'");
       }
   },
   mounted(){
      console.log("GameOver screen called.");
   }
}
</script>

<style scoped>

.choice-button {
    background-color: #FFFFFF;
    color:#4CAF50;
    padding: 15px 32px;
    font-size: 18px;
    margin: 15px 30px;
    cursor: pointer;
    width: 250px;
    height: 65px;
    text-transform: lowercase;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.qtn-button {
    background-color: white;
    color: #FF6161;
    flex-direction: column;
    display: flex;
    justify-content:center;
    align-items: center;
    align-content: center;
    font-size: 45px;
    margin: 15px 30px;
    cursor: pointer;
    width: 250px;
    height: 80px;
    text-transform: uppercase;
    font-weight: bold;
    padding-top: 18px;

    /*add some glow effects*/
    text-shadow: 0 0 2px #800000;
}
</style>
