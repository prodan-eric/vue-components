import { SLIDER_WIDTH } from "./constants"
export const getWidthPercentage = (value: number) =>{
    const percentage = (value*100)/SLIDER_WIDTH
    if(percentage>=0&&percentage<=100) return Math.round(percentage)
  }