<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark navbar-fixed-bottom">
    <div class="container">
      <router-link class="navbar-brand" tag="a" to="/">Vue Online Store</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <router-link tag="a" class="nav-link" to="/" exact>Главная</router-link>
          </li>
          <li v-if="products.length === 0">
            <router-link tag="a" class="nav-link" to="/cart" exact><i class="fas fa-shopping-cart"></i></router-link>
          </li>
          <li class="nav-item" v-else>
            <router-link tag="a" class="nav-link" to="/cart" exact><i class="fas fa-shopping-cart"></i>{{products.length}}</router-link>
          </li>
          <!-- <li class="nav-item">
            <router-link tag="a" class="nav-link" to="/add">Add Product</router-link>
          </li> -->
          <li class="nav-item">
            <router-link tag="a" class="nav-link" to="/admin">Панель управления</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    computed: {
      products() {
        return this.$store.getters.cartProducts
      },
    },

  }
</script>