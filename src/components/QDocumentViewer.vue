<template>
  <div
    v-if="isOnClient"
    ref="documentContainer"
    class="tw-border tw-rounded-xl tw-aspect-[3/4] xl:tw-aspect-video"
  ></div>
</template>

<script setup>
import { nextTick, onMounted, ref } from "vue";

const props = defineProps({
  path: {
    type: String,
    required: true,
  },
});

const isOnClient = ref(false);
const documentContainer = ref(null);

function initDocument() {
  WebViewer.WebComponent(
    {
      path: "/assets/js/webviewer",
      licenseKey:
        "demo:1701797108598:7cbd364903000000002588379a011b0ab56829136e18e248ah321gssw2b31bef030",
    },
    documentContainer.value
  ).then((instance) => {
    const { UI, Core } = instance;
    const { documentViewer, annotationManager, Tools, Annotations } = Core;
    // call methods from UI, Core, documentViewer and annotationManager as needed

    documentViewer.addEventListener("documentLoaded", () => {
      // call methods relating to the loaded document
    });

    instance.UI.setTheme("dark");

    instance.UI.loadDocument(props.path);
  });
}

onMounted(async () => {
  console.log("mounted");
  isOnClient.value = true;
  await nextTick();
  initDocument();
});
</script>
