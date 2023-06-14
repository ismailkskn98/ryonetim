<script>
export default {
  name: "TeknikOnarim",
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
      <div class="teknik-onarim">
        <h1>Teknik Bakım ve Onarım Hizmetleri</h1>
        <ul>
          <li>Anayapı içinde yer alan ve Site Yönetim Kurulu ve/veya müteahhit tarafından listeleri ve as-built dokümantasyonu verilen tüm mekanik, elektrik ve elektronik sistemlerin ve alanların, belirlenen kullanım zaman dilimi içinde ve belirlenen senaryolara ve üreticilerin talimatlarına uygun olarak işletilmesinin sağlanması</li>
          <li>Tüm sistemlerin fonksiyonlarını, belirlendiği şekilde yerine getirmeleri, ekonomik ömürlerini uzatacak ve güvenilirliklerinin sürekliliğini sağlayacak şekilde, üreticilerinin tanımladığı aralık ve yönteme göre gerekli ‘planlı koruyucu bakım çalışmalarının’ yapılması</li>
          <li>İşletimi yapılacak mekanik, elektrik ve elektronik sistem, donanım ve mahallerde ihtiyaç duyulacak bütçe tutarı içinde kalan her türlü sarf malzemesinin, maliyetleri Site Yönetim Kurulu tarafından karşılanmak üzere, optimum miktarda temini, taşınması</li>
          <li>İşletimi yapılacak mekanik, elektrik ve elektronik sistem, donanım ve mahallerde ihtiyaç duyulacak her türlü yedek parçanın, maliyetleri Site Yönetim Kurulu tarafından karşılanmak üzere, optimum miktarda temini, taşınması, muhafazası, korunması hizmetlerinin gerçekleştirilmesi</li>
          <li>Ortak alanların küçük inşai bakım, tamir, marangozluk ve küçük tadilat işlerinin yapılması</li>
        </ul>
      </div>
      <img src="@/assets/images/teknik-bakim-hizmetleri.jpg">
      <h2>Asansör Bakım ve Onarım</h2>
      <p> Asansörleriniz için; gelişen teknolojiye paralel, güvenli, verimli, konforlu, ekonomik ve estetik hizmeti sağlıyoruz.</p>
    </div>
  </section>
  <app-footer/>
</template>