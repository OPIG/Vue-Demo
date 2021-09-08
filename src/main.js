import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.component('my-com-a', {
  template: `<div>this is my com-a
    h<h1>{{ title }}</h1>
    <p>{{cont}}</p>
  </div>`,
  data() {
    return {
      title: 'this is title',
      cont: 'this is content'
    }
  }
})

new Vue({
  render: (h) => h(App)
}).$mount('#app')
