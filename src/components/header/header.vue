<template>
    <header class="header">
        <topBar />
        <ItemBar />
        <navBar />
    </header>
</template>

<script>
import topBar from "./topBar"
import ItemBar from "./ItemBar"
import navBar from "./navBar"

import {mapGetters} from 'vuex'

export default {
    components: {
        topBar,
        ItemBar,
        navBar
    },
    computed: {
        ...mapGetters([
            "cartCount"
        ])
    }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400&display=swap');

body, html, #app{
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
}
</style>
