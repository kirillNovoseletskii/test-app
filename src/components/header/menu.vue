<template>
    <div :class='menuState?"cart-menu open":"cart-menu close"'>
        <header class="cart-header">
            <p>Your cart</p>
            <div class="cls-btn" @click="changeState">
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 17.5L17.5 1" stroke="#AFB1BD" stroke-width="2"/>
                <path d="M17.5 17.5L0.999999 1" stroke="#AFB1BD" stroke-width="2"/>
                </svg>
            </div>
        </header>
    </div> 
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    computed: {
        ...mapGetters(["menuState"])
    },
    methods: {
    ...mapActions(["changeState"])
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
.cart-menu{
    transition: .3s;
    position: absolute;
    height: 100%;
    width: 35%;
    background: #fff;
    right: 0;
    bottom: 0;
    padding: 3%;
    box-sizing: border-box;
    box-shadow: -5px 10px 52px rgba(90, 92, 102, 0.06);
}
.open{
    transform: translateX(0);
}
.close{
    transform: translateX(100%);
}
.cart-header{
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #F0F0F5;
    box-sizing: border-box;
    padding-bottom: 20px;
    p{
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        font-size: 24px;
        line-height: 28px;
        font-style: normal;
        margin: 0;
        vertical-align: center;
    }
}
</style>
