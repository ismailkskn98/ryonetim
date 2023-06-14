<script>
export default {
  name: "appFooter"
}
</script>

<template>
  <footer v-motion-slide-visible-once-bottom>
    <div class="container">
      <div class="content">
        <div class="content-item kurumsal">
            <img src="@/assets/images/ryonetimlogosiyahyazi.png">
            <p>İYİ NİYET TEMİZ HİZMET</p>
            <p><i>Deneyimli kadrosu ve teknolojik altyapısıyla sitenizin güvenliğini sağlar..</i></p>
        </div>
        <div class="content-item hizmetler">
          <ul class="nav-hizmetler">
            <h2>Hizmetler</h2>
            <li><router-link :to="{name: 'SiteYonetimi'}" class="hizmetler-item" title="Profesyonel Site Yönetimi (PSY)">Profesyonel Site Yönetimi (PSY)</router-link></li>
            <li><router-link :to="{name: 'TemizlikHizmetleri'}" class="hizmetler-item" title="Site Ve Kurumsal Temizlik Hizmetleri">Site Ve Kurumsal Temizlik Hizmetleri</router-link></li>
            <li><router-link :to="{name: 'BakimHizmetleri'}" class="hizmetler-item" title="Bahçe Çim Ve Sulama Bakım Hizmetleri">Bahçe Çim Ve Sulama Bakım Hizmetleri</router-link></li>
            <li><router-link :to="{name: 'HasereHizmetleri'}" class="hizmetler-item" title="Haşere İle Mücadele Hizmetleri">Haşere İle Mücadele Hizmetleri</router-link></li>
            <li><router-link :to="{name: 'TeknikOnarim'}" class="hizmetler-item" title="Teknik Bakım Ve Onarım Hizmetleri">Teknik Bakım Ve Onarım Hizmetleri</router-link></li>
            <li><router-link :to="{name: 'KalorimetreFatura'}" class="hizmetler-item" title="Kalorimetre Pay Okuma Ve Faturalandırma">Kalorimetre Pay Okuma Ve Faturalandırma</router-link></li>
            <li><router-link class="hizmetler-item" :to="{name: 'YonetimPlani'}" title="Site Yönetim Planı">Site Yönetim Planı</router-link></li>
          </ul>
        </div>
        <div class="content-item navbar">
          <ul class="footer-nav">
            <h2>hızlı erişim</h2>
            <li><router-link :to="{name: 'HomePage'}" class="footer-nav-item" title="Anasayfa">anasayfa</router-link></li>
            <li><router-link :to="{name: 'SiteYonetimi'}" class="footer-nav-item" title="Hizmetler">hizmetler</router-link></li>
            <li><router-link :to="{name: 'KurumsalPage'}" class="footer-nav-item" title="Kurumsal">kurumsal</router-link></li>
            <li><router-link :to="{name: 'IletisimPage'}" class="footer-nav-item" title="İletisim">iletisim</router-link></li>
          </ul>
        </div>
        <div class="content-item iletisim">
            <h2>iletisim</h2>
            <h4>Bize Ulaşın Anında Dönüş Yapalım</h4>
            <a href="tel:05060371036" class="iletisim-no">+90 (0506) 037 10 36</a>
            <a href="mailto:ryonetım@hotmail.com" class="iletisim-mail">ryonetım@hotmail.com</a>
        </div>
      </div>
      <div class="bottom-footer">
        <div class="copyright">©Copyrights. 2023 All Rights Reserved<img src="@/assets/images/metyazilim.png"></div>
        <div class="social-media">
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-facebook"></i>
        </div>
      </div>
    </div>
  </footer>
</template>