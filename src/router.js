import {createRouter, createWebHashHistory} from "vue-router";

const routes = [
  {
    name: "HomePage",
    path: "/",
    component: () => import("@/views/HomeViews.vue"),
  },
  {
    name: "KurumsalPage",
    path: "/kurumsal/",
    component: () => import("@/views/KurumsalViews.vue"),
  },
  {
    name: "SiteYonetimi",
    path: "/siteyonetimi",
    component: () => import("@/views/HizmetlerPages/SiteYonetimi.vue"),
  },
  {
    name: "YonetimKanunu",
    path: "/yonetimkanunu",
    component: () => import("@/views/HizmetlerPages/YonetimKanunu.vue"),
  },
  {
    name: "YonetimPlani",
    path: "/yonetimplani",
    component: () => import("@/views/HizmetlerPages/YonetimPlani.vue"),
  },
  {
    name: "YonetimSecimi",
    path: "/yonetimsecimi",
    component: () => import("@/views/HizmetlerPages/YonetimSecimi.vue"),
  },
  {
    name: "YonetimYonetmenligi",
    path: "/siteyonetimyonetmenligi",
    component: () => import("@/views/HizmetlerPages/YonetimYonetmenligi.vue"),
  },
  {
    name: "GerekliEvraklar",
    path: "/gereklievraklar",
    component: () => import("@/views/HizmetlerPages/GerekliEvraklar.vue"),
  },
  {
    name: "YonetimGorevleri",
    path: "/yonetimgorevleri",
    component: () => import("@/views/HizmetlerPages/YonetimGorevleri.vue"),
  },
  {
    name: "TemizlikHizmetleri",
    path: "/temizlikhizmetleri",
    component: () => import("@/views/HizmetlerPages/TemizlikHizmetleri.vue"),
  },
  {
    name: "BakimHizmetleri",
    path: "/cimbicmesulamasistemleri",
    component: () => import("@/views/HizmetlerPages/BakimHizmetleri.vue"),
  },
  {
    name: "HasereHizmetleri",
    path: "/hasereilemucadelehizmetleri",
    component: () => import("@/views/HizmetlerPages/HasereHizmetleri.vue"),
  },
  {
    name: "TeknikOnarim",
    path: "/bakimveonarimhizmetleri",
    component: () => import("@/views/HizmetlerPages/TeknikOnarim.vue"),
  },
  {
    name: "KalorimetreFatura",
    path: "/kalorimetrefaturalandirma",
    component: () => import("@/views/HizmetlerPages/KalorimetreFatura.vue"),
  },
  {
    name: "IletisimPage",
    path: "/iletisim",
    component: () => import("@/views/IletisimViews.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    document.getElementById("app").scrollIntoView({ behavior: "smooth" });
  },
});

export default router;
