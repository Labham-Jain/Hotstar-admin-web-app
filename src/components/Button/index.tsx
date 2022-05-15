import { ButtonHTMLAttributes } from "react"
import './button.css'
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  
};

const Button = ({className, children, ...props}: Props) => {
  return (
    <button className={`button ${className||''}`} {...props}>
      {children}
    </button>
  )
}

export default Button