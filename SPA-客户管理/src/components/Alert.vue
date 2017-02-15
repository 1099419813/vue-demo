<template>
  <div class="alert alert-warning alert-dismissible" role="alert">
    <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span
      class="sr-only">关闭</span></button>
      <span>{{message}}</span>
  </div>
</template>
<script>
  export default{
    name: 'alert',
    props: ['message'],
    data(){
      return {
        //msg: 'hello vue'
      }
    }
  }
</script>
<style scope>

</style>
