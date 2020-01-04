<template>
  <div>
    <p>server status : {{status}}</p>
    <hr>
    <button @click="changeStatus">change status</button>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        status: 'online'
      }
    },
    methods: {
      changeStatus: function () {
        this.status = 'offline';
      }
    }
  }
</script>
