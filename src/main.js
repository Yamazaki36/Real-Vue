import Vue from 'vue'
import App from './App.vue'

// 阻止启动生产消息
Vue.config.productionTip = true;

// $mount 手动挂载

/*es5：
  render:function(createElement){
    return createElement(App)
}

  render(createElement){
    return createElement(App)
  }

  render(h){
    return h(App)
  }

  ES6:
  render:h=>h(App)
 */

new Vue({
  render: h => h(App),
}).$mount('#app')
