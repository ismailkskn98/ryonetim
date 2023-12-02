<template>
  <AppHeader />
  <header v-motion-slide-bottom id="header-iletisim">
    <div class="container">
      <h1>İLETİŞİM</h1>
      <ul class="breadcrumb">
        <li><nuxt-link to="/">Anasayfa</nuxt-link></li>
        <li>İletişim</li>
      </ul>
    </div>
  </header>
  <section v-motion-slide-bottom id="iletisim-bilgileri">
    <h1>Size nasıl yardımcı olabiliriz?</h1>
    <div class="container">
      <div class="iletisim-item mail">
        <i class="fa-solid fa-envelope"></i>
        <h2>Bize bir e-posta gönder</h2>
        <p>Mail adresimizden 7/24 mail gönderebilirsiniz.</p>
        <a href="mailto:ryonetım@hotmail.com">ryonetım@hotmail.com</a>
      </div>
      <div class="iletisim-item phone">
        <i class="fa-solid fa-phone"></i>
        <h2>Bizi arayın</h2>
        <p>09:00 – 18:00 Çalışma Saatleri içerisinde bizimle iletişime geçebilirsiniz.</p>
        <a href="tel:05060371036">+90 (0506) 037 10 36</a>
      </div>
      <div class="iletisim-item address">
        <i class="fa-solid fa-map-location"></i>
        <h2>Adresimiz</h2>
        <p>Bağlıca Meydan Çarşı Baglıca Mah. Etimesgut Blv. D Blok No: 5 ETİMESGUT / ANKARA</p>
        <a target="_blank" href="https://goo.gl/maps/iZdX2sZVnNHLo5fU8">Yol Tarifi İçin Tıklayınız</a>
      </div>
    </div>
  </section>
  <div v-motion :initial="{ opacity: 0, y: 100, }" :visible="{ opacity: 1, y: 0, }" id="harita">
    <div class="container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24485.47560362242!2d32.61614494886096!3d39.90369664935908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d339402c13c9d7%3A0xdb5e81798065b567!2zQmHEn2zEsWNhIE1leWRhbiDDh2FyxZ_EsQ!5e0!3m2!1str!2str!4v1684936798046!5m2!1str!2str"
        style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
  </div>
  <AppFooter />
</template>