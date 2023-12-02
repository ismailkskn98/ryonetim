<template>
  <aside>
    <h1>Hizmetler</h1>
    <ul>
      <li>
        <nuxt-link active-class="active" to="/hizmetler">Site Yonetimi</nuxt-link>
      </li>
      <li>
        <nuxt-link active-class="active" to="/hizmetler/yonetimgorevleri">Site Yönetimi Görevleri</nuxt-link>
      </li>
      <li>
        <nuxt-link active-class="active" to="/hizmetler/gereklievraklar">Site Yonetimi İçin Gerekli
          Evraklar</nuxt-link>
      </li>
      <li>
        <nuxt-link active-class="active" to="/hizmetler/yonetimkanunu">Site Yonetimi Kanunu</nuxt-link>
      </li>
      <li>
        <nuxt-link active-class="active" to="/hizmetler/yonetimplani">Site Yonetimi Plani</nuxt-link>
      </li>
      <li>
        <nuxt-link active-class="active" to="/hizmetler/yonetimsecimi">Site Yonetimi Secimi</nuxt-link>
      </li>
      <li>
        <nuxt-link active-class="active" to="/hizmetler/siteyonetimyonetmenligi">Site Yonetimi
          Yönetmenliği</nuxt-link>
      </li>
      <li>
        <nuxt-link active-class="active" to="/hizmetler/temizlikhizmetleri">Site Temizlik Hizmetleri</nuxt-link>
      </li>
      <li>
        <nuxt-link active-class="active" to="/hizmetler/cimbicmesulamasistemleri">Çim Biçme ve Sulama Sistemleri Bakım
          Hizmetleri</nuxt-link>
      </li>
      <li>
        <nuxt-link active-class="active" to="/hizmetler/hasereilemucadelehizmetleri">Haşere ile Mücadele
          Hizmetleri</nuxt-link>
      </li>
      <li>
        <nuxt-link active-class="active" to="/hizmetler/bakimveonarimhizmetleri">Teknik Bakım ve Onarım
          Hizmetleri</nuxt-link>
      </li>
      <li>
        <nuxt-link active-class="active" to="/hizmetler/kalorimetrefaturalandirma">Uzaktan Kalorimetre Ölçme ve
          Faturalandırma</nuxt-link>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: "SideBar"
}
</script>