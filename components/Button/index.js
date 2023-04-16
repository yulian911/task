import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Text } from 'native-base'
import { COLORS, FONTS, Icons } from '../../constans/theme'
import Icon from '../Icon/Icon'
import { View } from 'react-native'
import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const Button = ({ mode, onPress, text, icon, type, color }) => {
  let buttonStyle, textStyle, iconStyle

  switch (mode) {
    case 'outline':
      buttonStyle = {
        position: 'relative',
        borderWidth: 1,
        borderColor: COLORS.secondary,
        padding: 8,
        borderRadius: 10,
        // flexDirection: 'row',
        // alignItems: 'center',
        width: '80%',
      }
      textStyle = {
        color: COLORS.outlineText,
        // marginLeft: width / 5,
        textAlign: 'center',
        fontFamily: FONTS.regular,
        fontSize: 11,
      }
      break
    case 'filled':
      buttonStyle = {
        backgroundColor: COLORS.tertiary,
        padding: 9,
        borderRadius: 10,
        width: '80%',
      }
      textStyle = { color: 'white', fontFamily: FONTS.medium, fontSize: 13 }
      break
    case 'simple':
      buttonStyle = {
        padding: 10,
      }
      textStyle = { color: COLORS.outlineText, fontSize: 10 }
      break
    default:
      buttonStyle = {
        padding: 10,
      }
      textStyle = { color: 'black' }
      break
  }

  if (icon) {
    iconStyle = { color: color }
  }

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      {icon && (
        <View
          style={{
            position: 'absolute',
            top: 9,
            left: 10,
            width: 25,
            height: 25,
            backgroundColor: 'white',
            borderRadius: 100,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon type={type} name={icon} size={17} style={iconStyle} />
        </View>
      )}
      <Text style={textStyle} textAlign={'center'}>
        {text}
      </Text>
    </TouchableOpacity>
  )
}
export default Button
