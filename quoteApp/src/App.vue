<template>
    <div class="container">
        <app-header></app-header>
        <app-main></app-main>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import Header from "./components/shared/Header.vue";
    import Footer from "./components/shared/Footer.vue";
    import Main from "./components/main/Main.vue";

    export default {
        components: {
            appHeader: Header,
            appFooter: Footer,
            appMain: Main
        }
    }
</script>

<style>
</style>
