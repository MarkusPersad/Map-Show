<template>
    <div class="flex flex-col space-y-2 h-full bg-blue-400 dark:bg-gray-700">
        <MapButton :is-active="router.currentRoute.value.path === '/map'" @click="JumpTo('/map')" />
        <ChatButton :is-active="router.currentRoute.value.path === '/chat'" @click="JumpTo('/chat')" />
        <div class="flex-grow"></div>
        <SettingButton :is-active="router.currentRoute.value.path === '/setting'" @click="JumpTo('/setting')" />
    </div>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
import MapButton from "./Sider/MapButton.vue";
import ChatButton from "./Sider/ChatButton.vue"
import SettingButton from "./Sider/SettingButton.vue";
const router = useRouter();
const JumpTo =(path:string) =>{
    if (router.currentRoute.value.path !== path){
        router.push(path)
    }
}
</script>
