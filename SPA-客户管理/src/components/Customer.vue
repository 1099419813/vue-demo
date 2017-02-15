<template>
  <div class="customer container">
    <Alert v-if="alert" v-bind:message="alert"></Alert>
    <h1 class="page-header">客户管理</h1>
    <input type="text" class="form-control" placeholder="输入客户昵称来查找" v-model="filterInput">
    <table class="table table-striped">
      <thead>
      <tr>
        <th>姓名</th>
        <th>昵称</th>
        <th>邮箱</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="customer in filterBy(customers,filterInput)">
        <td>{{customer.name}}</td>
        <td>{{customer.username}}</td>
        <td>{{customer.email}}</td>
        <td>
          <router-link class="btn btn-default" v-bind:to="'/customer/'+customer.id">详情</router-link>
        </td>
      </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
  import Alert from './Alert.vue'
  export default {
    name: 'customer',
    components: {
      Alert
    },
    data () {
      return {
        customers: [],
        alert: '',
        filterInput: '',
        customer: ''
      }
    },
    methods: {
      fetchCustomers(){
        this.$http.get('https://jsonplaceholder.typicode.com/users').then(function (res) {
          this.customers = res.body;
        });
      },
      filterBy(list, value){
        value=value.charAt(0).toUpperCase()+value.slice(1);
        return list.filter(function (customer) {
          return customer.username.indexOf(value) > -1;
        });
      }
    },
    created: function () {
      if (this.$route.query.alert) {
        this.alert = this.$route.query.alert
      }
      this.fetchCustomers()
    },
    updated: function () {
      this.fetchCustomers()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
