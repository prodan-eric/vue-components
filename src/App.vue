<script setup lang="ts">
import SideBar from './components/SideBar.vue'
import DatePickerConfig from './components/date-picker/DatePickerConfig.vue'
import PanelContainerConfig from './components/panel-container/PanelContainerConfig..vue'
import RenderButtonConfig from './components/render-button/RenderButtonConfig.vue'
import { ref } from 'vue'
import SliderConfig from './components/slider/SliderConfig.vue'
const selectedComponent = ref('')
const selectComponent = (event: MouseEvent) => selectedComponent.value = (event.target! as HTMLElement).innerHTML;

</script>

<template>
    <div class="side-bar">
        <SideBar @component-click="selectComponent"/>
    </div>
    <div class="components">
        <DatePickerConfig v-if="selectedComponent==='Date Picker'"/>
        <PanelContainerConfig v-if="selectedComponent==='Panel Container'"/>
        <RenderButtonConfig v-if="selectedComponent==='Render Button'"/>
        <SliderConfig v-if="selectedComponent==='Slider'"/>
    </div>
</template>

<style>
  .side-bar{
    width: fit-content;
    margin-bottom: 100px;
  }
</style>

