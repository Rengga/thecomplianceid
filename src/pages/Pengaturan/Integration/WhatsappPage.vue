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
      <q-breadcrumbs-el class="text-default-3" label="Whatsapp Integration" />
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
            class="tw-py-2 tw-my-1 !tw-text-main-gold tw-rounded-md"
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
            class="tw-py-2 tw-my-1 tw-rounded-md"
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
            class="tw-p-2 tw-my-1 tw-rounded-md"
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
          $q.dark.isActive ? 'tw-bg-default-1' : 'tw-bg-slate-50 tw-shadow-md'
        "
      >
        <span
          class="tw-py-2 tw-font-medium tw-text-sm lg:tw-text-base tw-border-b tw-border-default-3"
          >Whatsapp Integration</span
        >
      </div>
    </div>
  </q-page>
</template>

<script setup></script>
