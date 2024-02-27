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
      <q-breadcrumbs-el
        label="Panduan"
        :to="{ name: 'perpustakaan-guides' }"
        exact
        class="text-default-3"
      />
      <q-breadcrumbs-el
        label="Lampiran Panduan ARIA Manajer Investasi"
        class="text-default-3"
      />
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
        text-color="default-3"
        no-caps
        align="left"
        class="tw-text-xs tw-py-2 lg:tw-pr-5 tw-tracking-wide tw-rounded-md 0 tw-w-40"
        :to="{ name: 'perpustakaan-rules' }"
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
            >Peraturan</span
          >
        </div>
      </q-btn>
      <q-btn
        text-color="white"
        no-caps
        align="left"
        class="tw-text-xs tw-py-2 lg:tw-px-5 tw-tracking-wide tw-rounded-md tw-w-40"
        :class="$q.dark.isActive ? 'tw-bg-default-3' : 'tw-bg-default-6'"
        :to="{ name: 'perpustakaan-guides' }"
        exact
      >
        <div class="tw-flex tw-flex-row tw-space-x-2 tw-items-center">
          <div
            class="tw-w-[6px] tw-h-[6px] tw-rounded-full"
            :class="$q.dark.isActive ? 'bg-default-4' : 'tw-bg-default-7'"
          ></div>
          <span
            :class="$q.dark.isActive ? 'text-default-4' : 'tw-text-default-7'"
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
        <span class="tw-text-base tw-font-medium"
          >Lampiran Panduan ARIA Manajer Investasi</span
        >
        <div class="tw-flex tw-flex-row tw-items-center">
          <q-input
            hide-bottom-space
            dense
            flat
            standout
            :color="
              $q.dark.isActive
                ? 'main-yellow tw-rounded-xl tw-w-72'
                : 'dark-green-2 tw-rounded-xl tw-border-default-7 tw-w-72 tw-border-2 tw-bg-slate-50'
            "
            type="search"
            placeholder="Search"
            class="tw-w-3/5 lg:tw-w-auto tw-rounded-xl"
            :class="$q.dark.isActive ? 'tw-bg-black' : 'tw-bg-black/0'"
            input-class="tw-py-2 tw-text-xs tw-rounded-xl"
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
                name: 'perpustakaan-guides-list',
                params: { slug: row.slug },
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

defineProps(["document", "documents"]);

const qScrollAreaContainer = ref(null);

const { pad } = format;
const tableItems = ref([]);

function randomizeExt() {
  let items = ["PDF", "DOCX", "TXT", "XLSX"];
  return items[Math.floor(Math.random() * items.length)];
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
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
      let filename = namaLaporan[getRandomIntInclusive(0, 9)];
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
