/* import { StatusBar } from 'expo-status-bar'; */
import React from 'react';
import { Button, ImageBackground, StyleSheet, Text, View } from 'react-native';



export default function App() {
    return (
        <ImageBackground style={styles.backgroundContainer}>
            <View>
                <Text style={styles.text}>Lobby</Text>
            </View>

            <View style={styles.box}><Text>Trabalho 1</Text></View>
            <View style={styles.box}><Text>Trabalho 2</Text></View>
            <View style={styles.box}><Text>Trabalho 3</Text></View>
            
            <View style={styles.botoes}>
                <Button title="Sair" color="red"/>
                <Button title="Selecionar" color="green" />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        width: null,
        height: null,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#4a4a48",
    },
    text: {
        fontSize: 90,
        color: 'white',
    },
    box: {
        width: 350,
        height: 80,
        backgroundColor: '#808080',
        alignItems: 'center',
    },
    sair: {
        backgroundColor: 'red',
        color: 'red',
    },
    botoes: {
        flexDirection: "row",
        margin: 100,
    },
});


  