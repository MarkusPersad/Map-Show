<template>
    <div class="absolute w-60 h-36 bottom-0 right-0 overflow-hidden">
        <div
            id="hawEye"
            class="w-full h-full"
            :class="{
                block: isShow,
                hidden: !isShow,
            }"
        ></div>
        <ToggleButton @toggle="handleToggle" />
    </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import ToggleButton from "./HawkEye/ToggleButton.vue";
import {
    ImageryLayer,
    SceneMode,
    UrlTemplateImageryProvider,
    Viewer,
} from "cesium";
import { GAODE } from "../assets/default.json";
import { onMounted } from "vue";
import { inject } from "vue";
import { CesiumViewer } from "../types";
import { onUnmounted } from "vue";

const isShow = ref<boolean>(false);
const handleToggle = (value: boolean) => {
    isShow.value = value;
};
const hawEye = ref<Viewer | null>(null);
const _viewer = inject<CesiumViewer>("_viewer");
const sync_camera = () => {
    if (hawEye.value && _viewer?.value) {
        hawEye.value.camera.setView({
            destination: _viewer.value.camera.position,
            orientation: {
                heading: _viewer.value.camera.heading,
                pitch: _viewer.value.camera.pitch,
                roll: _viewer.value.camera.roll,
            },
        });
    }
};
onMounted(() => {
    hawEye.value = new Viewer("hawEye", {
        baseLayer: new ImageryLayer(
            new UrlTemplateImageryProvider({
                url: GAODE.VECTORIMAGERY,
            }),
        ),
        geocoder: false,
        homeButton: false,
        sceneModePicker: false,
        baseLayerPicker: false,
        navigationHelpButton: false,
        animation: false,
        timeline: false,
        fullscreenButton: false,
        sceneMode: SceneMode.SCENE2D,
    });
    if (hawEye.value) {
        hawEye.value.cesiumWidget.creditDisplay.container.style.display =
            "none";
    }
    if (_viewer?.value) {
        _viewer.value.camera.changed.addEventListener(() => {
            sync_camera();
        });
    }
});
onUnmounted(() => {
    if (hawEye.value) {
        hawEye.value.destroy();
        hawEye.value = null;
    }
});
</script>
