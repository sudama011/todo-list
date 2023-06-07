import { useState } from 'react';
import { Text, StyleSheet, TextInput, View, TouchableOpacity, Image } from 'react-native';

export default function TaskInput({ setTaskInputModalVisible, handleAddTodo }) {

    const [tittle, setTittle] = useState('');
    const [description, setDescription] = useState('');

    const handleSaveTodo = () => {
        if (tittle.trim() && description.trim()) {
            const newTodo = {
                tittle: tittle,
                description: description,
            };
            setTaskInputModalVisible(false);
            handleAddTodo(newTodo);
        }
    };

    return (
        <View style={styles.container}>
            
            <Text>Task Tittle</Text>
            <TextInput style={styles.input} value={tittle} onChangeText={(text) => { setTittle(text) }} placeholder='Enter Task Tittle' />

            <Text>Task Description</Text>
            <TextInput style={styles.input} value={description} onChangeText={(text) => { setDescription(text) }} placeholder='Enter Task Description' multiline={true} />

            <View style={styles.btns}>
                <TouchableOpacity style={styles.saveBtn} onPress={() => handleSaveTodo()}>
                    <Text style={styles.saveText}>Save</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cancelBtn} onPress={() => { setTaskInputModalVisible(false); }}>
                    <Image source={require('../assets/cancel.png')} style={styles.cancelImg} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        padding: 10,
        justifyContent: 'center',
    },
    input:{
        width: '100%',
        backgroundColor: '#c0edd1',
        margin:10,
        marginBottom: 30,
        padding: 15,
        borderRadius:16,
    },
    btns: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    saveBtn: {
        justifyContent: 'center',
        marginHorizontal: 20,
        backgroundColor: '#f0f0f0',
        borderRadius: 16,
    },
    saveText: {
        marginHorizontal: 10,
        fontWeight: 'bold',
        fontSize: 30,
    },
    cancelBtn: {
        marginHorizontal: 20
    },
    cancelImg: {
        width: 40,
        height: 40,
    }
});
