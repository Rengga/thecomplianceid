<template>
  <div
    ref="documentContainer"
    class="tw-aspect-[3/4] xl:tw-aspect-video tw-grid tw-grid-cols-1"
  >
    <object
      :data="path"
      class="tw-border tw-rounded-xl tw-aspect-[3/4] xl:tw-aspect-video fit tw-text-white"
    ></object>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  path: {
    type: String,
    required: true,
  },
});

const documentContainer = ref(null);
</script>
