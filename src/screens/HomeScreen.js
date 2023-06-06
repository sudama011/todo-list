import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, Button, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteAllTodos, completeTodo } from '../redux/actions/todoAction';
import TaskDetails from '../components/TaskDetails';
import AddTaskBtn from '../components/AddTaskBtn';
import TodoList from '../components/TodoList';

export default function HomeScreen() {
    const [tittle, setTittle] = useState('');
    const [description, setDescription] = useState('');

    const [selectedTodo, setSelectedTodo] = useState(-1);

    const dispatch = useDispatch();
    const todos = useSelector((store) => store.todos);

    const handleAddTodo = () => {
        if (tittle.trim() && description.trim()) {
            const newTodo = {
                tittle: tittle,
                description: description,
                completed: false,
            };
            dispatch(addTodo(newTodo));
            setTittle('');
            setDescription('');
        }
    };

    const handleCompleteTodo = id => {
        dispatch(completeTodo(id));
    };

    const handleDeleteAllTodos = () => {
        dispatch(deleteAllTodos());
    };

    return (
        <View style={styles.container}>

            <Text style={styles.taskDetails}>Task Details</Text>

            {selectedTodo >= 0 && <TaskDetails todo={todos[selectedTodo]} />}

            <View style={styles.tasklist}>
                <Text>Task List</Text>
                <TouchableOpacity
                    onPress={() => {
                        setSelectedTodo(-1);
                        handleDeleteAllTodos();
                    }}>
                    <Image source={require('../assets/dustbin.png')} />
                </TouchableOpacity>
            </View>

            <View>
                <TodoList todos={todos}
                    onComplete={(id) => handleCompleteTodo(id)}
                    setSelectedTodo={(index) => setSelectedTodo(index)}
                />
            </View>

            <AddTaskBtn />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
        padding: 15,
    },
    taskDetails: {
        marginVertical: 30,
        fontWeight: 'bold',
        alignSelf: 'center',
        fontSize: 15,
    },
    tasklist: {
        flexDirection: "row",
        marginVertical: 10,
        justifyContent: "space-between"
    }
});