import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Users from './Users.vue';
import Home from './Home.vue';

Vue.use(VueRouter)

const routes=[
	{path:'/',component:Home},
	{path:'/users/:id',component:Users}
]

const router=new VueRouter({
	routes,
	moudle:'history'
})
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
