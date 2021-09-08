<template>
  <div id="app">
    <input type="text" v-model="info.hobby"/>
    {{info.hobby}}
    <img alt="Vue logo" src="./assets/logo.png" />
    <Form></Form>
    <my-com-a></my-com-a>

    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Form from './components/form/Index.vue'

export default {
  name: 'App',
  data(){
    return {
      info: {
        hobby: 'basketball'
      }
    }
  },
  components: {
    HelloWorld,
    Form
  },
  watch:{
    // 'info.hobby':{
    //   handler:function(newVal, oldVal) {
    //     console.log(newVal, oldVal);
    //   }
    // }
    info: {
      handler: function(newval, oldval) {
        console.log(newval.hobby, oldval?.hobby);
      },
      deep: true
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
