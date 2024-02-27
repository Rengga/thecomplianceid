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
        :to="{ name: 'laporan-khusus' }"
        exact
        class="text-default-3"
      />
      <q-breadcrumbs-el
        label="Pelaporan Khusus"
        :to="{ name: 'laporan-khusus' }"
        exact
        class="text-default-3"
      />
      <q-breadcrumbs-el
        label="Lembar Bagan Struktur Kepemilikan"
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
            ? 'tw-bg-default-1 tw-text-white '
            : 'tw-bg-slate-50 tw-text-default-6 tw-shadow-md '
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
              dense
              indicator-color="transparent"
              :class="
                $q.dark.isActive ? 'tw-text-zinc-500' : 'tw-text-green-800/50'
              "
              :active-class="
                $q.dark.isActive
                  ? 'tw-bg-default-3 tw-rounded-md tw-text-default-6'
                  : 'tw-bg-zinc-100/0 tw-rounded-md tw-text-default-6'
              "
            >
              <q-route-tab
                name="Laporan"
                label="Laporan"
                :to="{
                  name: 'laporan-detail',
                  params: { slug: document },
                  query: { ext: ext },
                }"
                exact
              ></q-route-tab>
              <q-tab name="Data Source" label="Data Source"></q-tab>
              <q-tab name="Data Awal" label="Data Awal"></q-tab>
              <q-route-tab
                name="Flow builder"
                label="Flow builder"
                :to="{
                  name: 'laporan-detail-flow-builder',
                  params: { slug: document },
                }"
                exact
              ></q-route-tab>
              <q-tab name="Document Receipt" label="Document Receipt"></q-tab>
            </q-tabs>
          </div>
        </div>

        <div class="tw-flex-1 tw-grid tw-grid-cols-1 tw-gap-2 lg:tw-gap-5">
          <div class="tw-flex tw-flex-col tw-space-y-3">
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
              <div class="tw-grid tw-grid-cols-1 tw-gap-3">
                <div class="tw-grid tw-grid-cols-1 tw-gap-3">
                  <div
                    class="tw-flex tw-justify-between tw-border-b tw-border-default-2"
                  >
                    <span class="tw-py-2">
                      Lembar Bagan Struktur Kepemilikan
                    </span>
                    <div class="tw-flex-none">
                      <q-btn
                        round
                        flat
                        color="white"
                        size="md"
                        @click="toggleFullscreen()"
                        :icon="
                          $q.fullscreen.isActive
                            ? 'fullscreen_exit'
                            : 'fullscreen'
                        "
                      />
                    </div>
                  </div>
                  <q-no-ssr>
                    <div ref="documentContainer" class="tw-grid tw-grid-cols-1">
                      <!-- QExcelViewer -->
                      <q-excel-viewer
                        v-if="ext === 'XLSX'"
                        path="/assets/files/dummy-xlsx.xlsx"
                      />
                      <!-- QTextViewer -->
                      <q-text-viewer
                        v-else-if="ext === 'TXT'"
                        path="/assets/files/dummy-txt.txt"
                      />
                      <!-- QDocumentViewer -->
                      <q-document-viewer
                        v-else-if="ext === 'DOCX'"
                        path="/assets/files/dummy-pdf.pdf"
                      />
                      <!-- QDocumentViewer -->
                      <q-document-viewer
                        v-else
                        path="/assets/files/dummy-pdf.pdf"
                      />
                    </div>
                  </q-no-ssr>
                </div>
                <div
                  class="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-2 lg:tw-gap-10"
                >
                  <div class="tw-grid tw-grid-cols-1 tw-gap-2">
                    <span class="tw-font-medium tw-text-sm">Latest Flow</span>
                    <div
                      class="tw-grid tw-grid-cols-1 tw-gap-1"
                      :class="
                        $q.dark.isActive
                          ? 'tw-text-main-neutral'
                          : 'tw-text-default-6'
                      "
                    >
                      <div class="tw-py-2 tw-px-5 tw-flex tw-items-center">
                        <div class="tw-flex-none">
                          <span class="tw-text-sm">01 Januari 2024</span>
                        </div>
                        <div class="tw-flex-1">
                          <span class="tw-text-sm">- Tanda Tangan</span>
                        </div>
                        <div class="tw-flex-none">
                          <div
                            class="tw-px-2 tw-py-1 tw-rounded-md tw-border"
                            :class="
                              $q.dark.isActive
                                ? 'tw-border-neutral-400 tw-text-main-neutral'
                                : 'tw-text-default-6 tw-border-default-6'
                            "
                          >
                            <span class="tw-text-xs">Open</span>
                          </div>
                        </div>
                      </div>
                      <div class="tw-py-2 tw-px-5 tw-flex tw-items-center">
                        <div class="tw-flex-none">
                          <span class="tw-text-sm">11 Desember 2023</span>
                        </div>
                        <div class="tw-flex-1">
                          <span class="tw-text-sm">- Pengisian Data</span>
                        </div>
                        <div class="tw-flex-none">
                          <div
                            class="tw-px-2 tw-py-1 tw-rounded-md tw-border"
                            :class="
                              $q.dark.isActive
                                ? 'tw-border-neutral-400 tw-text-main-neutral'
                                : 'tw-text-default-6 tw-border-default-6'
                            "
                          >
                            <span class="tw-text-xs">Open</span>
                          </div>
                        </div>
                      </div>
                      <div class="tw-py-2 tw-px-5 tw-flex tw-items-center">
                        <div class="tw-flex-none">
                          <span class="tw-text-sm">15 Oktober 2023</span>
                        </div>
                        <div class="tw-flex-1">
                          <span class="tw-text-sm">- Pengisian Data</span>
                        </div>
                        <div class="tw-flex-none">
                          <div
                            class="tw-px-2 tw-py-1 tw-rounded-md tw-border"
                            :class="
                              $q.dark.isActive
                                ? 'tw-border-neutral-400 tw-text-main-neutral'
                                : 'tw-text-default-6 tw-border-default-6'
                            "
                          >
                            <span class="tw-text-xs">Open</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tw-grid tw-grid-cols-1 tw-gap-2">
                    <span class="tw-font-medium tw-text-sm">Version</span>
                    <div
                      class="tw-grid tw-grid-cols-1 tw-gap-1"
                      :class="
                        $q.dark.isActive
                          ? 'tw-text-main-neutral'
                          : 'tw-text-default-6'
                      "
                    >
                      <div
                        class="tw-py-2 tw-px-5 tw-flex tw-items-center tw-space-x-5"
                      >
                        <div class="tw-flex-none">
                          <span class="tw-text-sm">1.0.3</span>
                        </div>
                        <div class="tw-flex-none">
                          <span class="tw-text-sm">15 Oktober 2023</span>
                        </div>
                        <div class="tw-flex-none">
                          <span class="tw-text-xs tw-italic tw-font-light"
                            >edited by</span
                          >
                        </div>
                        <div class="tw-flex-1">
                          <span class="tw-text-sm">Nama</span>
                        </div>
                      </div>
                      <div
                        class="tw-py-2 tw-px-5 tw-flex tw-items-center tw-space-x-5"
                      >
                        <div class="tw-flex-none">
                          <span class="tw-text-sm">1.0.2</span>
                        </div>
                        <div class="tw-flex-none">
                          <span class="tw-text-sm">12 Oktober 2023</span>
                        </div>
                        <div class="tw-flex-none">
                          <span class="tw-text-xs tw-italic tw-font-light"
                            >edited by</span
                          >
                        </div>
                        <div class="tw-flex-1">
                          <span class="tw-text-sm">Nama</span>
                        </div>
                      </div>
                      <div
                        class="tw-py-2 tw-px-5 tw-flex tw-items-center tw-space-x-5"
                      >
                        <div class="tw-flex-none">
                          <span class="tw-text-sm">1.0.1</span>
                        </div>
                        <div class="tw-flex-none">
                          <span class="tw-text-sm">11 Oktober 2023</span>
                        </div>
                        <div class="tw-flex-none">
                          <span class="tw-text-xs tw-italic tw-font-light"
                            >edited by</span
                          >
                        </div>
                        <div class="tw-flex-1">
                          <span class="tw-text-sm">Nama</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tw-grid tw-grid-cols-1 tw-gap-5">
                  <div class="tw-grid tw-grid-cols-1 tw-gap-5">
                    <span class="tw-font-medium tw-text-sm"
                      >Peraturan Terkait</span
                    >
                    <div
                      class="tw-grid tw-grid-cols-1 lg:tw-grid-cols-3 tw-gap-2 lg:tw-gap-5"
                    >
                      <div
                        class="tw-p-2 tw-rounded-md"
                        :class="
                          $q.dark.isActive ? 'tw-bg-default-2' : 'tw-bg-white'
                        "
                      >
                        <q-item>
                          <q-item-section side>
                            <q-avatar size="md" rounded>
                              <q-img
                                src="/assets/images/files/excel.png"
                                :ratio="1"
                                fit="contain"
                              />
                            </q-avatar>
                          </q-item-section>
                          <q-item-section>
                            <q-item-label
                              ><div class="tw-grid tw-grid-cols-1 tw-truncate">
                                <span class="tw-truncate">
                                  Surat OJK S-317/PM.21/2020
                                </span>
                              </div></q-item-label
                            >
                          </q-item-section>
                        </q-item>
                      </div>
                      <div
                        class="tw-p-2 tw-rounded-md"
                        :class="
                          $q.dark.isActive ? 'tw-bg-default-2' : 'tw-bg-white'
                        "
                      >
                        <q-item>
                          <q-item-section side>
                            <q-avatar size="md" rounded>
                              <q-img
                                src="/assets/images/files/word.png"
                                :ratio="1"
                                fit="contain"
                              />
                            </q-avatar>
                          </q-item-section>
                          <q-item-section>
                            <q-item-label
                              ><div class="tw-grid tw-grid-cols-1 tw-truncate">
                                <span class="tw-truncate">
                                  Peraturan Nomor X.N.1 tahun 2012
                                </span>
                              </div></q-item-label
                            >
                          </q-item-section>
                        </q-item>
                      </div>
                      <div
                        class="tw-p-2 tw-rounded-md"
                        :class="
                          $q.dark.isActive ? 'tw-bg-default-2' : 'tw-bg-white'
                        "
                      >
                        <q-item>
                          <q-item-section side>
                            <q-avatar size="md" rounded>
                              <q-img
                                src="/assets/images/files/pdf.png"
                                :ratio="1"
                                fit="contain"
                              />
                            </q-avatar>
                          </q-item-section>
                          <q-item-section>
                            <q-item-label
                              ><div class="tw-grid tw-grid-cols-1 tw-truncate">
                                <span class="tw-truncate">
                                  POJK 65 /POJK.04/2017
                                </span>
                              </div></q-item-label
                            >
                          </q-item-section>
                        </q-item>
                      </div>
                    </div>
                  </div>
                  <div class="tw-grid tw-grid-cols-1 tw-gap-5">
                    <span class="tw-font-medium tw-text-sm"
                      >Laporan Terkait</span
                    >
                    <div class="tw-grid tw-grid-cols-1 tw-gap-2">
                      <div
                        class="tw-p-2 tw-rounded-md"
                        :class="
                          $q.dark.isActive ? 'tw-bg-default-2' : 'tw-bg-white'
                        "
                      >
                        <q-item>
                          <q-item-section side>
                            <q-avatar size="md" rounded>
                              <q-img
                                :src="
                                  $q.dark.isActive
                                    ? '/assets/images/files/laporan-terkait-file-dark.svg'
                                    : '/assets/images/files/laporan-terkait-file-light.svg'
                                "
                                :ratio="1"
                                fit="contain"
                              />
                            </q-avatar>
                          </q-item-section>
                          <q-item-section>
                            <q-item-label
                              ><div class="tw-grid tw-grid-cols-1 tw-truncate">
                                <span class="tw-truncate">
                                  File Format Excel
                                </span>
                              </div></q-item-label
                            >
                          </q-item-section>
                        </q-item>
                      </div>
                      <div
                        class="tw-p-2 tw-rounded-md"
                        :class="
                          $q.dark.isActive ? 'tw-bg-default-2' : 'tw-bg-white'
                        "
                      >
                        <q-item>
                          <q-item-section side>
                            <q-avatar size="md" rounded>
                              <q-img
                                :src="
                                  $q.dark.isActive
                                    ? '/assets/images/files/laporan-terkait-file-dark.svg'
                                    : '/assets/images/files/laporan-terkait-file-light.svg'
                                "
                                :ratio="1"
                                fit="contain"
                              />
                            </q-avatar>
                          </q-item-section>
                          <q-item-section>
                            <q-item-label
                              ><div class="tw-grid tw-grid-cols-1 tw-truncate">
                                <span class="tw-truncate">
                                  File Pengantar/ttd Direksi atas Laporan yang
                                  disampaikan
                                </span>
                              </div></q-item-label
                            >
                          </q-item-section>
                        </q-item>
                      </div>
                      <div
                        class="tw-p-2 tw-rounded-md"
                        :class="
                          $q.dark.isActive ? 'tw-bg-default-2' : 'tw-bg-white'
                        "
                      >
                        <q-item>
                          <q-item-section side>
                            <q-avatar size="md" rounded>
                              <q-img
                                :src="
                                  $q.dark.isActive
                                    ? '/assets/images/files/laporan-terkait-file-dark.svg'
                                    : '/assets/images/files/laporan-terkait-file-light.svg'
                                "
                                :ratio="1"
                                fit="contain"
                              />
                            </q-avatar>
                          </q-item-section>
                          <q-item-section>
                            <q-item-label
                              ><div class="tw-grid tw-grid-cols-1 tw-truncate">
                                <span class="tw-truncate">
                                  Lembar Bagan Struktur Kepemilikan Sampai
                                  dengan Ultimate Beneficial Owner
                                </span>
                              </div></q-item-label
                            >
                          </q-item-section>
                        </q-item>
                      </div>
                      <div
                        class="tw-p-2 tw-rounded-md"
                        :class="
                          $q.dark.isActive ? 'tw-bg-default-2' : 'tw-bg-white'
                        "
                      >
                        <q-item>
                          <q-item-section side>
                            <q-avatar size="md" rounded>
                              <q-img
                                :src="
                                  $q.dark.isActive
                                    ? '/assets/images/files/laporan-terkait-file-dark.svg'
                                    : '/assets/images/files/laporan-terkait-file-light.svg'
                                "
                                :ratio="1"
                                fit="contain"
                              />
                            </q-avatar>
                          </q-item-section>
                          <q-item-section>
                            <q-item-label
                              ><div class="tw-grid tw-grid-cols-1 tw-truncate">
                                <span class="tw-truncate">
                                  Peraturan Nomor : X.N.1 tentang Laporan
                                  Kegiatan Bulanan Manajer Investasi
                                </span>
                              </div></q-item-label
                            >
                          </q-item-section>
                        </q-item>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tw-grid tw-grid-cols-1 tw-gap-3">
                  <span class="tw-font-medium tw-text-sm">Catatan</span>
                  <q-input
                    dark
                    outlined
                    type="textarea"
                    :color="
                      $q.dark.isActive
                        ? 'default-3 tw-border-2 tw-border-zinc-500 tw-bg-zinc-900  tw-rounded-md'
                        : 'default-3 tw-border-2 tw-border-default-7 tw-rounded-md'
                    "
                    hide-bottom-space
                    class="tw-rounded-md"
                  />
                </div>
                <div class="tw-grid tw-grid-cols-1 tw-gap-3 tw-place-items-end">
                  <q-btn
                    outline
                    label="Submit"
                    color="default-3"
                    text-color="white"
                    class="tw-py-3 tw-px-7 tw-rounded-md tw-tracking-wide"
                    no-caps
                  />
                </div>
              </div>
            </q-scroll-area>
          </div>
        </div>
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
import { useQuasar } from "quasar";
import { ref, defineAsyncComponent } from "vue";
const QDocumentViewer = defineAsyncComponent(() =>
  import("src/components/QDocumentViewer.vue")
);
const QExcelViewer = defineAsyncComponent(() =>
  import("src/components/QExcelViewer.vue")
);
const QTextViewer = defineAsyncComponent(() =>
  import("src/components/QTextViewer.vue")
);

defineProps({
  document: {
    type: String,
    required: true,
  },
  ext: {
    type: String,
    default: () => "TXT",
  },
});

const $q = useQuasar();

const currentMenu = ref("Laporan");
const documentContainer = ref(null);

const calendarDate = ref("2023/12/01");

function eventsFn(date) {
  if (
    date === "2023/12/01" ||
    date === "2023/12/05" ||
    date === "2023/12/06" ||
    date === "2023/12/09" ||
    date === "2023/12/23"
  ) {
    return true;
  }
  return false;
}

function toggleFullscreen(e) {
  const target = documentContainer.value;

  $q.fullscreen
    .toggle(target)
    .then(() => {
      // success!
    })
    .catch((err) => {
      alert(err);
      // uh, oh, error!!
      // console.error(err)
    });
}
</script>
