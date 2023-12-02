<template>
  <AppHeader />
  <header v-motion-slide-bottom id="header-kurumsal">
    <div class="container">
      <h1>KURUMSAL</h1>
      <ul class="breadcrumb">
        <li>
          <nuxt-link to="/">Anasayfa</nuxt-link>
        </li>
        <li>Kurumsal</li>
      </ul>
    </div>
  </header>
  <section v-motion-slide-bottom id="kurumsal">
    <div class="container">
      <h1>Hakkımızda</h1>
      <p>Kaliteli yaşam sunmayı ilke edinmiş, kişiye özel hizmetler sunan, üst sınıf bir tesis yönetim şirketiyiz. Kişiye
        özel
        hizmetlerin öneminin bilincinde, güvenlik öncelikli ve memnuniyet odaklı yaklaşımlarımız ile sektörde öncü
        konumdayız.
        Tesis yönetimi gerçekleştirdiğimiz tüm projelerimizde etkili operasyonel çözümler üreterek modern yaşam alanları
        sunuyoruz.</p>
      <p style="margin-top: 1rem">
        Günümüzde huzurlu, güvenli ve daha kolay bir hale getirmek için vardır. Yönetim faaliyetlerinde kat malikleri ve
        kiracılar
        arasında site yaşantısı ile ilgili çeşitli problemler çıkabilir, bunlar olağan şeylerdir. Kanun, tüzük, yönetmelik
        vs.
        mevzuatlara uygun alarak dışarıdan, tarafsız bir kişi tarafından yapılan profesyonel site yönetim hizmetleri tüm
        yönetim
        faaliyetlerinde, öncelikle sitelerdeki oturan sakinlerimizin komşuluk ilişkileri bozulmadan daha düzenli, daha
        ekonomik ve
        daha güvenli ve profesyonel bir şekilde yürütülmesini sağlamaktadır.
        <b>Renato site yönetim</b> olarak BAĞLICA - ETİMESGUT bölgesinde <i>"İYİ NİYET TEMİZ HİZMET”</i> sloganıyla
        çıktığımız bu
        yolda, çözüm
        odaklı yaklaşımımızla güvenilirlik, şeffaflık ve verdiğimiz kaliteli hizmetle fark yaratarak, sektörde daha çok
        çalışma
        alanlarında yer alarak ve sizlere en iyi hizmetleri sunarak bu is kolunda siz değerli hemşehrilerimize <b>7/24</b>
        hizmet
        vermeyi
        hedeflemekteyiz.
      </p>
      <div class="kurumsal-image"></div>
      <h1 v-motion :initial="{ opacity: 0, y: 100, }" :visible="{ opacity: 1, y: 0, }">Vizyonumuz</h1>
      <p v-motion :initial="{ opacity: 0, y: 100, }" :visible="{ opacity: 1, y: 0, }">Beklentilerin üstünde ve yaratıcı
        hizmetleri bütün insanlarla buluşturmak,
        ferah ve rahat bir site ya da apartman yaşamı
        sürmelerini gerçekleştirmektir.</p>
      <h1 v-motion :initial="{ opacity: 0, y: 100, }" :visible="{ opacity: 1, y: 0, }">Misyonumuz</h1>
      <p v-motion :initial="{ opacity: 0, y: 100, }" :visible="{ opacity: 1, y: 0, }">Müşteri merkezli prensip üzerine,
        sektörü iyi şekilde tanıyan, paydaşlarının
        taleplerini bilen ve en üst seviyedeki
        hizmeti hedeflemektir.</p>
    </div>
  </section>
  <AppFooter />
</template>