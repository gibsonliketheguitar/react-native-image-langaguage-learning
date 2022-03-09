import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface IBtn {
    title: string,
    handleOnPress?: () => void,
}

export default function Btn({ title, handleOnPress }: IBtn) {
    return (
        <TouchableOpacity style={styles.button} onPress={handleOnPress}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: '100%',
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#506CCB",
        paddingVertical: 16,
        borderRadius: 8,
        overflow: 'hidden',
    },
    title: {
        textAlign: "center",
        fontSize: 12,
        color: "#FFFFFF",
    }
});