<template>
  <div class="container">
    <div class="table-responsive-sm mt-4">
      <div v-if="products.length > 0">
        <table class="table table-striped table-dark text-center">
          <thead>
            <tr>
              <th scope="col">Цена</th>
              <th scope="col">Товар</th>
              <th scope="col">Количество</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(product, index) in products" :key="index" @increment="increment(index)"
              @decrement="decrement(index)">
              <td> {{product.price | currency}} </td>
              <td class="text-left">{{product.title}}</td>
              <td>{{product.quantity}}X </td>
              <td><span @click="increment(index)" class="btn btn-primary">+</span></td>
              <td><span @click="decrement(index)" class="btn btn-primary">-</span></td>
              <td><button @click="deleteItemFromCart(index)" class="btn btn-danger">Удалит</button></td>
            </tr>
          </tbody>
        </table>
        <div class="card mb-3">
          <div class="card-body">
            <ul class="list-group list-group-flush">
              <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                К оплате
                <span>{{total | currency}}</span>
              </li>
            </ul>
            <button type="button" class="btn btn-primary btn-block waves-effect waves-light mt-3">Оформить в один клик</button>
          </div>
        </div>
      </div>
      <router-link tag="button" v-else class="btn btn-primary" to="/">
        Ваша корзина пуста!
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      products() {
        return this.$store.getters.cartProducts
      },
      total() {
        return this.$store.getters.cartTotal
      }
    },

    methods: {
      deleteItemFromCart(index) {
        return this.$store.commit('deleteItemFromCart', index)
      },

      increment(index) {
        console.log('works')
        this.$store.dispatch('incrementCartItem', index)
      },

      decrement(index) {
        this.$store.dispatch('decrementCartItem', index)
      }
    },
  }
</script>