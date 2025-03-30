<template>
    <div
        data-tauri-drag-region
        class="navbar bg-blue-400 dark:bg-gray-400 text-white dark:text-gray-500 w-screen"
    >
        <div class="navbar-start"></div>
        <div class="navbar-center"></div>
        <div class="navbar-end space-x-4">
            <div
                class="iconfont iconfont-zuixiaohua icontext"
                @click="minimizeWindow"
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

const minimizeWindow = async () => {
    await getCurrentWindow().minimize();
};

const closeWindow = async () => {
    await getCurrentWindow().close();
};
</script>
