import { HTMLAttributes } from "react"
import './section.css';
interface Props extends HTMLAttributes<HTMLDivElement> {
  
}

const Section = ({title, className, children, ...props}: Props) => {
  return (
    <section className={`section`} {...props}>
      <h3 className='section-heading'>{title}</h3>
      <div className={`section-wrapper ${className || ''}`}>
        {children}
      </div>
    </section>
  )
}

export default Section