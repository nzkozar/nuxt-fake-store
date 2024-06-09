<script setup lang="ts">
import ProductCard from "~/components/ProductCard.vue";

const route = useRoute()
definePageMeta({
  layout: 'landing'
});
console.log(route.params)
let categoryName: string = route.params.categoryName.toString();

const {pending, data: products} = await useFetch('https://fakestoreapi.com/products/category/'+categoryName,{lazy: true});

</script>

<template>
  <Head>
    <Title>{{categoryName}}</Title>
    <Meta name="ogTitle" :content="categoryName" />
  </Head>

  <h1>Category: <span class="text-capitalize">{{categoryName}}</span></h1>
  <div v-if="pending">
    Loading ...
  </div>
  <div v-else>
    <template>
      <div class="row">
        <ProductCard v-for="product in products" :product="product" class="col-6 col-md-4 col-lg-2 mb-3 mx-auto"/>
      </div>
    </template>
  </div>
</template>

<style scoped>

</style>