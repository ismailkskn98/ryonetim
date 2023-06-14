<template>
  <aside>
    <h1>Hizmetler</h1>
    <ul>
      <li><router-link active-class="active" :to="{name: 'SiteYonetimi'}">Site Yonetimi</router-link></li>
      <li><router-link active-class="active" :to="{name: 'YonetimGorevleri'}">Site Yönetimi Görevleri</router-link></li>
      <li><router-link active-class="active" :to="{name: 'GerekliEvraklar'}">Site Yonetimi İçin Gerekli Evraklar</router-link></li>
      <li><router-link active-class="active" :to="{name: 'YonetimKanunu'}">Site Yonetimi Kanunu</router-link></li>
      <li><router-link active-class="active" :to="{name: 'YonetimPlani'}">Site Yonetimi Plani</router-link></li>
      <li><router-link active-class="active" :to="{name: 'YonetimSecimi'}">Site Yonetimi Secimi</router-link></li>
      <li><router-link active-class="active" :to="{name: 'YonetimYonetmenligi'}">Site Yonetimi Yönetmenliği</router-link></li>
      <li><router-link active-class="active" :to="{name: 'TemizlikHizmetleri'}">Site Temizlik Hizmetleri</router-link></li>
      <li><router-link active-class="active" :to="{name: 'BakimHizmetleri'}">Çim Biçme ve Sulama Sistemleri Bakım Hizmetleri</router-link></li>
      <li><router-link active-class="active" :to="{name: 'HasereHizmetleri'}">Haşere ile Mücadele Hizmetleri</router-link></li>
      <li><router-link active-class="active" :to="{name: 'TeknikOnarim'}">Teknik Bakım ve Onarım Hizmetleri</router-link></li>
      <li><router-link active-class="active" :to="{name: 'KalorimetreFatura'}">Uzaktan Kalorimetre Ölçme ve Faturalandırma</router-link></li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: "SideBar"
}
</script>