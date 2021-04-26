<template>
  <header>
   <h1>
      <a href="/">BLOG</a>
   </h1>
   <nav class="pc-nav">
      <ul>
         <NuxtLink to="/blog">
         <li><a href="#">BLOG</a></li>
         </NuxtLink>
         <li><a href="#">CONTACT</a></li>
      </ul>
   </nav>
</header>
</template>

<style>
header {
   padding: 30px 4% 10px;
   position: fixed;
   top: 0;
   width: 100%;
   background-color: transparent;
   display: flex;
   align-items: center;
   margin-bottom: 30px;
}
h1 {
   margin: 0; padding: 0;
   font-size: 20px;
}
nav {
   margin: 0 0 0 auto;
}
ul {
   list-style: none;
   margin: 0;
   display: flex;
}
li {
   margin: 0 0 0 15px;
   font-size: 14px;
}
a {	
   text-decoration: none;
   color: #fff;
}
a:link {
  color: #001C50;
}

a:visited{
  color: #001C50;
}
</style>