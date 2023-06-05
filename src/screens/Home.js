import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, TouchableOpacity, ScrollView } from 'react-native';
import CheckBox from '../components/checkbox/CheckBox';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteAllTodos, toggleState, deleteSingleTodo } from '../redux/actions/todoAction';
import TaskDetails from '../components/TaskDetails';


export default function Home() {
    const [selectedTodo, setSelectedTodo] = useState(-1);
    const dispatch = useDispatch();

    const todoList = useSelector((store) => store.todos);

    const addNewTodo = (todo) => {
        dispatch(addTodo(todo));
    };

    const deleteAllTodoItem = () => {
        dispatch(deleteAllTodos());
    };

    const updateState = (index) => {
        dispatch(toggleState(index));
    };

    return (
        <View style={styles.container}>

            <Text style={styles.taskDetails}>Task Details</Text>

            {selectedTodo >= 0 && <TaskDetails todo={todoList[selectedTodo]} />}

            <View style={styles.tasklist}>
                <Text>Task List</Text>
                <TouchableOpacity 
                onPress={() => {setSelectedTodo(-1);
                deleteAllTodoItem()}}>
                    <Image source={require('../components/deletebtn/dustbin.png')} />
                </TouchableOpacity>
            </View>

            <View>
                <ScrollView>
                    {todoList.map((todo, index) => (
                        <View style={styles.todo} key={index}>
                            
                            {/* checkbox */}
                            <TouchableOpacity onPress={() => { updateState(index) }}>
                                <CheckBox value={todo.done} />
                            </TouchableOpacity>
                            
                            {/* tittle of task list*/}
                            <TouchableOpacity onPress={()=>setSelectedTodo(index)}>
                                <Text>{todo.tittle}</Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </ScrollView>
            </View>

            <Button onPress={() => { }} title='Add Task' style={styles.addbtn}></Button>
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
    },
    todo: {
        flexDirection: "row",
        margin: 10,
        padding: 10,
        backgroundColor: "#f0f0f0",
    },
    addbtn: {

    }
});