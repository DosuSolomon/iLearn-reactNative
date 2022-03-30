import React from 'react'
import { View } from 'react-native';
import { COLORS } from '../constants'

function ProgressBar({ containerStyle, progress}) {
  return (
    <View 
    style={{
      width: "100%",
      height: 13,
      borderRadius: 10,
      backgroundColor: COLORS.white,
      ...containerStyle
    }}>
      <View 
        style={{
          height: "100%",
          width: progress,
          position: "absolute",
          borderRadius: 10,
          backgroundColor: COLORS.primary
        }}
      />
    </View>
  )
}

export default ProgressBar
