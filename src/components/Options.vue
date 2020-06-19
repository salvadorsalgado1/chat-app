<template>
    <div class="options">
        <h2 class="center-align main-title">Pick a Room</h2>
        <div class="container">
            <div class="row">
                <div class="col s12 m6">
                    <div class="card">
                        <div class="card-content center">
                            <i class="material-icons teal-text medium">extension</i>
                            <h3 class="teal-text center">Education</h3>
                            <p class="teal-text">Room One</p>
                            <button @click="RoomOne()" class="btn teal">Enter Chat</button>
                        </div>
                    </div>
                </div>
                <div class="col s12 m6">
                    <div class="card">
                        <div class="card-content center">
                            <i class="material-icons light-blue-text medium">build</i>
                            <h3 class="light-blue-text center">Engineering</h3>
                            <p class="light-blue-text">Room Two</p>
                            <button @click="RoomTwo()" class="btn light-blue">Enter Chat</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Welcome from '@/components/Welcome'
export default {
    name:'Options',

    data(){
        return{
            room:null
        }
    },
    methods:{
        RoomOne(){
            this.room = 'RoomOne';
            let label = 'Education';
            console.log(this.room);
            this.$router.push({name: 'Welcome', params:{room:this.room, label:label}})
        },
        RoomTwo(){
            this.room = 'RoomTwo';
            let label = 'Engineering';
            console.log(this.room);
            this.$router.push({name:'Welcome', params: {room:this.room, label:label}})
        }
    }
}
</script>
<style>
.options h2{
    font-size:2em
}
.card-content h3{
font-size:1.6em;
}
.btn{
    margin:20px auto;
}
.main-title{
color:#ec407a;
}
</style>