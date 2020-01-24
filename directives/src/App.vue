<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives</h1>
                <div v-html="`<p>w w w w w w</p>`"></div>
                <div v-highlight="'green'">sadsada</div>
                <div v-local-highlight="'green'">sadsada</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives: {
            'local-highlight': {
                bind(el, bind, vnode) {
                    el.style.backgroundColor = bind.value;
                }
            }
        }
    }
</script>

<style>

</style>
