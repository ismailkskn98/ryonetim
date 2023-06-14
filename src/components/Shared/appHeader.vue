<template>
  <header>
    <div class="container">
      <div class="logo">
        <router-link :to="{name: 'HomePage'}"><img title = "Anasayfa" src="@/assets/images/ryonetimlogosiyahyazi.png" alt="renato yazilim logo"></router-link>
      </div>
        <!--  NAVBAR Start  -->
        <div id="navbar">
          <ul class="nav-items">
            <li class="nav-li"><router-link active-class="active" :to="{name: 'HomePage'}" class="nav-item" title="Anasayfa">anasayfa</router-link></li>
            <li class="dropdown nav-li"><router-link active-class="active" :to="{name: 'SiteYonetimi'}" class="nav-item" title="Hizmetler">Hizmetler<i class="fa-solid fa-angle-down"></i></router-link>
              <ul class="dropdown-menu">
                <li class="dropdown-item"><router-link :to="{name: 'SiteYonetimi'}" title="Profesyonel Site Yönetimi (PSY)">Profesyonel Site Yönetimi (PSY)</router-link></li>
                <li class="dropdown-item"><router-link :to="{name: 'YonetimPlani'}" title="Site Yönetim Planı">Site Yönetim Planı</router-link></li>
                <li class="dropdown-item"><router-link :to="{name: 'TemizlikHizmetleri'}" title="Site Ve Kurumsal Temizlik Hizmetleri">Site Ve Kurumsal Temizlik Hizmetleri</router-link></li>
                <li class="dropdown-item"><router-link :to="{name: 'BakimHizmetleri'}" title="Bahçe Çim Ve Sulama Bakım Hizmetleri">Bahçe Çim Ve Sulama Bakım Hizmetleri</router-link></li>
                <li class="dropdown-item"><router-link :to="{name: 'HasereHizmetleri'}" title="Haşere İle Mücadele Hizmetleri">Haşere İle Mücadele Hizmetleri</router-link></li>
                <li class="dropdown-item"><router-link :to="{name: 'TeknikOnarim'}" title="Teknik Bakım Ve Onarım Hizmetleri">Teknik Bakım Ve Onarım Hizmetleri</router-link></li>
                <li class="dropdown-item"><router-link :to="{name: 'KalorimetreFatura'}" title="Kalorimetre Pay Okuma Ve Faturalandırma">Kalorimetre Pay Okuma Ve Faturalandırma</router-link></li>
              </ul>
            </li>
            <li class="nav-li"><router-link active-class="active" :to="{name: 'KurumsalPage'}" class="nav-item" title="Kurumsal">Kurumsal</router-link></li>
            <li class="nav-li"><router-link active-class="active" :to="{name: 'IletisimPage'}" class="nav-item" title="Iletisim">İLETİSİM</router-link></li>
          </ul>
        </div> <!--  NAVBAR END    -->

<!--   MOBİL MENU START   -->
      <div id="mobil_nav">
        <div class="mobil_nav_controls">
          <i @click="menuClose = !menuClose" class="fa-solid fa-bars"></i>
          <ul :class="mobilMenuOpen" class="mobil_nav_items">
            <li><router-link class="mobil-nav-item" :to="{name: 'HomePage'}" title="Anasayfa">Anasayfa</router-link></li>
            <li><router-link class="mobil-nav-item" :to="{name: 'KurumsalPage'}" title="Kurumsal">Kurumsal</router-link></li>
            <li @click="mobilHizmetlerClick = !mobilHizmetlerClick" class="mobil-dropdown"><router-link class="mobil-nav-item" to="#" title="Hizmetler">Hİzmetler
              <i class="fa-solid fa-angle-down"></i></router-link>
              <ul :class="mobilHizmetlerClickTrueFalse" class="mobil_dropdown_items">
                <li><router-link :to="{name: 'SiteYonetimi'}" title="Profesyonel Site Yönetimi (PSY)">Profesyonel Site Yönetimi (PSY)</router-link></li>
                <li><router-link :to="{name: 'YonetimPlani'}" title="Site Yönetim Planı">Site Yönetim Planı</router-link></li>
                <li><router-link :to="{name: 'TemizlikHizmetleri'}" title="Site Ve Kurumsal Temizlik Hizmetleri">Site Ve Kurumsal Temizlik Hizmetleri</router-link></li>
                <li><router-link :to="{name: 'BakimHizmetleri'}" title="Bahçe Çim Ve Sulama Bakım Hizmetleri">Bahçe Çim Ve Sulama Bakım Hizmetleri</router-link></li>
                <li><router-link :to="{name: 'HasereHizmetleri'}" title="Haşere İle Mücadele Hizmetleri">Haşere İle Mücadele Hizmetleri</router-link></li>
                <li><router-link :to="{name: 'TeknikOnarim'}" title="Teknik Bakım Ve Onarım Hizmetleri">Teknik Bakım Ve Onarım Hizmetleri</router-link></li>
                <li><router-link :to="{name: 'KalorimetreFatura'}" title="Kalorimetre Pay Okuma Ve Faturalandırma">Kalorimetre Pay Okuma Ve Faturalandırma</router-link></li>
              </ul>
            </li>
            <li><router-link class="mobil-nav-item" :to="{name: 'IletisimPage'}">İletİşİm</router-link></li>
          </ul>
        </div>
      </div> <!--   MOBİL MENU END   -->
    </div>
  </header>
</template>

<script>
export default {
  name: "appHeader",
  data() {
    return {
      menuClose: true,
      mobilHizmetlerClick: false,
    }
  },
  computed: {
    mobilMenuOpen() {
      return {mobil_nav_items_close: this.menuClose}
    },
    mobilHizmetlerClickTrueFalse() {
      return {mobil_dropdown_items_click: this.mobilHizmetlerClick};
    },
  }
}
</script>