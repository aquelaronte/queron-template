export type Theme = 'light' | 'dark'

export interface IThemeState {
    theme: Theme
}

export interface IThemeActions {
    setTheme: (theme: Theme) => void
}

export type ThemeStore = IThemeState & IThemeActions
