import {StyleSheet, View,Text ,Image} from 'react-native'


export default function CheckBox({value}) {
  return (
    <View style={{ ...styles.container, backgroundColor: value ? '#7f56d9' : '#ffffff' }}>
      {value && <Image source={require('../assets/tickIcon.png')}/>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'ffffff',
    height: 24,
    width: 24,
    borderRadius:70,
    border : 1,
    borderColor: 'grey',
    margin:8
  }
});