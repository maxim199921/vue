<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User name: {{ myName }}</p>
        <p>User name: {{ switchName() }}</p>
        <p>User name: {{ myAge }}</p>
        <button @click="changeName">change name</button>
    </div>
</template>

<script>
    import { shared } from '../main';
    export default {
        props: {
            myName: {
                type: String,
                required: true,
                default: 'xxx'
            },
            myAge: {
                type: Number,
                required: true,
                default: 1
            }
        },
        methods: {
            switchName() {
                return this.myName.split('').reverse().join('');
            },
            changeName() {
                this.myName = 'xren';
                this.$emit('nameWasReset', this.myName);
            }
        },
        created() {
            shared.$on('changeNameToAll', (age) => {
              this.myAge = age;
            })
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
