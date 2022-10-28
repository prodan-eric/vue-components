import { sliderWidth } from "./config"
import { step, min, max } from "./config"
export const getWidthPercentage = (value: number) =>{
    const percentage = (value*max)/sliderWidth
    if(percentage>=min&&percentage<=max) return Math.round(percentage)*step
  }