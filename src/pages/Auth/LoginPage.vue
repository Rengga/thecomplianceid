<template>
  <div class="tw-w-full tw-h-screen bg-login tw-overflow-hidden">
    <q-page
      class="flex flex-center tw-flex-warp tw-p-5 md:tw-p-16 tw-tracking-wide"
      :class="$q.dark.isActive ? 'tw-bg-zinc-800/50' : 'tw-bg-emerald-600/50'"
    >
      <q-btn
        @click="toggleDarkMode"
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
      <div class="tw-flex align-center tw-w-1/2">
        <div
          class="tw-text-white ff-worksans tw-flex tw-flex-col tw-w-11/12 tw-space-y-24"
        >
          <span class="tw-text-9xl tw-font-bold">Welcome <br />Back !</span>
          <span class=""
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            mollitia ducimus corrupti a dolores nobis voluptate ipsum odio
            reiciendis nihil!</span
          >
          <div class="tw-flex tw-gap-4">
            <hr
              class="tw-w-24 tw-rounded-full tw-border-[#d0c184] tw-border-2"
            />
            <hr
              class="tw-w-24 tw-rounded-full tw-border-white/50 tw-border-2"
            />
            <hr
              class="tw-w-24 tw-rounded-full tw-border-white/50 tw-border-2"
            />
          </div>
        </div>
      </div>
      <div
        class="tw-w-2/5 full-width tw-border-[1.5px] -tw-border-[#E3D4D4] tw-rounded-[1.25rem] tw-p-5 md:tw-p-16 xl:tw-px-[160px] xl:tw-py-[100px] tw-border-none tw-relative"
        :class="$q.dark.isActive ? 'tw-bg-default-7' : 'tw-bg-white '"
      >
        <div
          class="tw-rotate-[270deg] tw tw-w-fit tw-h-fit tw-absolute tw-top-20 tw-left-[-50px]"
        >
          <div
            class="triangle"
            :class="$q.dark.isActive ? 'tw-bg-[#d0c184]' : 'tw-bg-white'"
          ></div>
        </div>
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
            class="tw-font-bold tw-text-base tw-text-center tw-tracking-widest ff-worksans"
            :class="$q.dark.isActive ? 'tw-text-white' : 'tw-text-zinc-700'"
            >LOGIN</span
          >
          <div class="tw-flex tw-flex-col tw-space-y-2">
            <div class="tw-flex tw-flex-col tw-space-y-2">
              <q-input
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
              <q-input-password
                outlined
                placeholder="Password"
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
                color="main-green tw-rounded-full "
                :disable="fieldState"
              />
            </div>
            <div class="tw-w-full tw-space-y-5">
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
                  LOGIN
                </div>
                <template v-slot:loading>
                  <q-spinner-hourglass color="white" class="on-left" />
                  <span class="text-white">Loading...</span>
                </template>
              </q-btn>
              <div class="tw-flex items-center tw-gap-5 tw-justify-center">
                <hr
                  class="tw-w-20"
                  :class="
                    $q.dark.isActive
                      ? 'tw-border-white tw-bg-white'
                      : 'tw-border-zinc-400 tw-bg-zinc-400'
                  "
                />
                <span
                  class="tw-text-base ff-worksans"
                  :class="
                    $q.dark.isActive ? 'tw-text-white' : 'tw-text-zinc-700'
                  "
                  >Or</span
                >
                <hr
                  class="tw-w-20"
                  :class="
                    $q.dark.isActive
                      ? 'tw-border-white tw-bg-white'
                      : 'tw-border-zinc-400 tw-bg-zinc-400'
                  "
                />
              </div>

              <q-btn
                flat
                rounded
                class="tw-py-3 custom-css tw-w-full tw-border-2"
                :class="
                  $q.dark.isActive
                    ? 'tw-border-default-6'
                    : 'tw-border-default-6 tw-bg-default-6'
                "
                :loading="fieldState"
                :disable="fieldState"
                @click.prevent="onSubmit()"
              >
                <div class="tw-flex tw-gap-5">
                  <img
                    alt="Quasar logo"
                    src="/assets/images/logos/logo-google.png"
                    class="aspect-square self-center"
                    loading="lazy"
                  />
                  <div
                    class="tw-font-light tw-tracking-widest tw-text-white ff-worksans"
                  >
                    Log in with Google
                  </div>
                </div>
                <template>
                  <q-spinner-hourglass color="white" class="on-left" />
                  <span class="text-white">Loading...</span>
                </template>
              </q-btn>
            </div>
          </div>

          <span
            class="tw-text-center tw-text-sm"
            :class="$q.dark.isActive ? 'tw-text-white' : 'tw-text-zinc-700'"
            >Lupa Password ?
            <router-link
              :to="{ name: 'auth-forgot-password' }"
              class="tw-text-default-6 tw-font-bold"
              >Klik Disini</router-link
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
import QInputPassword from "src/components/QInputPassword.vue";
import { useQuasar } from "quasar";

const router = useRouter();
const fieldState = ref(false);
const password = ref("");

const isDarkMode = ref(localStorage.getItem("isDarkMode") === "true");
const $q = useQuasar();

function onSubmit() {
  fieldState.value = true;
  setTimeout(() => {
    router.push({ name: "dashboard" });
  }, 1000);
}

// function onClick() {
//   $q.dark.set(!$q.dark.isActive);
//   let isDark = $q.dark.isActive;
// }

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
