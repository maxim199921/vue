<template>
    <div>
        <h1>The User Page</h1>
        <hr>
        <p>id: {{ id }}</p>
        <button @click="navigateToHome">Go Home</button>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data() {
          return {
              id: this.$route.params.id
          }
        },
        watch: {
            '$route'(to, from) {
                console.log(to);
                console.log(from);
                this.id = to.params.id;
            }
        },
        methods: {
            navigateToHome() {
                this.$router.push('/')
            }
        },
        created() {
            console.log(this.id)
        }
    }
</script>
