import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input_text: {
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        paddingHorizontal: 5,
        minWidth: 200,
        margin: 5,
    },
    label: {
        marginBottom: 20,
        fontFamily: 'Roboto',
    },
    item: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        backgroundColor: 'wheat'
    },
    footer: {
        width: '100%',
        backgroundColor: 'red',
        borderTopWidth: 2,
    }
})

export default styles;