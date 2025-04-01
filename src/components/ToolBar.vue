<template>
    <div
        class="absolute top-2 left-2 flex space-x-2 w-full pr-4 text-white dark:text-gray-500 z-50"
    >
        <HomeButton />
        <div class="flex-grow"></div>
        <GeoCoder />
        <LightButton />
        <LocationButton />
        <FullScreenButton />
    </div>
</template>
<script setup lang="ts">
import FullScreenButton from "./FullScreenButton.vue";
import GeoCoder from "./GeoCoder.vue";
import HomeButton from "./HomeButton.vue";
import LightButton from "./LightButton.vue";
import LocationButton from "./LocationButton.vue";
</script>
