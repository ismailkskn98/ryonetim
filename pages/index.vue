<template>
  <AppHeader />
  <HomeSlider />
  <section id="ilk-bilgilendirme">
    <div class="container">
      <div v-motion-slide-bottom class="vizyon">
        <h1>Vizyonumuz</h1>
        <p>
          Beklentilerin üstünde ve yaratıcı hizmetleri bütün insanlarla buluşturmak, ferah ve rahat bir site ya da
          apartman yaşamı
          sürmelerini gerçekleştirmektir.
        </p>
      </div>
      <div v-motion-slide-bottom class="kurumsal">
        <h1>Kurumsal</h1>
        <h2><i>Renato Yönetim</i></h2>
        <p><i>BAĞLICA - ETİMESGUT bölgesinde "İYİ NİYET TEMİZ HİZMET” sloganıyla çıktığımız bu yolda, çözüm odaklı
            yaklaşımımızla
            güvenilirlik, şeffaflık ve verdiğimiz kaliteli hizmetle fark yaratarak, sektörde daha çok çalışma alanlarında
            yer alarak
            ve sizlere en iyi hizmetleri sunarak bu is kolunda siz değerli hemşehrilerimize 7/24 hizmet vermeyi
            hedeflemekteyiz.</i>
        </p>
      </div>
      <div v-motion-slide-bottom class="misyon">
        <h1>Misyonumuz</h1>
        <p>
          Müşteri merkezli prensip üzerine, sektörü iyi şekilde tanıyan, paydaşlarının taleplerini bilen ve en üst
          seviyedeki
          hizmeti hedeflemektir.
        </p>
      </div>
    </div>
  </section>
  <HomeCards v-motion :initial="{ opacity: 0, y: -100, }" :visible="{ opacity: 1, y: 0, }" />
  <section v-motion :initial="{ opacity: 0, y: 100, }" :visible="{ opacity: 1, y: 0, }" id="baypayo-kimdir">
    <div class="container">
      <div class="baypayo-hakkimda">
        <h1>Baypayo ile Çalışıyoruz</h1>
        <p>Baypayo türkiye genelinde pay ölçer kalorimetre sayaç okuma hizmeti veren arıza bakım montaj ve servis
          hizmetleri yapan
          kişerin bağlı olduğu ana kurumdur. Bay PAYO şirketinin Proje Arge Yazılım ve Otomasyon işleri ana faaliyet alanı
          olduğundan Bay PAYO her iki anlamdada şirketimizi anlatmaktadır. </p>
        <p>Baypayo Bayi ve servisleri Türkiyenin her ilinde hizmet vermektedir.</p>
        <nuxt-link to="/hizmetler/kalorimetrefaturalandirma">Detaylar için tıklayınız</nuxt-link>
      </div>
      <img src="/images/baypayo-kimdir.png">
    </div>
  </section>
  <section id="son-bilgilendirme">
    <div class="container">
      <h1>" İŞİNİZ RENATO YÖNETİM İLE ÇOK KOLAY "</h1>
      <h2>Hızlı Çözüm İlkesi</h2>
      <p>Değişen ve gelişen ihtiyaçları zamanında ve en iyi şekilde karşılayabilmek ilkemizdir.</p>
    </div>
  </section>
  <section v-motion :initial="{ opacity: 0, y: 100, }" :visible="{ opacity: 1, y: 0, }" id="yonetim">
    <div class="container">
      <img src="/images/homebilgi.jpg">
      <div class="yonetim-bilgi">
        <h1>Profesyonel Bina & Site Yönetimi Nedir?</h1>
        <p>Site yönetimi, site içerisinde yer alan ortak kullanım alanlarıyla ilgili bakım onarım çalışmalarından ve aynı
          zamanda
          site sakinlerinin huzurunun sağlamasından sorumludur.</p>
        <ul>
          <li>Kat malikleri kurulunca verilen kararların yerine getirilmesi;</li>
          <li>Anagayrimenkulün sigorta ettirilmesi;</li>
          <li>Anagayrimenkulün tümünü ilgilendiren tebligatın kabulü;</li>
          <li>Kat malikleri kurulunun toplantıya çağırılması.</li>
        </ul>
      </div>
    </div>
  </section>
  <AppFooter />
</template>

