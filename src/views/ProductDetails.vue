<template>
  <div class="container">
    <div class="card">
      <div class="row my-4">
        <aside class="col-sm-5 border-right">
          <article class="gallery-wrap">
            <div class="img-big-wrap">
              <div> <a href="#">
              <img class="img-fluid" :src="singleProduct.img"></a></div>
            </div> <!-- slider-product.// -->
          </article> <!-- gallery-wrap .end// -->
        </aside>
        <aside class="col-sm-7">
          <article class="card-body p-5">
            <h3 class="title mb-3">{{singleProduct.title}}</h3>

            <p class="price-detail-wrap">
              <span class="price h3 text-primary">
                <span class="num">Цена: {{singleProduct.price | currency}}</span> 
              </span>
            </p> <!-- price-detail-wrap .// -->
            <dl class="item-property">
              <dt class="title">Коротко о товаре</dt>
              <dd>
                <p>{{singleProduct.content}}</p>
              </dd>
            </dl>
            <hr>
            <button :disabled="!productIsStock(singleProduct)" @click="AddProductToCart(singleProduct)" class="btn btn-primary">В корзину</button>
          </article>
        </aside> 
      </div> 
    </div> 
  </div>
</template>

<script>
  export default {
    computed: {
      singleProduct() {
        return this.$store.getters.productById(this.$route.params.id)
      },

      productIsStock() {
        return this.$store.getters.productIsStock
      }
    },

    methods: {
      AddProductToCart(singleProduct) {
        this.$store.dispatch('addProductToCart', singleProduct)
      }
    },
  }
</script>

<style>
  .card {
    margin-top: 3rem;
  }

  .gallery-wrap .img-big-wrap img {
    height: 450px;
    width: auto;
    display: inline-block;
    cursor: zoom-in;
    object-fit: contain;
  }


  .gallery-wrap .img-small-wrap .item-gallery {
    width: 60px;
    height: 60px;
    border: 1px solid #ddd;
    margin: 7px 2px;
    display: inline-block;
    overflow: hidden;
  }

  .gallery-wrap .img-small-wrap {
    text-align: center;
  }

  .gallery-wrap .img-small-wrap img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    border-radius: 4px;
    cursor: zoom-in;
  }

  @media only screen 
and (max-device-width : 600px) {
  .gallery-wrap .img-small-wrap {
    margin: 0 auto;
  }
}

</style>