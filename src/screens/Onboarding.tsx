import { View, Text, SafeAreaView, ImageBackground, ImageBackgroundProps } from 'react-native'
import React from 'react'
import { Bg } from '../constants/assets'
import { Sizes } from '../constants/sizes'

const Onboarding = () => {
  return (
    <SafeAreaView >
        <ImageBackground source={Bg as ImageBackgroundProps} resizeMode='cover' style={{
            height: Sizes.height,
            width: Sizes.width
        }} >
            {/* <View style /> */}
        </ImageBackground>
    </SafeAreaView>
  )
}

export default Onboarding