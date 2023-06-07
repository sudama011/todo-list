import React, { useState } from 'react';
import { StyleSheet, Modal, Text, View, Image, TouchableOpacity} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteAllTodos, completeTodo } from '../redux/actions/todoAction';
import TaskDetails from '../components/TaskDetails';
import TaskInput from '../components/TaskInput';
import AddTaskBtn from '../components/AddTaskBtn';
import TodoList from '../components/TodoList';

export default function HomeScreen() {
    const [taskInputModalVisible, setTaskInputModalVisible] = useState(false);
    const [selectedTodo, setSelectedTodo] = useState(-1);

    const dispatch = useDispatch();
    const todos = useSelector((store) => store.todos);

    const handleAddTodo = (todo) => {
        dispatch(addTodo(todo));
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

            <Modal
                style={{margin:30,height:30}}
                animationType="slide"
                transparent={false}
                visible={taskInputModalVisible}
                >
                <TaskInput setTaskInputModalVisible={setTaskInputModalVisible} handleAddTodo={handleAddTodo} />
            </Modal>

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

            <View style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <TodoList todos={todos}
                        onComplete={(id) => handleCompleteTodo(id)}
                        setSelectedTodo={(index) => setSelectedTodo(index)}
                    />
                </View>
                
                 <AddTaskBtn setTaskInputModalVisible={setTaskInputModalVisible} />
            </View>

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