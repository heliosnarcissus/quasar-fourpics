<template>
   <component :is="type" />
</template>

<script>
/* if you're going to import components, do it here like: */

import GameScreen from 'components/gamescreen.vue'
import GameOverScreen from 'components/gameoverscreen.vue'

export default {
  components:{
    'app-gamescreen': GameScreen,
    'app-gameoverscreen': GameOverScreen
  },

  data(){
	   return{
  		   gameIsFinished: ''
	    }
   },
   computed: {

     type () {
       this.gameIsFinished = this.$store.state.example.gameIsFinished
       return this.gameIsFinished ? 'app-gameoverscreen' : 'app-gamescreen'
     },
      drawerState: {
      get () {
        return this.$store.state.showcase.drawerState
      },
      set (val) {
        this.$store.commit('showcase/updateDrawerState', val)
      }
    }
   }

 }
</script>

<style>
</style>
