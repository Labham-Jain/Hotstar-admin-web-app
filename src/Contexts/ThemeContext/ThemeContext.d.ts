type UpdateTheme = (themeId: string, pallete: Theme) => void;
type GetTheme = (themeId?: string) => Theme;

export interface Theme {
  primary: string;
  secondary: string;
  accent: string;
  accent_alt: string;
  text: string,
  text_fade: string,
  themeId: string;
}

export interface ThemeContextInterface {
  themes: Theme[],
  updateTheme: UpdateTheme,
  getTheme: GetTheme,
  currentTheme: Theme;
  setCurrentTheme: (theme: Theme) => any
}