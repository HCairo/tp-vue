<script setup>
</script>
<template>
    <div class="container">
        <header v-if="$slots.header">
            <slot name="header"></slot>
        </header>
        <main>
            <slot v-if="$slots.default"></slot>
        </main>
        <footer>
            <slot
                v-if="$slots.footer"
                name="footer"
            ></slot>
        </footer>
    </div>
</template>

<style scoped>
</style>