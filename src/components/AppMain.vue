<template>
    <div class="main-content">
        <h1 style="text-align: center;">This is main content</h1>

        <p><h2>1. Directives</h2></p>
        <p><h3>Directives in Vues are special token in the markup that tells VueJS what to do with the DOM element</h3></p>
        <p><h3>They begin with <code>v-$nameOfDirective</code></h3></p>

        <p><code>v-on directive</code></p>
        <p><button class="btn btn-primary" v-on:click="changeMsg">Change message</button> {{ msg }}</p>

        <p><h3>There is shortand syntax about v-on directive <code>v-$nameOfDirective</code></h3></p>
        <p><button class="btn btn-primary" @click="counter++">Increase by 1</button> counter: {{ counter }}</p>

        <p><h3>Get input value</h3></p>
        <p><input type="text" @input="changeTitle"></p>
        <p>{{ title }}</p>


    </div>
</template>

<script>
    export default {
        data(){
            return {
                msg: 'Some message that will be changed',
                counter: 0,
                title: 'Hello world!'
            };
        },
        methods: {
            changeMsg(){
                this.msg = "Message was changed!"
            },
            changeTitle: function(event){
                // target will be the input field
                this.title = event.target.value;
            }
        }
    }

</script>

<style>
    .main-content {
        text-align: left;
    }
</style>
