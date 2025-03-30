<template>
    <button
        class="btn btn-accent dark:bg-gray-700 btn-square iconfont icontext"
        @click="handleFullScreenChange"
        :class="{
            'iconfont-quanping': !isFullscreen,
            'iconfont-quxiaoquanping': isFullscreen,
        }"
    ></button>
</template>
<script setup lang="ts">
import { inject, onMounted, onUnmounted, ref } from "vue";
import { CesiumViewer } from "../types";
import { Fullscreen } from "cesium";

const isFullscreen = ref<boolean>(Fullscreen.fullscreen);
const _viewer = inject<CesiumViewer>("_viewer");
const handleFullScreenChange = () => {
    if (Fullscreen.fullscreen) {
        Fullscreen.exitFullscreen();
        isFullscreen.value = !isFullscreen.value;
    } else {
        Fullscreen.requestFullscreen(_viewer?.value?.container);
        isFullscreen.value = !isFullscreen.value;
    }
};
onMounted(() => {
    document.addEventListener(Fullscreen.changeEventName, () => {
        if (Fullscreen.fullscreen) {
            isFullscreen.value = true;
            console.log("Entered fullscreen", isFullscreen.value);
        } else {
            isFullscreen.value = false;
            console.log("Exited fullscreen", isFullscreen.value);
        }
    });
});
onUnmounted(() => {
    document.removeEventListener(Fullscreen.changeEventName, () => {
        if (Fullscreen.fullscreen) {
            isFullscreen.value = true;
            console.log("Entered fullscreen", isFullscreen.value);
        } else {
            isFullscreen.value = false;
            console.log("Exited fullscreen", isFullscreen.value);
        }
    });
});
</script>
