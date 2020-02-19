<template>
    <div>
        <h3>Some User Details</h3>
        <p>User: {{ $route.params.id }}</p>
        <router-link tag="button" :to="`/user//edit`">Edit</router-link>
    </div>
</template>
