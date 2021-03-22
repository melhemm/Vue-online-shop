<template>
  <div class="container col-md-4">
    <h1>Edit</h1>
    <form @submit.prevent="submitHandler()">
      <div class="form-group">
        <input v-model="title" type="text" class="form-control">
        <label for="product_model">Модель Мовара</label>
      </div>

      <!-- <div class="form-group">
        <input v-model="img" type="url" class="form-control">
        <label for="product_img">Картинка товара</label>
      </div> -->
      <div class="form-group">
        <input v-model="price" type="number" class="form-control">
        <label for="price">Стоимость</label>
      </div>
      <div class="form-group">
        <input v-model="quantity" type="number" class="form-control">
        <label for="iventory">Количество</label>
      </div>
      <div class="form-group" >
        <label for="textarea">описание</label>
        <textarea v-model="content" placeholder="Product Description" class="form-control" rows="5"></textarea>
      </div>
      <button class="btn btn-primary" type="submit">Обновить</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
      name: 'edit'
      return {
        id: '',
        img: '',
        title: '',
        content: '',
        quantity: '',
        price: '',
      }
    },
    methods: {
      submitHandler() {
        this.$store.dispatch('updateProduct', {
          id: this.singleProduct.id,
          title: this.title,
          img: this.img,
          price: this.price,
          content: this.content,
          quantity: this.quantity,
        });
        this.$router.push('/admin')
      }
    },
    mounted() {
      this.id = this.singleProduct.id
      this.title = this.singleProduct.title
      this.img = this.singleProduct.img
      this.content = this.singleProduct.content
      this.price = this.singleProduct.price
      this.quantity = this.singleProduct.quantity
    },
    computed: {
    singleProduct() {
      return this.$store.getters.productById(this.$route.params.id)
    }
  },
}
</script>