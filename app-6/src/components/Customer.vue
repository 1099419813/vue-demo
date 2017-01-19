<template>
  <div class="customer container">
    <Alert v-if="alert" v-bind:message="alert"></Alert>
    <h1 class="page-header">Manage Customer</h1>
    <input type="text" class="form-control" placeholder="enter username" v-model="filterInput">
    <table class="table table-striped">
      <thead>
      <tr>
        <th>Name</th>
        <th>UserName</th>
        <th>Email</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      <!--<tr v-for="customer in filterBy(customer,filterInput)">-->
      <tr v-for="customer in filterBy(customers,filterInput)">
        <td>{{customer.name}}</td>
        <td>{{customer.username}}</td>
        <td>{{customer.email}}</td>
        <td>
          <router-link class="btn btn-default" v-bind:to="'/customer/'+customer.id">View</router-link>
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
