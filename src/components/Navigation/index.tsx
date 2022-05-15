import "./navigation.css";
import HotstarLogo from '../../public/Hotstar.svg'
import { MutableRefObject, useCallback, useContext, useRef } from "react";
import { AuthCtx } from "../../Contexts/AuthContext";
import { Link } from "react-router-dom";
import { BiChevronDown, BiExit } from "react-icons/bi";

const Navigation = () => {
  const {state, details} = useContext(AuthCtx);
  const menuBoxRef = useRef() as MutableRefObject<HTMLMenuElement>
  const toggleProfileClickClassName = useCallback(() => {
    menuBoxRef.current.classList.toggle('active')
  }, []);
  return (
    <div className="navigation-bar">
      <img src={HotstarLogo} className="logo-img" alt="Hotstar" />
      <div className="right-area">
        {state === "authenticated" ? (
          <ul className="profile-menu-container">
            <li onClick={toggleProfileClickClassName} className="">{details?.name} <BiChevronDown /></li>
            <menu ref={menuBoxRef}>
              <li><Link to="/sign-out"><BiExit />Sign out</Link></li>
            </menu>
          </ul>
        ) : null}
      </div>
    </div>
  )
}
export default Navigation