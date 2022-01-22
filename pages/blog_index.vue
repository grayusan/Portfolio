<template>
  <div class="container">
    <h2 id="bad_idea_title">Blog</h2>
    <div class="card" v-for="article of articles" :key="article.slug">
        <div class="card-body">
          <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
          <h4 class="card-title" id="card-title-dec">{{ article.title }}</h4>
          </NuxtLink>
          <h4 class="card-date">{{article.date}}</h4>
          <!-- <div class="card-text">{{ article.description }}</div> -->
          <!-- <p style="display:inline">{{ formatDate(article.createdAt) }} </p> -->
        </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    try {
      const articles = await $content("articles", params.slug)
        .where({ tags: { $contains: "blog" } })
        .only(["title", "description", 'createdAt', "slug","date"])
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
.card-body {
  display:flex;
}
.card-text {
  text-decoration: none;
}
.card-title {
  display: inline-block;
  background: linear-gradient(transparent 90%, #f9fffe 90%);
}
.card-date {
  margin-left: 25px;
  color: #5A5A5A;
}
/* #card-title-dec {
  display: inline-block;
  background: linear-gradient(transparent 90%, #00ffc3 90%);
} */
#club_top_title {
  margin-bottom: 15px;
}
</style>