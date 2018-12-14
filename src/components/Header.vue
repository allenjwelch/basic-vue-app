<template>
    <section class="header">
        <h1 class="header-title">Vue App</h1>

        <nav class="navbar">
            <ul>
                <li><router-link to="/home">Home</router-link></li>
                <li><router-link to="/page2">Page 2</router-link></li>
                <li><router-link to="/page3">Page 3</router-link></li>
            </ul>
        </nav>
    </section>

</template>

<script>
export default {
    name: 'Header',
    props: {
        user: String
    }, 
}
</script>

<style lang="scss">
.header {
    height: 50px;
    width: 100%;
    background: #ccc; 
    position: relative; 
    
    .header-title {
        margin: 0;
        position: absolute; 
        left: 20px; 
        top: 10px; 
    }

    .navbar {
        float: right; 
        ul {
            li {
                display: inline-block; 
                padding: 0 20px; 
                &:not(:last-child) {
                    border-right: 1px solid #333; 
                }
                a {
                    text-decoration: none; 
                    color: #333; 
                }
            }
        }
    }
}
</style>


