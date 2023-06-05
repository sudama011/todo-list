import { Text, StyleSheet } from 'react-native';

export default function TaskDetails({todo}) {
    return (
        <>
            <Text >Task Tittle</Text>
            <Text style={styles.taskTitle}>{todo.tittle}</Text>
            <Text>Descriptions</Text>
            <Text style={styles.description}>{todo.description}</Text>
        </>
    )
}

const styles = StyleSheet.create({
    taskTitle: {
        marginVertical: 10,
        fontWeight: 'bold',
        fontSize: 25,
    },
    description: {
        marginVertical: 10,
        fontWeight: 'bold',
    },
});
