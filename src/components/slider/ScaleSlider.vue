<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import {sliderWidth, pickerWidth, leftBarColor, rightBarColor, pickerColor, step, min, max} from './config'


const leftBar = ref(null)
const slider = ref(null)
const picker = ref(null)
const valueDisplay = ref(null)
const rightBar = ref(null)

const selectedValue = ref()

const updateBar = (event: Event) =>{  
  const newValue = (Number((event.target as HTMLInputElement).value))*5;
  const unselectedRange = sliderWidth-(sliderWidth-newValue);
  (leftBar.value! as HTMLElement).style.width = `${unselectedRange}px`;
}

onMounted(()=>{
  (slider.value! as HTMLElement).style.width = `${sliderWidth}px`;
  (leftBar.value! as HTMLElement).style.width = `${sliderWidth/2}px`;
  (picker.value! as HTMLElement).style.width = `${pickerWidth}px`;
  (valueDisplay.value! as HTMLElement).style.marginLeft = `${pickerWidth}px`;
  (leftBar.value! as HTMLElement).style.backgroundColor = leftBarColor;
  (rightBar.value! as HTMLElement).style.backgroundColor = rightBarColor;
  (picker.value! as HTMLElement).style.backgroundColor = pickerColor;
  selectedValue.value = (leftBar.value! as HTMLElement).offsetWidth/5;
})

const startSliding = () =>{
  window.addEventListener('mousemove', resize)
  window.addEventListener('mouseup', stopSliding)
}
const resize = (event: MouseEvent) =>{
    const selectionWidth = event.clientX-(leftBar.value! as HTMLElement).offsetLeft;
    const newValue = (Math.round(selectionWidth/5)+min);
    if(newValue>=min&&newValue<=max)selectedValue.value = newValue;
    (leftBar.value! as HTMLElement).style.width = `${selectionWidth}px`;
}
const stopSliding = () =>{
    window.removeEventListener('mousemove', resize)
    window.removeEventListener('mouseup', stopSliding)
}

</script>

<template>
  <div class="slider-wrapper">
    <div class="scale-slider" ref="slider">
        <div class="left-bar" ref="leftBar"></div>
         <span @mousedown="startSliding" class="picker" ref="picker"></span>
        <div class="right-bar" ref="rightBar"></div>
    </div>
    <div class="display-value" ref="valueDisplay">
      <input type="number" class="percentage-input" 
             @input="updateBar" 
             :value="selectedValue"
             :min="min"
             :max="max"/>
    </div>
  </div>
</template>

<style scoped>

.percentage-input{
  margin-top: 20px;
  width: 45px;
  border-radius: 5px;
}

.display-value{
  display: grid;
  justify-content: center;
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
  cursor: pointer;
}

</style>