import AuthContext from "./AuthContext"
import { GenericContextComponent } from "./Contexts"
import ThemeContext from "./ThemeContext"

const Contexts = ({children}: GenericContextComponent) => {
  return (
    <>
      <AuthContext>
        <ThemeContext>
          {children}
        </ThemeContext>
      </AuthContext>
    </>
  )
}

export default Contexts