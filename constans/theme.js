import assets from './assets'
import {
  AntDesign,
  Fontisto,
  FontAwesome,
  Ionicons,
  Feather,
  MaterialCommunityIcons,
  Entypo,
  MaterialIcons,
  SimpleLineIcons,
  Octicons,
  Foundation,
  EvilIcons,
  FontAwesome5,
} from '@expo/vector-icons'

const COLORS = {
  primary: '#241F44',
  secondary: '#483E89',
  tertiary: '#9386E9',
  white: '#ffffff',
  black: '#000000',
  outlineText: '#EDEDED',
  blue: '#3975EB',
  gmail: '#D94F3D',
}

const FONTS = {
  medium: 'AeonikMedium',
  regular: 'AeonikRegular',
}

const Icons = {
  MaterialCommunityIcons,
  MaterialIcons,
  Ionicons,
  Feather,
  FontAwesome,
  FontAwesome5,
  AntDesign,
  Entypo,
  SimpleLineIcons,
  Octicons,
  Foundation,
  EvilIcons,
  Fontisto,
}

const SHADOWS = {
  small: {
    shadowColor: '#483E89',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
}

export { FONTS, assets, COLORS, SHADOWS, Icons }
