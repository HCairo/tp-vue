<script setup>
</script>

<template>
    <nav>
        <a href="#">TODOLIST</a>
    </nav>
</template>

<style scoped>
    a{
        font-family: 'Noto-Sans', sans-serif;
        color: white;
        text-decoration: none;
        font-size: 1.1em;
        font-weight: 600;
        transition: all .5s;
    }

    a:hover{
        font-size: 1.3em;
    }

    nav{
        display: flex;
        justify-content: space-around;
        align-items: center;
        background: #6457A6;
        width: 100%;
        height: 100px;
    }
</style>