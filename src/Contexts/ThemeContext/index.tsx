import { createContext, useEffect, useState } from "react"
import { GenericContextComponent } from "../Contexts";
import { Theme, ThemeContextInterface } from "./ThemeContext";
import Themes from "./Themes";

const defaultValues: ThemeContextInterface = {
  getTheme: (themeId = "default") => Themes.filter(theme => theme.themeId === themeId)[0],
  updateTheme: (themeId, pallete) => {},
  themes: Themes,
  currentTheme: {primary: '', accent: '', secondary: '', text: '', text_fade: '', themeId: ''},
  setCurrentTheme: () => {}
}

export const ThemeCtx = createContext<ThemeContextInterface>(defaultValues);

const ThemeContext = ({children}: GenericContextComponent) => {
  const [themePallete, setThemePallete] = useState<Theme[]>(Themes);
  const [currentTheme, setCurrentTheme] = useState<Theme>({primary: '', accent: '', secondary: '', text: '', text_fade: '', themeId: ''});

  const values: ThemeContextInterface = {
    getTheme: (themeId = "default") => Themes.filter(theme => theme.themeId === themeId)[0],
    updateTheme: (themeId, pallete) => {
      const result = Themes.filter(theme => theme.themeId === themeId);
      if(!result.length) {
        themePallete.push(pallete)
      } else {
        // # Need to update or add the theme
        // removing existing pallete
        const NewTheme = Themes.filter(theme => theme.themeId !== themeId)
        // adding new pallete
        NewTheme.push(pallete)
        setThemePallete(NewTheme)
      }
    },
    currentTheme,
    setCurrentTheme,
    themes: Themes
  }
  
  useEffect(() => {
    const htmlDoc = document.querySelector('html');
    if(!htmlDoc || currentTheme.themeId === "") return;
    
    if(htmlDoc.className !== ""){
      htmlDoc.className = '';
    }

    htmlDoc.classList.add(currentTheme.themeId);
  }, [currentTheme])

  useEffect(() => {
    setCurrentTheme(values.getTheme())
  }, [])

  return (
    <ThemeCtx.Provider value={values}>
      {children}
    </ThemeCtx.Provider>
  )
}

export default ThemeContext