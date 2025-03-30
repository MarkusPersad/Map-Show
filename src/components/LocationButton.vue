<template>
    <button
        class="btn btn-square btn-accent dark:bg-gray-700 iconfont iconfont-location icontext"
        @click="FlyToCurrentLocation"
    ></button>
</template>
<script setup lang="ts">
import { inject } from "vue";
import { get_location } from "../utils";
import { CesiumViewer } from "../types";

const _viewer = inject<CesiumViewer>("_viewer");
const FlyToCurrentLocation = async () => {
    try{
        if (_viewer?.value) {
        let location = await get_location(1000);
        _viewer.value.camera.flyTo({
            destination: location,
            duration: 2,
        })
    }
    }catch(e){
        console.log(e);
    }
};
</script>
