<template></template>
<script setup lang="ts">
import { UrlTemplateImageryProvider, WebMapTileServiceImageryProvider, WebMercatorTilingScheme } from 'cesium';
import { TIANDITU} from "../assets/default.json"
import { inject, onMounted } from 'vue';
import { CesiumViewer } from '../types';

const _viewer = inject<CesiumViewer>("_viewer")
const imageMap = new UrlTemplateImageryProvider({
    url: TIANDITU.BASEURL+TIANDITU.IMAGERYURL+TIANDITU.TOKEN,
    subdomains: TIANDITU.SUBDOMAINS,
    tilingScheme:new WebMercatorTilingScheme(),
    maximumLevel:18,
    enablePickFeatures:false,
})
const iboMap = new UrlTemplateImageryProvider({
    url:TIANDITU.BASEURL+TIANDITU.IBOIMAGERYURL+TIANDITU.TOKEN,
    subdomains:TIANDITU.SUBDOMAINS,
    tilingScheme:new WebMercatorTilingScheme(),
    maximumLevel:18,
    enablePickFeatures:false,
})
const labelMap = new WebMapTileServiceImageryProvider({
    url:TIANDITU.BASEURL+TIANDITU.LABELIMAGERYURL+TIANDITU.TOKEN,
    layer:"img",
    style:"default",
    format:"image/jpeg",
    tileMatrixSetID:"GoogleMapsCompatible",
    subdomains:TIANDITU.SUBDOMAINS,
    tilingScheme:new WebMercatorTilingScheme(),
    maximumLevel:18,
})
onMounted(()=>{
    if(_viewer?.value){
        _viewer.value?.imageryLayers.addImageryProvider(imageMap)
        _viewer.value?.imageryLayers.addImageryProvider(iboMap)
        _viewer.value?.imageryLayers.addImageryProvider(labelMap)
        console.log("天地图加载成功")
    }
}) 
</script>