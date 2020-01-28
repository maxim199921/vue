<template>
    <div class="row">
        <div class="col-md-12">
            <h1 class="footer">{{ footerTitle }}</h1>
        </div>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                footerTitle: "Info: Click on quote to delete it"
            }
        }
    }
</script>

<style scoped>
    .footer {
        background: #c7c7c7;
        width: 60%;
        min-height: 40px;
        font-size: 18px;
        margin: 50px auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
