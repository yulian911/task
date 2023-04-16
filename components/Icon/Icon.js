import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Icon = ({ type, name, size, style }) => {
  const fontSize = 24
  const Tag = type
  return <>{type && name && <Tag name={name} size={size || fontSize} style={style} />}</>
}

export default Icon

const styles = StyleSheet.create({})
