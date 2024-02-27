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
      <q-breadcrumbs-el
        label="Laporan Pihak Terafiliasi Manajer Investasi"
        class="text-default-3"
      />
    </q-breadcrumbs>

    <div
      class="tw-flex-1 tw-tracking-wide tw-text-sm tw-rounded-t-md tw-flex tw-flex-col tw-space-y-3 !tw-mt-0 lg:!tw-mt-3 tw-pt-2 md:tw-pt-3 lg:tw-pt-3"
      :class="
        $q.dark.isActive
          ? 'tw-bg-default-1 tw-text-white'
          : 'tw-bg-slate-50 tw-shadow-md tw-text-default-6'
      "
    >
      <q-scroll-area
        ref="qScrollAreaContainer"
        dark
        class="tw-flex-1 tw-grid tw-grid-cols-1 tw-gap-3 tw-px-2 md:tw-px-3 lg:tw-px-5 tw-tracking-wide tw-text-sm"
        :thumb-style="{
          borderRadius: '9999px',
          backgroundColor: '#50B748',
          opacity: 1,
        }"
      >
        <div class="tw-grid tw-grid-cols-1 tw-gap-3">
          <span>Laporan Pihak Terafiliasi Manajer Investasi</span>
          <span class="tw-py-2 tw-border-b tw-border-default-2">
            File Format Excel
          </span>
          <div
            class="tw-flex tw-flex-col tw-space-y-3 lg:tw-space-y-0 lg:tw-flex-row lg:tw-space-x-4 lg:tw-items-start"
          >
            <div class="tw-flex-1">
              <table
                class="tw-w-full tw-table-fixed tw-border-collapse tw-text-[10px] md:tw-text-xs"
              >
                <tr>
                  <td class="tw-pb-1 tw-w-1/2 md:tw-w-2/6">
                    <span>POJK/Referensi Laporan</span>
                  </td>
                  <td class="tw-pb-1 tw-w-1/2 md:tw-w-4/6">
                    <span>: Surat OJK S-317/PM.21/2020</span>
                  </td>
                </tr>
                <tr>
                  <td class="tw-pb-1 tw-w-1/2 md:tw-w-2/6">
                    <span>Deadline</span>
                  </td>
                  <td class="tw-pb-1 tw-w-1/2 md:tw-w-4/6">
                    <span>: 12 Januari dan 12 Juli</span>
                  </td>
                </tr>
                <tr>
                  <td class="tw-pb-1 tw-w-1/2 md:tw-w-2/6">
                    <span>Semester</span>
                  </td>
                  <td class="tw-pb-1 tw-w-1/2 md:tw-w-4/6">
                    <span>: 1</span>
                  </td>
                </tr>
              </table>
            </div>
            <div
              class="tw-flex-none tw-flex tw-items-center tw-space-x-2 tw-self-center lg:tw-self-auto"
            >
              <q-btn
                flat
                :color="$q.dark.isActive ? 'white' : 'dark-green-2'"
                label="Submit"
                no-caps
                class="tw-text-xs tw-py-2 tw-px-7 tw-rounded-md"
                :class="
                  $q.dark.isActive
                    ? 'tw-bg-main-green tw-border-main-green'
                    : 'tw-bg-default-7'
                "
              />
              <q-btn
                flat
                :color="$q.dark.isActive ? 'white' : ''"
                label="Edit Document"
                no-caps
                class="tw-text-xs tw-py-2 tw-px-7 tw-rounded-md custom-css-border-gold"
                :class="$q.dark.isActive ? 'tw-bg-zinc-800/0 ' : ''"
              />
            </div>
          </div>
          <div class="tw-flex tw-items-center tw-space-x-5">
            <div class="tw-flex-1 tw-truncate">
              <span class="tw-font-medium tw-text-xs lg:tw-text-sm tw-truncate"
                >Dokumen</span
              >
            </div>
            <div class="tw-flex-none">
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
            <div class="tw-flex-none">
              <q-btn
                round
                flat
                :color="$q.dark.isActive ? 'white' : 'black'"
                size="md"
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
