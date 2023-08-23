import { CustomButtonProps } from '@/types'
import React from 'react'

const CustomButtom = ({title,containerStyles,handleClick,btnType}:CustomButtonProps) => {
  return (
  <div>
    <button
      disabled={true}
      type= {btnType ||"button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
    <span className={`flex-1`}>{title}</span>
    
    </button>
  </div>
  )
}

export default CustomButtom