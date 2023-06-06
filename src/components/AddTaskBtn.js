import { Text, StyleSheet, TouchableOpacity, Image, View } from "react-native"

export default function AddTaskBtn({}) {
  return (
    <View style={styles.container}>
        <TouchableOpacity
          onPress={() => { }} style={styles.addbtn}>

          <Image source={require('../assets/plus.png')} style={styles.plus}/>
          <Text>Add Task</Text>

        </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#f0f0f0",
    height: 60,
    margin: 10,
    padding: 10,
    borderRadius: 16,
  },
  addbtn: {
    flex: 1,
    flexDirection:'row',
    alignItems: "center",
  },
  plus:{
    marginHorizontal: 20,
  }
});