<template>
  <div class="welcome container center">
    <h2 class="teal-text">Welcome to {{this.label}}</h2>
    <div class="card">
      <div class="card-content">
        <form @submit.prevent="enterChat">
          <label for="name">Enter Your Name</label>
        <input class="center" type="text" name="name" v-model="name" />
        <button class="btn btn-teal">Submit</button>
        </form>
        <p class="red-text" v-if="feedback">{{feedback}}</p>
      </div>
      
    </div>
            <button @click="toHome()" class="btn pink lighten-2 ">Home<i class="material-icons right">exit_to_app</i></button>

  </div>
</template>

<script>
import Chat from '@/components/Chat'
import Welcome from '@/components/Welcome'
export default {
  name: 'Welcome',
  props:['room', 'label'],

  data () {
    return {
     name:null,
     feedback:null,
     roomOption:this.room
    }
  },
 methods:{
    enterChat(){
    if(this.name){
      this.$router.push({name: 'Chat', params:{name:this.name, room:this.roomOption, label:this.label}})
      console.log(this.roomOption)
    }else{
      this.feedback = "You must enter a name."
      console.log(this.roomOption);
    }
  },
  toHome(){
      this.$router.push({name:'Options'})
    }
  
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.btn{
  margin: 30px auto;
}
.welcome h2{
  font-size:1.8em;
}
</style>
