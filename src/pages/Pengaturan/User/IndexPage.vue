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
        label="Pengaturan"
        :to="{ name: 'pengaturan-whatsapp' }"
        exact
        class="text-default-3"
      />
      <q-breadcrumbs-el class="text-default-3" label="Users" />
    </q-breadcrumbs>

    <div
      class="tw-flex-1 tw-tracking-wide tw-text-sm tw-flex tw-space-x-3 tw-p-2 lg:tw-p-0 tw-pt-2 md:tw-pt-3 lg:tw-pt-3"
      :class="$q.dark.isActive ? 'tw-text-white' : 'tw-text-default-6'"
    >
      <div
        class="tw-basis-0 tw-overflow-hidden lg:tw-flex-none tw-w-1/4 xl:tw-w-1/6 tw-rounded-t-md tw-p-0 lg:tw-p-2 tw-flex tw-flex-col tw-space-y-2"
        :class="
          $q.dark.isActive ? 'tw-bg-default-1' : 'tw-bg-slate-50 tw-shadow-md'
        "
      >
        <span
          class="tw-py-2 tw-font-medium tw-text-sm lg:tw-text-base tw-border-b tw-border-default-3"
          >Settings</span
        >
        <q-list>
          <q-item class="tw-px-2 tw-my-1" dense>
            <q-item-section
              ><span class="tw-font-medium tw-tracking-wide tw-text-sm"
                >Message Integration</span
              ></q-item-section
            >
          </q-item>
          <q-item
            :to="{ name: 'pengaturan-whatsapp' }"
            class="tw-py-2 tw-my-1 tw-rounded-md"
            dense
            clickable
            v-ripple
          >
            <q-item-section
              ><span class="tw-tracking-wide tw-font-light tw-text-sm"
                >Whatsapp Integration</span
              ></q-item-section
            >
          </q-item>
          <q-item
            :to="{ name: 'pengaturan-email' }"
            class="tw-py-2 tw-my-1 tw-rounded-md"
            dense
            clickable
            v-ripple
          >
            <q-item-section
              ><span class="tw-tracking-wide tw-font-light tw-text-sm"
                >Email Integration</span
              ></q-item-section
            >
          </q-item>
          <q-item
            :to="{ name: 'pengaturan-calendar' }"
            class="tw-p-2 tw-my-1 tw-rounded-md"
            dense
            clickable
            v-ripple
          >
            <q-item-section
              ><span class="tw-tracking-wide tw-font-light tw-text-sm"
                >Calender Sync</span
              ></q-item-section
            >
          </q-item>
          <q-item
            :to="{ name: 'pengaturan-users' }"
            class="tw-p-2 tw-my-1 !tw-text-main-gold tw-rounded-md"
            dense
            clickable
            v-ripple
          >
            <q-item-section
              ><span class="tw-font-medium tw-tracking-wide tw-text-sm"
                >Users</span
              ></q-item-section
            >
          </q-item>
          <q-item
            :to="{ name: 'pengaturan-roles' }"
            class="tw-p-2 tw-my-1 tw-rounded-md"
            dense
            clickable
            v-ripple
          >
            <q-item-section
              ><span class="tw-font-medium tw-tracking-wide tw-text-sm"
                >Roles</span
              ></q-item-section
            >
          </q-item>
        </q-list>
      </div>
      <div
        class="tw-basis-full !tw-ml-0 lg:!tw-ml-3 lg:tw-flex-1 tw-rounded-t-md tw-flex tw-flex-col tw-space-y-2 tw-p-2"
        :class="
          $q.dark.isActive ? 'tw-bg-default-1 ' : 'tw-bg-slate-50 tw-shadow-md'
        "
      >
        <span
          class="tw-py-2 tw-font-medium tw-text-sm lg:tw-text-base tw-border-b tw-border-default-3"
          >Manage Users</span
        >
        <div
          class="tw-flex-1 tw-tracking-wide tw-text-sm tw-rounded-t-md tw-flex tw-flex-col tw-space-y-2"
          :class="
            $q.dark.isActive
              ? 'tw-bg-default-1 tw-text-white'
              : 'tw-bg-slate-50 tw-text-default-6 '
          "
        >
          <div
            class="tw-flex-none tw-flex tw-flex-row tw-items-center tw-justify-between tw-space-x-2"
          >
            <q-input
              hide-bottom-space
              dense
              flat
              standout
              :color="
                $q.dark.isActive
                  ? 'main-yellow tw-rounded-xl tw-w-72'
                  : 'dark-green-2 tw-rounded-xl tw-border-default-7 tw-w-72 tw-border-2 tw-bg-white'
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
            <q-btn
              no-caps
              class="tw-w-2/5 lg:tw-w-auto tw-py-2 tw-px-3 lg:tw-px-5 tw-rounded-xl tw-bg-default-3"
            >
              <q-icon left name="mdi-plus" size="xs" color="default-4" />
              <span
                class="tw-font-light tw-text-xs lg:tw-text-ms tw-tracking-wide text-default-4 tw-font-medium"
                >Tambah User</span
              >
            </q-btn>
          </div>

          <div
            class="tw-flex tw-flex-row tw-rounded-xl tw-py-3 tw-px-4"
            :class="
              $q.dark.isActive
                ? 'tw-bg-default-2 tw-text-white'
                : 'tw-bg-white tw-text-default-6 '
            "
          >
            <span class="tw-w-72 hide-text">Nama</span>
            <span class="tw-w-60 hide-text"> Role </span>
            <span class="tw-w-60 hide-text">Email</span>
            <span class="tw-w-64 hide-text">Status</span>
            <span class="tw-w-64 hide-text">Terakhir Diakses</span>
          </div>

          <q-scroll-area
            ref="qScrollAreaContainer"
            dark
            class="tw-flex-1 tw-grid tw-grid-cols-1 tw-overflow-x-hidden"
            :thumb-style="{
              borderRadius: '9999px',
              backgroundColor: '#50B748',
              opacity: 1,
            }"
          >
            <q-infinite-scroll
              @load="onLoadRef"
              :offset="0"
              class="tw-relative"
            >
              <q-expansion-item
                v-for="row in rows"
                :key="row.index"
                expand-icon-toggle
                expand-separator
                dense
                class="custom-css tw-rounded-xl tw-mb-1 tw-pr-2"
                :class="$q.dark.isActive ? 'tw-bg-zinc-800 ' : 'tw-bg-white '"
                style="width: calc(100% - 40px)"
              >
                <template v-slot:header>
                  <q-item-section class="tw-px-4 tw-rounded-l-xl">
                    <div
                      class="tw-flex tw-flex-row"
                      :class="
                        $q.dark.isActive
                          ? 'tw-text-white '
                          : 'tw-text-default-6'
                      "
                    >
                      <div
                        class="tw-w-72 tw-py-3 tw-flex tw-items-center tw-space-x-5"
                      >
                        <q-avatar rounded size="sm">
                          <img
                            src="https://cdn.quasar.dev/img/boy-avatar.png"
                          />
                        </q-avatar>
                        <span class="tw-text-xs lg:tw-text-sm tw-font-medium">{{
                          row.name
                        }}</span>
                      </div>
                      <span
                        class="tw-hidden tw-w-60 xl:tw-block tw-py-3 tw-text-xs lg:tw-text-sm tw-font-medium"
                      >
                        {{ row.role }}
                      </span>
                      <span
                        class="tw-w-60 tw-hidden xl:tw-block tw-py-3 tw-text-xs lg:tw-text-sm tw-font-medium"
                      >
                        {{ row.email }}
                      </span>
                      <div
                        class="tw-w-64 tw-hidden xl:tw-flex tw-items-center tw-space-x-5 tw-py-3"
                      >
                        <div class="tw-flex tw-justify-end">
                          <div
                            class="tw-w-2 tw-h-2 tw-rounded-full"
                            :class="{
                              'tw-bg-main-green': row.status === 'Aktif',
                              'tw-bg-main-orange': row.status !== 'Aktif',
                            }"
                          ></div>
                        </div>
                        <span
                          class="tw-w-64 tw-basis-3/4 tw-text-xs lg:tw-text-sm tw-font-medium"
                          >{{ row.status }}</span
                        >
                      </div>
                      <span
                        class="tw-w-64 tw-hidden xl:tw-block tw-py-3 tw-text-xs lg:tw-text-sm tw-font-medium"
                        >{{
                          row.lastLogin ? row.lastLogin : "Tidak pernah masuk"
                        }}</span
                      >
                    </div>
                  </q-item-section>

                  <q-item-section
                    side
                    class="tw-rounded-r-xl"
                    :class="
                      $q.dark.isActive ? 'tw-bg-zinc-800' : 'tw-bg-white '
                    "
                  >
                    <q-btn
                      flat
                      round
                      :color="$q.dark.isActive ? 'white' : 'black'"
                      icon="fas fa-ellipsis-vertical"
                      size="sm"
                      @click.stop=""
                      class=""
                    />
                  </q-item-section>
                </template>
                <q-card flat class="bg-transparent">
                  <q-card-section class="tw-py-0 tw-px-4">
                    <table class="tw-w-full tw-table-fixed">
                      <tr>
                        <td
                          class="tw-p-3 tw-text-xs lg:tw-text-sm tw-font-medium"
                        >
                          Role
                        </td>
                        <td class="tw-text-right">
                          <span
                            class="tw-py-3 tw-text-xs lg:tw-text-sm tw-font-medium"
                          >
                            {{ row.role }}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          class="tw-p-3 tw-text-xs lg:tw-text-sm tw-font-medium"
                        >
                          Email
                        </td>
                        <td class="tw-text-right">
                          <span
                            class="tw-py-3 tw-text-xs lg:tw-text-sm tw-font-medium"
                          >
                            {{ row.email }}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          class="tw-p-3 tw-text-xs lg:tw-text-sm tw-font-medium"
                        >
                          Terakhir Diakses
                        </td>
                        <td class="tw-text-right">
                          <span
                            class="tw-py-3 tw-text-xs lg:tw-text-sm tw-font-medium"
                          >
                            {{
                              row.lastLogin
                                ? row.lastLogin
                                : "Tidak pernah masuk"
                            }}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          class="tw-p-3 tw-text-xs lg:tw-text-sm tw-font-medium"
                        >
                          Status
                        </td>
                        <td class="tw-text-right">
                          <div
                            class="tw-flex tw-items-center tw-justify-end tw-space-x-5 tw-py-3"
                          >
                            <div class="tw-flex tw-justify-end">
                              <div
                                class="tw-w-2 tw-h-2 tw-rounded-full"
                                :class="{
                                  'tw-bg-main-green': row.status === 'Aktif',
                                  'tw-bg-main-orange': row.status !== 'Aktif',
                                }"
                              ></div>
                            </div>
                            <span
                              class="tw-text-xs lg:tw-text-sm tw-font-medium"
                              >{{ row.status }}</span
                            >
                          </div>
                        </td>
                      </tr>
                    </table>
                  </q-card-section>
                </q-card>
              </q-expansion-item>

              <template v-slot:loading>
                <div class="row items-center justify-center q-my-md">
                  <q-spinner-hourglass color="white" class="on-left" />
                  <span class="text-white">Loading...</span>
                </div>
              </template>
            </q-infinite-scroll>
          </q-scroll-area>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { format } from "quasar";

const { pad } = format;
const qScrollAreaContainer = ref(null);
const rows = ref([]);

function randomizeRole() {
  let items = ["Admin", "Editor", "Penulis", "Member"];
  return items[Math.floor(Math.random() * items.length)];
}

function randomizeStatus() {
  let items = ["Aktif", "Diundang"];
  return items[Math.floor(Math.random() * items.length)];
}

function addItem() {
  let maxSize = 50;
  let count = rows.value.length + 1;
  if (count < maxSize) {
    for (let i = 0; i < 10; i++) {
      let status = randomizeStatus();
      let lastLogin =
        status === "Aktif"
          ? new Date().toLocaleString("id-ID", {
              day: "2-digit",
              month: "short",
              year: "numeric",
              hourCycle: "h12",
              hour: "2-digit",
              minute: "2-digit",
            })
          : null;
      rows.value = rows.value.concat({
        name: `User #${pad(i, 4)}`,
        role: randomizeRole(),
        status: status,
        email: "test@example.com",
        lastLogin: lastLogin,
      });
      count++;
    }
    rows.value.forEach((row, idx) => {
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

// const elements = ref([]);
// const toggleButtons = ref([]);

// onMounted(() => {
//   addItem();

//   elements.value = document.querySelectorAll(".hide-text");
//   toggleButtons.value = document.querySelectorAll(".q-icon");

//   toggleButtons.value.forEach((toggleButton) => {
//     toggleButton.addEventListener("click", () => {
//       console.log("8888");
//       elements.value.forEach((element) => {
//         element.style.display =
//           element.style.display === "none" ? "block" : "none";
//       });
//     });
//   });
// });

// watch(
//   toggleButtons,
//   (newValue) => {
//     newValue.forEach((toggleButton) => {
//       toggleButton.addEventListener("click", () => {
//         console.log("klklkl");
//         elements.value.forEach((element) => {
//           element.style.display =
//             element.style.display === "none" ? "block" : "none";
//         });
//       });
//     });
//   },
//   { immediate: true }
// );

// document.addEventListener("click", (event) => {
//   if (event.target.classList.contains("q-icon")) {
//     console.log("djsdiajsdoa!");
//     elements.value.forEach((element) => {
//       element.style.display =
//         element.style.display === "none" ? "block" : "none";
//     });
//   }
// });
</script>
