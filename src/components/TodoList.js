import { FlatList, StyleSheet } from 'react-native';
import TodoItem from './TodoItem';

export default function TodoList({ todos, onComplete, setSelectedTodo }) {
    return (
        <FlatList
            data={todos}
            renderItem={({ item, index }) => (
                <TodoItem todo={item}
                    index={index}
                    onComplete={() => onComplete(index)}
                    setSelectedTodo={() => setSelectedTodo(index)}
                />
            )}
            keyExtractor={(item, index) => index.toString()}
        />
    );
};


