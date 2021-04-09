import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {auth} from '@/firebase';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  created(){
    auth.onAuthStateChanged(user => {
      if (user){
        this.$router.push('/')
        console.log("login detected")
      } else{
        this.$router.push('/login')
        console.log("sign out detected")
      }
  });
  }
}).$mount('#app')
