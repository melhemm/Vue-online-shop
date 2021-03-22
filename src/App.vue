<template>
  <div id="app">
    <Navbar />
    <transition 
      name="fade" 
      mode="out-in" 
      @beforeLeave="beforeLeave" 
      @enter="enter" 
      @afterEnter="afterEnter"
      >
      <router-view />
    </transition>
    <Footer />
  </div>
</template>

<script>
  import Navbar from './components/Navbar'
  export default {
    data() {
      return {
        prevHeight: 0,
      }
    },
    methods: {
      beforeLeave(element) {
        this.prevHeight = getComputedStyle(element).height;
      },
      enter(element) {
        const {
          height
        } = getComputedStyle(element);

        element.style.height = this.prevHeight;

        setTimeout(() => {
          element.style.height = height;
        });
      },
      afterEnter(element) {
        element.style.height = 'auto';
      },
    },

    components: {
      Navbar,
    }
  }
</script>

<style>
  .fade-enter-active,
  .fade-leave-active {
    transition-duration: 0.6s;
    transition-property: opacity;
    transition-property: height, opacity;
    transition-timing-function: ease;
    overflow: hidden;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }
</style>