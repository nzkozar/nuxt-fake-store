<script setup lang="ts">
const route = useRoute()
definePageMeta({
  layout: 'landing'
});

const {pending, data: product} = await useFetch('https://fakestoreapi.com/products/'+route.params.id,{lazy: true});

</script>

<template>
  <Head>
    <Title>{{product.title}}</Title>
    <Meta name="ogTitle" :content="product.title" />
  </Head>

  <div v-if="pending">
    Loading ...
  </div>
  <div v-else>
    <h1>{{product.title}}</h1>
    <NuxtImg
        :src=product.image
        class=""
        alt="..."
        style="width: 25rem;max-height:25rem;object-fit: contain"
    />
    <h2>Price: {{product.price}} €</h2>
  </div>
</template>

<style scoped>

</style>