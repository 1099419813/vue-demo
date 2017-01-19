<template>
  <div class="details container">
    <router-link to="/" class="btn btn-success">Back</router-link>
    <h3 class="page-header">
      <span>{{customer.name}} / {{customer.username}}</span>
      <span class="pull-right"><button class="btn btn-danger" v-on:click="deleteCustomer">delete</button></span>
    </h3>
    <ul class="list-group">
      <li class="list-group-item">
        <span class="glyphicon glyphicon-phone" aria-hidden="true"></span>
        <span>{{customer.phone}}</span>
      </li>
      <li class="list-group-item">
        <span class="glyphicon glyphicon-envelope" aria-hidden="true"></span>
        <span>{{customer.email}}</span>
      </li>
      <li class="list-group-item">
        <span class="glyphicon glyphicon-envelope" aria-hidden="true"></span>
        <span>{{customer.email}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
  export default{
    name: 'customerdetails',
    data(){
      return {
          customer:''
      }
    },
    methods: {
      fetchCustomer: function (id) {
        this.$http.get('https://jsonplaceholder.typicode.com/users/' + id).then(function (res) {
          this.customer = res.body;
        })
      },
      deleteCustomer:function (id) {
        this.$router.push({path:'/',query:{alert:'Customer Deleted'}});
//        this.$http.delete('https://jsonplaceholder.typicode.com/users/' + id).then(function (res) {
//          this.$router.push({paht:'/',query:{alert:'Customer Deleted'}});
//        })
      }
    },
    created:function () {
      this.fetchCustomer(this.$route.params.id)
    }
  }
</script>
<style scoped>

</style>
