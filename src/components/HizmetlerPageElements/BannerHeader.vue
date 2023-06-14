<template>
  <header id="header-hizmetler">
    <div class="container">
      <h1>Hizmetler</h1>
      <ul class="breadcrumb">
        <li><router-link :to="{name: 'HomePage'}">Anasayfa</router-link></li>
        <li>Hizmetler</li>
      </ul>
    </div>
  </header>
</template>

<script>
export default{
  name: "BannerHeader",
}
</script>