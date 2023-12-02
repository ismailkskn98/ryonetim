<template>
  <header>
    <div class="container">
      <div class="logo">
        <nuxt-link to="/"><img title="Anasayfa" src="/images/ryonetimlogosiyahyazi.png" alt="renato yazilim logo">
        </nuxt-link>
      </div>
      <!--  NAVBAR Start  -->
      <div id="navbar">
        <ul class="nav-items">
          <li class="nav-li">
            <nuxt-link active-class="active" to="/" class="nav-item" title="Anasayfa">anasayfa</nuxt-link>
          </li>
          <li class="dropdown nav-li">
            <nuxt-link active-class="active" to="/hizmetler" class="nav-item" title="Hizmetler">Hizmetler<i
                class="fa-solid fa-angle-down"></i></nuxt-link>
            <ul class="dropdown-menu">
              <li class="dropdown-item">
                <nuxt-link to="/hizmetler" title="Profesyonel Site Yönetimi (PSY)">Profesyonel Site Yönetimi (PSY)
                </nuxt-link>
              </li>
              <li class="dropdown-item">
                <nuxt-link to="/hizmetler/yonetimplani" title="Site Yönetim Planı">Site Yönetim
                  Planı</nuxt-link>
              </li>
              <li class="dropdown-item">
                <nuxt-link to="/hizmetler/temizlikhizmetleri" title="Site Ve Kurumsal Temizlik Hizmetleri">Site Ve
                  Kurumsal
                  Temizlik
                  Hizmetleri</nuxt-link>
              </li>
              <li class="dropdown-item">
                <nuxt-link to="/hizmetler/cimbicmesulamasistemleri" title="Bahçe Çim Ve Sulama Bakım Hizmetleri">Bahçe Çim
                  Ve Sulama
                  Bakım Hizmetleri</nuxt-link>
              </li>
              <li class="dropdown-item">
                <nuxt-link to="/hizmetler/hasereilemucadelehizmetleri" title="Haşere İle Mücadele Hizmetleri">Haşere İle
                  Mücadele
                  Hizmetleri</nuxt-link>
              </li>
              <li class="dropdown-item">
                <nuxt-link to="/hizmetler/bakimveonarimhizmetleri" title="Teknik Bakım Ve Onarım Hizmetleri">Teknik Bakım
                  Ve Onarım
                  Hizmetleri</nuxt-link>
              </li>
              <li class="dropdown-item">
                <nuxt-link to="/hizmetler/kalorimetrefaturalandirma" title="Kalorimetre Pay Okuma Ve Faturalandırma">
                  Kalorimetre Pay
                  Okuma Ve Faturalandırma</nuxt-link>
              </li>
            </ul>
          </li>
          <li class="nav-li">
            <nuxt-link active-class="active" to="/kurumsal" class="nav-item" title="Kurumsal">Kurumsal</nuxt-link>
          </li>
          <li class="nav-li">
            <nuxt-link active-class="active" to="/iletisim" class="nav-item" title="Iletisim">İLETİSİM</nuxt-link>
          </li>
        </ul>
      </div> <!--  NAVBAR END    -->

      <!--   MOBİL MENU START   -->
      <div id="mobil_nav">
        <div class="mobil_nav_controls">
          <i @click="menuClose = !menuClose" class="fa-solid fa-bars"></i>
          <ul :class="mobilMenuOpen" class="mobil_nav_items">
            <li>
              <nuxt-link class="mobil-nav-item" to="/" title="Anasayfa">Anasayfa</nuxt-link>
            </li>
            <li>
              <nuxt-link class="mobil-nav-item" to="/kurumsal" title="Kurumsal">Kurumsal</nuxt-link>
            </li>
            <li @click="mobilHizmetlerClick = !mobilHizmetlerClick" class="mobil-dropdown">
              <nuxt-link class="mobil-nav-item" to="#" title="Hizmetler">Hizmetler
                <i class="fa-solid fa-angle-down"></i>
              </nuxt-link>
              <ul :class="mobilHizmetlerClickTrueFalse" class="mobil_dropdown_items">
                <li>
                  <nuxt-link to="/hizmetler" title="Profesyonel Site Yönetimi (PSY)">Profesyonel Site Yönetimi
                    (PSY)</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/hizmetler/yonetimplani" title="Site Yönetim Planı">Site Yönetim Planı</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/hizmetler/temizlikhizmetleri" title="Site Ve Kurumsal Temizlik Hizmetleri">Site Ve
                    Kurumsal
                    Temizlik Hizmetleri</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/hizmetler/cimbicmesulamasistemleri" title="Bahçe Çim Ve Sulama Bakım Hizmetleri">Bahçe
                    Çim Ve
                    Sulama Bakım Hizmetleri</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/hizmetler/hasereilemucadelehizmetleri" title="Haşere İle Mücadele Hizmetleri">Haşere ile
                    Mücadele Hizmetleri</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/hizmetler/bakimveonarimhizmetleri" title="Teknik Bakım Ve Onarım Hizmetleri">Teknik
                    Bakım
                    Ve
                    Onarım Hizmetleri</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/hizmetler/kalorimetrefaturalandirma" title="Kalorimetre Pay Okuma Ve Faturalandırma">
                    Kalorimetre
                    Pay Okuma Ve Faturalandırma</nuxt-link>
                </li>
              </ul>
            </li>
            <li><nuxt-link class="mobil-nav-item" to="/iletisim">İletişim</nuxt-link></li>
          </ul>
        </div>
      </div> <!--   MOBİL MENU END   -->
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      menuClose: true,
      mobilHizmetlerClick: false,
    }
  },
  computed: {
    mobilMenuOpen() {
      return { mobil_nav_items_close: this.menuClose }
    },
    mobilHizmetlerClickTrueFalse() {
      return { mobil_dropdown_items_click: this.mobilHizmetlerClick };
    },
  }
}
</script>