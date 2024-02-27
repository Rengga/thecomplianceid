import { boot } from "quasar/wrappers";
import WebViewer from "@pdftron/webviewer";

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(({ app }) => {
  // something to do
  app.config.globalProperties.$WebViewer = WebViewer;
});
