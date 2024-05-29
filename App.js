import { Text, SafeAreaView, StyleSheet, View } from 'react-native'; 

import Botao from "./src/components/Botao";
import Visor from './src/components/Visor';

export default props => {
  adicionarDigito = n => {
    console.warn(n)
  }

  limparMemoria = () => {
    console.warn("limpar a memória")
  }

  setOperacao = operacao => {
    console.warn(operacao)
  }
  
    return(
        <SafeAreaView style={estilos.container}>
          <Visor />
          <View style={estilos.botao}>
            <Botao label="AC" onClick={limparMemoria} triplo/>
            <Botao label="/" onClick={setOperacao} laranja/>
            <Botao label="7" onClick={adicionarDigito}/>
            <Botao label="8" onClick={adicionarDigito}/>
            <Botao label="9" onClick={adicionarDigito}/>
            <Botao label="*" onClick={setOperacao} laranja/>
            <Botao label="4" onClick={adicionarDigito}/>
            <Botao label="5" onClick={adicionarDigito}/>
            <Botao label="6" onClick={adicionarDigito}/>
            <Botao label="-" onClick={setOperacao} laranja/>
            <Botao label="1" onClick={adicionarDigito}/>
            <Botao label="2" onClick={adicionarDigito}/>
            <Botao label="3" onClick={adicionarDigito}/>
            <Botao label="+" onClick={setOperacao} laranja/>
            <Botao label="0" onClick={adicionarDigito} duplo/>
            <Botao label="." onClick={setOperacao}/>
            <Botao label="=" onClick={setOperacao} laranja/>
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