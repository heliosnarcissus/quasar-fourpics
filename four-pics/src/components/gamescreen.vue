<template>
  <q-page class="flex flex-center">

     <div >
          <div style="text-align: center; margin-right: 40px;margin-bottom: 15px" >
             <q-btn color="dark" outline> Level  1</q-btn>
          </div>
       <div>
            <q-card-main   class="card-1" style="background-color:#6497b1" >
                <div  style="background" >
                   <img src="/statics/imgs/milk.jpg">
                </div>
            </q-card-main>

            <q-card-main  class="card-1" style="background-color:#DCDCDC" >
            <div  style="background">
            <img src="/statics/imgs/cocomilktea.jpg">

            </div>
            </q-card-main>
       </div>
       <div >
             <q-card-main   class="card-1" style="background-color:#DCDCDC">
             <div  style="background">
             <img src="/statics/imgs/serenitea.jpg">

             </div>
             </q-card-main>

             <q-card-main  class="card-1" style="background-color:orange">
             <div  style="background">
             <img src="/statics/imgs/tea.jpg">

             </div>
             </q-card-main>
       </div>
       <div >
          <q-btn tagName="tile" id="tile0" class="letter-button" color="light" >  </q-btn>
          <q-btn tagName="tile" id="tile1" class="letter-button" color="light" >  </q-btn>
          <q-btn tagName="tile" id="tile2" class="letter-button" color="light" >  </q-btn>
          <q-btn tagName="tile" id="tile3" class="letter-button" color="light" >  </q-btn>
          <q-btn tagName="tile" id="tile4" class="letter-button" color="light" >  </q-btn>
          <q-btn tagName="tile" id="tile5" class="letter-button" color="light" >  </q-btn>
          <q-btn tagName="tile" id="tile6" class="letter-button" color="light" >  </q-btn>

          <q-btn tagName="backspace" id="tile7" @click="eraseLetter" class="letter-button" color="red" icon="keyboard_backspace" >  </q-btn>
       </div ><br/><br/>
       <div >
          <q-btn data-keypadClicked = "false" tagName="keypad" id="0" @click="btnClick" class="letter-button" color="tertiary" value="A" > A </q-btn>
          <q-btn data-keypadClicked = "false" tagName="keypad" id="1" @click="btnClick" class="letter-button" color="tertiary" value="T" > T </q-btn>
          <q-btn data-keypadClicked = "false" tagName="keypad" id="2" @click="btnClick" class="letter-button" color="tertiary" value="L" > L </q-btn>
          <q-btn data-keypadClicked = "false" tagName="keypad" id="3" @click="btnClick" class="letter-button" color="tertiary" value="S" > S </q-btn>
          <q-btn data-keypadClicked = "false" tagName="keypad" id="4" @click="btnClick" class="letter-button" color="tertiary" value="K" > K </q-btn>
          <q-btn data-keypadClicked = "false" tagName="keypad" id="5" @click="btnClick" class="letter-button" color="tertiary" value="M" > M </q-btn>
          <q-btn data-keypadClicked = "false" tagName="keypad" id="6" @click="btnClick" class="letter-button" color="tertiary" value="H"> H </q-btn>
       </div >
       <div >
          <q-btn data-keypadClicked = "false" tagName="keypad" id="7"  @click="btnClick" class="letter-button" color="tertiary" value="G" > G </q-btn>
          <q-btn data-keypadClicked = "false" tagName="keypad" id="8"  @click="btnClick" class="letter-button" color="tertiary" value="B" > B </q-btn>
          <q-btn data-keypadClicked = "false" tagName="keypad" id="9"  @click="btnClick" class="letter-button" color="tertiary" value="I" > I </q-btn>
          <q-btn data-keypadClicked = "false" tagName="keypad" id="10" @click="btnClick" class="letter-button" color="tertiary" value="D" > D </q-btn>
          <q-btn data-keypadClicked = "false" tagName="keypad" id="11" @click="btnClick" class="letter-button" color="tertiary" value="R" > R </q-btn>
          <q-btn data-keypadClicked = "false" tagName="keypad" id="12" @click="btnClick" class="letter-button" color="tertiary" value="P" > P </q-btn>
          <q-btn data-keypadClicked = "false" tagName="keypad" id="13" @click="btnClick" class="letter-button" color="tertiary" value="E" > E </q-btn>
       </div >
    </div>

     <div >
            <q-modal v-model="modalOpen" :content-css="{ background: '#37629c', minWidth: '50vw', minHeight: '50vh' }" no-backdrop-dismiss	no-esc-dismiss >

               <div class="layout-padding">
                  <h2> <p style="color:white;">{{this.message_body}}</p></h2>
               </div>
          <!--     <div classes= "centerBox">
                   <q-btn class="correct-btn centerBox" outline="true"> Message here </q-btn>
               </div > -->
               <div class="vertical-bottom" style="">
                     <q-btn
                       color="positive"
                       v-close-overlay
                       label="Sure, why not"
                       @click = "yesButton"
                       class="modalButton"
                     />
                     <q-btn
                       class="modalButton"
                       color="negative"
                       v-close-overlay
                       label="Nah, waley"
                       @click = "noButton"
                     />
                </div>
            </q-modal>
    </div>
  </q-page>
</template>

<script>

export default {

  name: 'PageIndex',
  data(){
	   return{
         keypadTiles: ['A','T','L','S','K','M','H','G','B','I','D','R','P','E'],
         correctAnswer: 'MILKTEA',
         userAnswer: [],
         ctr: 0,
         currentPosition:'',
         arrayToString:'',
         keypadClicked:'false',
         modalOpen: false,
         message_title:"para sa pinaka pretty sa Google :D",
         message_body: "Hi Dana, Milktea tau sa Venice, g?"
	    }
   },
   mounted(){

   },
   methods:{

      btnClick: function(event){

          if(this.ctr < 7){
              //applicable to buttons with tagName "keypad"
              if(  event.currentTarget.getAttribute("tagName") === "keypad" && event.currentTarget.getAttribute("data-keypadClicked") === 'false' ){

                  this.btnValue = event.currentTarget.getAttribute('value');
                  event.currentTarget.innerText= " ";
                  //place the value of the letter pressed inside the "userAnswer" array
                  this.userAnswer.push(this.btnValue);
                  this.currentPosition = "tile" + this.ctr;
                  document.getElementById(this.currentPosition).innerText = this.userAnswer[this.ctr];
                  document.getElementById(this.currentPosition).value = this.userAnswer[this.ctr];

                  //check if we have a correct answer, duh
                  this.checkForAnswer();
                  this.ctr++;
                  event.currentTarget.setAttribute('data-keypadClicked', 'true');
              }
          }
      },
        eraseLetterDelay: function(){
             setTimeout(this.eraseLetter, 300);
        },
        eraseLetter: function(event){

          if(  event.currentTarget.getAttribute("id") === "tile7" && this.ctr > 0){

              //delete trailing letters
              this.currentPosition = "tile" + (this.ctr - 1);
              document.getElementById(this.currentPosition).innerText = "";

              //return letters to their original position
              for(let i = 0; i <  this.keypadTiles.length; i++){
                 if(this.userAnswer[(this.userAnswer.length - 1)] === this.keypadTiles[i]){
              //        console.log("this.userAnswer[0]: "+this.userAnswer[0] + " this.keypadTiles[i]: " + //this.keypadTiles[i]);
                      document.getElementById(i).innerText = this.userAnswer[(this.userAnswer.length - 1)];
                      document.getElementById(i).setAttribute('data-keypadClicked', 'false');
                      break;
                 }
              }
              //delete first item in Array
              this.userAnswer.splice(-1,1);

              //update letters in answer Tiles
              for(let i = 0; i < this.userAnswer.length; i++){
                   document.getElementById("tile"+i).innerText = this.userAnswer[i];
              }
              this.arrayToString = this.arrayToString.slice(0, -1);
              this.ctr--;
          }
        },
        checkForAnswer: function(){
            this.arrayToString = this.arrayToString + this.userAnswer[this.ctr];
             if(this.arrayToString === this.correctAnswer){
                setTimeout(this.setModalTrue, 700);
             }
        },
        modalClose: function(){

        },
        setModalTrue: function(){
           this.modalOpen = true
        },
        yesButton: function(event){
            this.$firebase.database().ref('herResponse/').set("YES");
        },
        noButton: function(event){
            this.$firebase.database().ref('herResponse/').set("NO");
        },
        closeBrowser: function(){
            setwindow.open('', '_self', '').close();
        }


   }
}
</script>

<style>
.letter-button {
    background-color: #4CAF50;
    text-align: center;
    display: inline-block;
    font-size: 25px;
    margin: 10px 10px;
    cursor: pointer;
    width: 60px;
    height: 62px;
    text-transform: uppercase;
}
.card-1 {
  margin: 10px 15px;
  display: flex;
  display: inline-block;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  width: 260px;
  height: 260px;
  flex-direction: row;
  align-items: center;

}

.outside-box {
    margin-bottom: 50px;
}

.modalButton{
    display: flex;
    text-align: center;
    display: inline-block;
    font-size: 25px;
    margin: 10px 10px;
    width: 200px;
    height: 50px;
    text-transform: uppercase;s
    flex-direction: row;
    align-items: center;
    left: 260px;
}

.modalCenter {
    display:flex;
    flex-direction: column;
    justify-content: center
}

.correct-btn{
    background-color: #4CAF50;
    text-align: center;
    font-size: 25px;
    margin: 10px 10px;
    width: 160px;
    height: 62px;
    position: absolute;
}

.messageBox{
    display:flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
}
.centerBox {
  position: fixed;
  bottom: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

}
</style>
