<script>
export default {
  name: "BakimHizmetleri",
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
      <h1>Çim Biçme ve Sulama Sistemleri Bakım Hizmetleri</h1>
      <img src="@/assets/images/cimbakim-hizmetleri.jpg">
      <div class="cim-bakim-hizmetleri">
        <h2>Bakım Hizmetlerinden Bazıları;</h2>
        <ul>
          <li>Park bahçelerin periyodik bakım hizmetleri</li>
          <li>Çim biçme, budama, sulama ve ilaçlama hizmetleri</li>
          <li>Park bahçeler için sulama ve drenaj sistemlerinin oluşturulması</li>
          <li>Gübreleme ve havalandırma hizmetleri</li>
          <li>Mevsimlik çiçek düzenlemeleri ve bakım hizmetleri</li>
          <li>Tüm park bahçe, havuz gibi ortak alanların bakım programının oluşturulması</li>
        </ul>
      </div>
    </div>
  </section>
  <app-footer/>
</template>