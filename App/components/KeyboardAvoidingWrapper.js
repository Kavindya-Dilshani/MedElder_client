
import { View, Text } from 'react-native'
import React, { children } from 'react'

import { KeyboardAvoidingView,ScrollView,TouchableWithoutFeedback, Keyboard } from 'react-native'

const KeyboardAvoidingWrapper = ({children}) => {
  return (
    <KeyboardAvoidingView style={{flex:1}}>
        <ScrollView>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                {children}
            </TouchableWithoutFeedback>
        </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default KeyboardAvoidingWrapper;