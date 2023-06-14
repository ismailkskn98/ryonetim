<script>
export default {
  name: "SiteYonetimi",
  data() {
    return {

    }
  }
}
</script>

<template>
  <app-header/>
  <banner-header v-motion-slide-right/>
  <section id="hizmetler-content">
    <side-bar v-motion-slide-right/>
    <div v-motion-slide-left class="content">
      <h1>Site Yönetiminizi Profesyonel Kişilere Bırakın</h1>
      <p>
        Toplu yaşam alanlarında ortaya çıkabilecek problemlerin giderilmesi ve rutin işlerin yerine getirilmesi için gerekli olan
        site yönetimi, çoğu kişinin kaçındığı bir uğraştır. Adeta bir muhasebeci ve işletmeci gibi çalışması gereken site
        yöneticisinin sorumluluk alanı bir hayli fazla Daire sakinlerinden aidatların toplanması, binanın temizliği, varsa
        asansörün olası arızaları ve periyodik bakımları, yine varsa çalışanın maaşı, sigortası, izinleri ve kıdem tazminatı gibi
        meseleler site yönetimi nin profesyonel ellere bırakılması gerektiğinin birkaç göstergesi.
      </p>
      <img src="@/assets/images/site-yönetimi.jpg">
      <p>
        Özellikle günümüzde iş güvenliği ve işçi sağlığı, sosyal sigortalar kanunu ve yaptırımları, işletmecilerin dolayısıyla da
        site yönetiminden sorumlu olanların, zaman yönetimini de iyi planlamaları gerektiğini göstermektedir. Aksi durumlarda
        karşılaşılacak maddi yükümlülükler hem bireysel olarak site yöneticisini hem de genel olarak tüm site sakinlerini ekonomik
        yönden zor durumda bırakabilmektedir. Başlı başına zaman ayrılması gereken bu yönetim tarzının herkesin mutluluğu ve
        huzuru için hatasız yapılması önemlidir. Bu yüzden tüm bu sorumlulukların ve zorunlulukların işinde uzman profesyonel
        kadrolara teslim edilmesi herkesi rahatlatmaktadır.
      </p>
      <div class="yönetim-maddeleri">
        <h2>Profesyonel Site yönetimin hizmet adımları aşağıdaki gibi olmalıdır</h2>
        <ul>
          <li>Sitenin sakinlerini bilgilendirmek, ve el kitabını dağıtmak </li>
          <li>Siteye ait bir websitesinin kurulması yönetimin şeffaflığın sağlanması </li>
          <li>Site yönetim planını topluca değerlendirmek ve uygulamak</li>
          <li>Site projesinin yapılması ve tüm kat maliklerine tebliğ etmek</li>
          <li>Yıllık olağan ve olağanüstü toplantılar düzenlemek</li>
          <li>Site sakinlerinin memnuniyet araştırmasını yapmak ve değerlendirmek</li>
          <li>Siteyle ilgili resmi evrakların kabulü, yazışmalarının dosyalanması</li>
          <li>Yıllık faaliyet raporunun yılsonunda genel kurula sunulması</li>
        </ul>
      </div>
    </div>
  </section>
  <app-footer/>
</template>