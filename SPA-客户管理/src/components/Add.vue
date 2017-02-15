<template>
  <div class="add container">
    <alert v-if="alert" v-bind:message="alert"></alert>
    <h1 class="page-header">添加客户</h1>
    <form>
      <div class="well">
        <h4>基本信息</h4>
        <div class="form-group">
          <label for="name">姓名</label>
          <input id="name" type="text" class="form-control" placeholder="输入姓名" v-model="customer.name">
          <label for="username">客户昵称</label>
          <input id="username" type="text" class="form-control" placeholder="输入客户昵称" v-model="customer.username">
        </div>
      </div>
      <div class="well">
        <h4>联系方式</h4>
        <div class="form-group">
          <label for="email">邮箱</label>
          <input id="email" type="text" class="form-control" placeholder="输入邮箱" v-model="customer.email">
          <label for="phone">手机</label>
          <input id="phone" type="text" class="form-control" placeholder="输入手机号" v-model="customer.phone">
          <label for="website">个人网页</label>
          <input id="website" type="text" class="form-control" placeholder="输入个人网页" v-model="customer.website">
        </div>
      </div>
      <input type="button" class="btn btn-primary" value="确认添加" v-on:click="addCustomer">
    </form>
  </div>
</template>
<script>
  import Alert from './Alert.vue'
  export default{
    name: 'add',
    components:{
        Alert
    },
    data(){
      return {
        customer: {},
        alert:''
      }
    },
    methods: {
      addCustomer: function () {
        if (!this.customer.name || !this.customer.username) {
          this.alert='Please fill in all required fields'
        } else {
          let newCustomer = {
            name: this.customer.name,
            username: this.customer.username,
            email: this.customer.email,
            phone: this.customer.phone,
            website: this.customer.website
          }
          this.$http.post('http://jsonplaceholder.typicode.com/users', newCustomer).then(function (res) {
            this.$router.push({path: '/',query:{alert:'Customer Added'}})
          })
        }
      }
    }
  }
</script>
<style scoped>

</style>
