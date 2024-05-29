import { View, Text, StyleSheet } from 'react-native';

export default props => {
    return (
        <View style={estilos.visor}>
            <Text style={estilos.valorVisor}>10</Text>
        </View>
    )
}

const estilos = StyleSheet.create ({
    visor: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'flex-end',
        backgroundColor: "rgba(0,0,0,0.8)",
    },

    valorVisor: {
        fontSize: 60,
        color: "#fff",
    }
})