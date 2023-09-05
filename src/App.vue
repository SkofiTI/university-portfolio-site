<template>
    <Navbar />
    <main class="content">
        <router-view />
    </main>
</template>

<script>
    import Navbar from './components/Navbar.vue';
    import './styles/App.scss'

    export default {
        name: 'App',
        components: {
            Navbar
        }
    }
</script>