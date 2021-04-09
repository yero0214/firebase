<template>
  <div id="app">
    <header>
      <nav>
        <h1>LOH.GG</h1>
        <router-link to="/login" v-if="!state">Login</router-link>
        <router-link to="/register" v-if="!state">Register</router-link>
        <a v-if="!state" @click="signOut()">Sign out</a>
      </nav>
    </header>
    <router-view/>
  </div>
</template>

<script>
import {auth} from '@/firebase';

export default {
  data (){
    return{
      state: false,

    }
  },
    methods:{
      signOut(){
        auth.signOut()
          .then(() => console.log('signed out'))
      }
    }
}
</script>

<style>
body{
  margin: 0;
  background: #fafafa;
}
body,h1,h2,p,a,input{
  color: #555;
  font-family: Consolas, Arial;
  text-decoration: none;
}
ul{
  margin: 0;
  padding: 0;
}
header{
  width: 100%;
  padding: 20px;
  text-align: right;
  background: white;
  box-sizing: border-box;
  box-shadow: 0px 0px 6px rgba(0,0,0,0.1);
}
a{
  transition: 0.2s;
  margin-left: 10px;
  padding: 4px;
  cursor: pointer;
}
a:hover{
  background: gray;
  color: white;
}
header h1{
  margin: 0;
  position: absolute;
  left: 20px;
  top: 15px;
}
</style>
