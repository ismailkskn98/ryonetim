<template>
  <main v-motion-slide-bottom>
    <agile
      ref="carousel"
      :options="myOptions"
      @after-change="showCurrentSlide($event)"
    >
      <div class="slide">
        <div class="image1">
          <div class="text">
            <h1>Yönetİmİnİzİ Profesyonel Kİşİlere Bİrakİn</h1>
            <p>
              Toplu yaşam alanlarında ortaya çıkabilecek problemlerin
              giderilmesi ve rutin işlerin yerine getirilmesi için gerekli olan
              site yönetimi, çoğu kişinin kaçındığı bir uğraştır.
            </p>
            <router-link :to="{ name: 'SiteYonetimi' }"
              >Devamını Oku</router-link
            >
          </div>
        </div>
      </div>
      <div class="slide">
        <div class="image2">
          <div class="text">
            <h1>Sİte Yönetİm PlanI Nedİr?</h1>
            <p>
              Apartmanlar ve siteler gibi ortak yaşam alanlarında düzeni
              sağlamak ve adil bir ortam oluşturmak için kat malikleri apartman,
              site yöneticisi sorumluluğunda uygulanması için ortak kararlar
              alırlar.
            </p>
            <router-link :to="{ name: 'YonetimPlani' }"
              >Devamını Oku</router-link
            >
          </div>
        </div>
      </div>
      <div class="slide">
        <div class="image3">
          <div class="text">
            <h1>YÖNETİCİ NASIL SEÇİLİR?</h1>
            <p>
              Yönetici veya yönetim kurulu, kat maliklerinin, hem sayı hem arsa
              payı bakımından çoğunluğu ile seçilir. Yönetici veya yönetim
              kurulu kat malikleri arasından seçilebileceği gibi, kat maliki
              olmayan kimseler arasından da seçilebilir.
            </p>
            <router-link :to="{ name: 'YonetimSecimi' }"
              >Devamını Oku</router-link
            >
          </div>
        </div>
      </div>
      <div class="slide">
        <div class="image4">
          <div class="text">
            <h1>Site Yönetimi Kanunu</h1>
            <p>
              Müstakil ev yerine daha cazip imkanları ve rahatlığı nedeniyle
              apartman ve siteleri tercih eden ev sahipleri ve kiracılar,
              oturdukları yerleşim merkezlerinde belirli kurallara uymak
              zorundadır.
            </p>
            <router-link :to="{ name: 'YonetimKanunu' }"
              >Devamını Oku</router-link
            >
          </div>
        </div>
      </div>
    </agile>
  </main>
</template>
<script>
export default {
  name: "HomeSlider",
  inject: ["textSliderItems"],
  data() {
    return {
      myOptions: {
        navButtons: false,
        dots: true,
        fade: false,
        autoplay: true,
        autoplaySpeed: 6000,
        infinite: true,
        initialSlide: 0,
        pauseOnHover: true,
        speed: 1300,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              dots: true,
              infinite: true,
              pauseOnHover: true,
            },
          },

          {
            breakpoint: 900,
            settings: {
              navButtons: false,
              dots: true,
              infinite: true,
              pauseOnHover: true,
            },
          },
        ],
      },
    };
  },
  methods: {
    showCurrentSlide(e) {
      console.log(e);
    },
  },
};
</script>
