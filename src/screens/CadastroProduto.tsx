import React, { useState } from "react";
import { Image, ImageBackground, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import axios from 'axios';

const CadastroProduto: React.FC = () => {
    const [produtos, setProdutos] = useState<Produto[]>([]);
    const [nome, setNome] = useState<string>('');
    const [valor, setValor] = useState<string>('');
    const [descricao, setDescricao] = useState<string>('');
    const [imagem, setImagem] = useState<any>('');

    const cadastrarProduto = async () => {
        try {
            const formData = new FormData();
            formData.append('nome', nome);
            formData.append('valor', valor);
            formData.append('descricao', descricao);
            formData.append('imagem', {
                uri: imagem,
                type: 'image/jpeg',
                name: new Date() + '.jpg'
            });

            const response = await axios.post('http://10.137.11.231:8000/api/produtos', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            console.log(response.data)
        } catch (error) {
            console.log(error);
        }
    }

    const abrirCamera = () => {
        const options = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000
        };

        launchCamera(options, response => {
            if (response.didCancel) {
                console.log('cancelado pelo usuario');
            } else if (response.error) {
                console.log('erro ao abrir a camera');
            } else {
                let imageUri = response.uri || response.assets?.[0]?.uri;
                setImagem(imageUri);
                console.log(imageUri);

            }

        });
    }

    const selecionarImagem = () => {
        const options = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000
        };

        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('cancelado pleo usuario');
            } else if (response.error) {
                console.log('erro ao abrir a galeria');
            } else {
                let imageUri = response.Uri || response.assets?.[0]?.uri;
                setImagem(imageUri);
            }
        });
    }
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#F2D22E" barStyle="light-content" />
            <View style={styles.header}>


                <Image source={require('../assets/images/logo.png')} style={styles.logo} />
                <Text style={styles.headerText2}>𝑪𝒂dastro 𝑯𝒆𝒓𝒐𝒊𝒄𝒐</Text>

                <Text style={styles.headerTexto}></Text>

            </View>
            
            <ImageBackground source={require('../assets/images/fundo.png')} style={styles.fundo}>   
            
           
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome do produto"
                    value={nome}
                    onChangeText={setNome} />

                <TextInput
                    style={styles.input}
                    placeholder="valor"
                    value={valor}
                    onChangeText={setValor} />

                <TextInput
                    style={styles.input}
                    placeholder="descrição"
                    value={descricao}
                    onChangeText={setDescricao}
                    multiline />
                <View style={styles.alinhamentoImageSelecionada}>
                    {imagem ? <Image source={{ uri: imagem }} style={styles.imageSelecionada} /> : null}

                </View>
                <TouchableOpacity style={styles.imageButton} onPress={selecionarImagem}>
                    <Text style={styles.imageButtonText}>Selecionar imagem</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.imageButton} onPress={abrirCamera}>
                    <Text style={styles.imageButtonText}>Tirar foto</Text>

                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={cadastrarProduto}>
                    <Text style={styles.buttonText}>Cadastrar Produto</Text>

                </TouchableOpacity>
            </View>
          
            </ImageBackground>

            <View style={styles.footer}>

                <TouchableOpacity>
                    <Image
                        source={require('../assets/images/menu.png')}
                        style={styles.footerIcon}
                    />
                </TouchableOpacity>


                <TouchableOpacity>
                    <Image source={require('../assets/images/pedidos.png')}
                        style={styles.footerIcon}
                    />

                </TouchableOpacity>

                <TouchableOpacity>
                    <Image source={require('../assets/images/marvel.png')}
                        style={styles.footerIcon2}
                    />

                </TouchableOpacity>


                <TouchableOpacity>
                    <Image source={require('../assets/images/home.png')}
                        style={styles.footerIcon}
                    />

                </TouchableOpacity>

                <TouchableOpacity>
                    <Image source={require('../assets/images/hero.png')}
                        style={styles.footerIcon}
                    />

                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        backgroundColor: '#F2D22E',
        paddingVertical: 10,
        alignItems: 'center'
    },
    headerTexto: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    form: {
        padding: 40,
        backgroundColor: '#F2D22E',
        marginBottom: 10,
        borderRadius: 110

    },
    input: {
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 10
    },
    imageButton: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10,
    },
    imageButtonText: {

        color: 'white',
        fontWeight: 'bold'

    },
    imageSelecionada: {
        width: 100,
        height: 100,
        resizeMode: 'cover',
        borderRadius: 50,
        marginBottom: 10,

    },
    alinhamentoImageSelecionada: {
        alignItems: 'center'

    },
    button: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    fundo: {
        flex: 1,
        justifyContent: 'center'

    },
    headerText2: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'blue'

    },
    logo: {
        width: 100,
        height: 100,


    },
    footer: {
        borderTopWidth: 0.2,
        backgroundColor: '#3B9ABF',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10


    },
    footerIcon: {
        width: 30,
        height: 30

    },
    footerIcon2: {
        width: 35,
        height: 35

    },

});

export default CadastroProduto;