import { Text, SafeAreaView, StyleSheet, View } from 'react-native'; 

import Botao from "./src/components/Botao";

export default props => {
    return(
        <SafeAreaView style={estilos.container}>
          <View style={estilos.botao}>
            <Botao label="AC" triplo/>
            <Botao label="/" laranja/>
            <Botao label="7"/>
            <Botao label="8"/>
            <Botao label="9"/>
            <Botao label="*" laranja/>
            <Botao label="4"/>
            <Botao label="5"/>
            <Botao label="6"/>
            <Botao label="-" laranja/>
            <Botao label="1"/>
            <Botao label="2"/>
            <Botao label="3"/>
            <Botao label="+" laranja/>
            <Botao label="0" duplo/>
            <Botao label="."/>
            <Botao label="=" laranja/>
          </View>
        </SafeAreaView>
    )
}

const estilos = StyleSheet.create ({
  container : {
    flex: 1,
    backgroundColor: "#f5fcff",
    justifyContent: "flex-end",
  },
  botao : {
    flexDirection: "row",
    flexWrap:"wrap",
  }
})