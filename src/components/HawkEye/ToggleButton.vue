<template>
    <button
        class="btn btn-square btn-accent dark:bg-gray-700 iconfont icontext opacity-50 hover:opacity-100"
        :class="{
            'iconfont-fangda fixed right-0 bottom-0': !isShow,
            'iconfont-suoxiao absolute top-0 left-0': isShow,
        }"
        @click="toggle"
    ></button>
</template>
<script setup lang="ts">
import { ref } from "vue";

const emit = defineEmits<{
    toggle: [value: boolean];
}>();
const toggle = () => {
    isShow.value = !isShow.value;
    emit("toggle", isShow.value);
};
const isShow = ref(false);
</script>
