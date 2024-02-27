<template>
  <q-page
    class="tw-flex tw-flex-col tw-pl-0 lg:tw-pl-4 tw-pt-0 lg:tw-pt-3 riwayat-page"
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
      <q-breadcrumbs-el label="Riwayat" :to="{ name: 'dashboard' }" exact />
    </q-breadcrumbs>

    <div
      class="tw-flex-1 tw-tracking-wide tw-text-sm tw-rounded-t-md tw-flex tw-flex-col tw-space-y-2 !tw-mt-0 lg:!tw-mt-3 tw-pt-2 md:tw-pt-3 lg:tw-pt-3"
      :class="
        $q.dark.isActive
          ? 'tw-bg-default-1 tw-text-white'
          : 'tw-bg-slate-50 tw-shadow-md tw-text-white '
      "
    >
      <div
        class="tw-flex-none tw-flex tw-flex-col lg:tw-flex-row lg:tw-justify-between lg:tw-items-center tw-space-y-2 lg:tw-space-y-0 tw-px-2 md:tw-px-3 lg:tw-px-5"
      >
        <span
          class="tw-text-base tw-font-medium"
          :class="$q.dark.isActive ? '' : 'tw-text-default-6'"
          >Riwayat</span
        >
        <div
          class="tw-flex tw-flex-col lg:tw-flex-row lg:tw-space-x-5 tw-space-y-2 lg:tw-space-y-0 lg:tw-items-center"
        >
          <div class="tw-flex tw-flex-row tw-space-x-2 tw-items-center">
            <q-input
              hide-bottom-space
              dense
              outlined
              color="main-green tw-border-default-7 tw-border-2 custom-css-rm-bdr tw-rounded-xl "
              input-class="tw-cursor-pointer tw-py-2 tw-text-xs tw-border-none"
              v-model="startDateText"
              class="tw-flex-1 tw-cursor-pointer tw-rounded-xl"
              :class="$q.dark.isActive ? 'tw-bg-zinc-700' : ''"
              placeholder="Start Date"
              readonly
            >
              <template v-slot:append>
                <q-icon name="mdi-chevron-down" size="xs" />
              </template>
              <q-popup-proxy
                cover
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date
                  dark
                  v-model="filterDateRange"
                  range
                  minimal
                  color="main-green"
                >
                  <div class="row items-center justify-end">
                    <q-btn
                      size="sm"
                      v-close-popup
                      label="Close"
                      color="main-green"
                      flat
                      :disable="!filterDateRange"
                    />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-input>
            <span>-</span>
            <q-input
              hide-bottom-space
              dense
              outlined
              color="main-green tw-border-default-7 tw-border-2 custom-css-rm-bdr tw-rounded-xl "
              input-class="tw-cursor-pointer tw-py-2 tw-text-xs tw-border-none"
              v-model="endDateText"
              class="tw-flex-1 tw-cursor-pointer tw-rounded-xl"
              :class="$q.dark.isActive ? 'tw-bg-zinc-700' : ''"
              placeholder="End Date"
              readonly
            >
              <template v-slot:append>
                <q-icon name="mdi-chevron-down" size="xs" />
              </template>
              <q-popup-proxy
                cover
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date
                  dark
                  v-model="filterDateRange"
                  range
                  minimal
                  color="main-green"
                >
                  <div class="row items-center justify-end">
                    <q-btn
                      size="sm"
                      v-close-popup
                      label="Close"
                      color="main-green"
                      flat
                      :disable="!filterDateRange"
                    />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-input>
          </div>
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

      <div
        class="tw-flex tw-flex-row tw-items-center tw-rounded-xl tw-mx-2 md:tw-mx-3 lg:tw-mx-5 rimayat-page"
        :class="
          $q.dark.isActive
            ? 'tw-bg-default-1 tw-text-white'
            : 'tw-bg-slate-50 tw-shadow-md tw-text-default-6 '
        "
      >
        <span
          class="tw-py-3 tw-text-center tw-text-xs lg:tw-text-sm tw-font-medium tw-text-start tw-px-2 md:tw-px-3 lg:tw-px-4 tw-w-2/12 max-w-tanggal"
          >Tanggal</span
        >
        <div
          class="tw-truncate tw-py-3 tw-px-2 md:tw-px-3 lg:tw-px-4 tw-w-7/12 max-w-laporan tw-font-medium"
        >
          <span class="tw-truncate tw-text-xs lg:tw-text-sm tw-font-medium-2">
            Laporan
          </span>
        </div>
        <span
          class="tw-py-3 tw-text-center tw-text-xs lg:tw-text-sm tw-font-medium tw-px-2 md:tw-px-3 lg:tw-px-4 tw-w-2/12 max-w-deadline"
          >Deadline</span
        >
        <span
          class="tw-py-3 tw-text-center tw-text-xs lg:tw-text-sm tw-font-medium tw-px-2 md:tw-px-3 lg:tw-px-4 tw-w-48"
          >Status</span
        >
      </div>

      <q-scroll-area
        ref="qScrollAreaContainer"
        dark
        class="tw-flex-1 tw-grid tw-grid-cols-1"
        :thumb-style="{
          borderRadius: '9999px',
          backgroundColor: '#50B748',
          opacity: 1,
        }"
      >
        <q-infinite-scroll @load="onLoadRef" :offset="0" class="tw-relative">
          <div
            komenv-for="row in tableItems"
            komen:key="row.index"
            class="tw-mb-1 tw-rounded-xl tw-mx-2 md:tw-mx-3 lg:tw-mx-5"
            :class="$q.dark.isActive ? 'tw-bg-zinc-800' : 'tw-bg-white'"
          >
            <div class="tw-flex tw-flex-row tw-items-center">
              <span
                class="tw-py-3 tw-text-center tw-text-xs lg:tw-text-sm tw-font-medium tw-text-start tw-px-2 md:tw-px-3 lg:tw-px-4 tw-w-2/12"
                :class="
                  $q.dark.isActive ? 'tw-text-white' : 'tw-text-default-6'
                "
                ><span class="lg:tw-hidden">18 March 2024</span
                ><span class="tw-hidden lg:tw-block">18 March 2024</span></span
              >

              <div
                class="tw-truncate tw-py-3 tw-px-2 md:tw-px-3 lg:tw-px-4 tw-w-7/12"
              >
                <span
                  class="tw-truncate tw-text-xs lg:tw-text-sm tw-font-medium"
                  :class="
                    $q.dark.isActive ? 'tw-text-white' : 'tw-text-default-6'
                  "
                >
                  Pelaksanaan Hasil Evaluasi Komite Audit
                </span>
              </div>
              <span
                class="tw-py-3 tw-text-center tw-text-xs lg:tw-text-sm tw-font-medium tw-px-2 md:tw-px-3 lg:tw-px-4 tw-w-2/12"
                :class="
                  $q.dark.isActive ? 'tw-text-white' : 'tw-text-default-6'
                "
                ><span class="lg:tw-hidden">10 April 2024</span
                ><span class="tw-hidden lg:tw-block">10 April 2024</span></span
              >
              <div
                class="tw-py-3 tw-px-1 lg:tw-px-5 tw-flex tw-justify-center tw-items-center"
              >
                <q-banner
                  inline-actions
                  rounded
                  dense
                  class="tw-p-1 lg:tw-p-2 tw-w-full lg:tw-w-40 tw-rounded-full tw-text-center"
                  :class="
                    $q.dark.isActive
                      ? 'tw-bg-yellow-200/20 tw-text-main-yellow '
                      : 'tw-bg-yellow-200/20 text-status-open'
                  "
                >
                  <span class="tw-text-[10px] lg:tw-text-sm">Open</span>
                </q-banner>
              </div>
            </div>
            <div class="tw-flex tw-flex-row tw-items-center">
              <span
                class="tw-py-3 tw-text-center tw-text-xs lg:tw-text-sm tw-font-medium tw-text-start tw-px-2 md:tw-px-3 lg:tw-px-4 tw-w-2/12 tw-text-zinc-800/0"
                ><span class="lg:tw-hidden">18 March 2024</span
                ><span class="tw-hidden lg:tw-block">18 March 2024</span></span
              >

              <div
                class="tw-truncate tw-py-3 tw-px-2 md:tw-px-3 lg:tw-px-4 tw-w-7/12"
              >
                <span
                  class="tw-truncate tw-text-xs lg:tw-text-sm tw-font-medium"
                  :class="
                    $q.dark.isActive ? 'tw-text-white' : 'tw-text-default-6'
                  "
                >
                  Laporan Keuangan Tahunan Produk Reksa Dana
                </span>
              </div>
              <span
                class="tw-py-3 tw-text-center tw-text-xs lg:tw-text-sm tw-font-medium tw-px-2 md:tw-px-3 lg:tw-px-4 tw-w-2/12"
                :class="
                  $q.dark.isActive ? 'tw-text-white' : 'tw-text-default-6'
                "
                ><span class="lg:tw-hidden">10 April 2024</span
                ><span class="tw-hidden lg:tw-block">10 April 2024</span></span
              >
              <div
                class="tw-py-3 tw-px-1 lg:tw-px-5 tw-flex tw-justify-center tw-items-center"
              >
                <q-banner
                  inline-actions
                  rounded
                  dense
                  class="tw-p-1 lg:tw-p-2 tw-w-full lg:tw-w-40 tw-rounded-full tw-text-center tw-bg-default-2 text-status-completed"
                  :class="
                    $q.dark.isActive
                      ? 'tw-bg-green-200/20 tw-text-green-500'
                      : 'tw-bg-green-200/20 tw-text-green-500'
                  "
                >
                  <span class="tw-text-[10px] lg:tw-text-sm">Completed</span>
                </q-banner>
              </div>
            </div>
            <div class="tw-flex tw-flex-row tw-items-center">
              <span
                class="tw-py-3 tw-text-center tw-text-xs lg:tw-text-sm tw-font-medium tw-text-start tw-px-2 md:tw-px-3 lg:tw-px-4 tw-w-2/12 tw-text-zinc-800/0"
                ><span class="lg:tw-hidden">18 March 2024</span
                ><span class="tw-hidden lg:tw-block">18 March 2024</span></span
              >

              <div
                class="tw-truncate tw-py-3 tw-px-2 md:tw-px-3 lg:tw-px-4 tw-w-7/12"
              >
                <span
                  class="tw-truncate tw-text-xs lg:tw-text-sm tw-font-medium"
                  :class="
                    $q.dark.isActive ? 'tw-text-white' : 'tw-text-default-6'
                  "
                >
                  Laporan Kegiatan Penasihat Investasi
                </span>
              </div>
              <span
                class="tw-py-3 tw-text-center tw-text-xs lg:tw-text-sm tw-font-medium tw-px-2 md:tw-px-3 lg:tw-px-4 tw-w-2/12"
                :class="
                  $q.dark.isActive ? 'tw-text-white' : 'tw-text-default-6'
                "
                ><span class="lg:tw-hidden">10 April 2024</span
                ><span class="tw-hidden lg:tw-block">10 April 2024</span></span
              >
              <div
                class="tw-py-3 tw-px-1 lg:tw-px-5 tw-flex tw-justify-center tw-items-center"
              >
                <q-banner
                  inline-actions
                  rounded
                  dense
                  class="tw-p-1 lg:tw-p-2 tw-w-full lg:tw-w-40 tw-rounded-full tw-text-center tw-bg-default-2 text-status-review"
                  :class="
                    $q.dark.isActive
                      ? 'tw-bg-red-200/20 tw-text-red-400'
                      : 'tw-bg-red-200/20 tw-text-red-400'
                  "
                >
                  <span class="tw-text-[10px] lg:tw-text-sm">Need Review</span>
                </q-banner>
              </div>
            </div>
          </div>
          <div
            komenv-for="row in tableItems"
            komen:key="row.index"
            class="tw-mb-1 tw-rounded-xl tw-mx-2 md:tw-mx-3 lg:tw-mx-5"
            :class="$q.dark.isActive ? 'tw-bg-zinc-800' : 'tw-bg-white'"
          >
            <div class="tw-flex tw-flex-row tw-items-center">
              <span
                class="tw-py-3 tw-text-center tw-text-xs lg:tw-text-sm tw-font-medium tw-text-start tw-px-2 md:tw-px-3 lg:tw-px-4 tw-w-2/12"
                :class="
                  $q.dark.isActive ? 'tw-text-white' : 'tw-text-default-6'
                "
                ><span class="lg:tw-hidden">18 March 2024</span
                ><span class="tw-hidden lg:tw-block">18 March 2024</span></span
              >

              <div
                class="tw-truncate tw-py-3 tw-px-2 md:tw-px-3 lg:tw-px-4 tw-w-7/12"
              >
                <span
                  class="tw-truncate tw-text-xs lg:tw-text-sm tw-font-medium"
                  :class="
                    $q.dark.isActive ? 'tw-text-white' : 'tw-text-default-6'
                  "
                >
                  Pelaksanaan Hasil Evaluasi Komite Audit
                </span>
              </div>
              <span
                class="tw-py-3 tw-text-center tw-text-xs lg:tw-text-sm tw-font-medium tw-px-2 md:tw-px-3 lg:tw-px-4 tw-w-2/12"
                :class="
                  $q.dark.isActive ? 'tw-text-white' : 'tw-text-default-6'
                "
                ><span class="lg:tw-hidden">10 April 2024</span
                ><span class="tw-hidden lg:tw-block">10 April 2024</span></span
              >
              <div
                class="tw-py-3 tw-px-1 lg:tw-px-5 tw-flex tw-justify-center tw-items-center"
              >
                <q-banner
                  inline-actions
                  rounded
                  dense
                  class="tw-p-1 lg:tw-p-2 tw-w-full lg:tw-w-40 tw-rounded-full tw-text-center"
                  :class="
                    $q.dark.isActive
                      ? 'tw-bg-yellow-200/20 tw-text-main-yellow '
                      : 'tw-bg-yellow-200/20 text-status-open'
                  "
                >
                  <span class="tw-text-[10px] lg:tw-text-sm">Open</span>
                </q-banner>
              </div>
            </div>
            <div class="tw-flex tw-flex-row tw-items-center">
              <span
                class="tw-py-3 tw-text-center tw-text-xs lg:tw-text-sm tw-font-medium tw-text-start tw-px-2 md:tw-px-3 lg:tw-px-4 tw-w-2/12 tw-text-zinc-800/0"
                ><span class="lg:tw-hidden">18 March 2024</span
                ><span class="tw-hidden lg:tw-block">18 March 2024</span></span
              >

              <div
                class="tw-truncate tw-py-3 tw-px-2 md:tw-px-3 lg:tw-px-4 tw-w-7/12"
              >
                <span
                  class="tw-truncate tw-text-xs lg:tw-text-sm tw-font-medium"
                  :class="
                    $q.dark.isActive ? 'tw-text-white' : 'tw-text-default-6'
                  "
                >
                  Laporan Keuangan Tahunan Produk Reksa Dana
                </span>
              </div>
              <span
                class="tw-py-3 tw-text-center tw-text-xs lg:tw-text-sm tw-font-medium tw-px-2 md:tw-px-3 lg:tw-px-4 tw-w-2/12"
                :class="
                  $q.dark.isActive ? 'tw-text-white' : 'tw-text-default-6'
                "
                ><span class="lg:tw-hidden">10 April 2024</span
                ><span class="tw-hidden lg:tw-block">10 April 2024</span></span
              >
              <div
                class="tw-py-3 tw-px-1 lg:tw-px-5 tw-flex tw-justify-center tw-items-center"
              >
                <q-banner
                  inline-actions
                  rounded
                  dense
                  class="tw-p-1 lg:tw-p-2 tw-w-full lg:tw-w-40 tw-rounded-full tw-text-center tw-bg-default-2 text-status-completed"
                  :class="
                    $q.dark.isActive
                      ? 'tw-bg-green-200/20 tw-text-green-500'
                      : 'tw-bg-green-200/20 tw-text-green-500'
                  "
                >
                  <span class="tw-text-[10px] lg:tw-text-sm">Completed</span>
                </q-banner>
              </div>
            </div>
          </div>

          <div
            komenv-for="row in tableItems"
            komen:key="row.index"
            class="tw-mb-1 tw-rounded-xl tw-mx-2 md:tw-mx-3 lg:tw-mx-5"
            :class="$q.dark.isActive ? 'tw-bg-zinc-800' : 'tw-bg-white'"
          >
            <div class="tw-flex tw-flex-row tw-items-center">
              <span
                class="tw-py-3 tw-text-center tw-text-xs lg:tw-text-sm tw-font-medium tw-text-start tw-px-2 md:tw-px-3 lg:tw-px-4 tw-w-2/12"
                :class="
                  $q.dark.isActive ? 'tw-text-white' : 'tw-text-default-6'
                "
                ><span class="lg:tw-hidden">18 March 2024</span
                ><span class="tw-hidden lg:tw-block">18 March 2024</span></span
              >

              <div
                class="tw-truncate tw-py-3 tw-px-2 md:tw-px-3 lg:tw-px-4 tw-w-7/12"
              >
                <span
                  class="tw-truncate tw-text-xs lg:tw-text-sm tw-font-medium"
                  :class="
                    $q.dark.isActive ? 'tw-text-white' : 'tw-text-default-6'
                  "
                >
                  Pelaksanaan Hasil Evaluasi Komite Audit
                </span>
              </div>
              <span
                class="tw-py-3 tw-text-center tw-text-xs lg:tw-text-sm tw-font-medium tw-px-2 md:tw-px-3 lg:tw-px-4 tw-w-2/12"
                :class="
                  $q.dark.isActive ? 'tw-text-white' : 'tw-text-default-6'
                "
                ><span class="lg:tw-hidden">10 April 2024</span
                ><span class="tw-hidden lg:tw-block">10 April 2024</span></span
              >
              <div
                class="tw-py-3 tw-px-1 lg:tw-px-5 tw-flex tw-justify-center tw-items-center"
              >
                <q-banner
                  inline-actions
                  rounded
                  dense
                  class="tw-p-1 lg:tw-p-2 tw-w-full lg:tw-w-40 tw-rounded-full tw-text-center"
                  :class="
                    $q.dark.isActive
                      ? 'tw-bg-yellow-200/20 tw-text-main-yellow '
                      : 'tw-bg-yellow-200/20 text-status-open'
                  "
                >
                  <span class="tw-text-[10px] lg:tw-text-sm">Open</span>
                </q-banner>
              </div>
            </div>
          </div>

          <div
            komenv-for="row in tableItems"
            komen:key="row.index"
            class="tw-mb-1 tw-rounded-xl tw-mx-2 md:tw-mx-3 lg:tw-mx-5"
            :class="$q.dark.isActive ? 'tw-bg-zinc-800' : 'tw-bg-white'"
          >
            <div class="tw-flex tw-flex-row tw-items-center">
              <span
                class="tw-py-3 tw-text-center tw-text-xs lg:tw-text-sm tw-font-medium tw-text-start tw-px-2 md:tw-px-3 lg:tw-px-4 tw-w-2/12"
                :class="
                  $q.dark.isActive ? 'tw-text-white' : 'tw-text-default-6'
                "
                ><span class="lg:tw-hidden">18 March 2024</span
                ><span class="tw-hidden lg:tw-block">18 March 2024</span></span
              >

              <div
                class="tw-truncate tw-py-3 tw-px-2 md:tw-px-3 lg:tw-px-4 tw-w-7/12"
              >
                <span
                  class="tw-truncate tw-text-xs lg:tw-text-sm tw-font-medium"
                  :class="
                    $q.dark.isActive ? 'tw-text-white' : 'tw-text-default-6'
                  "
                >
                  Pelaksanaan Hasil Evaluasi Komite Audit
                </span>
              </div>
              <span
                class="tw-py-3 tw-text-center tw-text-xs lg:tw-text-sm tw-font-medium tw-px-2 md:tw-px-3 lg:tw-px-4 tw-w-2/12"
                :class="
                  $q.dark.isActive ? 'tw-text-white' : 'tw-text-default-6'
                "
                ><span class="lg:tw-hidden">10 April 2024</span
                ><span class="tw-hidden lg:tw-block">10 April 2024</span></span
              >
              <div
                class="tw-py-3 tw-px-1 lg:tw-px-5 tw-flex tw-justify-center tw-items-center"
              >
                <q-banner
                  inline-actions
                  rounded
                  dense
                  class="tw-p-1 lg:tw-p-2 tw-w-full lg:tw-w-40 tw-rounded-full tw-text-center"
                  :class="
                    $q.dark.isActive
                      ? 'tw-bg-yellow-200/20 tw-text-main-yellow '
                      : 'tw-bg-yellow-200/20 text-status-open'
                  "
                >
                  <span class="tw-text-[10px] lg:tw-text-sm">Open</span>
                </q-banner>
              </div>
            </div>
          </div>
          <!-- <div
            v-for="row in tableItems"
            :key="row.index"
            class="tw-mb-1 tw-bg-zinc-800 tw-rounded-xl tw-mx-2 md:tw-mx-3 lg:tw-mx-5">
            <div class="tw-flex tw-flex-row tw-items-center">
              <span
                class="tw-py-3 tw-text-center tw-text-xs lg:tw-text-sm tw-font-medium tw-text-start tw-px-2 md:tw-px-3 lg:tw-px-4 tw-w-2/12"
                ><span class="lg:tw-hidden">{{ row.tanggal }}</span
                ><span class="tw-hidden lg:tw-block">18 March 2024</span></span
              >

              <div
                class="tw-truncate tw-py-3 tw-px-2 md:tw-px-3 lg:tw-px-4 tw-w-7/12"
              >
                <span
                  class="tw-truncate tw-text-xs lg:tw-text-sm tw-font-medium"
                >
                  {{ row.title }}
                </span>
              </div>
              <span
                class="tw-py-3 tw-text-center tw-text-xs lg:tw-text-sm tw-font-medium tw-px-2 md:tw-px-3 lg:tw-px-4 tw-w-2/12"
                ><span class="lg:tw-hidden">10 April 2024</span
                ><span class="tw-hidden lg:tw-block">10 April 2024</span></span
              >
              <div
                class="tw-py-3 tw-px-1 lg:tw-px-5 tw-flex tw-justify-center tw-items-center"
              >
                <q-banner
                  inline-actions
                  rounded
                  dense
                  class="tw-p-1 lg:tw-p-2 tw-w-full lg:tw-w-40 tw-rounded-full tw-text-center"
                  :class="{
                    'tw-bg-default-2 tw-text-main-yellow':
                      row.status === 'Open',
                    'tw-bg-default-2 text-status-progress':
                      row.status === 'In Progress',
                    'tw-bg-default-2 text-status-review':
                      row.status === 'Need Review',
                    'tw-bg-default-2 text-status-sign': row.status === 'Sign',
                    'tw-bg-default-2 text-status-approval':
                      row.status === 'Upload And Approval',
                    'tw-bg-default-2 text-status-completed':
                      row.status === 'Completed',
                    'tw-bg-default-2 text-status-deadline':
                      row.status === 'Deadline',
                  }"
                >
                  <span class="tw-text-[10px] lg:tw-text-sm">{{
                    row.status
                  }}</span>
                </q-banner>
              </div>
            </div>
          </div> -->
        </q-infinite-scroll>
        <template v-slot:loading>
          <div class="row items-center justify-center q-my-md">
            <q-spinner-hourglass color="white" class="on-left" />
            <span class="text-white">Loading...</span>
          </div>
        </template>
        <!-- </q-infinite-scroll> -->
      </q-scroll-area>
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
