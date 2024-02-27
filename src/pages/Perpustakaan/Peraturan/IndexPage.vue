<template>
  <q-page class="tw-flex tw-flex-col tw-pl-0 lg:tw-pl-4 tw-pt-0 lg:tw-pt-3">
    <q-breadcrumbs
      class="tw-hidden lg:tw-block tw-flex-none tw-text-sm tw-text-default-3 tw-tracking-normal"
      gutter="xs"
    >
      <q-breadcrumbs-el
        icon="home"
        :to="{ name: 'dashboard' }"
        class="text-main-green"
        exact
      />
      <q-breadcrumbs-el
        label="Perpustakaan"
        :to="{ name: 'perpustakaan-rules' }"
        exact
        class="text-default-3"
      />
      <q-breadcrumbs-el label="Peraturan" class="text-default-3" />
    </q-breadcrumbs>

    <div
      class="tw-flex-none tw-m-2 lg:tw-m-0 lg:tw-mt-3 tw-tracking-wide tw-text-sm tw-rounded-md tw-py-2 md:tw-py-3 lg:tw-py-3 tw-px-2 md:tw-px-3 lg:tw-px-5 tw-flex tw-items-center tw-space-x-0 tw-justify-center lg:tw-justify-normal"
      :class="
        $q.dark.isActive
          ? 'tw-bg-default-1 tw-text-white'
          : 'tw-bg-slate-50 tw-shadow-md'
      "
    >
      <q-btn
        text-color="white"
        no-caps
        align="left"
        class="tw-text-xs tw-py-2 tw-tracking-wide tw-rounded-md tw-w-40"
        :class="$q.dark.isActive ? 'tw-bg-default-3' : 'tw-bg-default-6'"
        :to="{ name: 'perpustakaan-rules' }"
        exact
      >
        <div
          class="tw-flex tw-flex-row tw-space-x-2 tw-items-center tw-text-start"
        >
          <div
            class="tw-w-[6px] tw-h-[6px] tw-rounded-full"
            :class="$q.dark.isActive ? 'bg-default-4' : 'tw-bg-default-7'"
          ></div>
          <span
            :class="$q.dark.isActive ? 'text-default-4' : 'tw-text-default-7'"
            >Peraturan</span
          >
        </div>
      </q-btn>
      <q-btn
        no-caps
        align="left"
        class="tw-text-xs tw-py-2 lg:tw-px-5 tw-tracking-wide tw-rounded-md tw-w-40"
        :to="{ name: 'perpustakaan-guides' }"
        exact
        flat
      >
        <div class="tw-flex tw-flex-row tw-space-x-2 tw-items-center">
          <div
            class="tw-w-[6px] tw-h-[6px] tw-rounded-full"
            :class="$q.dark.isActive ? 'tw-bg-gray-500' : 'tw-bg-green-800/50'"
          ></div>
          <span
            :class="
              $q.dark.isActive ? 'tw-text-gray-500' : 'tw-text-green-800/50'
            "
            >Panduan</span
          >
        </div>
      </q-btn>
    </div>

    <div
      class="tw-flex-1 tw-tracking-wide tw-text-sm tw-rounded-t-md tw-flex tw-flex-col tw-space-y-3 !tw-mt-0 lg:!tw-mt-3 tw-pt-2 md:tw-pt-3 lg:tw-pt-3"
      :class="
        $q.dark.isActive
          ? 'tw-bg-default-1 tw-text-white'
          : 'tw-bg-slate-50 tw-shadow-md tw-text-default-6'
      "
    >
      <div
        class="tw-flex-none tw-flex tw-flex-col lg:tw-flex-row lg:tw-justify-between lg:tw-items-center tw-space-y-2 lg:tw-space-y-0 tw-px-2 md:tw-px-3 lg:tw-px-5"
      >
        <span class="tw-text-base tw-font-medium">Kerangka Peraturan</span>
        <div class="tw-flex tw-flex-row tw-items-center custom-css">
          <q-select
            hide-bottom-space
            dense
            outlined
            :color="
              $q.dark.isActive
                ? 'main-green tw-rounded-l-xl custom-css-rm-bdr'
                : 'main-green tw-rounded-l-xl custom-css-rm-bdr custom-css-text-dark-green '
            "
            :input-class="
              $q.dark.isActive ? 'tw-py-2 tw-text-xs' : 'tw-py-2 tw-text-xs '
            "
            v-model="filterFileSearch"
            :options="filterOptions"
            option-class="tw-rounded-l-xl"
            class="tw-flex-1 rounded-left"
            :class="$q.dark.isActive ? 'tw-bg-gray-600 ' : 'tw-bg-default-7 '"
          />
          <q-input
            hide-bottom-space
            dense
            outlined
            standout
            :color="
              $q.dark.isActive
                ? 'main-white tw-bg-zinc-950 custom-css-rm-bdr tw-rounded-r-xl tw-rounded-l-none'
                : 'main-white tw-bg-white custom-css-rm-bdr tw-border-2 tw-border-default-7 tw-rounded-r-xl tw-rounded-l-none'
            "
            type="search"
            placeholder="Search"
            :input-class="
              $q.dark.isActive
                ? 'tw-py-2 tw-text-xs text-main-white tw-w-48'
                : 'tw-py-2 tw-text-xs tw-text-default-6 tw-w-48'
            "
          >
            <template v-slot:append>
              <q-icon
                name="search"
                :color="$q.dark.isActive ? 'main-yellow' : 'dark-green-2'"
              />
            </template>
          </q-input>
        </div>
      </div>
      <q-scroll-area
        ref="qScrollAreaContainer"
        dark
        class="tw-flex-1 tw-grid tw-grid-cols-1 tw-px-2 md:tw-px-3 lg:tw-px-5"
        :thumb-style="{
          borderRadius: '9999px',
          backgroundColor: '#50B748',
          opacity: 1,
        }"
      >
        <q-infinite-scroll @load="onLoadRef" :offset="0" class="tw-relative">
          <div class="tw-grid tw-grid-cols-1 tw-gap-2">
            <q-item
              v-for="row in tableItems"
              :key="row.index"
              clickable
              v-ripple
              :to="{
                name: 'perpustakaan-rules-detail',
                params: { slug: row.slug },
                query: { ext: row.ext },
              }"
              exact
              class="tw-rounded-md"
              :class="$q.dark.isActive ? 'tw-bg-zinc-800' : 'tw-bg-white'"
            >
              <q-item-section>{{ row.title }}</q-item-section>
            </q-item>
          </div>
          <template v-slot:loading>
            <div class="row items-center justify-center q-my-md">
              <q-spinner-hourglass color="white" class="on-left" />
              <span class="text-white">Loading...</span>
            </div>
          </template>
        </q-infinite-scroll>
      </q-scroll-area>
    </div>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { format } from "quasar";

const filterFileSearch = ref("File Search");
const filterOptions = ref(["File Search"]);
const qScrollAreaContainer = ref(null);

const { pad } = format;
const tableItems = ref([]);

function randomizeExt() {
  let items = ["PDF", "DOCX", "TXT", "XLSX"];
  return items[Math.floor(Math.random() * items.length)];
}

function addItem() {
  let maxSize = 100;
  let count = tableItems.value.length + 1;
  const namaLaporan = [
    "Penunjukan AP/KAP",
    "Pelaksanaan Hasil Evaluasi Komite Audit",
    "Laporan APU-PPT (Rencana Pengkinian Data Nasabah)",
    "Laporan Keuangan Tahunan Produk Reksa Dana",
    "Laporan Penghimpunan Dana Reksa Dana",
    "Laporan Kegiatan Penasihat Investasi",
    "Laporan Hutang Valas",
    "Laporan Rapat Umum Pemegang Unit Penyertaan RDPT",
    "Laporan Investasi RDPT",
    "Laporan Divestasi RDPT",
  ];

  if (count < maxSize) {
    for (let i = 0; i < 10; i++) {
      let filename = namaLaporan[i];
      let slug = filename.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, "");

      tableItems.value = tableItems.value.concat({
        title: filename,
        slug: slug,
        ext: randomizeExt(),
      });
      count++;
    }
    tableItems.value.forEach((row, idx) => {
      row.index = idx;
    });
  }
}

function onLoadRef(index, done) {
  setTimeout(() => {
    addItem();
    done();
  }, 2000);
}

onMounted(() => {
  addItem();
});
</script>
