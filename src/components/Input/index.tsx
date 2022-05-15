import { forwardRef, InputHTMLAttributes } from "react"
import InputCheckbox from "./Checkbox";
import InputFile from "./File";
import InputText from "./Text";

interface Props extends InputHTMLAttributes<HTMLInputElement>{

}
const Input = forwardRef<HTMLInputElement, Props>(({type, ...props}: Props, ref) => {
  switch (type) {
    case 'file':
      return <InputFile {...props} />
    case 'checkbox':
      return <InputCheckbox {...props}/>
    default:
      return <InputText {...props} ref={ref}/>
  }
})

export default Input