import React, { useState } from "react";
import { Image, ImageBackground, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from "react-native";

function LoginLanchonete(): JSX.Element {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function login() {
        const dados = {
            email: email,
            password: password,
        }
        console.log(dados);
    }







    return (

        <View style={styles.container}>
            <ImageBackground source={require('./assets/images/fundo.png')} style={styles.fundo}>


                <View style={styles.card}>
                    <Image source={require('./assets/images/logo.png')} style={styles.logo2} />
                    <Text style={styles.title}>𝑳𝒐𝒈𝒊𝒏</Text>


                    <TextInput
                        style={styles.input}
                        placeholder="E-mail:"
                        placeholderTextColor="#151413"
                        onChangeText={(textEmail) => setEmail(textEmail)}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Senha:"
                        placeholderTextColor="#151413"
                        onChangeText={(textPassword) => setPassword(textPassword)}
                        secureTextEntry
                    />
                    <TouchableOpacity style={styles.button}
                        onPress={() => { login() }}>
                        <Text style={styles.buttonText}>𝑬𝒏𝒕𝒓𝒂𝒓</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text style={styles.forgotPassword}>Não Possui uma conta? Cadastre-se!</Text>
                    </TouchableOpacity>
                </View>



            </ImageBackground>

            

        </View >

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',


    },

    logo: {
        width: 80,
        height: 80,
        marginBottom: 20,
        marginTop: -150

    },
    // #3B9ABF #F2D22E  #BF2C2C
    card: {
        backgroundColor: '#BF2C2C',
        width: 300,
        borderRadius: 50,
        padding: 30,
        elevation: 5,
        shadowColor: 'rgba(o,o,o,o,.3)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },

    title: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: "center",
        color: "#151413"
    },

    input: {
        backgroundColor: '#F2D22E',
        height: 40,
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: 'black'

    },

    button: {
        backgroundColor: '#3B9ABF',
        height: 40,
        borderRadius: 30,


    },

    buttonText: {
        color: 'black',
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 40,

    },

    forgotPassword: {
        color: "black",
        textAlign: 'center',
        marginTop: 10,

    },
    fundo: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        alignItems: 'center'


    },
    logo2: {
        width: 80,
        height: 80,
        marginLeft: 80

    },
   




})

export default LoginLanchonete;