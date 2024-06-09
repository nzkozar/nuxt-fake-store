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
    <div class="row">
      <div class="col-12 col-lg-8">
        <label for="productTitle" class="text-capitalize">{{product.category}}</label>
        <h1 id="productTitle">{{product.title}}</h1>
        <p>{{product.description}}</p>
        <button class="btn btn-success">
          Buy now: <span class="fw-bold">{{product.price}}€</span>
        </button>
      </div>
      <div class="col-12 col-lg-4">
        <NuxtImg
            :src=product.image
            class=""
            alt="..."
            style="width: 25rem;max-height:25rem;object-fit: contain"
        />
      </div>
    </div>




  </div>
</template>

<style scoped>

</style>