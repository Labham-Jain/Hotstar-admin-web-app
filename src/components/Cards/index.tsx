import { HTMLAttributes } from 'react'
import { CardElement } from '../Card/Card';
import './cards.css';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: CardElement | CardElement[] | null;
}

const Cards = ({children = null, className}: Props) => {
  return (
    <div className={`cards ${className || ''}`}>
      {children}
    </div>
  )
}

export default Cards