<template>
  <div class="container">
    <div class="md-form active-pink active-pink-2 mb-3 mt-3">
      <input class="form-control" v-model="search" placeholder="Поиск по названию">
    </div>
    <div class="row my-4">
      <div class="col-lg-12">
        <div class="row">
          <div class="col-lg-4 col-md-2 mb-4" v-for="(product, index) in filteredList" :key="index">
            <div class="card h-100">
              <img class="card-img-top" :src="product.img">
              <div class="card-body">
                <h4 class="card-title">
                  {{product.title}}
                </h4>
              </div>
              <div class="card-footer">
                <h5 class="card-text">{{product.price | currency}}</h5>
                <button @click="AddProductToCart(product)" class="btn btn-primary">В корзину</button>
                <router-link tag="button" class="btn btn-secondary ml-2" :to="'/product/' + product.id">Характеристики
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
  export default {
    data() {
      return {
        search: ''
      }
    },
    name: 'Home',
    computed: {
      products() {
        return this.$store.state.products
      },

      productIsStock() {
        return this.$store.getters.productIsStock
      },

      filteredList() {
        return this.products.filter((product) => {
          return product.title.toLowerCase().includes(this.search.toLowerCase())
        })
      },
      
    },

    methods: {
      AddProductToCart(product) {
        this.$store.dispatch('addProductToCart', product)
      }
    },
  }
</script>

<style>
  .single-item {
    height: 100%;
  }

  img {
    height: 280px;
    object-fit: contain;
  }
</style>