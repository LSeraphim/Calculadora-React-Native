import {useState} from 'react';
import {Text, View, TextInput, Button} from 'react-native'

export default () => {
  const[n1, setN1] = useState('');
  const[n2, setN2] = useState('');
  const[resultado, setResultado] = useState('');
  
  function soma(){
    setResultado(Number(n1) + Number(n2));
  }

  return(
    <View>
      <Text>Calculadora</Text>
      <TextInput value={n1} onChangeText={setN1}
        placeholder="Digite um número"/>
      <TextInput value={n2} onChangeText={setN2}
        placeholder="Digite um número"/>
      <Button title="+" onPress={soma} />
      <Text>Resultado: {resultado}</Text>
    </View>
  )
}