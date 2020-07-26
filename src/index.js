const path = require('path')

import './styles/style.css'
import './styles/style.scss'

import Vue from 'vue'
import store from '../src/store/'
import App from './components/App.vue'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
