import { useContext } from "react";
import { Link } from "react-router-dom"
import { ThemeCtx } from "../../Contexts/ThemeContext";
import { CardElement, CardProps } from "./Card"
import './card.css';

const Card = ({ Icon,title, to }: CardProps): CardElement => {
  const {currentTheme} = useContext(ThemeCtx);

  return (
    <Link to={to} className="card">
      <div className="card-icon">
        {<Icon size={96} color={currentTheme.text} />}
      </div>
      <h4 className="card-title">{title}</h4>
    </Link>
  )
}

export default Card