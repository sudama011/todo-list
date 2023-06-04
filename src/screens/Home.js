import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteAllTodos, deleteTodo } from '../redux/actions/todoAction';

export default function Home() {
    const dispatch = useDispatch();

    const todos = useSelector((store) => store.todos);

    const add = (todo) => {
        dispatch(addTodo(todo));
    };

    const deleteAll = () => {
        dispatch(deleteAllTodos());
    };

    return (
        <View style={styles.container}>

            <Text style={styles.details}>Task Details</Text>

            <Text >Task Tittle</Text>
            <Text style={styles.title}>THis is tittle</Text>

            <Text>Descriptions</Text>
            <Text style={styles.description}>this is a Descriptions</Text>

            <View style={styles.tasklist}>
                <Text>Task List</Text>
                <TouchableOpacity onPress={deleteAll}>
                    <Text>deleteAll</Text>
                </TouchableOpacity>
            </View>

            <View>
                {todos.map((todo, index) => (
                    <View style={styles.todo}>
                        <TouchableOpacity style={{ marginRight: 10 }}
                            onPress={() => { }}>
                            <Text>checkbox</Text>
                        </TouchableOpacity>
                        <Text>{todo.tittle}</Text>
                    </View>
                ))}
            </View>

            <View style={styles.addbtn}>
                <TouchableOpacity onPress={() => { }}>
                    <Text>Add Task</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
        padding: 10
    },
    details: {
        margin: 40,
        fontWeight: 'bold',
        alignSelf: 'center',
        fontSize: 15,
    },
    title: {
        marginTop: 10,
        marginBottom: 10,
        fontWeight: 'bold',
        fontSize: 25,
    },
    description: {
        marginTop: 10,
        marginBottom: 10,
        fontWeight: 'bold',
    },
    tasklist: {
        flexDirection: "row",
        marginTop: 10,
        marginBottom: 10,
        justifyContent: "space-between"
    },
    todo: {
        flexDirection: "row",
        margin: 10,
        padding: 10,
        backgroundColor: "#eee",
    },
    addbtn: {
        
    }
});