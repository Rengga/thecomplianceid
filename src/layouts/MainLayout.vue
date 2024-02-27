<template>
  <q-layout
    view="lHh lpR lFf"
    class="tw-bg-default-black"
    :class="$q.dark.isActive ? 'tw-bg-default-black' : 'tw-bg-slate-50'"
  >
    <q-header class="tw-bg-transparent">
      <q-toolbar>
        <q-toolbar-title>
          <router-link to="/">
            <img
              alt="compliance.id"
              src="/assets/images/logos/logo-small.svg"
            />
          </router-link>
        </q-toolbar-title>

        <q-btn :ripple="false" flat no-caps>
          <div class="tw flex tw-space-x-3 tw-items-center">
            <q-avatar size="sm">
              <img src="/assets/images/icons/profile-circle.svg" />
            </q-avatar>
            <span
              class="tw-text-xs tw-font-medium"
              :class="$q.dark.isActive ? 'tw-text-white ' : 'tw-text-default-6'"
              >Admin</span
            >
          </div>
          <q-menu transition-show="jump-down" transition-hide="jump-up">
            <q-list>
              <q-separator />
              <q-item clickable v-ripple @click="clickPromptLogout()">
                <q-item-section avatar>
                  <q-icon
                    class="tw-text-red-500"
                    name="fas fa-power-off"
                    size="xs"
                  />
                </q-item-section>

                <q-item-section>
                  <span class="tw-font-medium tw-text-xs"> Logout </span>
                </q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="layoutDrawer"
      show-if-above
      :mini="!layoutDrawer || miniState"
      :width="230"
      class="tw-border-r-4 tw-border-default-1/50 tw-text-default-6 ff-worksans tw-overflow-x-hidden"
      :class="
        $q.dark.isActive
          ? 'tw-bg-custom-101010 tw-border-default-1'
          : 'tw-bg-slate-50 tw-border-default-1/20'
      "
    >
      <div
        class="full-height tw-flex tw-flex-col justify-between tw-py-5 tw-pl-2"
      >
        <div class="tw-flex tw-flex-col tw-space-y-10">
          <q-list>
            <router-link
              :to="{ name: 'dashboard' }"
              class="tw-font-bold tw-px-3 tw-flex tw-items-center tw-space-x-5"
              :class="
                $q.dark.isActive ? 'tw-text-main-green' : 'tw-text-default-6'
              "
            >
              <div class="tw-flex-none">
                <q-avatar size="sm">
                  <img
                    alt="compliance.id"
                    src="/assets/images/logos/logo-small.svg"
                  />
                </q-avatar>
              </div>
              <div class="tw-flex-1">
                <span class="tw-tracking-wide tw-font-medium tw-text-base"
                  >Compliance</span
                >
              </div>
            </router-link>
          </q-list>
          <q-list>
            <q-item
              v-ripple
              :to="{ name: 'dashboard' }"
              exact
              class="hover:tw-rounded-l-full"
              :active-class="
                $q.dark.isActive
                  ? 'tw-text-main-green tw-bg-zinc-800 tw-rounded-l-full tw-font-bold'
                  : 'tw-text-white tw-bg-default-6 tw-rounded-l-full tw-font-bold'
              "
            >
              <q-item-section avatar>
                <q-avatar size="sm">
                  <img
                    v-if="$route.name === 'dashboard'"
                    src="/assets/images/icons/m-dashboard-active.svg"
                  />
                  <img
                    v-else
                    :src="
                      $q.dark.isActive
                        ? '/assets/images/icons/m-dashboard-dark.svg'
                        : '/assets/images/icons/m-dashboard-light.svg'
                    "
                  />
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <span class="tw-text-xs tw-tracking-wide">Dashboard</span>
              </q-item-section>
            </q-item>
            <q-item
              v-ripple
              :to="{ name: 'tugas-saya-khusus' }"
              :active="$route.name?.includes('tugas-saya')"
              class="hover:tw-rounded-l-full"
              :active-class="
                $q.dark.isActive
                  ? 'tw-text-main-green tw-bg-zinc-800 tw-rounded-l-full tw-font-bold'
                  : 'tw-text-white tw-bg-default-6 tw-rounded-l-full tw-font-bold'
              "
            >
              <q-item-section avatar>
                <q-avatar size="sm">
                  <img
                    v-if="$route.name?.includes('tugas-saya')"
                    src="/assets/images/icons/m-tugas-active.svg"
                  />
                  <img
                    v-else
                    :src="
                      $q.dark.isActive
                        ? '/assets/images/icons/m-tugas-dark.svg'
                        : '/assets/images/icons/m-tugas-light.svg'
                    "
                  />
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <span class="tw-text-xs tw-tracking-wide">Tugas Saya</span>
              </q-item-section>
            </q-item>
            <q-item
              v-ripple
              :to="{ name: 'laporan-khusus' }"
              :active="
                $route.name?.includes('laporan-khusus') ||
                $route.name?.includes('laporan-rutin') ||
                $route.name?.includes('laporan-internal') ||
                $route.name?.includes('laporan-proses') ||
                $route.name?.includes('laporan-pantau-tugas') ||
                $route.name?.includes('laporan-detail-flow-builder') ||
                $route.name === 'laporan-detail'
              "
              class="hover:tw-rounded-l-full"
              :active-class="
                $q.dark.isActive
                  ? 'tw-text-main-green tw-bg-zinc-800 tw-rounded-l-full tw-font-bold'
                  : 'tw-text-white tw-bg-default-6 tw-rounded-l-full tw-font-bold'
              "
            >
              <q-item-section avatar>
                <q-avatar size="sm">
                  <img
                    v-if="
                      $route.name?.includes('laporan-khusus') ||
                      $route.name?.includes('laporan-rutin') ||
                      $route.name?.includes('laporan-internal') ||
                      $route.name?.includes('laporan-proses') ||
                      $route.name?.includes('laporan-pantau-tugas') ||
                      $route.name?.includes('laporan-detail-flow-builder') ||
                      $route.name === 'laporan-detail'
                    "
                    src="/assets/images/icons/m-laporan-active.svg"
                  />
                  <img
                    v-else
                    :src="
                      $q.dark.isActive
                        ? '/assets/images/icons/m-laporan-dark.svg'
                        : '/assets/images/icons/m-laporan-light.svg'
                    "
                  />
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <span class="tw-text-xs tw-tracking-wide">Laporan</span>
              </q-item-section>
            </q-item>
            <q-item
              v-ripple
              :to="{ name: 'template-laporan-template' }"
              :active="$route.name?.includes('template-laporan')"
              class="hover:tw-rounded-l-full"
              :active-class="
                $q.dark.isActive
                  ? 'tw-text-main-green tw-bg-zinc-800 tw-rounded-l-full tw-font-bold'
                  : 'tw-text-white tw-bg-default-6 tw-rounded-l-full tw-font-bold'
              "
            >
              <q-item-section avatar>
                <q-avatar size="sm">
                  <img
                    v-if="$route.name?.includes('template-laporan')"
                    src="/assets/images/icons/m-template-active.svg"
                  />
                  <img
                    v-else
                    :src="
                      $q.dark.isActive
                        ? '/assets/images/icons/m-template-dark.svg'
                        : '/assets/images/icons/m-template-light.svg'
                    "
                  />
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <span class="tw-text-xs tw-tracking-wide"
                  >Template Laporan</span
                >
              </q-item-section>
            </q-item>
            <q-item
              v-ripple
              :to="{ name: 'riwayat' }"
              exact
              class="hover:tw-rounded-l-full"
              :active-class="
                $q.dark.isActive
                  ? 'tw-text-main-green tw-bg-zinc-800 tw-rounded-l-full tw-font-bold'
                  : 'tw-text-white tw-bg-default-6 tw-rounded-l-full tw-font-bold'
              "
            >
              <q-item-section avatar>
                <q-avatar size="sm">
                  <img
                    v-if="$route.name === 'riwayat'"
                    src="/assets/images/icons/m-riwayat-active.svg"
                  />
                  <img
                    v-else
                    :src="
                      $q.dark.isActive
                        ? '/assets/images/icons/m-tugas-dark.svg'
                        : '/assets/images/icons/m-tugas-light.svg'
                    "
                  />
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <span class="tw-text-xs tw-tracking-wide">Riwayat</span>
              </q-item-section>
            </q-item>
            <q-item
              v-ripple
              :to="{ name: 'perpustakaan-rules' }"
              :active="$route.name?.includes('perpustakaan')"
              class="hover:tw-rounded-l-full"
              :active-class="
                $q.dark.isActive
                  ? 'tw-text-main-green tw-bg-zinc-800 tw-rounded-l-full tw-font-bold'
                  : 'tw-text-white tw-bg-default-6 tw-rounded-l-full tw-font-bold'
              "
            >
              <q-item-section avatar>
                <q-avatar size="sm">
                  <img
                    v-if="$route.name?.includes('perpustakaan')"
                    src="/assets/images/icons/m-perpustakaan-active.svg"
                  />
                  <img
                    v-else
                    :src="
                      $q.dark.isActive
                        ? '/assets/images/icons/m-perpustakaan-dark.svg'
                        : '/assets/images/icons/m-perpustakaan-light.svg'
                    "
                  />
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <span class="tw-text-xs tw-tracking-wide">Perpustakaan</span>
              </q-item-section>
            </q-item>
            <q-item
              v-ripple
              :to="{ name: 'pengaturan-whatsapp' }"
              :active="$route.name?.includes('pengaturan')"
              class="hover:tw-rounded-l-full"
              :active-class="
                $q.dark.isActive
                  ? 'tw-text-main-green tw-bg-zinc-800 tw-rounded-l-full tw-font-bold'
                  : 'tw-text-white tw-bg-default-6 tw-rounded-l-full tw-font-bold'
              "
            >
              <q-item-section avatar>
                <q-avatar size="sm">
                  <img
                    v-if="$route.name?.includes('pengaturan')"
                    src="/assets/images/icons/m-pengaturan-active.svg"
                  />
                  <img
                    v-else
                    :src="
                      $q.dark.isActive
                        ? '/assets/images/icons/m-pengaturan-dark.svg'
                        : '/assets/images/icons/m-pengaturan-light.svg'
                    "
                  />
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <span class="tw-text-xs tw-tracking-wide">Pengaturan</span>
              </q-item-section>
            </q-item>
            <q-btn
              @click="toggleDarkMode"
              class="tw--hidden tw-w-fit tw-ml-4 tw-bottom-20 tw-absolute tw-rounded-xl"
              :class="$q.dark.isActive ? 'tw-bg-default-4' : 'tw-bg-default-6'"
              ><img
                :src="
                  $q.dark.isActive
                    ? '/assets/images/icons/moon.svg'
                    : '/assets/images/icons/sun.svg'
                "
                alt=""
            /></q-btn>
          </q-list>
        </div>

        <q-btn
          flat
          dense
          @click="clickToggleDrawer()"
          class="tw-self-start tw-mx-3"
        >
          <q-avatar size="sm">
            <img
              src="/assets/images/icons/mini-sidebar.svg"
              class="tw-transition-all tw-duration-200 tw-ease-linear"
              :class="{ '-tw-scale-x-100': !miniState }"
            />
          </q-avatar>
        </q-btn>
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="lg:tw-hidden">
      <q-tabs
        no-caps
        align="justify"
        class="tw-bg-default-2 text-white"
        indicator-color="transparent"
        outside-arrows
        mobile-arrows
      >
        <q-route-tab
          :to="{ name: 'dashboard' }"
          exact
          exact-active-class="tw-bg-main-green"
        >
          <span
            class="tw-text-xs tw-tracking-wide tw-font-light"
            :class="{ '!tw-font-semibold': $route.name === 'dashboard' }"
            >Dashboard</span
          >
        </q-route-tab>
        <q-route-tab
          :to="{ name: 'tugas-saya-khusus' }"
          :class="{
            'tw-bg-main-green': $route.name?.includes('tugas-saya'),
          }"
        >
          <span
            class="tw-text-xs tw-tracking-wide tw-font-light"
            :class="{
              '!tw-font-semibold': $route.name?.includes('tugas-saya'),
            }"
            >Tugas Saya</span
          >
        </q-route-tab>
        <q-route-tab
          :to="{ name: 'laporan-khusus' }"
          :class="{
            'tw-bg-main-green':
              $route.name?.includes('laporan-khusus') ||
              $route.name?.includes('laporan-rutin') ||
              $route.name?.includes('laporan-internal') ||
              $route.name?.includes('laporan-proses') ||
              $route.name?.includes('laporan-pantau-tugas') ||
              $route.name?.includes('laporan-detail-flow-builder') ||
              $route.name === 'laporan-detail',
          }"
        >
          <span
            class="tw-text-xs tw-tracking-wide tw-font-light"
            :class="{
              '!tw-font-semibold':
                $route.name?.includes('laporan-khusus') ||
                $route.name?.includes('laporan-rutin') ||
                $route.name?.includes('laporan-internal') ||
                $route.name?.includes('laporan-proses') ||
                $route.name?.includes('laporan-pantau-tugas') ||
                $route.name?.includes('laporan-detail-flow-builder') ||
                $route.name === 'laporan-detail',
            }"
            >Laporan</span
          >
        </q-route-tab>
        <q-route-tab
          :to="{ name: 'template-laporan-template' }"
          :class="{
            'tw-bg-main-green': $route.name?.includes('template-laporan'),
          }"
        >
          <span
            class="tw-text-xs tw-tracking-wide tw-font-light"
            :class="{
              '!tw-font-semibold': $route.name?.includes('template-laporan'),
            }"
            >Template Laporan</span
          >
        </q-route-tab>
        <q-route-tab
          :to="{ name: 'riwayat' }"
          exact
          exact-active-class="tw-bg-main-green"
        >
          <span
            class="tw-text-xs tw-tracking-wide tw-font-light"
            :class="{ '!tw-font-semibold': $route.name === 'riwayat' }"
            >Riwayat</span
          >
        </q-route-tab>
        <q-route-tab
          :to="{ name: 'perpustakaan-rules' }"
          :class="{
            'tw-bg-main-green': $route.name?.includes('perpustakaan'),
          }"
        >
          <span
            class="tw-text-xs tw-tracking-wide tw-font-light"
            :class="{
              '!tw-font-semibold': $route.name?.includes('perpustakaan'),
            }"
            >Perpustakaan</span
          >
        </q-route-tab>
        <q-route-tab
          :to="{ name: 'pengaturan-menu' }"
          :class="{
            'tw-bg-main-green': $route.name?.includes('pengaturan'),
          }"
        >
          <span
            class="tw-text-xs tw-tracking-wide tw-font-light"
            :class="{
              '!tw-font-semibold': $route.name?.includes('pengaturan'),
            }"
            >Pengaturan</span
          >
        </q-route-tab>
      </q-tabs>
    </q-footer>

    <q-dialog v-model="logoutModal" persistent>
      <q-card>
        <q-card-section class="tw-flex tw-flex-col tw-space-y-5">
          <q-icon
            name="warning"
            color="warning"
            size="4rem"
            class="self-center"
          />
          <span class="tw-text-center tw-text-sm"
            >Apakah Anda yakin ingin keluar dari applikasi ini?</span
          >
        </q-card-section>

        <q-card-actions align="right">
          <q-btn
            flat
            label="Batal"
            color="grey"
            v-close-popup
            :disable="fieldState"
          />
          <q-btn
            label="Logout"
            color="main-red-1"
            :disable="fieldState"
            :loading="fieldState"
            @click="clickLogoutUser()"
          >
            <template v-slot:loading>
              <q-spinner-hourglass color="white" />
            </template>
          </q-btn>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-layout>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

import { useQuasar } from "quasar";

const router = useRouter();
const layoutDrawer = ref(false);
const miniState = ref(false);
const logoutModal = ref(false);
const fieldState = ref(false);

function clickToggleDrawer() {
  miniState.value = !miniState.value;
}

function clickPromptLogout() {
  logoutModal.value = true;
}

function clickLogoutUser() {
  fieldState.value = true;
  setTimeout(() => {
    logoutModal.value = false;
    router.push({ name: "auth-login" });
  }, 1000);
}

const isDarkMode = ref(localStorage.getItem("isDarkMode") === "true");
const $q = useQuasar();

function toggleDarkMode() {
  isDarkMode.value = !isDarkMode.value;
  $q.dark.set(isDarkMode.value);
  saveDarkMode();
}

function saveDarkMode() {
  localStorage.setItem("isDarkMode", isDarkMode.value);
}

onMounted(() => {
  $q.dark.set(isDarkMode.value);
});
</script>
