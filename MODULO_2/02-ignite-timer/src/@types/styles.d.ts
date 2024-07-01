// Dentro desse arquivo só poderá ter códigos totalmente typescript;
// Este é um arquivo de definição de tipos (só tem tipagem);

import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof defaultTheme

// sobrescrevendo tipagem de uma biblioteca existente;
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
