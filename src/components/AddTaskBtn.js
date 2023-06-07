import { Text, StyleSheet, TouchableOpacity, Image, View } from "react-native"

export default function AddTaskBtn({ setTaskInputModalVisible, setSelectedTodo }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => { setTaskInputModalVisible(true) }} style={styles.addbtn}>

        <Image source={require('../assets/plus.png')} style={styles.plus} />
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
    margin: 10,
    backgroundColor: "#f0f0f0",
    height: 50,
    marginHorizontal: 16,
    borderRadius: 16,
  },
  addbtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: "center",
  },
  plus: {
    marginHorizontal: 20,
  }
});