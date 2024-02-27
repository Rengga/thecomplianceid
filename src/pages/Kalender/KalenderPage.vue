<template>
  <q-page
    class="tw-flex tw-flex-col tw-pl-0 lg:tw-pl-4 tw-pt-0 lg:tw-pt-3 kalender-page"
  >
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
      <q-breadcrumbs-el label="kalender" :to="{ name: 'dashboard' }" exact />
    </q-breadcrumbs>

    <div
      class="tw-flex-1 tw-tracking-wide tw-text-sm tw-rounded-t-md lg:tw-w-5/12 tw-flex tw-flex-col tw-space-y-2 !tw-mt-0 lg:!tw-mt-3 tw-pt-2 md:tw-pt-3 lg:tw-pt-3"
      :class="
        $q.dark.isActive
          ? 'tw-bg-default-1 tw-text-white'
          : 'tw-bg-slate-50 tw-shadow-md tw-text-white '
      "
    >
      <div
        class="tw-flex-none tw-flex tw-flex-col lg:tw-justify-between tw-space-y-2 lg:tw-space-y-0 tw-px-2 md:tw-px-3 lg:tw-px-5"
      >
        <div class="tw-w-full">
          <span
            class="tw-text-base tw-font-medium"
            :class="$q.dark.isActive ? '' : 'tw-text-default-6'"
            >Kalender</span
          >
        </div>
        <div
          class="tw-grid tw-grid-cols-1 tw-gap-5"
          :class="$q.dark.isActive ? '' : 'tw-text-default-6'"
        >
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
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { date } from "quasar";
import { format } from "quasar";

const filterDateRange = ref({
  from: date.formatDate(new Date(), "YYYY/MM/DD"),
  to: date.formatDate(new Date(), "YYYY/MM/DD"),
});
const startDateText = computed(() => {
  return filterDateRange.value
    ? new Date(filterDateRange.value.from)
        .toLocaleDateString("id-ID", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })
        .replace(/\s/g, "/")
    : "";
});
const endDateText = computed(() => {
  return filterDateRange.value
    ? new Date(filterDateRange.value.to)
        .toLocaleDateString("id-ID", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })
        .replace(/\s/g, "/")
    : "";
});

const { pad } = format;
const qScrollAreaContainer = ref(null);
const tableItems = ref([]);

function randomizeStatus() {
  let items = [
    "Open",
    "In Progress",
    "Need Review",
    "Sign",
    "Upload And Approval",
    "Completed",
    "Deadline",
  ];
  return items[Math.floor(Math.random() * (items.length - 1 - 0) + 0)];
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

function generateRandomDate(from, to) {
  return new Date(
    from.getTime() + Math.random() * (to.getTime() - from.getTime())
  );
}

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

function addItem() {
  let maxSize = 500;
  let count = tableItems.value.length + 1;
  if (count < maxSize) {
    for (let i = 0; i < 5; i++) {
      let addDays = getRandomIntInclusive(1, 32);
      let addLaporan = namaLaporan[getRandomIntInclusive(1, 3)];
      // let addLaporan2 = namaLaporan[getRandomIntInclusive(0, 1)];
      let from = generateRandomDate(
        new Date(),
        date.addToDate(new Date(), { days: addDays })
      );
      let to = date.addToDate(from, { days: addDays });

      tableItems.value = tableItems.value.concat({
        tanggal: date.formatDate(from, "DD MMMM YYYY"),
        mTanggal: date.formatDate(from, "DD MMM YYYY"),
        title: addLaporan,
        deadline: date.formatDate(to, "DD MMMM YYYY"),
        mDeadline: date.formatDate(to, "DD MMM YYYY"),
        status: randomizeStatus(),
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
