<script setup lang="ts">
import ProductCard from "~/components/ProductCard.vue";

definePageMeta({
  layout: 'landing'
});

useHead({
  title: "Featured Products",
  meta: [
    {name: "description", content: "FakeStore product categories" }
  ]
});

const {data: products} = await useFetch('https://fakestoreapi.com/products?limit=20');

</script>

<template>
  <h1>{{$t('home.featured_products')}}</h1>
  <div class="row">
    <ProductCard v-for="product in products" :product="product" class="col-6 col-md-4 col-lg-2 mb-3 mx-auto"/>
  </div>
</template>

<style scoped>

</style>