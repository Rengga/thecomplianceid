const routes = [
  {
    path: "/auth",
    component: () => import("layouts/AuthLayout.vue"),
    children: [
      {
        path: "login",
        name: "auth-login",
        component: () => import("pages/Auth/LoginPage.vue"),
      },
      {
        path: "forgot-password",
        name: "auth-forgot-password",
        component: () => import("pages/Auth/ForgotPasswordPage.vue"),
      },
    ],
  },
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "dashboard",
        component: () => import("pages/IndexPage.vue"),
      },
      {
        path: "my-task",
        children: [
          {
            path: "specific",
            name: "tugas-saya-khusus",
            component: () => import("pages/TugasSaya/PelaporanKhususPage.vue"),
          },
          {
            path: "routine",
            name: "tugas-saya-rutin",
            component: () => import("pages/TugasSaya/PelaporanRutinPage.vue"),
          },
          {
            path: "internal",
            name: "tugas-saya-internal",
            component: () =>
              import("pages/TugasSaya/PelaporanInternalPage.vue"),
          },
          {
            path: "process",
            name: "tugas-saya-proses",
            component: () => import("pages/TugasSaya/PelaporanProsesPage.vue"),
          },
          {
            path: "detail/:slug",
            name: "tugas-saya-detail",
            component: () => import("pages/TugasSaya/Detail/DetailPage.vue"),
            props: (route) => ({
              document: route.params.slug,
              ext: route.query.ext,
            }),
          },
        ],
      },
      {
        path: "reports",
        children: [
          {
            path: "spesific",
            name: "laporan-khusus",
            component: () => import("pages/Laporan/PelaporanKhususPage.vue"),
          },
          {
            path: "routine",
            name: "laporan-rutin",
            component: () => import("pages/Laporan/PelaporanRutinPage.vue"),
          },
          {
            path: "internal",
            name: "laporan-internal",
            component: () => import("pages/Laporan/PelaporanInternalPage.vue"),
          },
          {
            path: "process",
            name: "laporan-proses",
            component: () => import("pages/Laporan/PelaporanProsesPage.vue"),
          },
          {
            path: "monitoring",
            name: "laporan-pantau-tugas",
            component: () => import("pages/Laporan/PantauTugasPage.vue"),
          },
          {
            path: "detail/:slug",
            name: "laporan-detail",
            component: () => import("pages/Laporan/Detail/DetailPage.vue"),
            props: (route) => ({
              document: route.params.slug,
              ext: route.query.ext,
            }),
          },
          {
            path: "detail/:slug/flow-builder",
            name: "laporan-detail-flow-builder",
            component: () => import("pages/Laporan/Detail/FlowBuilderPage.vue"),
            props: (route) => ({ document: route.params.slug }),
          },
        ],
      },
      {
        path: "report-template",
        children: [
          {
            path: "template",
            name: "template-laporan-template",
            component: () =>
              import("pages/TemplateLaporan/Template/IndexPage.vue"),
          },
          {
            path: "template/:slug",
            name: "template-laporan-detail",
            component: () =>
              import("pages/TemplateLaporan/Template/DetailPage.vue"),
            props: (route) => ({
              document: route.params.slug,
              ext: route.query.ext,
            }),
          },
          {
            path: "search",
            name: "template-laporan-search",
            component: () =>
              import("pages/TemplateLaporan/CariTemplate/IndexPage.vue"),
          },
        ],
      },
      {
        path: "history",
        children: [
          {
            path: "",
            name: "riwayat",
            component: () => import("pages/Riwayat/IndexPage.vue"),
          },
        ],
      },
      {
        path: "library",
        children: [
          {
            path: "rules",
            name: "perpustakaan-rules",
            component: () =>
              import("pages/Perpustakaan/Peraturan/IndexPage.vue"),
          },
          {
            path: "rules/:slug",
            name: "perpustakaan-rules-detail",
            component: () =>
              import("pages/Perpustakaan/Peraturan/DetailPage.vue"),
            props: (route) => ({
              document: route.params.slug,
              ext: route.query.ext,
            }),
          },
          {
            path: "guides",
            name: "perpustakaan-guides",
            component: () => import("pages/Perpustakaan/Panduan/IndexPage.vue"),
          },
          {
            path: "guides/:slug",
            name: "perpustakaan-guides-list",
            component: () =>
              import("pages/Perpustakaan/Panduan/DetailListPage.vue"),
            props: (route) => ({ document: route.params.slug, documents: [] }),
          },
          {
            path: "guides/:slug/:detail",
            name: "perpustakaan-guides-detail",
            component: () =>
              import("pages/Perpustakaan/Panduan/DetailPage.vue"),
            props: (route) => ({
              document: route.params.slug,
              ext: route.query.ext,
            }),
          },
        ],
      },
      {
        path: "settings",
        children: [
          {
            path: "",
            name: "pengaturan-menu",
            component: () => import("pages/Pengaturan/IndexPage.vue"),
          },
          {
            path: "whatsapp",
            name: "pengaturan-whatsapp",
            component: () =>
              import("pages/Pengaturan/Integration/WhatsappPage.vue"),
          },
          {
            path: "email",
            name: "pengaturan-email",
            component: () =>
              import("pages/Pengaturan/Integration/EmailPage.vue"),
          },
          {
            path: "calendar",
            name: "pengaturan-calendar",
            component: () =>
              import("pages/Pengaturan/Integration/CalendarPage.vue"),
          },
          {
            path: "users",
            name: "pengaturan-users",
            component: () => import("pages/Pengaturan/User/IndexPage.vue"),
          },
          {
            path: "roles",
            name: "pengaturan-roles",
            component: () => import("pages/Pengaturan/Role/IndexPage.vue"),
          },
        ],
      },
      {
        path: "kalender",
        children: [
          {
            path: "kalender",
            name: "kalender",
            component: () => import("src/pages/Kalender/KalenderPage.vue"),
          },
        ],
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
