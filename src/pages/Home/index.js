import React from 'react';
import { ImageBackground, StyleSheet, Image, View, Text, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import logo from '../Home/logo.png' /* dimenção de icon */
import Icon from 'react-native-vector-icons/Ionicons';

//Area de teste
/* import React from 'react';
import { SafeAreaView, Text, View } from 'react-native'; */

const { width: WIDTH } = Dimensions.get('window')
export default () => {

  
  return(<>
    <ImageBackground style={styles.backgroundContainer}>

      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.logoText}>GERENCIADOR DE OPERAÇÃO</Text>
      </View>

      <View style={styles.inputContainer}>
        <Icon name={'person-outline'} size={28} color={'rgba(255, 255, 255, 0.7)'}
        style={styles.inputIcon} />
        <TextInput
          style={styles.input} 
          placeholder={'Matricula'}
          placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
          underlineColorAndroid='transparent'
        />
      </View>

      <View style={styles.inputContainer}>
        <Icon name={'ios-lock-open-outline'} size={28} color={'rgba(255, 255, 255, 0.7)'}
        style={styles.inputIcon} />
        <TextInput
          style={styles.input} 
          placeholder={'Senha'}
          secureTextEntry={true}
          placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
          underlineColorAndroid='transparent'
        />

        <TouchableOpacity style={styles.btnEye}>
          <Icon name={'ios-eye-outline'} size={26} color={'rgba(255, 255, 255, 0.7)'}
           />

        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.btnLogin}>
        <Text style={styles.text}>Entrar</Text>
      </TouchableOpacity>

      <Text style={styles.desenvolvido}>Direitos reservados | DevWol.com</Text>

    </ImageBackground>


    {/* //Area de teste
      <SafeAreaView>
      <View>
        <Text>
        Hellow Word
        </Text>
      </View>
      </SafeAreaView> */}
  </>);
}
//export default App; (não estava sendo ultilizada)

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#4a4a48",
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },
  logo: {
    width: 120,
    height: 120,
  },
  logoText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
    fontWeight: 'bold',
    marginTop: 10,
  },
  inputContainer: {
  marginTop: 10,
  },
  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 45,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    color: 'white',
    marginHorizontal: 25,
  },
  inputIcon: {
    position: 'absolute',
    top: 10,
    left: 37,
  },
  btnEye: {
    position: 'absolute',
    top: 8,
    right: 37,
  },
  btnLogin: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 45,
    fontSize: 16,
    backgroundColor: '#5aab5f',
    justifyContent: 'center',
    marginTop: 20,
    },
  text: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  desenvolvido: {
    color: 'white',
    position: 'absolute',
    flex:0.1,
    bottom: 0,
    flexDirection:'row',
  },
})