<template>
    <div class="row">
        <h1 class="col-md-12">{{ title }}</h1>
        <div class="col-md-12 quoteBar">
            <div class="quoteBar text-center"
                 :style="{backgroundColor: 'skyblue', margin: 0, color: 'white', width: numberOfQuotes*10 + '%'}">
                {{ numberOfQuotes }}/10
            </div>
        </div>
    </div>
</template>

<script>
    import { shared } from '../../main';

    export default {
        data: function() {
            return {
                title: 'Quotes Added',
                numberOfQuotes: 0
            }
        },
        created() {
            shared.$on('getQuotes', (quotes) => {
                this.numberOfQuotes = quotes.length;
            })
        }
    }
</script>

<style scoped>
    .quoteBar {
        width: 100%;
        height: 20px;
        background-color: #eee;
        margin: auto;
        padding: 0;
        transition: width 500ms;
    }
    .text-center {
        text-align: center;
    }

</style>
