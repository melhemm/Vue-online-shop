<template>
  <div class="container table-responsive-sm">
    <h1 class="title" style="color: #ffffff">Admin Page</h1>
      <table class="table table-light mt-2 border-2 text-center">
        <thead>
          <tr>
            <th scope="col">ID Товара</th>
            <th scope="col">Название Товара</th>
            <th scope="col">Цена</th>
            <th scope="col">Количество</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, index) in products" :key="index">
            <th scope="row">{{product.id}}</th>
            <td>{{product.title}}</td>
            <td>{{product.price | currency}}</td>
            <td>{{product.quantity}}</td>
            <td>
              <router-link 
                tag="button" 
                class="btn btn-primary" 
                :to="'/edit/' + product.id">
                Редактировать
              </router-link>
            </td>
            <td><button @click="deleteItemFromAdmin(index)" class="btn btn-danger">Удалить</button></td>
          </tr>
        </tbody>
      </table> 
</div>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.state.products
    },
  },

  methods: {
    deleteItemFromAdmin(index) {
      return this.$store.commit('deleteItemFromAdmin', index)
    }
  },
}
</script>