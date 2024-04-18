import axios from "axios";
import React, { useEffect, useState } from "react";
import { FlatList, Image, ImageBackground, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";




interface Produtos {
    id: string;
    nome: string;
    descricao: string;
    valor: string;
    images: string;
}

function Listagem(): React.JSX.Element {
    const [produtos, setProdutos] = useState<Produtos[]>([]);
    const [erro, setErro] = useState<string>("");
    const [count, setCount] = useState(0);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get<Produtos[]>('http://10.137.11.231:8000/api/produtos/all');
                setProdutos(response.data);
                console.log(response.data);

            } catch (error) {
                setErro("Ocorreu um erro");
                console.log(error)
            }
        }
        fetchData();
    }, []);

    const renderItem = ({ item }: { item: Produtos }) => (
        <TouchableOpacity style={styles.item} 
        activeOpacity={0.7}
        onPress={() => {
          setCount(count + 1)
        }}>
            <Text style={styles.text1}>{item.nome}</Text>
            <Text style={styles.text2}>{item.descricao}</Text>
            <Text style={styles.text3}>{item.valor}</Text>
          { /* <Image source={item.images} style={styles.img} />  */}
        </TouchableOpacity>
    );



    return (
        <View style={styles.container} >
            <ImageBackground source={require('../assets/images/fundo.png')} style={styles.fundo}>
                <StatusBar backgroundColor="#F2D22E" barStyle="light-content" />
                <View style={styles.header}>

                    <TouchableOpacity>
                        <Image source={require('../assets/images/mais.png')} style={styles.mais} />
                    </TouchableOpacity>
                    <Image source={require('../assets/images/logo.png')} style={styles.logo} />
                    <Text style={styles.headerText2}>𝑪𝒂𝒓𝒅𝒂́𝒑𝒊𝒐 𝑯𝒆𝒓𝒐𝒊𝒄𝒐</Text>

                    {/* <View>
                        <View style={styles.pesquisa}>
                            <Image source={require('./assets/images/lupa.png')} style={styles.lupa}
                            />

                            <TextInput style={styles.input}
                                placeholder="pesquisar"
                                placeholderTextColor={'black'} />


                        </View>
                    </View> */}




                </View>


                <FlatList
                    showsHorizontalScrollIndicator={true}
                    data={produtos}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}


                />

            </ImageBackground>
            {/* <View>
                        <View style={styles.pesquisa}>
                            <Image source={require('./assets/images/lupa.png')} style={styles.lupa}
                            />

                            <TextInput style={styles.input}
                                placeholder="pesquisar"
                                placeholderTextColor={'black'} />


                        </View>
                    </View> */}

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
        flex: 1,
        backgroundColor: '#3B9ABF'



    },
    item: {
        backgroundColor: '#BF2C2C',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        fontFamily: 'lucida grande',
        borderRadius: 70,
        borderWidth: 4,
        borderColor: '#3B9ABF'




    },
    header: {
        backgroundColor: '#F2D22E',
        alignItems: 'center',
        paddingVertical: 20
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'

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
    mais: {
        width: 17,
        height: 17,
        left: 150

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
    img: {
        width: 150,
        height: 150,
        alignItems: 'flex-end',
        left: 5,
        borderRadius: 20
    },
    text1: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'yellow'



    },
    text2: {
        fontSize: 15,
        fontWeight: '600',
        fontFamily: 'fonts.regular',
        width: 150,
        marginLeft: 10,
        marginTop: 5

    },
    text3: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Bahnschrift SemiBold SemiConden',
        color: '#F2D22E',
        marginTop: 10,
        left: 15,
    },
    fundo: {
        flex: 1,
        justifyContent: 'center'
    },
    botton: {
        fontSize: 15,
        fontWeight: 'bold',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F2D22E',
        height: 25,
        width: 150,
        borderRadius: 10,
        marginLeft: 150,
        marginTop: -25


    },
    botton2: {
        fontSize: 20,
        fontWeight: 'bold',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F2D22E',
        height: 30,
        width: 35,
        borderRadius: 10,
        marginLeft: 260,
        marginTop: -30


    }
    // pesquisa: {
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //     marginTop: 1,
    //     width: '90%'

    // },
    // lupa: {
    //     marginLeft: 20,
    //     marginTop: 10,
    //     width: 30,
    //     height: 30

    // },
    // input: {
    //     marginBottom: 1,
    //     backgroundColor: '#3B9ABF',
    //     borderRadius: 20,
    //     borderWidth: 1,
    //     borderColor: 'black',
    //     width: 300,
    //     height: 50

    // }



});


export default Listagem;