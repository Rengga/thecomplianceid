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
        label="Template Laporan"
        :to="{ name: 'template-laporan-template' }"
        exact
        class="text-default-3"
      />
      <q-breadcrumbs-el
        label="Template"
        :to="{ name: 'template-laporan-template' }"
        exact
        class="text-default-3"
      />
    </q-breadcrumbs>
    <div
      class="tw-flex-1 tw-grid tw-grid-cols-1 lg:tw-grid-cols-6 xl:tw-grid-cols-5 tw-gap-2"
    >
      <div
        class="lg:tw-col-span-4 tw-tracking-wide tw-text-sm tw-rounded-t-md tw-flex tw-flex-col tw-space-y-3 !tw-mt-0 lg:!tw-mt-3 tw-pt-2 md:tw-pt-3 lg:tw-pt-3"
        :class="
          $q.dark.isActive
            ? 'tw-bg-default-1 tw-text-white'
            : 'tw-bg-slate-50 tw-shadow-md tw-text-white '
        "
      >
        <div
          class="tw-flex-none tw-flex tw-flex-col lg:tw-flex-row lg:tw-justify-between lg:tw-items-start tw-space-y-2 lg:tw-space-y-0 tw-px-2 md:tw-px-3 lg:tw-px-5"
        >
          <div class="tw-flex tw-space-x-3 tw-items-center">
            <q-btn
              :text-color="$q.dark.isActive ? 'dark-green-2' : 'dark-green-2'"
              label="Template"
              no-caps
              flat
              class="tw-font-medium tw-text-xs lg:tw-text-sm tw-py-2 tw-px-3 lg:tw-px-5 tw-tracking-wide tw-rounded-md"
              :class="$q.dark.isActive ? 'tw-bg-default-7' : ''"
              :to="{ name: 'template-laporan-template' }"
              exact
            />
            <q-btn
              flat
              :text-color="$q.dark.isActive ? 'default-3' : 'dark-green-tw-50'"
              label="Cari Template"
              no-caps
              class="tw-font-medium tw-text-xs lg:tw-text-sm tw-py-2 tw-px-3 lg:tw-px-5 tw-tracking-wide tw-rounded-md"
              :to="{ name: 'template-laporan-search' }"
              exact
            />
          </div>
          <div class="tw-flex tw-flex-col tw-space-y-2">
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
            <!-- <span
            class="text-right text-white tw-text-sm tw-tracking-wide tw-cursor-pointer"
            >Lihat Selengkapnya</span
          > -->
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
            <q-list dense separator>
              <q-expansion-item
                v-for="row in rows"
                :key="row.index"
                expand-separator
                light
                class="tw-rounded-xl tw-mb-1 tw-border-none"
                :class="$q.dark.isActive ? 'tw-bg-zinc-800 ' : 'tw-bg-white'"
              >
                <template v-slot:header>
                  <q-item-section>
                    <div class="tw-grid tw-grid-cols-1 tw-truncate">
                      <span
                        class="tw-truncate"
                        :class="$q.dark.isActive ? '' : 'tw-text-default-6'"
                      >
                        {{ row.title }}
                      </span>
                    </div>
                  </q-item-section>

                  <q-item-section side>
                    <q-btn
                      flat
                      round
                      :color="$q.dark.isActive ? 'white' : 'black'"
                      icon="fas fa-ellipsis-vertical"
                      size="sm"
                      @click.stop=""
                    />
                  </q-item-section>
                </template>
                <q-card class="tw-rounded-b-xl">
                  <q-card-section
                    class="q-pa-none tw-rounded-b-xl"
                    :class="
                      $q.dark.isActive ? 'tw-bg-zinc-800 ' : 'tw-bg-white'
                    "
                  >
                    <div
                      class="tw-p-3 tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 xl:tw-grid-cols-3 tw-gap-3"
                    >
                      <div
                        v-for="file in row.files"
                        :key="file.index"
                        class="tw-p-2 tw-rounded-xl tw-border-main-gold tw-border-2"
                        :class="$q.dark.isActive ? 'tw-bg-zinc-900' : ''"
                      >
                        <q-item
                          :to="{
                            name: 'template-laporan-detail',
                            params: { slug: file.slug },
                            query: { ext: file.ext },
                          }"
                        >
                          <q-item-section side>
                            <q-avatar
                              v-if="file.ext === 'XLSX'"
                              size="md"
                              rounded
                            >
                              <q-img
                                src="/assets/images/files/excel.png"
                                :ratio="1"
                                fit="contain"
                              />
                            </q-avatar>
                            <q-avatar
                              v-else-if="file.ext === 'PDF'"
                              size="md"
                              rounded
                            >
                              <q-img
                                src="/assets/images/files/pdf.png"
                                :ratio="1"
                                fit="contain"
                              />
                            </q-avatar>
                            <q-avatar
                              v-else-if="file.ext === 'DOCX'"
                              size="md"
                              rounded
                            >
                              <q-img
                                src="/assets/images/files/word.png"
                                :ratio="1"
                                fit="contain"
                              />
                            </q-avatar>
                            <q-avatar v-else size="md" rounded>
                              <q-img
                                src="/assets/images/files/txt.png"
                                :ratio="1"
                                fit="contain"
                              />
                            </q-avatar>
                          </q-item-section>
                          <q-item-section>
                            <q-item-label
                              ><div class="tw-grid tw-grid-cols-1 tw-truncate">
                                <span
                                  class="tw-truncate"
                                  :class="
                                    $q.dark.isActive
                                      ? 'tw-text-white'
                                      : 'tw-text-black'
                                  "
                                >
                                  {{ file.title }}
                                </span>
                              </div></q-item-label
                            >
                            <q-item-label
                              caption
                              :class="
                                $q.dark.isActive
                                  ? 'tw-text-white'
                                  : 'tw-text-black'
                              "
                              >{{ file.name }}</q-item-label
                            >
                          </q-item-section>
                        </q-item>
                      </div>
                    </div>
                  </q-card-section>
                </q-card>
              </q-expansion-item>
            </q-list>

            <template v-slot:loading>
              <div class="row items-center justify-center q-my-md">
                <q-spinner-hourglass color="white" class="on-left" />
                <span class="text-white">Loading...</span>
              </div>
            </template>
          </q-infinite-scroll>
        </q-scroll-area>
      </div>

      <div
        class="lg:tw-col-span-2 xl:tw-col-span-1 tw-m-2 lg:tw-m-0 tw-tracking-wide tw-text-sm tw-rounded-t-md tw-flex tw-flex-col tw-space-y-3 !tw-mt-0 lg:!tw-mt-3 tw-py-2 md:tw-py-3 lg:tw-py-3 tw-hidden md:tw-flex"
        :class="
          $q.dark.isActive
            ? 'tw-bg-default-1 tw-text-white '
            : 'tw-shadow-md -tw-bg-white'
        "
      >
        <q-scroll-area
          dark
          class="tw-flex-1 tw-grid tw-grid-cols-1 tw-px-2 md:tw-px-3 lg:tw-px-5"
          :thumb-style="{
            borderRadius: '9999px',
            backgroundColor: '#50B748',
            opacity: 1,
          }"
        >
          <div class="tw-grid tw-grid-cols-1 tw-gap-5">
            <div class="tw-grid tw-grid-cols-1">
              <q-date
                no-unset
                color="main-green"
                minimal
                :class="$q.dark.isActive ? '' : 'tw-bg-slate-50'"
                flat
                v-model="calendarDate"
                :events="eventsFn"
                :event-color="
                  (date) => (date[9] % 2 === 0 ? 'main-gold' : 'main-green')
                "
                class="full-width"
              />
              <div class="tw-grid tw-grid-cols-2 tw-gap-2">
                <div class="tw-flex tw-items-center tw-space-x-2">
                  <div
                    class="tw-flex-none tw-w-3 tw-h-3 tw-rounded-full tw-bg-main-green"
                  ></div>
                  <span class="tw-text-xs">Pelaporan Khusus</span>
                </div>
                <div class="tw-flex tw-items-center tw-space-x-2">
                  <div
                    class="tw-flex-none tw-w-3 tw-h-3 tw-rounded-full tw-bg-main-gold"
                  ></div>
                  <span class="tw-text-xs">Pelaporan Rutin</span>
                </div>
                <div class="tw-flex tw-items-center tw-space-x-2">
                  <div
                    class="tw-flex-none tw-w-3 tw-h-3 tw-rounded-full tw-bg-main-blue-1"
                  ></div>
                  <span class="tw-text-xs">Pelaporan Internal</span>
                </div>
              </div>
            </div>
            <div class="tw-grid tw-grid-cols-1 tw-gap-2">
              <div class="tw-flex tw-justify-between">
                <div class="tw-grid tw-grid-cols-1 truncate">
                  <span
                    class="tw-truncate tw-font-medium tw-text-sm tw-tracking-wide"
                    >Aktivitas</span
                  >
                </div>
                <div class="tw-grid tw-grid-cols-1 truncate">
                  <span
                    class="tw-truncate tw-font-light tw-text-xs tw-tracking-wide"
                    >Lihat Selengkapnya</span
                  >
                </div>
              </div>
              <div class="tw-grid tw-grid-cols-1 tw-gap-5">
                <div class="tw-flex tw-flex-col tw-space-y-5">
                  <span class="tw-text-xs tw-text-zinc-500"
                    >Jumat, 01 Desember 2023</span
                  >
                  <div class="tw-flex tw-items-center tw-space-x-5">
                    <span
                      class="tw-text-sm tw-tracking-wide"
                      :class="
                        $q.dark.isActive ? 'tw-text-white' : 'tw-text-black'
                      "
                      >09.00</span
                    >
                    <q-separator vertical size="2px" color="main-gold" />
                    <div class="tw-grid tw-grid-cols-1 tw-gap-2">
                      <span class="tw-tracking-wide tw-text-xs tw-text-zinc-500"
                        >Pelaporan Khusus</span
                      >
                      <span class="tw-truncate tw-tracking-wide tw-text-xs"
                        >Lorem ipsum dolor sit amet</span
                      >
                    </div>
                  </div>
                  <div class="tw-flex tw-items-center tw-space-x-5">
                    <span
                      class="tw-text-sm tw-tracking-wide"
                      :class="
                        $q.dark.isActive ? 'tw-text-white' : 'tw-text-black'
                      "
                      >08.30</span
                    >
                    <q-separator vertical size="2px" color="main-green" />
                    <div class="tw-grid tw-grid-cols-1 tw-gap-2">
                      <span class="tw-tracking-wide tw-text-xs tw-text-zinc-500"
                        >Pelaporan Rutin</span
                      >
                      <span class="tw-truncate tw-tracking-wide tw-text-xs"
                        >Lorem ipsum dolor sit amet</span
                      >
                    </div>
                  </div>
                </div>
                <div class="tw-flex tw-flex-col tw-space-y-5">
                  <span class="tw-text-xs tw-text-zinc-500"
                    >Senin, 04 Desember 2023</span
                  >
                  <div class="tw-flex tw-items-center tw-space-x-5">
                    <span
                      class="tw-text-sm tw-tracking-wide"
                      :class="
                        $q.dark.isActive ? 'tw-text-white' : 'tw-text-black'
                      "
                      >09.00</span
                    >
                    <q-separator vertical size="2px" color="main-blue-1" />
                    <div class="tw-grid tw-grid-cols-1 tw-gap-2">
                      <span class="tw-tracking-wide tw-text-xs tw-text-zinc-500"
                        >Pelaporan Internal</span
                      >
                      <span class="tw-truncate tw-tracking-wide tw-text-xs"
                        >Lorem ipsum dolor sit amet</span
                      >
                    </div>
                  </div>
                  <div class="tw-flex tw-items-center tw-space-x-5">
                    <span
                      class="tw-text-sm tw-tracking-wide"
                      :class="
                        $q.dark.isActive ? 'tw-text-white' : 'tw-text-black'
                      "
                      >08.30</span
                    >
                    <q-separator vertical size="2px" color="main-green" />
                    <div class="tw-grid tw-grid-cols-1 tw-gap-2">
                      <span class="tw-tracking-wide tw-text-xs tw-text-zinc-500"
                        >Pelaporan Rutin</span
                      >
                      <span class="tw-truncate tw-tracking-wide tw-text-xs"
                        >Lorem ipsum dolor sit amet</span
                      >
                    </div>
                  </div>
                  <div class="tw-flex tw-items-center tw-space-x-5">
                    <span
                      class="tw-text-sm tw-tracking-wide"
                      :class="
                        $q.dark.isActive ? 'tw-text-white' : 'tw-text-black'
                      "
                      >08.00</span
                    >
                    <q-separator vertical size="2px" color="main-gold" />
                    <div class="tw-grid tw-grid-cols-1 tw-gap-2">
                      <span class="tw-tracking-wide tw-text-xs tw-text-zinc-500"
                        >Pelaporan Khusus</span
                      >
                      <span class="tw-truncate tw-tracking-wide tw-text-xs"
                        >Lorem ipsum dolor sit amet</span
                      >
                    </div>
                  </div>
                  <span class="tw-text-xs tw-text-zinc-500"
                    >Selasa, 05 Desember 2023</span
                  >
                  <div class="tw-flex tw-items-center tw-space-x-5">
                    <span
                      class="tw-text-sm tw-tracking-wide"
                      :class="
                        $q.dark.isActive ? 'tw-text-white' : 'tw-text-black'
                      "
                      >14.00</span
                    >
                    <q-separator vertical size="2px" color="main-blue-1" />
                    <div class="tw-grid tw-grid-cols-1 tw-gap-2">
                      <span class="tw-tracking-wide tw-text-xs tw-text-zinc-500"
                        >Pelaporan Internal</span
                      >
                      <span class="tw-truncate tw-tracking-wide tw-text-xs"
                        >Lapor website sudah selesai</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </q-scroll-area>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { format } from "quasar";

const { pad } = format;
const qScrollAreaContainer = ref(null);
const rows = ref([]);

function randomizeExt() {
  let items = ["PDF", "DOCX", "TXT", "XLSX"];
  return items[Math.floor(Math.random() * (items.length - 0 + 1) + 0)];
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

function addItem() {
  let maxSize = 50;
  let count = rows.value.length + 1;
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
  const namaFiles = [
    "Peraturan Nomor X.N.1 tahun 2012",
    "File Pengantar/ttd Direksi",
    "Lembar Bagan Struktur Kepemilikan",
    "POJK 65 /POJK.04/2017",
  ];

  if (count < maxSize) {
    for (let i = 0; i < 10; i++) {
      let totalFiles = getRandomIntInclusive(1, 5);
      let rowFiles = [];

      for (let index = 0; index < totalFiles; index++) {
        let filename = namaFiles[getRandomIntInclusive(0, 3)];
        let slug = filename.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, "");
        rowFiles.push({
          index: index,
          title: filename,
          slug: slug,
          name: "Nama PIC",
          ext: randomizeExt(),
        });
      }

      rows.value = rows.value.concat({
        title: namaLaporan[getRandomIntInclusive(0, 9)],
        files: rowFiles,
      });
      count++;
    }
    rows.value.forEach((row, idx) => {
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
