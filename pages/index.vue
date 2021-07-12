<template>
  <div>
    <div class="row">
      <!-- <div class="col-3">
        <NuxtLink to="/good_ideas">
          <div class="idea">
            <img src="../assets/svg/idea.svg" width="240px" />
          </div>
        </NuxtLink>
        <NuxtLink to="/bad_ideas">
          <div class="trash">
            <img src="../assets/svg/basket.svg" width="240px" />
          </div>
        </NuxtLink>
      </div> -->
      <div>
        <h1 class="title">Blog and Portfolio</h1>
        <p>
          This website contains my blog posts and portfolio. I mainly write Django and frontend, such as Nuxt.js. Enjoy!
        </p>
        <br>
        <p>
          Visit my
        </p>
        <p><a class="links" href="https://github.com/grayusan">Github</a></p>
        <p><a class="links" href="https://qiita.com/grayu">Qiita</a></p>
        <p>profile!</p>
      </div>
    </div>
  </div>
</template>

<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-WBLWNNTXMZ"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-WBLWNNTXMZ');
</script>

<script>
export default {};
</script>

 <style>
@import url("https://fonts.googleapis.com/css2?family=Londrina+Outline&display=swap");
img {
  width: 240px;
  height: auto;
}
.title {
  font-size: 40px;
  margin-bottom: 20px;
}
.links {
  color: blue;
}

</style>