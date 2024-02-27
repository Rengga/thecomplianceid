<template>
  <div class="tw-w-full tw-h-screen bg-login tw-overflow-hidden">
    <q-page
      class="flex flex-center tw-p-5 md:tw-p-16 tw-tracking-wide"
      :class="$q.dark.isActive ? 'tw-bg-zinc-800/50' : 'tw-bg-emerald-600/50'"
    >
      <q-btn
        @click="toggleDarkMode"
        outlined
        rounded
        class="tw--hidden tw-w-fit tw-absolute tw-top-2 tw-left-2 tw-border-2 custom-css tw-border-white"
        :class="$q.dark.isActive ? 'tw-bg-default-4' : 'tw-bg-default-6'"
        ><img
          :src="
            $q.dark.isActive
              ? '/assets/images/icons/moon.svg'
              : '/assets/images/icons/sun.svg'
          "
          alt=""
      /></q-btn>
      <div
        class="tw-grid tw-grid-cols-1 full-width tw-max-w-2xl tw-rounded-[1.25rem] tw-p-5 md:tw-p-16 xl:tw-p-36"
        :class="$q.dark.isActive ? 'tw-bg-default-7' : 'tw-bg-white '"
      >
        <div class="tw-flex tw-flex-col tw-space-y-10 lg:tw-space-y-12">
          <img
            alt="Quasar logo"
            :src="
              $q.dark.isActive
                ? '/assets/images/logos/logo-dark.png'
                : '/assets/images/logos/logo-light.png'
            "
            class="aspect-square self-center"
            loading="lazy"
          />
          <span
            class="tw-text-white tw-font-bold tw-text-base tw-text-center tw-tracking-widest"
            :class="$q.dark.isActive ? 'tw-text-white' : 'tw-text-zinc-700'"
            >LUPA PASSWORD</span
          >
          <div class="tw-flex tw-flex-col tw-space-y-5">
            <div class="tw-flex tw-flex-col tw-space-y-2">
              <q-input
                type="email"
                outlined
                placeholder="Username"
                class="tw-border-2 tw-rounded-full"
                :class="
                  $q.dark.isActive
                    ? 'tw-border-default-6'
                    : 'tw-border-default-7'
                "
                :input-class="
                  $q.dark.isActive
                    ? 'tw-text-white main-green tw-rounded-full tw-px-3'
                    : 'tw-text-default-6 main-green tw-rounded-full tw-px-3'
                "
                dark
                color="main-green tw-rounded-full "
                :disable="fieldState"
              />
            </div>
            <q-btn
              flat
              rounded
              class="tw-rounded--full tw-py-3 custom-css tw-w-full tw-border-2"
              :class="
                $q.dark.isActive
                  ? 'tw-border-default-6 tw-bg-default-6'
                  : 'tw-bg-default-7 tw-border-default-7'
              "
              :loading="fieldState"
              :disable="fieldState"
              @click.prevent="onSubmit()"
            >
              <div
                class="tw-font-bold tw-tracking-widest ff-worksans"
                :class="
                  $q.dark.isActive ? 'tw-text-default-7' : 'tw-text-default-6'
                "
              >
                Kirim Email
              </div>
              <template v-slot:loading>
                <q-spinner-hourglass color="white" class="on-left" />
                <span class="text-white">Loading...</span>
              </template>
            </q-btn>
          </div>

          <span
            class="tw-text-center tw-text-sm"
            :class="$q.dark.isActive ? 'tw-text-white' : 'tw-text-zinc-700'"
            >Ingat Password ?
            <router-link :to="{ name: 'auth-login' }" class="tw-text-default-6"
              >Login Disini</router-link
            ></span
          >
        </div>
      </div>
    </q-page>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";

const router = useRouter();
const fieldState = ref(false);

const isDarkMode = ref(localStorage.getItem("isDarkMode") === "true");
const $q = useQuasar();

function onSubmit() {
  fieldState.value = true;
  setTimeout(() => {
    router.push({ name: "auth-login" });
  }, 1000);
}

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
