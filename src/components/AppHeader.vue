<template>
    <div class="header">
        <h1>{{ msg }}</h1>
    </div>
</template>

<script>
    export default {
        // data: function(){
        //     return {
        //
        //     };
        // }
        // New ES6 syntax about functions
        data(){
            return {
                msg: 'VueJS Basics and Vue CLI 3 workshop by Boris Nekezov'
            };
        }
    }
</script>

<style lang="scss">
    .header {
        text-align: center;
    }
</style>