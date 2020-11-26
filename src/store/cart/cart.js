const cart = {
    state: () => ({
        count: 0,
        products: [
            {id:0, name: "IPhone 8", price: 200, count: 0, img: "@/src/assets/Block.png"},
            {id:1, name: "Phone X", price: 300, count: 0, img: "@/src/assets/Block.png"},
            {id:2, name: "Phone XR", price: 500, count: 0, img: "@/src/assets/Block.png"}
        ],
        menuState: false
    }),
    mutations: {
        chState(state){
            state.menuState = !state.menuState
        }
    },
    actions: {
        changeState({commit}){
            commit("chState")
        }
    },
    getters: {
        cartCount: state => {
            return state.count
        },
        products: state => {
            return state.products
        },
        menuState: state => {
            return state.menuState
        }
    }
}
export default cart;