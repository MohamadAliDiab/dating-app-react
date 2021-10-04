import * as React from 'react'
import { View, StyleSheet} from 'react-native'
import { RadioButton, Text } from 'react-native-paper'
import { theme } from '../core/theme'

const MyComponent = ({ errorText, description, ...props }) => {
 

  return (
    <RadioButton.Group onValueChange={newValue => props.setGender(newValue)} value={props.Gender}>
      <View style={styles.container}>
      <View>
      <Text>Gender</Text>
      </View>
      <View >
        <Text>{props.text1}</Text>
        <RadioButton value={props.value1} />
      </View>
      <View>
        <Text>{props.text2}</Text>
        <RadioButton value={props.value2} />
      </View>
      {description && !errorText ? (
        <Text style={styles.description}>{description}</Text>
      ) : null}
      {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
      </View>
    </RadioButton.Group>
  )
}

export default MyComponent

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 12,
    flexDirection: "row",
    justifyContent:'space-between',

  },
  input: {
    backgroundColor: theme.colors.surface,
  },
  description: {
    fontSize: 13,
    color: theme.colors.secondary,
    paddingTop: 8,
  },
  error: {
    fontSize: 13,
    color: theme.colors.error,
    paddingTop: 8,
  },
})
