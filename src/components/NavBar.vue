<template>
    <div
        data-tauri-drag-region
        class="navbar bg-blue-400 dark:bg-gray-700 w-screen pt-0 pb-0 pr-2"
    >
        <div class="navbar-start"></div>
        <div class="navbar-center"></div>
        <div class="navbar-end space-x-4">
            <div
                class="iconfont icontext"
                :class="{
                    'iconfont-taiyang': isDarkMode,
                    'iconfont-anheimoshi': !isDarkMode,
                }"
                @click="isDarkMode = !isDarkMode"
            ></div>
            <div
                class="iconfont iconfont-zuixiaohua icontext"
                @click="minimizeWindow"
            ></div>
            <div
                :class="{
                    'iconfont icontext': true,
                    'iconfont-quanping': !isMaximized,
                    'iconfont-quxiaoquanping': isMaximized,
                }"
                @click="isMaximized = !isMaximized"
            ></div>
            <div
                class="iconfont iconfont-guanbi icontext"
                @click="closeWindow"
            ></div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { getCurrentWindow } from "@tauri-apps/api/window";
import { ref, watch } from "vue";
const isDarkMode = ref<boolean>(false);
const isMaximized = ref<boolean>(false);
watch(isMaximized, async (newVal) => {
    if (newVal) {
        // code to maximize window
        await getCurrentWindow().maximize();
    } else {
        // code to restore window
        await getCurrentWindow().unmaximize();
    }
});
watch(isDarkMode, (newVal) => {
    if (newVal) {
        // code to apply dark mode styles
        document.documentElement.classList.add("dark");
    } else {
        // code to apply light mode styles
        document.documentElement.classList.remove("dark");
    }
});

const minimizeWindow = async () => {
    await getCurrentWindow().minimize();
};

const closeWindow = async () => {
    await getCurrentWindow().hide();
};
</script>
