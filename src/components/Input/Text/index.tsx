import { forwardRef, HTMLAttributes } from 'react'
import './input.css'
interface Props extends HTMLAttributes<HTMLInputElement> {}

const InputText = forwardRef<HTMLInputElement, Props>(({title, placeholder, className, ...props}: Props, ref) => {
  return (
    <div className='input-box'>
      <p className='input-title'>{title ? title : placeholder}</p>
      <div className='input-wrapper'>
        <input {...props} placeholder={placeholder} className={`input ${className || ''}`} ref={ref}/>
      </div>
    </div>
  )
})

export default InputText