<script>
export default {
  name: "TemizlikHizmetleri",
  data() {
    return {

    }
  }
}
</script>

<template>
  <app-header/>
  <banner-header/>
  <section id="hizmetler-content">
    <side-bar />
    <div v-motion-slide-right class="content">
      <h1>Site Temizlik Hizmetleri</h1>
      <img src="@/assets/images/temizlik-hizmetleri.jpg">
      <div class="temizlik-hizmetleri">
        <h2><b>Renato Yonetim olarak</b> profesyonel site yönetimi kapsamında yaşam alanınızın sağlıklı olması adına aşağıda belirttiğimiz tüm detaylı temizlik hizmetlerini sağlıyoruz.</h2>
        <ul>
          <li>Bina giriş kapısı, asansör içleri ve kapılarının temizlenmesi </li>
          <li>Daire hollerinin, koridorlarının temizlenmesi </li>
          <li>Merdiven ve korkuluklarının temizlenmesi</li>
          <li>Binada bulunan radyatör peteklerinin temizliği </li>
          <li>Tüm elektrik düğmelerinin temizlenmesi </li>
          <li>Posta kutularının temizlenmesi</li>
          <li>Çöplerin toplanması</li>
          <li>Bina cephesine yapıştırılan ilanların, yapılan müdahalelerin temizlenmesi</li>
          <li>Bina dış cephe temizliğinin yapılması </li>
          <li>Yangın merdivenlerinin temizlenmesi</li>
          <li>Tadilat sonrası temizlik</li>
        </ul>
      </div>
    </div>
  </section>
  <app-footer/>
</template>