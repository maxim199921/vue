<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>{{ myAge }}</p>
        <button @click="changeAge">change name</button>
    </div>
</template>

<script>
    import { shared } from '../main';
    export default {
        props: {
            myAge: {
                type: Number,
                required: true,
                default: 1
            }
        },
        methods: {
            changeAge() {
                this.myAge = 25;
                shared.$emit('changeNameToAll', this.myAge);
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
