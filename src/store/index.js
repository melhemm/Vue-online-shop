import Vue from 'vue'
import Vuex from 'vuex'
import products from '../assets/products'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products,
    cart: JSON.parse(localStorage.getItem('cart') || '[]'),
    page: 1,
    limit: 3,
    totalPages: 0
  },

  mutations: {
    setProducts(state, products) {
      state.products = products;
    },

    pushProductToCart(state, productId) {
      state.cart.push({
        id: productId,
        quantity: 1
      })
      localStorage.setItem('cart', JSON.stringify(state.cart))

    },

    incrementItemQuantity(state, cartItem) {
      cartItem.quantity++
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },


    decrementItemQuantity(state, product) {
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },


    AddProduct(state, product) {
      state.products.push(product)
    },


    deleteItemFromAdmin(state, index) {
      state.products.splice(index, 1)
    },

    deleteItemFromCart(state, index) {
      state.cart.splice(index, 1)
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },

    updateProduct(state, {
      id,
      content,
      img,
      title,
      price,
      quantity,
      }) {
      const products = state.products.concat()
      const index = products.findIndex(updateitem => updateitem.id === id)
      const product = products[index]
      products[index] = {
        ...product,
        id,
        content,
        img,
        title,
        price,
        quantity
      }
      state.products = products
    },


    increment(state, index) {
      state.cart[index].quantity++
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },

    decrement(state, index) {
      if (state.cart[index].quantity > 1) {
        state.cart[index].quantity--
      }
      localStorage.setItem('cart', JSON.stringify(state.cart))
    }
  },

  actions: {
    addProductToCart({
      state,
      getters,
      commit
    }, product) {
      if (getters.productIsStock(product)) {
        // find cart item
        const cartItem = state.cart.find(item => item.id === product.id)
        if (!cartItem) {
          commit('pushProductToCart', product.id)
        } else {
          commit('incrementItemQuantity', cartItem)
        }
        commit('decrementItemQuantity', product)
      }
    },


    AddProduct({
      commit
    }, product) {
      commit('AddProduct', product)
    },


    deleteItemFromAdmin({
      commit
    }, index) {
      commit('deleteItemFromAdmin', index)
    },


    deleteItemFromCart({
      commit
    }, index) {
      commit('deleteItemFromCart', index)
    },


    updateProduct({
      commit
    }, product) {
      commit('updateProduct', product)
    },


    incrementCartItem({
      commit
    }, index) {
      commit('increment', index)
    },


    decrementCartItem({
      commit
    }, index) {
      commit('decrement', index)
    },
  },

  getters: {
    cartProducts(state) {
      return state.cart.map(cartItem => {
        const product = state.products.find(product => product.id === cartItem.id)
        return {
          id: product.id,
          title: product.title,
          price: product.price,
          quantity: cartItem.quantity
        }
      })
    },

    cartTotal(state, getters) {
      return getters.cartProducts.reduce((total, product) => total + product.price * product.quantity, 0)
    },

    productIsStock() {
      return (product) => {
        return product
      }
    },


    productById: singleProduct => id => singleProduct.products.find(p => p.id === id)

  },

})