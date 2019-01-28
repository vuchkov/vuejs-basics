<template>
    <div class="header">
        <h1>{{ msg }}</h1>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                msg: 'VueJS Basics and Vue CLI 3 workshop by Boris Nekezov'
            };
        }
    }
</script>

<style lang="scss">
    $bg-secondary: #ccc;

    .header {
        background: $bg-secondary;
    }
</style>