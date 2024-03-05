<script setup>
</script>

<template>
    <nav>
        <a href="#">Home</a>
        <a href="#">Market</a>
        <a href="#">Contact</a>
        <a href="#">Prices</a>
    </nav>
</template>

<style scoped>
    a{
        color: white;;
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
        background: black;
        width: 100%;
        height: 100px;
    }
</style>