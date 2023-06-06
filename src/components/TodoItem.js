import { View, Text,StyleSheet,TouchableOpacity } from 'react-native';
import CheckBox from '../components/CheckBox';

export default function TodoItem({ todo, onComplete, setSelectedTodo }){
    return (
        <View style={styles.todo}>

            <TouchableOpacity onPress={() => {onComplete() }}>
                <CheckBox value={todo.completed} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setSelectedTodo()}>
                <Text>{todo.tittle}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    todo: {
        flexDirection: "row",
        margin: 10,
        padding: 10,
        backgroundColor: "#f0f0f0",
        borderRadius: 16,
    }
});