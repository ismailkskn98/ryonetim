<script>
export default {
  name: "KalorimetreFatura",
  data() {
    return {}
  }
}
</script>

<template>
  <app-header/>
  <banner-header/>
  <section id="hizmetler-content">
    <side-bar />
    <div v-motion-slide-right class="content">
      <h1>Uzaktan Kalorimetre Ölçme ve Faturalandırma (baypayo)</h1>
      <div class="baypayo">
        <div class="baypayo-img"></div>
        <p style="margin-top: 3rem; font-size: 1.6rem">Bu konuda <b>Baypayo</b> ile çalışıyoruz. Baypayo sayfasından detaylı
          bilgiler öğrenmek için <a href="https://baypayo.com.tr/">tıklayınız.</a></p>
      </div>
      <p style="margin-top: 3rem">
        Baypayo kalorimetre okuma programı; tüm mbus, RF kablolu, kablosuz kalorimetre markaları ile uyumlu Çevre şehircikik
        bakanlığı formül ve hesaplamalarına göre son teknoloji arayüze sahiptir. Windows İOS Android ve tüm online işletim
        sistemlerinden indirebilirsiniz.
      </p>
      <h2>Kalorimetre Okuma Programı</h2>
      <img src="@/assets/images/baypayo_M_Bus_Okuma.png">
      <p>
        M-Bus kalorimetre okuma programı ve RF Kalorimetre programı. Sisteme verileri Girmek tarafımızdan ücretsiz olarak
        yapılamakta olup 7/24 Teknik servisimiz ücretsiz hizmet vermektedir Size sadece butona basmak kalmıştır.
      </p>
      <p>
        Baypayo kalorimetre okuma programı.  Türkiyenin en kullanışlı web tabanlı M-Bus kablolu kalorimetre okuma programı
      </p>
    </div>
  </section>
  <app-footer/>
</template>