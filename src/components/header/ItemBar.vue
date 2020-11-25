<template>
    <div class="header__item-bar">
        <ul class="menu">
            <li 
                class="menu-item"
                v-for="i in 5" :key="i">Item {{i}}</li>
        </ul>
    </div>
</template>

<style lang="scss">
.header__item-bar{
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    .menu{
        width: 45%;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        list-style: none;
        font-family: 'Roboto', sans-serif;
        font-size: 20px;
    }
}
</style>
