<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import {getWidthPercentage} from './functions'
import {SLIDER_WIDTH, PICKER_WIDTH} from './constants'

const leftBar = ref(null)
const slider = ref(null)
const picker = ref(null)
const displayValue = ref(null)

const selectedValue = ref()

onMounted(()=>{
  (slider.value! as HTMLElement).style.width = `${SLIDER_WIDTH}px`;
  (leftBar.value! as HTMLElement).style.width = `${SLIDER_WIDTH/2}px`;  
  (picker.value! as HTMLElement).style.width = `${PICKER_WIDTH}px`;
  selectedValue.value = getWidthPercentage((leftBar.value! as HTMLElement).offsetWidth);
  (displayValue.value! as HTMLElement).style.marginLeft = `${PICKER_WIDTH*1.5}px`;
})

const startSliding = () =>{
  window.addEventListener('mousemove', resize)
  window.addEventListener('mouseup', stopResizing)
}
const resize = (event: MouseEvent) =>{
  const selectionWidth = event.clientX-(leftBar.value! as HTMLElement).offsetLeft;
  (leftBar.value! as HTMLElement).style.width = `${selectionWidth}px`
  const widthPercentage = getWidthPercentage(selectionWidth)
  if(widthPercentage)selectedValue.value = widthPercentage
}
const stopResizing = () =>{
    window.removeEventListener('mousemove', resize)
    window.removeEventListener('mouseup', stopResizing)
}

</script>

<template>
  <div class="slider-wrapper">
    <div class="scale-slider" ref="slider">
        <div class="left-bar" ref="leftBar"></div>
         <span @mousedown="startSliding" class="picker" ref="picker"></span>
        <div class="right-bar" ref="rightBar"></div>
    </div>
    <div class="display-value" ref="displayValue"><p>{{selectedValue}}%</p></div>
  </div>
</template>

<style scoped>

.display-value{
  margin-left: 0;
}

.slider-wrapper{
  display: grid;
  justify-content: center;
}
.scale-slider{
  display: flex;
  align-items: center;
}

.left-bar{
  background-color: rgb(35, 35, 35);
  width: 250px;
  height: 10px;
  border-radius: 5px 0px 0px 5px;
}

.right-bar{
  background-color: darkgray;
  height: 10px;
  border-radius: 0px 5px 5px 0px;
  flex-grow: 1;
}

.picker{
  width: 20px;
  height: 50px;
  background-color: lightblue;
  border-radius: 5px;
}

.picker:hover{
  background-color: rgb(89, 133, 217);
  cursor: pointer;
}

</style>