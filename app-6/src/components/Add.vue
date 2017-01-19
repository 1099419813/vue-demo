<template>
  <div class="add container">
    <alert v-if="alert" v-bind:message="alert"></alert>
    <h1 class="page-header">Add customer</h1>
    <form>
      <div class="well">
        <h4>Customer Info</h4>
        <div class="form-group">
          <label for="name">Name</label>
          <input id="name" type="text" class="form-control" placeholder="enter name" v-model="customer.name">
          <label for="username">Username</label>
          <input id="username" type="text" class="form-control" placeholder="enter username" v-model="customer.username">
        </div>
      </div>
      <div class="well">
        <h4>Customer Contact</h4>
        <div class="form-group">
          <label for="email">Email</label>
          <input id="email" type="text" class="form-control" placeholder="enter email" v-model="customer.email">
          <label for="phone">Phone</label>
          <input id="phone" type="text" class="form-control" placeholder="enter phone" v-model="customer.phone">
          <label for="website">Website</label>
          <input id="website" type="text" class="form-control" placeholder="enter website" v-model="customer.website">
        </div>
      </div>
      <input type="button" class="btn btn-primary" value="submit" v-on:click="addCustomer">
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
