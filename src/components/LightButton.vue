<template>
    <button
        class="btn btn-accent dark:bg-gray-700 btn-square iconfont iconfont-dengguangzongkaiguan"
        :class="{
            'text-yellow-300': isLighting,
            'text-gray-300': !isLighting,
        }"
        @click="isLighting = !isLighting"
    ></button>
</template>
<script setup lang="ts">
import { inject, ref, watch } from "vue";
import { CesiumViewer } from "../types";
const isLighting = ref<boolean>(false);
const _viewer = inject<CesiumViewer>("_viewer");
watch(isLighting, async (newVal) => {
    if (_viewer?.value) {
        _viewer.value.scene.globe.enableLighting = newVal;
    }
});
</script>
