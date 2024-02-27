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
        label="Tugas Saya"
        :to="{ name: 'tugas-saya-khusus' }"
        exact
        class="text-default-3"
      />
      <q-breadcrumbs-el label="Pelaporan Rutin" class="text-default-3" />
    </q-breadcrumbs>

    <div
      class="tw-flex-1 tw-grid tw-grid-cols-1 lg:tw-grid-cols-6 xl:tw-grid-cols-5 tw-gap-2"
    >
      <div
        class="lg:tw-col-span-4 tw-tracking-wide tw-text-sm tw-rounded-t-md tw-flex tw-flex-col tw-space-y-1 !tw-mt-0 lg:!tw-mt-3 tw-pt-2 md:tw-pt-3 lg:tw-pt-3"
        :class="
          $q.dark.isActive
            ? 'tw-bg-default-1 tw-text-white '
            : 'tw-bg-slate-50 tw-shadow-md tw-text-white '
        "
      >
        <div
          class="tw-flex-none tw-flex tw-flex-col lg:tw-flex-row lg:tw-justify-between lg:tw-items-start tw-space-y-2 lg:tw-space-y-0 tw-px-2 md:tw-px-3 lg:tw-px-5"
        >
          <div class="tw-grid tw-grid-cols-1">
            <q-tabs
              v-model="currentMenu"
              inline-label
              outside-arrows
              mobile-arrows
              no-caps
              indicator-color="transparent"
              class="tw-text-default-3"
              :active-class="
                $q.dark.isActive
                  ? 'tw-bg-default-3 tw-rounded-xl text-default-4'
                  : 'tw-bg-default-6 tw-rounded-xl tw-text-default-7'
              "
            >
              <q-route-tab
                name="Khusus"
                label="Pelaporan Khusus"
                :to="{ name: 'tugas-saya-khusus' }"
                exact
                class="tw-text-gray-500 hover:tw-rounded-xl"
                :class="
                  $q.dark.isActive
                    ? 'tw-text-gray-500 '
                    : 'tw-text-green-800/50 '
                "
                ><q-badge
                  class="tw-rounded-full tw-p-2 tw-w-6 tw-h-6 tw-ml-2 text-bold"
                  :class="
                    $q.dark.isActive
                      ? 'tw-bg-zinc-800 tw-text-zinc-500  '
                      : 'tw-bg-zinc-800/0 tw-text-green-800/50   '
                  "
                  >4</q-badge
                ></q-route-tab
              >
              <q-route-tab
                name="Rutin"
                label="Pelaporan Rutin"
                :to="{ name: 'tugas-saya-rutin' }"
                exact
                class="tw-text-default-3"
                :active-class="
                  $q.dark.isActive
                    ? 'tw-bg-default-3 tw-rounded-xl text-default-4'
                    : 'tw-bg-default-6 tw-rounded-xl tw-text-default-7'
                "
                ><q-badge
                  :color="$q.dark.isActive ? 'main-gold' : 'dark-green-2'"
                  class="tw-rounded-full tw-p-2 tw-w-6 tw-h-6 tw-ml-2 text-bold"
                  :class="
                    $q.dark.isActive ? 'text-default-4 ' : 'tw-text-default-7'
                  "
                  >3</q-badge
                ></q-route-tab
              >
              <q-route-tab
                name="Internal"
                label="Pelaporan Internal"
                :to="{ name: 'tugas-saya-internal' }"
                exact
                class="tw-text-gray-500 hover:tw-rounded-xl"
                :class="
                  $q.dark.isActive
                    ? 'tw-text-gray-500 '
                    : 'tw-text-green-800/50 '
                "
                ><q-badge
                  class="tw-rounded-full tw-p-2 tw-w-6 tw-h-6 tw-ml-2 text-bold"
                  :class="
                    $q.dark.isActive
                      ? 'tw-bg-zinc-800 tw-text-zinc-500  '
                      : 'tw-bg-zinc-800/0 tw-text-green-800/50   '
                  "
                  >3</q-badge
                ></q-route-tab
              >
              <q-route-tab
                name="Proses"
                label="Pelaporan dalam Proses"
                :to="{ name: 'tugas-saya-proses' }"
                exact
                class="tw-text-gray-500 hover:tw-rounded-xl"
                :class="
                  $q.dark.isActive
                    ? 'tw-text-gray-500 '
                    : 'tw-text-green-800/50 '
                "
                ><q-badge
                  class="tw-rounded-full tw-p-2 tw-w-6 tw-h-6 tw-ml-2 text-bold"
                  :class="
                    $q.dark.isActive
                      ? 'tw-bg-zinc-800 tw-text-zinc-500  '
                      : 'tw-bg-zinc-800/0 tw-text-green-800/50   '
                  "
                  >4</q-badge
                ></q-route-tab
              >
            </q-tabs>
          </div>
          <div class="lg:tw-flex-none tw-flex tw-flex-col tw-space-y-2">
            <div class="tw-flex tw-space-x-2 lg:tw-space-x-5 tw-items-center">
              <q-btn
                :color="$q.dark.isActive ? 'default-5' : 'dark-cream'"
                :text-color="$q.dark.isActive ? 'white' : 'dark-green-2'"
                no-caps
                class="tw-w-2/5 lg:tw-w-auto tw-py-3 tw-px-3 lg:tw-px-5 tw-rounded-xl"
              >
                <q-icon left name="mdi-plus" size="xs" class="tw-mr-2" />
                <span
                  class="tw-font-regular tw-text-xs lg:tw-text-sm tw-tracking-wide"
                  >Tambah Laporan</span
                >
              </q-btn>
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
            <!-- <span
              class="text-right text-white tw-text-sm tw-tracking-wide tw-cursor-pointer"
              >Lihat Selengkapnya</span
            > -->
          </div>
        </div>

        <div
          class="tw-grid tw-grid-cols-3 md:tw-grid-cols-6 tw-mx-2 md:tw-mx-3 lg:tw-mx-5 tw-rounded-xl"
          :class="
            $q.dark.isActive
              ? 'tw-bg-default-2 tw-text-white'
              : 'tw-bg-white tw-text-default-6'
          "
        >
          <div
            class="tw-col-span-1 md:tw-col-span-4 tw-grid tw-grid-cols-1 tw-truncate tw-px-4 tw-py-3"
          >
            <span class="tw-truncate"> Laporan </span>
          </div>
          <span class="tw-py-3">Deadline</span>
          <span class="tw-py-3">Status</span>
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
                    <div
                      class="tw-grid tw-grid-cols-3 md:tw-grid-cols-6 tw-items-center"
                    >
                      <div
                        class="tw-col-span-1 md:tw-col-span-4 tw-grid tw-grid-cols-2 tw-truncate"
                      >
                        <span
                          class="tw-truncate"
                          :class="$q.dark.isActive ? '' : 'tw-text-default-6'"
                        >
                          {{ row.title }}
                        </span>
                        <span
                          class="tw-text-xs ff-worksans tw-font-medium"
                          :class="
                            $q.dark.isActive
                              ? 'tw-text-violet-500'
                              : 'tw-text-sky-700 tw-bg-sky-200 tw-w-fit tw-leading-normal tw-py-1 tw-px-4 tw-rounded-full '
                          "
                        >
                          PIC : Sandi
                        </span>
                      </div>
                      <span
                        :class="$q.dark.isActive ? '' : 'tw-text-default-6'"
                        >{{
                          $q.screen.lt.md ? row.mTanggal : row.tanggal
                        }}</span
                      >
                      <q-banner
                        inline-actions
                        rounded
                        dense
                        class="tw-rounded-full tw-p-1 lg:tw-p-2 tw-text-center tw-w-24 lg:tw-w-40"
                        :class="{
                          [$q.dark.isActive
                            ? 'tw-bg-yellow-200/20 tw-text-main-yellow '
                            : 'tw-bg-yellow-200/20 text-status-open']:
                            row.status === 'Open',
                          [$q.dark.isActive
                            ? 'tw-bg-violet-200/20 tw-text-neutral-300'
                            : 'tw-bg-violet-200/20 tw-text-violet-600']:
                            row.status === 'In Progress',
                          [$q.dark.isActive
                            ? 'tw-bg-red-200/20 tw-text-red-400'
                            : 'tw-bg-red-200/20 tw-text-red-400']:
                            row.status === 'Need Review',
                          [$q.dark.isActive
                            ? 'tw-bg-blue-600/20 tw-text-blue-500'
                            : 'tw-bg-blue-200/20 tw-text-blue-500']:
                            row.status === 'Sign',
                          [$q.dark.isActive
                            ? 'tw-bg-indigo-200/20 tw-text-indigo-500'
                            : 'tw-bg-indigo-200/20 tw-text-indigo-500']:
                            row.status === 'Approval',
                          [$q.dark.isActive
                            ? 'tw-bg-green-200/20 tw-text-green-500'
                            : 'tw-bg-green-200/20 tw-text-green-500']:
                            row.status === 'Completed',
                          [$q.dark.isActive
                            ? 'tw-bg-red-200/20 tw-text-red-500'
                            : 'tw-bg-red-200/20 tw-text-red-500']:
                            row.status === 'Deadline',
                        }"
                      >
                        <span class="tw-text-[10px] lg:tw-text-sm">{{
                          row.status
                        }}</span>
                      </q-banner>
                    </div>
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
                            name: 'tugas-saya-detail',
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
            <q-list v-if="loadingState" dark dense separator>
              <q-item v-for="n in 5" :key="n" dense dark>
                <div
                  class="tw-flex tw-items-center tw-space-x-2 tw-w-full tw-py-2"
                >
                  <q-skeleton type="rect" dark width="60%" />
                  <q-skeleton type="rect" dark width="20%" />
                  <q-skeleton type="rect" dark width="17%" />
                  <q-skeleton type="rect" dark width="3%" />
                </div>
              </q-item>
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
const currentMenu = ref("Rutin");
const qScrollAreaContainer = ref(null);
const rows = ref([]);
const loadingState = ref(false);

const calendarDate = new Date()
  .toISOString()
  .split("T")[0]
  .split("-")
  .join("/");

function eventsFn(date) {
  if (
    date === "2024/02/01" ||
    date === "2024/02/05" ||
    date === "2024/02/06" ||
    date === "2024/02/09" ||
    date === "2024/02/23"
  ) {
    return true;
  }
  return false;
}

function randomizeStatus() {
  let items = [
    "Open",
    "In Progress",
    "Need Review",
    "Sign",
    "Approval",
    "Completed",
    "Deadline",
  ];
  return items[Math.floor(Math.random() * items.length)];
}

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
        title: namaLaporan[i],
        tanggal: "12 Januari 2024",
        mTanggal: "12 Jan 2024",
        status: randomizeStatus(),
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
  loadingState.value = true;
  setTimeout(() => {
    addItem();
    loadingState.value = false;
    done();
  }, 2000);
}

onMounted(() => {
  addItem();
});
</script>
