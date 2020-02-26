<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>
                <div class="form-group">
                    <label>username</label>
                    <input class="form-control" type="text" v-model="user.username">
                </div>
                <div class="form-group">
                    <label>mail</label>
                    <input class="form-control" type="text" v-model="user.email">
                </div>
                <button class="btn btn-primary" @click="submit">submit</button>
                <ul>
                    <li v-for="(el, index) of data">{{el.co}}:{{index}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                user: {
                    username: '',
                    email: '',
                },
                data: [],
                resource: {},
            }
        },
        methods: {
            submit() {
                //for post add this user
                this.$http.get('./src/assets/codes.json',/*, this.user*/{
                    headers: {
                        'x-access-xxx': 'XYX'
                    },
                })
                    .then(
                    (response) => {
                        // console.log(response);
                        // let x = response.json();
                        // console.log(x);
                        this.data = response.data;
                    },
                    (error) => {
                        console.log(error);
                    });
            }
        }
    }
</script>

<style>
</style>
