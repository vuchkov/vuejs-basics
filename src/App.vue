<template>
    <div id="app">
        <div class="row">
            <div class="container">
                <img alt="Vue logo" src="./assets/logo.png">
                <app-header></app-header>
                <app-main></app-main>
                <appFooter></appFooter>
            </div>
        </div>
    </div>
</template>

<script>
    import AppHeader from './components/AppHeader.vue';
    import AppMain from './components/AppMain.vue';
    import AppFooter from './components/AppFooter.vue'

    export default {
        components: {
            // New ES6 syntax when kay and value are with the same name
            AppHeader,
            AppMain,
            AppFooter

            // AppHeader: AppHeader,
            // AppMain: AppMain,
            // AppFooter: AppFooter
        }
    }
</script>

<style lang="scss" scoped>

    $bg-primary: #fff;
    $bg-secondary: #ccc;

    #app {
        background: $bg-secondary;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
    .container {
        background: $bg-primary;
    }

</style>
