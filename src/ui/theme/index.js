import { createMuiTheme } from '@material-ui/core/styles'
import { spacing } from '@material-ui/system'

const palette = {
  tonalOffset: 0.2,
  background: { paper: '#fff', default: '#000' },
  grey: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
    A700: '#616161',
    A100: '#d5d5d5',
    A400: '#303030',
    A200: '#aaaaaa',
  },
  // text: {
  //   primary: 'rgba(255, 255, 255, 0.87)',
  //   secondary: 'rgba(0, 0, 0, 0.54)',
  //   disabled: 'rgba(0, 0, 0, 0.38)',
  //   hint: 'rgba(0, 0, 0, 0.38)',
  // },
  secondary: {
    main: '#26A69A',
    light: 'rgb(81, 183, 174)',
    dark: 'rgb(26, 116, 107)',
    contrastText: '#000000',
  },
  common: { black: '#000', white: '#fff' },
  // error: {
  //   light: '#e57373',
  //   main: '#f44336',
  //   dark: '#d32f2f',
  //   contrastText: '#fff',
  // },
  type: 'dark',
  // action: {
  //   hoverOpacity: 0.08,
  //   hover: 'rgba(0, 0, 0, 0.08)',
  //   selected: 'rgba(0, 0, 0, 0.14)',
  //   disabledBackground: 'rgba(0, 0, 0, 0.12)',
  //   disabled: 'rgba(0, 0, 0, 0.26)',
  //   active: 'rgba(0, 0, 0, 0.54)',
  // },
  primary: {
    main: '#000',
    light: 'rgb(77, 77, 77)',
    dark: 'rgb(23, 23, 23)',
    contrastText: '#64FFDA',
  },
}

const themeName = 'v2-theme'

export default createMuiTheme({
  palette,
  themeName,
  typography: {
    useNextVariants: true,
    fontFamily: 'Inconsolata',
  },
  spacing,
})
