<template>
  <q-input
    v-model="password"
    @update:model-value="(value) => $emit('update:modelValue', value)"
    :type="isPwd ? 'password' : 'text'"
    :dark="dark"
    :color="color"
    :placeholder="placeholder"
    :disable="disable"
  >
    <template v-slot:append>
      <q-icon
        :name="isPwd ? 'visibility_off' : 'visibility'"
        class="cursor-pointer"
        @click="isPwd = !isPwd"
      />
    </template>
  </q-input>
</template>

<script setup>
import { ref } from "vue";

defineProps({
  modelValue: {
    type: String,
    default: () => "",
  },
  dark: {
    type: Boolean,
    default: () => true,
  },
  disable: {
    type: Boolean,
    default: () => false,
  },
  color: {
    type: String,
    default: () => "main-green",
  },
  placeholder: {
    type: String,
    default: () => "",
  },
});

defineEmits(["update:modelValue"]);

const password = ref("");
const isPwd = ref(true);
</script>
