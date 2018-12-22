<template>
    <section>
        <h1>Examples</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, consequatur, dicta, quod non itaque quia reiciendis soluta nesciunt voluptas eum recusandae ab! Commodi praesentium officia corrupti deserunt? Suscipit ducimus nemo tempore, nam quidem illum quas similique, a aut asperiores consectetur, nobis exercitationem excepturi tenetur modi. Eos fuga veritatis odio nesciunt.</p>

        <div>
            <h4> {{message}} </h4>
            <input type="text" v-model="message">
            <button v-on:click="reverseMessage">Reverse Message</button>
            <button v-on:click="addItem">Add ToDo</button>
        </div>
        <ul>
            <li v-bind:key="index" v-for="index in todos">{{index}}</li>
        </ul>
    </section>
</template>

<script>
import Vue from 'vue'
// import HelloWorld from '../components/HelloWorld.vue'

todoList = []; 


export default {
    name: "examples", 
    data() {
        return {
            message: 'Change this message', 
            isTrue: true, 
            todos: [
                "task1", 
                "task2", 
                "task3", 
                "task4"
            ], 
            people: {
                Allen: {
                    name: "allen", 
                    age: 34
                }, 
                Briana: {
                    name: "briana",
                    age: 34,
                }
            }
        }
    },
    methods: {
        reverseMessage: function() {
            this.message = this.message.split('').reverse().join('')
        }
    }
}

</script>

<style lang="scss" scoped>

</style>