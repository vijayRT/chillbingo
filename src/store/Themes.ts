
import Theme, { createTheme } from 'react-native-theming';
import create from 'zustand'
// type themeStore = {
//   themes: any,
//   activeTheme: any,
//   setactiveTheme: () => void
// }
export const useThemeStore = create((set, get) => ({

  themes: {
    neonCity: createTheme({
      backgroundColor: '#F7138E',
      textColor: 'white',
      overlayTextColor:'white',
      backgroundImage: require('../../assets/neoncity.jpg'),
      logoColor1: 'white',
      logoColor2: '#F4A227',
      fontFamily: 'NeonFuture',
      textShadowColor:'white',
      overlayColor:'#0b0023'

    }, 'neonCity'),

    sakura: createTheme({
      backgroundColor: '#4a1f28',
      textColor: 'white',
      overlayTextColor:'#4a1f28',
      backgroundImage: require('../../assets/cherryblossom.jpg'),
      logoColor1: 'white',
      logoColor2: '#4a1f28',
      fontFamily: 'cherryblossom',
      textShadowColor:'white',
      overlayColor:'#f0c9cd'
    }, 'sakura'),
  },
  activeTheme: createTheme({
    backgroundColor: '#F7138E',
    textColor: 'white',
    overlayTextColor:'white',
    backgroundImage: require('../../assets/neoncity.jpg'),
    logoColor1: 'white',
    logoColor2: '#F4A227',
    fontFamily: 'NeonFuture',
    textShadowColor:'white',
    overlayColor:'#0b0023'
  }, 'neonCity'),
  setActiveTheme: (themeName) => {
    const theme = get().themes[themeName]
    set({ activeTheme: theme })
    const activeTheme = get().activeTheme
    
  }
}))
