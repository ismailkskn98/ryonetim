<template>
  <AppHeader />
  <BannerHeader />
  <section id="hizmetler-content">
    <side-bar />
    <div v-motion-slide-bottom class="content">
      <h1>Site Yönetimi Kurmak İçin Gerekli Evraklar Nelerdir?</h1>
      <p>
        Apartman ve site yönetimi, hem vergi kanunları açısından hem de kat mülkiyeti kanunu açısından defter tutmak
        zorundadır.
      </p>
      <img src="/images/gerekli-evraklar.jpg">
      <div class="vergi-kanunlari">
        <h2>Vergi kanunları açısından tutulması gereken defterler aşağıdaki şekildedir.</h2>
        <ul>
          <li>Yevmiye Defteri</li>
          <li>Defteri Kebir</li>
          <li>Envanter ve Bilanço Defteri</li>
          <li>Karar Defterleri (Genel Kurul Karar Defteri, Yönetim Kurulu Karar Defteri)</li>
          <li>Ortaklar Defteri</li>
        </ul>
      </div>
      <div class="kat-mülkiyeti">
        <h2>Kat mülkiyeti kanunu açısından tutulması gereken defterler aşağıdaki şekildedir.</h2>
        <ul>
          <li>Karar Defteri (Kat Malikleri Kurulu Defteri)</li>
          <li>Gelir-Gider Defteri</li>
          <li>Denetim Defteri</li>
          <li>Belge Muhafaza Yükümlülüğü</li>
          <li>Defterlerin Kapanış Tasdiki Zorunluluğu</li>
        </ul>
      </div>
      <div class="sgk-mevzuati">
        <h2>SGK mevzuatı açısından aşağıdaki yükümlülüklerin yapılması gerekmektedir.</h2>
        <ul>
          <li>İşyeri Bildirgesi</li>
          <li>İş Kazası Bildirimi</li>
          <li>Belgelerin Muhafaza Süresi</li>
          <li>İbraz Edilecek Defterler ve Belgeler</li>
        </ul>
      </div>
      <p style="margin-top: 2rem">
        Yaşam ortamlarında mutlu bir şekilde yaşayabilmek için site yönetiminin doğru kişilerden oluşması, yasal bir
        süreçlerin
        ilerletilmesi ve güvenilir bir yönetim oluşturulması önemlidir.
      </p>
    </div>
  </section>
  <AppFooter />
</template>
