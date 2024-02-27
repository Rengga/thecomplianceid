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
        label="Laporan"
        :to="{ name: 'laporan-khusus' }"
        exact
        class="text-default-3"
      />
      <q-breadcrumbs-el
        label="Pelaporan"
        :to="{ name: 'laporan-khusus' }"
        exact
        class="text-default-3"
      />
      <q-breadcrumbs-el label="File Laporan #00001" class="text-default-3" />
      <q-breadcrumbs-el label="Flow Builder" class="text-default-3" />
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
        :to="{ name: 'laporan-khusus' }"
        exact
        flat
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
            >Pelaporan</span
          >
        </div>
      </q-btn>
      <q-btn
        no-caps
        align="left"
        class="tw-text-xs tw-py-2 lg:tw-px-5 tw-tracking-wide tw-rounded-md tw-w-40"
        :to="{ name: 'laporan-pantau-tugas' }"
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
            >Pantau Tugas</span
          >
        </div>
      </q-btn>
    </div>

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
                name: 'tugas-saya-detail',
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
      <div
        class="tw-w-full tw-flex tw-flex-row tw-justify-center tw-p-10 tw-gap-20"
      >
        <div
          class="card tw-h-fit tw-px-6 tw-py-8 tw-w-[340px] tw-rounded-xl ff-worksans"
          :class="
            $q.dark.isActive ? 'tw-bg-zinc-800' : 'tw-bg-white tw-shadow-md '
          "
        >
          <div class="tw-flex items-center tw-flex-row tw-gap-3 tw-mb-6">
            <div
              class="tw-min-w-12 tw-h-12 tw-rounded-md"
              :class="$q.dark.isActive ? 'tw-bg-gray-500' : 'tw-bg-default-7'"
            ></div>
            <div
              class="txt tw-text-xl tw-w-full"
              :class="$q.dark.isActive ? '' : 'tw-text-default-6'"
            >
              Lorem ipsum
            </div>
            <q-btn
              flat
              round
              :color="$q.dark.isActive ? 'white' : 'dark-green-2'"
              icon="fas fa-ellipsis-vertical"
              size="md"
              @click.stop=""
            />
          </div>
          <div
            class="tw-mb-12"
            :class="$q.dark.isActive ? '' : 'tw-text-default-6'"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </div>
          <div class="tw-flex tw-flex-col tw-w-full tw-items-center">
            <div
              class="tw-mb-3"
              :class="$q.dark.isActive ? '' : 'tw-text-default-6'"
            >
              Lorem ipsum dolor sit amet.
            </div>
            <hr
              class="tw-w-10/12 tw-mb-3"
              :class="$q.dark.isActive ? '' : 'tw-border-default-7'"
            />
            <div
              class="tw-mb-3"
              :class="$q.dark.isActive ? '' : 'tw-text-default-6'"
            >
              Lorem ipsum dolor sit amet.
            </div>
            <hr
              class="tw-w-10/12 tw-mb-3"
              :class="$q.dark.isActive ? '' : 'tw-border-default-7'"
            />
            <span class="tw-text-sky-800">+ Add block</span>
          </div>
        </div>

        <div class="tw-flex tw-flex-col tw-gap-12">
          <div
            class="card tw-h-fit tw-px-6 tw-py-8 tw-w-[340px] tw-rounded-xl ff-worksans"
            :class="
              $q.dark.isActive ? 'tw-bg-zinc-800' : 'tw-bg-white tw-shadow-md '
            "
          >
            <div class="tw-flex items-center tw-flex-row tw-gap-3 tw-mb-6">
              <div
                class="tw-min-w-12 tw-h-12 tw-rounded-md"
                :class="$q.dark.isActive ? 'tw-bg-gray-500' : 'tw-bg-default-7'"
              ></div>
              <div
                class="txt tw-text-xl tw-w-full"
                :class="$q.dark.isActive ? '' : 'tw-text-default-6'"
              >
                Lorem ipsum
              </div>
              <q-btn
                flat
                round
                :color="$q.dark.isActive ? 'white' : 'dark-green-2'"
                icon="fas fa-ellipsis-vertical"
                size="md"
                @click.stop=""
              />
            </div>
            <div
              class="tw-mb-12"
              :class="$q.dark.isActive ? '' : 'tw-text-default-6'"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ea
              corrupti aut quis. Magni amet voluptate laboriosam corporis
              aliquam eius!
            </div>
            <div class="tw-flex tw-flex-col tw-w-full tw-items-center">
              <div
                class="tw-mb-3"
                :class="$q.dark.isActive ? '' : 'tw-text-default-6'"
              >
                Lorem ipsum dolor sit amet.
              </div>
              <hr
                class="tw-w-10/12 tw-mb-3"
                :class="$q.dark.isActive ? '' : 'tw-border-default-7'"
              />
              <div
                class="tw-mb-3"
                :class="$q.dark.isActive ? '' : 'tw-text-default-6'"
              >
                Lorem ipsum dolor sit amet.
              </div>
              <hr
                class="tw-w-10/12 tw-mb-3"
                :class="$q.dark.isActive ? '' : 'tw-border-default-7'"
              />

              <div
                class="tw-mb-3"
                :class="$q.dark.isActive ? '' : 'tw-text-default-6'"
              >
                Lorem ipsum dolor sit amet.
              </div>
              <hr
                class="tw-w-10/12 tw-mb-3"
                :class="$q.dark.isActive ? '' : 'tw-border-default-7'"
              />
              <span class="tw-text-sky-800">+ Add block</span>
            </div>
          </div>

          <div
            class="card tw-h-fit tw-px-6 tw-py-8 tw-w-[340px] tw-rounded-xl ff-worksans"
            :class="
              $q.dark.isActive ? 'tw-bg-zinc-800' : 'tw-bg-white tw-shadow-md '
            "
          >
            <div class="tw-flex items-center tw-flex-row tw-gap-3 tw-mb-6">
              <div
                class="tw-min-w-12 tw-h-12 tw-rounded-md"
                :class="$q.dark.isActive ? 'tw-bg-gray-500' : 'tw-bg-default-7'"
              ></div>
              <div
                class="txt tw-text-xl tw-w-full"
                :class="$q.dark.isActive ? '' : 'tw-text-default-6'"
              >
                Lorem ipsum
              </div>
              <q-btn
                flat
                round
                :color="$q.dark.isActive ? 'white' : 'dark-green-2'"
                icon="fas fa-ellipsis-vertical"
                size="md"
                @click.stop=""
              />
            </div>
            <div
              class="tw-mb-12"
              :class="$q.dark.isActive ? '' : 'tw-text-default-6'"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ea
              corrupti aut quis. Magni amet voluptate laboriosam corporis
              aliquam eius!
            </div>
            <div class="tw-flex tw-flex-col tw-w-full tw-items-center">
              <div
                class="tw-mb-3"
                :class="$q.dark.isActive ? '' : 'tw-text-default-6'"
              >
                Lorem ipsum dolor sit amet.
              </div>
              <hr
                class="tw-w-10/12 tw-mb-3"
                :class="$q.dark.isActive ? '' : 'tw-border-default-7'"
              />

              <span class="tw-text-sky-800">+ Add block</span>
            </div>
          </div>
        </div>

        <div
          class="card tw-h-fit tw-px-6 tw-py-8 tw-w-[340px] tw-rounded-xl ff-worksans"
          :class="
            $q.dark.isActive ? 'tw-bg-zinc-800' : 'tw-bg-white tw-shadow-md '
          "
        >
          <div class="tw-flex items-center tw-flex-row tw-gap-3 tw-mb-6">
            <div
              class="txt tw-text-xl tw-w-full"
              :class="$q.dark.isActive ? '' : 'tw-text-default-6'"
            >
              Lorem ipsum
            </div>
            <q-btn
              flat
              round
              class="tw-rounded-full tw-pt-1"
              :class="$q.dark.isActive ? 'tw-bg-zinc-700' : 'tw-bg-default-7'"
              :color="$q.dark.isActive ? 'black' : 'dark-green-2'"
              icon="fas fa-close"
              size="sm"
              @click.stop=""
            />
          </div>
          <div
            class="tw-mb-6 tw-w-full tw-rounded-xl tw-bg-gray-300 tw-p-4 tw-flex justify-end"
            :class="$q.dark.isActive ? '' : ''"
          >
            <img src="/assets/images/profil.png" alt="" />
          </div>
          <div
            class="tw-flex tw-mb-6 tw-w-full tw-justify-center tw-py-5 tw-rounded-xl"
            :class="
              $q.dark.isActive
                ? 'tw-bg-zinc-700 tw-text-white'
                : 'tw-bg-default-6 tw-text-default-7'
            "
          >
            Change Setting
          </div>
          <div
            class="tw-mb-2"
            :class="$q.dark.isActive ? ' tw-text-white' : 't tw-text-default-6'"
          >
            Lorem Ipsum
          </div>
          <div
            class="tw-flex tw-w-full tw-px-3 tw-py-4 tw-rounded-xl tw-mb-6"
            :class="
              $q.dark.isActive
                ? ' tw-text-main-gold'
                : 'tw-bg-white tw-text-default-6 tw-border tw-border-default-7'
            "
          >
            Lorem Ipsum
          </div>

          <div
            class="tw-flex tw-w-full tw-px-2 tw-py-3 tw-justify-center tw-rounded-xl tw-mb-6"
            :class="
              $q.dark.isActive
                ? 'tw-bg-default-7 tw-text-default-6'
                : 'tw-bg-default-6 tw-text-default-7'
            "
          >
            Save
          </div>
        </div>
      </div>
    </q-scroll-area>
  </q-page>
</template>

<script setup>
import { ref } from "vue";

defineProps({
  document: {
    type: String,
    required: true,
  },
});

const currentMenu = ref("Flow builder");
const qScrollAreaContainer = ref(null);
</script>
