<template></template>
<script setup lang="ts">
import { UrlTemplateImageryProvider, WebMercatorTilingScheme } from 'cesium';
import { GAODE} from "../assets/default.json"
import { inject, onMounted } from 'vue';
import { CesiumViewer } from '../types';

const _viewer = inject<CesiumViewer>("_viewer")
const imageMap = new UrlTemplateImageryProvider({
    url: GAODE.IMAGERYURL,
    tilingScheme:new WebMercatorTilingScheme(),
    maximumLevel:18,
    enablePickFeatures:false,
})
const labelMap = new UrlTemplateImageryProvider({
    url:GAODE.LABELIMAGERYURL,
    tilingScheme:new WebMercatorTilingScheme(),
    maximumLevel:18,
    enablePickFeatures:false,
})
onMounted(()=>{
    if(_viewer?.value){
        _viewer.value?.imageryLayers.addImageryProvider(imageMap)
        _viewer.value?.imageryLayers.addImageryProvider(labelMap)
        console.log("高德地图加载成功")
    }
}) 
</script>