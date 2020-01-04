<template>
  <div>
    <app-header></app-header>
    <app-home></app-home>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import Home from './components/server/Home';
  import Header from './components/shared/Header';
  import Footer from './components/shared/Footer';

  export default {
    components: {
      'app-home': Home,
      'app-header': Header,
      'app-footer': Footer
    }
  }
</script>

<style scoped>
  div {
    background: #76ff7e;
  }
</style>
