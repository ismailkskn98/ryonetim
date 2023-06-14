<template>
 <article>
   <div class="container">
     <div class="card">
       <div class="imgBox">
         <lottie-player src="https://assets3.lottiefiles.com/packages/lf20_nclfex3h.json" background="transparent" speed="0.6" loop autoplay></lottie-player>
       </div>
       <div class="content">
         <h2>Yönetim Yonetmenliği</h2>
         <p>Sitelerdeki her türlü işleyişten birincil derecede site yönetimi sorumludur. Ancak sitenin genelini ilgilendiren hukuki uyuşmazlıklarda kat maliklerinin hepsi hem yasal hem de mali olarak sorumlu tutulmaktadır.</p>
         <router-link :to="{name: 'YonetimYonetmenligi'}" class="link1">Devamını Oku</router-link>
       </div>
     </div>
     <div class="card card2">
       <div class="imgBox">
         <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_fasueuv1.json"  background="transparent" speed="0.6" loop  autoplay></lottie-player>
     </div>
       <div class="content">
         <h2 style="color: #3d53ff">Yönetim Görevleri</h2>
         <p>Site yönetimi görevleri de tüm kat maliklerinin verdiği yetki ile kanunlar çerçevesinde yürütülen görevler olmaktadır.
           Bunların özellikle yöneticiler tarafından iyi bilinmesi ...</p>
         <router-link :to="{name: 'YonetimGorevleri'}" class="link2">Devamını Oku</router-link>
       </div>
     </div>
     <div class="card card3">
       <div class="imgBox">
         <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_X8wA00rqrk.json"  background="transparent" speed="0.5" loop  autoplay></lottie-player>
       </div>
       <div class="content">
         <h2 style="color: #38d200">Gerekli Evraklar</h2>
         <p>Apartman ve site yönetimi, hem vergi kanunları açısından hem de kat mülkiyeti kanunu açısından defter tutmak zorundadır.</p>
         <p>Vergi kanunları açısından tutulması gereken defterler ...</p>
         <router-link :to="{name: 'GerekliEvraklar'}" class="link3">Devamını Oku</router-link>
       </div>
     </div>
   </div>
 </article>
</template>

<script>
export default{
  name: "HomeCards"
}
</script>