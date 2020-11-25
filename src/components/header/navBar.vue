<template>
    <nav class="header__nav-bar">
        <ul class="nav-menu">
            <li 
                class="link"
                v-for="i in 3" :key="i">Level {{i}}<span>/</span>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400&display=swap');

.header__nav-bar{
    width: 100%;
    height: 52px;
    padding: 0 10%;
    .nav-menu{
        list-style: none;
        display: flex;
        font-family: 'Roboto', sans-serif;
        padding: 0;
        span{
            margin: 0 12px;
        }
    }
}
</style>
