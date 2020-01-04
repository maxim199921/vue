<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <p>My age: {{ age }}</p>
        <button @click="changeName">change name</button>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail :myName="name"
                                 :myAge="age"
                                 @nameWasReset="resetName($event)"></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit :myAge="age"></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';
    import { shared } from '../main';

    export default {
        data: function() {
            return {
                name: 'Max',
                age: 27
            }
        },
        methods: {
            changeName() {
                this.name = 'Anna';
            },
            resetName(name) {
                this.name = name;
            }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        },
        created() {
            shared.$on('changeNameToAll', (age) => {
                this.age = age;
            })
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
