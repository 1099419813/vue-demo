/**
 * @authors guoooofu (m13224597763@163.com)
 * @date    2017-01-14 04:09:29
 */
 
<template>
	<div>
		<h1>Users Overview</h1>
		<p>The user ID is: {{$route.params.id}}</p>
		<button @click="goHome">Go Home</button>
	</div>
</template>

<script>
	export default{
		watch:{
			'$route'(to,from){
				alert(to.params.id);
			}
		},
		created(){
			// alert(this.$route.params.id);
		},
		methods:{
			goHome(){
				this.$router.push('/');
			}		
		}
	}
</script>

<style scope>
	
</style>