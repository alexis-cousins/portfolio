<template>
  <Splide :options="{ rewind: true }">
    <SplideSlide v-for="(image, index) in images" :key="index">
      <img :src="image" alt="Sample 1" />
    </SplideSlide>
  </Splide>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/splide.min.css";

export default {
  components: {
    Splide,
    SplideSlide,
  },
  props: {
    images: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style>
</style>