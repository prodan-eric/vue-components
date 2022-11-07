<script setup lang="ts">
import { ref } from 'vue'
import SideBar from './components/SideBar.vue'
const selectedComponent = ref('Slider')
const selectComponent = (event: MouseEvent) => selectedComponent.value===(event.target! as HTMLElement).innerHTML?
                                               selectedComponent.value='' : 
                                               selectedComponent.value=(event.target! as HTMLElement).innerHTML

</script>

<template>
    <div class="side-bar">
        <SideBar @component-click="selectComponent"/>
    </div>
    <div class="components">
        <router-view/>
    </div>
</template>

<style>
  .side-bar{
    width: fit-content;
    margin-bottom: 100px;
  }
</style>

