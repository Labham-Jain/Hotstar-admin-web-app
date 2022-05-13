import "./navigation.css";
import HotstarLogo from '../../public/Hotstar.svg'
const Navigation = () => {
  return (
    <div className="navigation-bar">
      <img src={HotstarLogo} className="logo-img" alt="Hotstar" />
    </div>
  )
}
export default Navigation