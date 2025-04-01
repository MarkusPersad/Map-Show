<template>
    <div
        class="flex space-x-2"
        @mouseenter="isShow = true"
        @mouseleave="isShow = false"
        @keydown.enter="FlyToGeoCoder"
    >
        <input
            v-show="isShow"
            type="text"
            placeholder="请输入地址"
            class="input input-ghost input-accent"
            v-model="keyWord"
        />
        <button
            class="btn btn-square btn-accent dark:bg-gray-700 iconfont iconfont-search icontext"
            @click.stop="FlyToGeoCoder"
        ></button>
    </div>
</template>
<script setup lang="ts">
import { inject, ref } from "vue";
import { geocoder } from "../http";
import { CesiumViewer } from "../types";
import { Cartesian3 } from "cesium";

const _viewer = inject<CesiumViewer>("_viewer");
const isShow = ref(false);
const keyWord = defineModel<string>({
    default: () => "",
});
const FlyToGeoCoder = async () => {
    try {
        let location = await geocoder(keyWord.value);
        if (_viewer?.value) {
            _viewer.value.camera.flyTo({
                destination: Cartesian3.fromDegrees(
                    location[0],
                    location[1],
                    1000,
                ),
            });
            keyWord.value = "";
        }
    } catch (error) {
        console.error(error);
    }
};
</script>
