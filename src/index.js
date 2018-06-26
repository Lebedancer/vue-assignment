import Vue from 'vue'
import App from './components/App.vue'

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  data: {
    test: 'sdfsdf',
    bricks: [],
    total: 0,

  },
  render: h => h(App)
})
