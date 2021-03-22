<!--<template>
 
  <div class="container col-md-4">
    <h1>Add A Product</h1>
    <form @submit.prevent="submitHandler()">
      <div class="form-group">
        <input v-model="title" type="text" class="form-control">
        <label for="product_model">Product Model</label>
      </div>

      <div class="form-group">
        <input v-model="img" placeholder="Image URL" type="url" class="form-control">
        <label for="product_img">Product Image URL</label>
      </div>
      <div class="form-group">
        <input v-model="price" placeholder="300$" type="number" class="form-control">
        <label for="price">Product Price</label>
      </div>
      <div class="form-group">
        <input v-model="quantity" placeholder="10" type="number" class="form-control">
        <label for="quantity">quantity</label>
      </div>
      <div class="form-group">
        <textarea v-model="content" rows="5" placeholder="Product Description" class="form-control"></textarea>
      </div>
      <button class="btn btn-primary" type="submit">Add Product</button>
    </form>
  </div> 
</template> 

<script>
export default {
  data() {
    return {
      img: '',
      title: '',
      content: '',
      price: '',
      quantity: ''
    }
  },
  methods: {
    submitHandler() {
      const product = {
        title: this.title,
        img: this.img,
        price: this.price,
        content: this.content,
        quantity: this.quantity,
        id: Date.now()
      }
      this.$store.dispatch('AddProduct', product);
      this.$router.push('/')
    }
  },
}
</script>
 -->