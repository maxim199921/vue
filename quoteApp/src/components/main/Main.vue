<template>
    <div class="row">
        <div class="col-md-12">
            <div class="wrapper">
                <h3 >{{ title }}</h3>
                <textarea rows="4" cols="45" ref="textarea"></textarea>
                <button type="button" class="btn btn-primary" @click="addQuote">Add Quote</button>
            </div>
        </div>
        <app-quotes
                :quotes="quotes"
                @deleteQuote="deleteQuote($event)"></app-quotes>
    </div>
</template>

<script>
    import Quote from "./features/quotes/quotes.vue";
    import { shared } from '../../main';

    export default {
        data: function() {
            return {
                title: 'Quote',
                quotes: [],
            }
        },
        components: {
            appQuotes: Quote
        },
        created: function () {
            this.quotes.push(                    {
                id: 0,
                text: 'quote'
            });
            shared.$emit('getQuotes', this.quotes);
        },
        methods: {
            addQuote: function () {
                if (this.quotes.length < 10 && this.$refs.textarea.value) {
                    this.quotes.push({
                        id: this.quotes.length,
                        text: this.$refs.textarea.value
                    });
                    this.$refs.textarea.value = '';
                    shared.$emit('getQuotes', this.quotes);
                } else {
                    !this.$refs.textarea.value ? alert('Add text in textarea!!!') : alert('Quotes is Full!!!');
                }
            },
            deleteQuote: function (id) {
                this.quotes = this.quotes.filter(item => item.id !== id);
                shared.$emit('getQuotes', this.quotes);
            }
        }
    }
</script>

<style scoped>
    .wrapper {
        width: 40%;
        margin: 20px auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
</style>
