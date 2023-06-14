<script>
export default {
  name: "YonetimYonetmenligi"
}
</script>

<template>
  <app-header/>
  <banner-header/>
  <section id="hizmetler-content">
    <side-bar />
    <div v-motion-slide-right class="content">
      <h1>Site Yönetimi Yönetmeliği (Kanuni hak, görev, yetki ve sorumluluk)</h1>
      <p>
        İnsanların toplu şekilde yaşadıkları sitelerde yürütülmesi gereken hizmetlerin çerçevesinin ve kanuni dayanağının yer aldığı site yönetimi yönetmeliği, aynı zamanda site yönetimlerinin hak, görev, yetki ve sorumluluklarını da içermektedir. Toplu yaşam yerlerinde meydana gelebilecek her türlü anlaşmazlığın nasıl çözülmesi gerektiğini, hangi mahkemelerin yetkili olduğunu, yasal yollar ile takiplerin nasıl yapılması gerektiği gibi unsurlar da yönetmelik muhtevasında yer almaktadır.
      </p>
      <p>Site yönetimi profesyonel şekilde idare edilmesi gereken hizmetler bütününden oluşur. Aidatların toplanması, rutin giderlerin dağıtılması, tam zamanlı çalışan veya kısmi çalışanların sigortalarının yatırılması, talep olduğunda ve genel kurul tarafından karara bağlandığında yeni yatırımları yapılması gibi birçok farklı iş, deneyimli kişiler tarafından yapılmalıdır.
      </p>
      <img src="@/assets/images/yonetim-yonetmenligi.jpg">
      <p>Sitelerdeki her türlü işleyişten birincil derecede site yönetimi sorumludur. Ancak sitenin genelini ilgilendiren hukuki uyuşmazlıklarda kat maliklerinin hepsi hem yasal hem de mali olarak sorumlu tutulmaktadır. Site yönetiminin hakları, görevleri ve yetkileri uygun şekilde kullanılır ve işler ihmal edilmez ise yaptırım riski ortadan kalkar. Bu da ancak düzenli takip ve uğraş ile oluşur.
      </p>
    </div>
  </section>
  <app-footer/>
</template>