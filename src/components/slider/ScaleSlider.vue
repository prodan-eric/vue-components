<script lang="ts" setup>
import { computed } from '@vue/reactivity'
import { onMounted, ref, watch } from 'vue'
const VAL_PX_RATIO = 5


const props = withDefaults(defineProps<{
  pickerWidth: number
  leftBarColor: string
  rightBarColor: string
  pickerColor: string
  min: number
  max: number
  step: number}>(),{

  min: -10,
  max: 100,
  step: 1,
  pickerWidth: 20,
  leftBarColor: 'black',
  rightBarColor: 'gray',
  pickerColor: 'lightblue',
})

const sliderWidth = computed(()=>{
  return (props.max-props.min)*VAL_PX_RATIO
})

const computedProps = computed(()=>{
  return props.min+props.max+props.step+props.pickerWidth+props.leftBarColor+props.rightBarColor+props.pickerColor
})

const leftBar = ref(null)
const slider = ref(null)
const picker = ref(null)
const valueDisplay = ref(null)
const rightBar = ref(null)

const selectedValue = ref((props.max!-props.min!)*props.step!/2)

const updateBar = (event: Event) =>{  
  const newValue = (Number((event.target as HTMLInputElement).value)-props.min!)/props.step!;
  if  (newValue<props.min!*props.step!){
    (leftBar.value! as HTMLElement).style.width = `${0}px`
  } else if (newValue>props.max!*props.step!){
    (leftBar.value! as HTMLElement).style.width = `${(props.max!-props.min!)*VAL_PX_RATIO!}px`
  } else {
    (leftBar.value! as HTMLElement).style.width = `${newValue*VAL_PX_RATIO!}px`;
  }
}

const setSliderStyle = () =>{
  selectedValue.value = (props.max-props.min)*props.step/2;
  (slider.value! as HTMLElement).style.width = `${sliderWidth.value}px`;
  (picker.value! as HTMLElement).style.width = `${props.pickerWidth}px`;
  (valueDisplay.value! as HTMLElement).style.marginLeft = `${props.pickerWidth}px`;
  (leftBar.value! as HTMLElement).style.backgroundColor = (props.leftBarColor as string);
  (rightBar.value! as HTMLElement).style.backgroundColor = (props.rightBarColor as string);
  (picker.value! as HTMLElement).style.backgroundColor = (props.pickerColor as string);
  (leftBar.value! as HTMLElement).style.width = `${((selectedValue.value)*VAL_PX_RATIO!)/props.step!}px`;
}

watch(computedProps,()=>setSliderStyle())
onMounted(()=>setSliderStyle())


const startSliding = () =>{
  window.addEventListener('mousemove', resize)
  window.addEventListener('mouseup', stopSliding)
}
const resize = (event: MouseEvent) =>{
    const selectionWidth = event.clientX-(leftBar.value! as HTMLElement).offsetLeft;
    const newValue = (Math.round(selectionWidth/VAL_PX_RATIO!)+props.min!);
    if(newValue>=props.min!&&newValue<=props.max!)selectedValue.value = newValue*props.step!;
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
             :min="props.min!*props.step!"
             :max="props.max!*props.step!"/>
    </div>
  </div>
</template>

<style scoped>

.percentage-input{
  margin-top: 20px;
  width: 60px;
  height: 20px;
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