<template>
    <div class="flex flex-col space-y-2 h-full bg-blue-400 dark:bg-gray-700">
        <MapButton :is-active="router.currentRoute.value.path === '/map'" @click="JumpTo('/map')" />
    </div>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
import MapButton from "./Sider/MapButton.vue";
const router = useRouter();
const JumpTo =(path:string) =>{
    if (router.currentRoute.value.path !== path){
        router.push(path)
    }
}
</script>
