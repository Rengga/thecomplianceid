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
        :to="{
          name: 'perpustakaan-guides-list',
          params: { slug: 'panduan-#0000000001' },
        }"
        exact
        class="text-default-3"
      />
      <q-breadcrumbs-el
        label="Panduan Pengisian Laporan Keuangan (Manajer Investasi dan Reksa Dana)"
        class="text-default-3"
      />
    </q-breadcrumbs>

    <div
      class="tw-flex-none tw-m-2 lg:tw-m-0 lg:tw-mt-3 tw-bg-default-1 tw-text-white tw-tracking-wide tw-text-sm tw-rounded-md tw-py-2 md:tw-py-3 lg:tw-py-3 tw-px-2 md:tw-px-3 lg:tw-px-5 tw-flex tw-items-center tw-space-x-3 tw-justify-center lg:tw-justify-normal"
    >
      <q-btn
        text-color="default-3"
        no-caps
        class="tw-text-xs tw-py-2 lg:tw-px-5 tw-tracking-wide tw-rounded-md tw-bg-default-2/20"
        :to="{ name: 'perpustakaan-rules' }"
        exact
      >
        <div class="tw-flex tw-flex-row tw-space-x-2 tw-items-center">
          <div
            class="tw-w-[6px] tw-h-[6px] tw-rounded-full tw-bg-default-3"
          ></div>
          <span class="tw-text-default-3">Peraturan</span>
        </div>
      </q-btn>
      <q-btn
        color="default-3"
        text-color="white"
        no-caps
        class="tw-text-xs tw-py-2 lg:tw-px-5 tw-tracking-wide tw-rounded-md"
        :to="{ name: 'perpustakaan-guides' }"
        exact
      >
        <div class="tw-flex tw-flex-row tw-space-x-2 tw-items-center">
          <div
            class="tw-w-[6px] tw-h-[6px] tw-rounded-full tw-bg-main-green"
          ></div>
          <span>Panduan</span>
        </div>
      </q-btn>
    </div>

    <div
      class="tw-flex-1 tw-bg-default-1 tw-text-white tw-tracking-wide tw-text-sm tw-rounded-t-md tw-flex tw-flex-col tw-space-y-3 !tw-mt-0 lg:!tw-mt-3 tw-pt-2 md:tw-pt-3 lg:tw-pt-3"
    >
      <q-scroll-area
        ref="qScrollAreaContainer"
        dark
        class="tw-flex-1 tw-grid tw-grid-cols-1 tw-gap-3 tw-px-2 md:tw-px-3 lg:tw-px-5 tw-tracking-wide tw-text-sm tw-text-white"
        :thumb-style="{
          borderRadius: '9999px',
          backgroundColor: '#50B748',
          opacity: 1,
        }"
      >
        <div class="tw-grid tw-grid-cols-1 tw-gap-3">
          <span
            >Panduan Pengisian Laporan Keuangan (Manajer Investasi dan Reksa
            Dana)</span
          >
          <div class="tw-flex tw-items-center tw-space-x-5">
            <div class="tw-flex-1 tw-truncate">
              <span class="tw-font-medium tw-text-xs lg:tw-text-sm tw-truncate"
                >Dokumen</span
              >
            </div>
            <div class="tw-flex-none">
              <q-input
                dark
                hide-bottom-space
                dense
                outlined
                color="main-green"
                type="search"
                placeholder="Search"
                input-class="tw-py-2 tw-text-xs"
              >
                <template v-slot:append>
                  <q-icon name="search" />
                </template>
              </q-input>
            </div>
            <div class="tw-flex-none">
              <q-btn
                round
                flat
                color="white"
                size="sm"
                @click="toggleFullscreen()"
                :icon="
                  $q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'
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
              <q-document-viewer v-else path="/assets/files/dummy-pdf.pdf" />
            </div>
          </q-no-ssr>
        </div>
      </q-scroll-area>
    </div>
  </q-page>
</template>

<script setup>
import { ref, defineAsyncComponent } from "vue";
import { useQuasar } from "quasar";
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
  ext: {
    type: String,
    default: () => "TXT",
  },
});

const $q = useQuasar();
const documentContainer = ref(null);

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
