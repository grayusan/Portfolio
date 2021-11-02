<template>
  <div>
    <div class="container">
  <article>
    <!-- <h1>{{ article.title }}</h1>
    <p>{{ article.description }}</p> -->
    <!-- <img :src="article.img" :alt="article.alt" /> -->
    
    <!-- <p class="dates">Article last updated: {{ formatDate(article.updatedAt) }}</p> -->
    <hr>
    <!-- <nav>
        <ul>
            <li v-for="link of article.toc" :key="link.id">
            <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
            </li>
        </ul>ß
    </nav> -->
    <nuxt-content :document="article" />
  </article>
  </div>
  </div>
</template>

<script>
  export default {
    async asyncData({ $content, params }) {
      const article = await $content('articles', params.slug).fetch()

      return { article }
    },
    methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
 }
  }
</script>

<style>

  .nuxt-content h1 {
    font-weight: bold;
    display: inline-block;
    background: linear-gradient(transparent 70%, #00FFC3 70%);
  }

  .nuxt-content h2 {
    font-weight: bold;
    font-size: 28px;
    display: inline-block;
    background: linear-gradient(transparent 70%, #00FFC3 70%);
  }
  .nuxt-content h3 {
    font-weight: bold;
    font-size: 22px;
    display: inline-block;
    background: linear-gradient(transparent 70%, #00FFC3 70%);
  }
  .nuxt-content p {
    margin-bottom: 20px;
    color: #001C50;
  }

  hr{
    color: "#00FFC3";
    margin-bottom: 20px;
  }

  .dates{
    margin-top: 20px;
  }

  img{
    width: 40em;
  }

</style>
