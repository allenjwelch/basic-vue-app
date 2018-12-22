<template>
    <section>
        <h1>PAGE 3</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, consequatur, dicta, quod non itaque quia reiciendis soluta nesciunt voluptas eum recusandae ab! Commodi praesentium officia corrupti deserunt? Suscipit ducimus nemo tempore, nam quidem illum quas similique, a aut asperiores consectetur, nobis exercitationem excepturi tenetur modi. Eos fuga veritatis odio nesciunt.</p>

        <div id="page3">
            <h4> {{message}} </h4>
            <input type="text" v-model="message">
        </div>
    </section>
</template>

<script>
import Vue from 'vue'
import HelloWorld from './HelloWorld.vue'

export default {
    name: "page3", 
    data() {
        return {
            message: 'Change this message', 
        }
    },
}

</script>

<style lang="scss">

</style>