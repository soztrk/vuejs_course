import { createApp } from 'vue';
import {createStore} from "vuex";

import router from './router.js';
import App from './App.vue';
import BaseBadge from './components/ui/BaseBadge.vue';

const app = createApp(App);

const store = createStore({
    state(){
        return {
            isLoggedIn:false,
            cart: []
        }
    },
    getters:{
        isLogin(state){
            return state.isLoggedIn
        },
        getCartItems(state){
            return state.cart
        },
        getTotal(state){
            let total = 0
            for(const item of state.cart){
                let price = item.price * item.qty
                total += price
            }
            return total
        },
        getQuantity(state){
            let total = 0
            for(const item of state.cart){
                total += item.qty
            }
            return total
        }
    },
    mutations:{
        setLogin(state,status){
            state.isLoggedIn = status
        },
        addToCart(state,productData){

            const productInCartIndex = state.cart.findIndex(
                (ci) => ci.productId === productData.id
              );
        
              if (productInCartIndex >= 0) {
                state.cart[productInCartIndex].qty++;
              } else {
                const newItem = {
                  productId: productData.id,
                  title: productData.title,
                  image: productData.image,
                  price: productData.price,
                  qty: 1,
                };
                state.cart.push(newItem)
              }
        },
        removeFromCart(state,prodId){
            const productInCartIndex = state.cart.findIndex(
                (cartItem) => cartItem.productId === prodId
              );
            state.cart.splice(productInCartIndex, 1);
        }
    },
    actions:{
        login(context){
            setTimeout(()=>{
                context.commit("setLogin",true)
            },2000)
        },
        logout(context){
            setTimeout(()=>{
                context.commit("setLogin",false)
            },1000)
        }
    }
})

app.component('base-badge', BaseBadge);
app.use(store);
app.use(router);
app.mount('#app');
