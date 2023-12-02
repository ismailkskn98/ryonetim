<template>
  <main v-motion-slide-bottom>
    <!-- Slider main container -->
    <div class="swiper">
      <!-- Additional required wrapper -->
      <div class="swiper-wrapper">
        <!-- Slides -->
        <div class="swiper-slide yonetim">
          <figure>
            <img src="/images/slider1.jpg" alt="bina yönetimi">
            <figcaption>
              <div class="slide-text">
                <h2>Yönetiminizi Profesyonel Kişilere bırakın</h2>
                <p>Toplu yaşam alanlarında ortaya çıkabilecek problemlerin
                  giderilmesi ve rutin işlerin yerine getirilmesi için gerekli olan
                  site yönetimi, çoğu kişinin kaçındığı bir uğraştır.</p>
              </div>
              <nuxt-link to="/hizmetler">Devamını Oku</nuxt-link>
            </figcaption>
          </figure>
        </div>
        <div class="swiper-slide yonetimplan">
          <figure>
            <img src="/images/slider2.jpg" alt="bina yönetim planı">
            <figcaption>
              <div class="slide-text">
                <h2>Site Yönetim Planı Nedir?</h2>
                <p>Apartmanlar ve siteler gibi ortak yaşam alanlarında düzeni
                  sağlamak ve adil bir ortam oluşturmak için kat malikleri apartman,
                  site yöneticisi sorumluluğunda uygulanması için ortak kararlar
                  alırlar.</p>
              </div>
              <nuxt-link to="/hizmetler/yonetimplani">Devamını Oku</nuxt-link>
            </figcaption>
          </figure>
        </div>
        <div class="swiper-slide yonetimsecimi">
          <figure>
            <img src="/images/slider3.jpg" alt="bina yönetim secimi">
            <figcaption>
              <div class="slide-text">
                <h2>YÖNETİCİ NASIL SEÇİLİR?</h2>
                <p>Yönetici veya yönetim kurulu, kat maliklerinin, hem sayı hem arsa
                  payı bakımından çoğunluğu ile seçilir. Yönetici veya yönetim
                  kurulu kat malikleri arasından seçilebileceği gibi, kat maliki
                  olmayan kimseler arasından da seçilebilir.</p>
              </div>
              <nuxt-link to="/hizmetler/yonetimsecimi">Devamını Oku</nuxt-link>
            </figcaption>
          </figure>
        </div>
        <div class="swiper-slide yonetimkanunu">
          <figure>
            <img src="/images/slider4.jpg" alt="bina yönetim kanunu">
            <figcaption>
              <div class="slide-text">
                <h2>Site Yönetimi Kanunu</h2>
                <p>Müstakil ev yerine daha cazip imkanları ve rahatlığı nedeniyle
                  apartman ve siteleri tercih eden ev sahipleri ve kiracılar,
                  oturdukları yerleşim merkezlerinde belirli kurallara uymak
                  zorundadır.</p>
              </div>
              <nuxt-link to="/hizmetler/yonetimkanunu">Devamını Oku</nuxt-link>
            </figcaption>
          </figure>
        </div>
      </div>
      <!-- pagination  -->
      <div class="swiper-pagination"></div>
      <!-- navigation buttons -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </main>
</template>


<script>
export default {
  mounted() {
    this.initSwiper();
  },
  methods: {
    initSwiper() {
      this.swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        lazyLoading: true,
        followFinger: false,
        speed: 400,
        spaceBetween: 10,
        autoplay: {
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        },
        effect: 'fade',
        // pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        // navigation
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      })
    }
  }
}
</script>