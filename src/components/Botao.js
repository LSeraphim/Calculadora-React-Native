import { Text, View, TouchableHighlight, StyleSheet } from "react-native";

export default props => {
    return(
            <TouchableHighlight>
                <Text style={estilos.botao}>9</Text>
            </TouchableHighlight>
    )
}

const estilos = StyleSheet.create({
    botao : {
        fontSize: 40,
        width: 100,
        height: 100,
        padding: 20,
        backgroundColor: "#f0f0f0",
        textAlign: "center",
        borderWidth: 1,
        borderColor: "#888",
        
    }
});
