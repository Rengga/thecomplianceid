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
        label="Cari Template"
        :to="{ name: 'template-laporan-search' }"
        exact
        class="text-default-3"
      />
    </q-breadcrumbs>

    <div
      class="tw-flex-1 tw-grid tw-grid-cols-1 tw-tracking-wide tw-text-sm tw-rounded-t-md !tw-mt-0 lg:!tw-mt-3 tw-pt-2 md:tw-pt-3 lg:tw-pt-3"
      :class="
        $q.dark.isActive
          ? 'tw-bg-default-1 tw-text-white'
          : 'tw-bg-slate-50 tw-shadow-md tw-text-white '
      "
    >
      <div class="tw-flex tw-flex-col tw-space-y-3">
        <div
          class="tw-flex-none tw-flex tw-flex-col lg:tw-flex-row lg:tw-justify-between lg:tw-items-center tw-space-y-2 lg:tw-space-y-0 tw-px-2 md:tw-px-3 lg:tw-px-5"
        >
          <div class="tw-flex tw-space-x-3 tw-items-center">
            <q-btn
              flat
              :text-color="$q.dark.isActive ? 'default-3' : 'dark-green-tw-50'"
              label="Template"
              no-caps
              class="tw-font-medium tw-text-xs lg:tw-text-sm tw-py-2 tw-px-3 lg:tw-px-5 tw-tracking-wide tw-rounded-md"
              :to="{ name: 'template-laporan-template' }"
              exact
            />
            <q-btn
              :text-color="$q.dark.isActive ? 'dark-green-2' : 'dark-green-2'"
              label="Cari Template"
              no-caps
              class="tw-font-medium tw-text-xs lg:tw-text-sm tw-py-2 tw-px-3 lg:tw-px-5 tw-tracking-wide tw-rounded-md"
              :class="$q.dark.isActive ? 'tw-bg-default-7' : ''"
              :to="{ name: 'template-laporan-search' }"
              exact
              flat
            />
          </div>
          <div class="tw-flex tw-space-x-3 tw-items-center">
            <q-btn
              :color="$q.dark.isActive ? 'default-5' : 'dark-cream'"
              :text-color="$q.dark.isActive ? 'white' : 'dark-green-2'"
              label="Permintaan Template Laporan"
              no-caps
              class="tw-font-medium tw-text-xs lg:tw-text-sm tw-py-3 lg:tw-py-2 tw-px-3 lg:tw-px-5 tw-tracking-wide tw-rounded-md"
            />
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

        <div class="tw-flex-1 tw-grid tw-grid-cols-1">
          <q-scroll-area
            ref="qScrollAreaContainer"
            dark
            class="fit tw-grid tw-grid-cols-1 tw-px-2 md:tw-px-3 lg:tw-px-5"
            :thumb-style="{
              borderRadius: '9999px',
              backgroundColor: '#50B748',
              opacity: 1,
            }"
          >
            <q-infinite-scroll
              @load="onLoadRef"
              :offset="0"
              class="tw-relative"
            >
              <div
                class="tw-grid tw-grid-cols-1 xl:tw-grid-cols-2 tw-gap-2 tw-rounded-xl"
              >
                <q-card
                  v-for="row in rows"
                  :key="row.index"
                  flat
                  class="tw-cursor-pointer tw-rounded-xl"
                  @click="showDetail = true"
                >
                  <q-card-section class="q-pa-none">
                    <div
                      class="tw-p-2 tw-rounded-xl tw-flex tw-flex-row tw-items-center tw-space-x-2"
                      :class="
                        $q.dark.isActive
                          ? 'tw-bg-default-2'
                          : 'tw-bg-white tw-text-default-6 '
                      "
                    >
                      <div class="tw-flex-none">
                        <q-avatar rounded size="5rem">
                          <q-img
                            src="/assets/images/icons/file-2.png"
                            :ratio="1"
                            fit="contain"
                          />
                        </q-avatar>
                      </div>
                      <div class="tw-flex-1 tw-grid tw-grid-cols-1 tw-gap-2">
                        <span class="tw-font-semibold tw-text-sm tw-truncate">{{
                          row.title
                        }}</span>
                        <div class="tw-grid tw-grid-cols-5 tw-gap-2">
                          <div class="tw-col-span-5 md:tw-col-span-4">
                            <table
                              class="tw-w-full tw-table-fixed tw-border-collapse tw-text-[10px] md:tw-text-xs"
                            >
                              <tr>
                                <td class="tw-pb-1 tw-w-1/2 md:tw-w-2/6">
                                  <span>POJK/Referensi Laporan</span>
                                </td>
                                <td class="tw-pb-1 tw-w-1/2 md:tw-w-4/6">
                                  <span>: {{ row.referensi }}</span>
                                </td>
                              </tr>
                              <tr>
                                <td class="tw-pb-1 tw-w-1/2 md:tw-w-2/6">
                                  <span>Waktu Penyampaian</span>
                                </td>
                                <td class="tw-pb-1 tw-w-1/2 md:tw-w-4/6">
                                  <span>: {{ row.waktu }}</span>
                                </td>
                              </tr>
                              <tr>
                                <td class="tw-pb-1 tw-w-1/2 md:tw-w-2/6">
                                  <span>Deadline</span>
                                </td>
                                <td class="tw-pb-1 tw-w-1/2 md:tw-w-4/6">
                                  <span>: {{ row.deadline }}</span>
                                </td>
                              </tr>
                            </table>
                          </div>
                          <div
                            class="tw-flex tw-flex-col tw-self-end tw-space-y-1"
                          >
                            <span
                              class="tw-text-[10px] md:tw-text-xs tw-font-light"
                              >{{ row.files.length }} Files</span
                            >
                            <div class="tw-relative tw-h-10">
                              <q-avatar
                                v-for="(file, n) in row.files.slice(0, 4)"
                                :key="file.index"
                                size="md"
                                rounded
                                class="tw-absolute tw-top-0"
                                :style="`left: ${n * 34}px`"
                              >
                                <q-img
                                  v-if="file.ext === 'XLSX'"
                                  src="/assets/images/files/excel.png"
                                  :ratio="1"
                                  fit="contain"
                                />
                                <q-img
                                  v-else-if="file.ext === 'PDF'"
                                  src="/assets/images/files/pdf.png"
                                  :ratio="1"
                                  fit="contain"
                                />
                                <q-img
                                  v-else-if="file.ext === 'DOCX'"
                                  src="/assets/images/files/word.png"
                                  :ratio="1"
                                  fit="contain"
                                />
                                <q-img
                                  src="/assets/images/files/txt.png"
                                  :ratio="1"
                                  fit="contain"
                                />
                              </q-avatar>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </q-card-section>
                </q-card>
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
      </div>

      <q-dialog
        v-model="showDetail"
        :full-height="$q.screen.lt.md ? false : true"
        :position="$q.screen.lt.md ? 'standard' : 'right'"
        :maximized="$q.screen.lt.md ? true : false"
        transition-show="slide-left"
        transition-hide="slide-right"
        class="detail-files-modal"
      >
        <q-card
          class="lg:tw-min-w-[40vw] xl:tw-min-w-[25vw] tw-flex tw-flex-col tw-max-h-full tw-overflow-hidden"
          :class="
            $q.dark.isActive
              ? 'tw-bg-default-1 tw-text-white '
              : ' tw-bg-white tw-text-default-6'
          "
        >
          <q-card-section class="tw-p-5 row">
            <q-space />
            <q-btn
              round
              color="default-3"
              icon="close"
              text-color="default-black"
              dense
              v-close-popup
            />
          </q-card-section>
          <q-card-section
            class="tw-flex-1 tw-max-h-full tw-overflow-hidden tw-p-0 tw-grid tw-grid-cols-1 full-height"
          >
            <div
              class="tw-flex tw-flex-col tw-justify-between tw-max-h-full tw-overflow-hidden"
            >
              <q-scroll-area
                class="tw-flex-1 tw-px-5 tw-pb-5"
                dark
                :thumb-style="{
                  borderRadius: '9999px',
                  backgroundColor: '#50B748',
                  opacity: 1,
                }"
              >
                <div class="tw-grid tw-grid-cols-1 tw-gap-5">
                  <q-avatar rounded size="8rem" class="tw-place-self-center">
                    <q-img
                      src="/assets/images/icons/file-2.png"
                      :ratio="1"
                      fit="contain"
                    />
                  </q-avatar>
                  <span
                    class="tw-font-semibold tw-text-sm lg:tw-text-lg tw-px-2"
                    >Laporan Pihak Terafiliasi Manajer Investasi</span
                  >
                  <div class="tw-grid tw-grid-cols-1 tw-gap-2">
                    <div
                      class="tw-grid tw-grid-cols-1 tw-gap-3 tw-tracking-wide tw-p-2"
                    >
                      <span
                        class="tw-font-semibold lg:tw-font-medium tw-text-sm lg:tw-text-base"
                        >Deskripsi</span
                      >
                      <span class="tw-text-xs lg:tw-text-sm tw-px-2">-</span>
                    </div>
                    <div
                      class="tw-grid tw-grid-cols-1 tw-gap-3 tw-tracking-wide tw-p-2"
                    >
                      <span
                        class="tw-font-semibold lg:tw-font-medium tw-text-sm lg:tw-text-base"
                        >Keterangan</span
                      >
                      <span
                        class="tw-text-xs lg:tw-text-sm tw-px-2"
                        :class="$q.dark.isActive ? 'tw-text-main-gold' : ''"
                        >Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Maecenas sed lorem vitae odio egestas porttitor.
                        Interdum et malesuada fames ac ante ipsum primis in
                        faucibus. Vivamus blandit in augue lobortis
                        feugiat.</span
                      >
                    </div>
                    <div
                      class="tw-grid tw-grid-cols-1 tw-gap-3 tw-tracking-wide tw-p-2"
                    >
                      <span
                        class="tw-font-semibold lg:tw-font-medium tw-text-sm lg:tw-text-base"
                        >POJK/Referensi Laporan</span
                      >
                      <span
                        class="tw-text-xs lg:tw-text-sm tw-px-2"
                        :class="$q.dark.isActive ? 'tw-text-main-gold' : ''"
                        >Surat OJK S-317/PM.21/2020</span
                      >
                    </div>
                    <div
                      class="tw-grid tw-grid-cols-1 tw-gap-3 tw-tracking-wide tw-p-2"
                    >
                      <span
                        class="tw-font-semibold lg:tw-font-medium tw-text-sm lg:tw-text-base"
                        >Waktu Penyampaian</span
                      >
                      <span
                        class="tw-text-xs lg:tw-text-sm tw-px-2"
                        :class="$q.dark.isActive ? 'tw-text-main-gold' : ''"
                        >Semesteran</span
                      >
                    </div>
                    <div
                      class="tw-grid tw-grid-cols-1 tw-gap-3 tw-tracking-wide tw-p-2"
                    >
                      <span
                        class="tw-font-semibold lg:tw-font-medium tw-text-sm lg:tw-text-base"
                        >Deadline</span
                      >
                      <span
                        class="tw-text-xs lg:tw-text-sm tw-px-2"
                        :class="$q.dark.isActive ? 'tw-text-main-gold' : ''"
                        >12 Januari dan 12 Juli</span
                      >
                    </div>
                    <div
                      class="tw-grid tw-grid-cols-1 tw-gap-3 tw-tracking-wide tw-p-2"
                    >
                      <span
                        class="tw-font-semibold lg:tw-font-medium tw-text-sm lg:tw-text-base"
                        >Pilihan Periode</span
                      >
                      <span
                        class="tw-text-xs lg:tw-text-sm tw-px-2"
                        :class="$q.dark.isActive ? 'tw-text-main-gold' : ''"
                        >Semester 1 atau Semester 2</span
                      >
                    </div>
                    <div
                      class="tw-grid tw-grid-cols-1 tw-gap-3 tw-tracking-wide tw-p-2"
                    >
                      <span
                        class="tw-font-semibold lg:tw-font-medium tw-text-sm lg:tw-text-base"
                        >Konten Laporan</span
                      >
                      <span
                        class="tw-text-xs lg:tw-text-sm tw-px-2"
                        :class="$q.dark.isActive ? 'tw-text-main-gold' : ''"
                        >3 File</span
                      >
                    </div>
                  </div>
                </div>
              </q-scroll-area>
              <div class="tw flex-none tw-px-5 tw-pb-5">
                <q-btn
                  flat
                  :color="$q.dark.isActive ? 'default-4' : 'status-open'"
                  :text-color="$q.dark.isActive ? 'default-4' : 'white'"
                  label="Get Template"
                  no-caps
                  class="tw-w-full tw-rounded-md tw-py-2"
                  :class="
                    $q.dark.isActive ? 'tw-bg-default-7' : 'tw-bg-default-6'
                  "
                />
              </div>
            </div>
          </q-card-section>
        </q-card>
      </q-dialog>
    </div>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { format } from "quasar";

const { pad } = format;
const qScrollAreaContainer = ref(null);
const rows = ref([]);
const showDetail = ref(false);

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
  if (count < maxSize) {
    for (let i = 0; i < 10; i++) {
      let totalFiles = getRandomIntInclusive(1, 5);
      let rowFiles = [];

      for (let index = 0; index < totalFiles; index++) {
        rowFiles.push({
          index: index,
          title: `File Laporan #${pad(index + 1, 5)}`,
          name: "Nama PIC",
          ext: randomizeExt(),
        });
      }

      rows.value = rows.value.concat({
        title: `Laporan Kegiatan Bulanan MI (X.N.1)`,
        referensi: "Peraturan Nomor X.N.1 tahun 2012",
        waktu: "Bulanan",
        deadline: "Tanggal 12 bulan berikutnya",
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

<style>
.detail-files-modal > .q-dialog__inner--minimized {
  padding: 0;
}
</style>
