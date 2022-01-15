<template>
  <div class="container">
    <h2 id="bad_idea_title">Blog</h2>
    <div class="card" v-for="article of articles" :key="article.slug">
      <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
        <div class="card-body">
          <h4 class="card-title" id="card-title-dec">{{ article.title }}</h4>
          <!-- <div class="card-text">{{ article.description }}</div> -->
          <!-- <p style="display:inline">{{ formatDate(article.createdAt) }} </p> -->
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    try {
      const articles = await $content("articles", params.slug)
        .where({ tags: { $contains: "blog" } })
        .only(["title", "description", 'createdAt', "slug"])
        .sortBy("createdAt", "asc")
        .fetch();

      return {
        articles,
      };
    } catch (err) {
      throw new Error(`Problem handling something: ${err}.`);
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  }
};
</script>

<style>
#bad_idea_title {
  margin-top: 20px;
  margin-bottom: 12px;
}
.card {
  margin-bottom: 20px;
}
.card-text {
  text-decoration: none;
}
.card-titile {
  display: inline-block;
  background: linear-gradient(transparent 90%, #f9fffe 90%);
}
#card-title-dec {
  display: inline-block;
  background: linear-gradient(transparent 90%, #00ffc3 90%);
}
#club_top_title {
  margin-bottom: 15px;
}
</style>