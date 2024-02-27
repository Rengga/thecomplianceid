<template>
  <div
    ref="documentContainer"
    class="document-container tw-border tw-rounded-xl tw-aspect-[3/4] xl:tw-aspect-video tw-grid tw-grid-cols-1 tw-text-default-1"
  ></div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { read } from "xlsx";

const props = defineProps({
  path: {
    type: String,
    required: true,
  },
});

const documentContainer = ref(null);

async function initDocument() {
  var grid = x_spreadsheet(documentContainer.value);
  const f = await fetch(props.path);
  const ab = await f.arrayBuffer();

  /* parse workbook */
  const wb = read(ab);

  grid?.loadData(stox(wb));
}

onMounted(() => {
  initDocument();
});
</script>

<style>
.x-spreadsheet-toolbar {
  width: auto !important;
}
.x-spreadsheet-sheet {
  width: auto !important;
}
</style>
