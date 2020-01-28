<template>
    <div class="row">
        <div class="col-sm-3 quote" v-for="quote in quotes">
            <div class="text" @click="deleteElement(quote.id)">
                {{ quote.text }}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            quotes: {
                type: Array,
                required: true
            }
        },
        methods: {
            deleteElement: function (id) {
                this.$emit('deleteQuote', id);
            }
        }
    }
</script>

<style scoped>
    .quote {
        text-align: center;
        padding: 10px;
        cursor: pointer;
    }
    .text {
        min-height: 100px;
        border: 1px solid burlywood;
    }
</style>
