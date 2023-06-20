<script setup>
  import Nav from './components/nav.vue'
  import Footer from './components/footer.vue'

</script>

<template>
    <Nav></Nav>

    <div>
        <router-view></router-view>
    </div>

    <Footer></Footer>
</template>



<style>
</style>