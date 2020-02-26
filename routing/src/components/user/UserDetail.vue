<template>
    <div>
        <h3>Some User Details</h3>
        <p>User: {{ $route.params.id }}</p>
        <router-link tag="button" :to="{ name: 'userName', params: { id: $route.params.id } }">Edit user</router-link>
    </div>
</template>
