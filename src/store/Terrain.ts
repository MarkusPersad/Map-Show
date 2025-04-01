import { defineStore } from "pinia";
import { ref } from "vue";

export const useTerrain = defineStore("useTerrain", () => {
  const terrainShow = ref<boolean>(false);
  const terrainChange = () => {
    terrainShow.value = !terrainShow.value;
  };
  return {
    terrainShow,
    terrainChange,
  };
});
