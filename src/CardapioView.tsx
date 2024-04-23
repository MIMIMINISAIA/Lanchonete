import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { FlatList, Image, ImageBackground, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

interface Itens {
    id: string;
    nomeProduto: string;
    descricao: string;
    valor: string;
    imagem: any;
};



const dados: Itens[] = [
    {
        id: "1",
        nomeProduto: "𝐒𝐩𝐢𝐝𝐞𝐫 𝐁𝐮𝐫𝐠𝐮𝐞𝐫",
        descricao: "pão vermelho, hamburguer de picanha, chedar duplo, alface, tomate, maionese, molho barbecue, cebola caramelizada",
        valor: "25,00",
        imagem: require('../src/assets/images/spider.png')
    },

    {
        id: "2",
        nomeProduto: "𝐓𝐨𝐧𝐲 𝐁𝐮𝐫𝐠𝐮𝐞𝐫",
        descricao: "pão , hamburguer de picanha, queijo mussarela, alface, tomate, maionese, molho barbecue",
        valor: "24,00",
        imagem: require('../src/assets/images/tony.png')
    },

    {
        id: "3",
        nomeProduto: "𝐇𝐮𝐥𝐤 𝐁𝐮𝐫𝐠𝐮𝐞𝐫",
        descricao: "pão verde, 3 hamburguer, chedar, queijo mussarela, alface, tomate, maionese, molho barbecue, cebola caramelizada",
        valor: "40,00",
        imagem: require('../src/assets/images/hulk.png')
    },

    {
        id: "4",
        nomeProduto: "𝐍𝐚𝐭𝐚𝐬𝐡𝐚 𝐁𝐮𝐫𝐠𝐮𝐞𝐫",
        descricao: "pão vermelho, hamburguer, chedar, alface, tomate, maionese, molho barbecue",
        valor: "30,00",
        imagem: require('../src/assets/images/natasha.png')
    },

    {
        id: "5",
        nomeProduto: "𝐓𝐡𝐨𝐫 𝐁𝐮𝐫𝐠𝐮𝐞𝐫",
        descricao: "pão azul, hamburguer duplo, mussarela, alface, tomate, maionese",
        valor: "20,00",
        imagem: require('../src/assets/images/thor.png')
    },

    {
        id: "6",
        nomeProduto: "𝐏𝐞𝐭𝐞𝐫 𝐁𝐮𝐫𝐠𝐮𝐞𝐫",
        descricao: "pão, hamburguer, bacon, mussarela, chedar, tomate, maionese, molho barbecue",
        valor: "16,00",
        imagem: require('../src/assets/images/petter.png')
    },
    {
        id: "7",
        nomeProduto: "𝐆𝐫𝐨𝐨𝐭 𝐁𝐮𝐫𝐠𝐮𝐞𝐫",
        descricao: "pão, hamburguer triplo, maionese, molho barbecue, cebola caramelizada, molho madeira, bacon, alface, tomate, cebola",
        valor: "23,00",
        imagem: require('../src/assets/images/groot.png')
    },

    {
        id: "8",
        nomeProduto: "𝐖𝐚𝐧𝐝𝐚 𝐁𝐮𝐫𝐠𝐮𝐞𝐫",
        descricao: "pão vermelho, hamburguer, ketchup, tomate, maionese, molho barbecue",
        valor: "15,00",
        imagem: require('../src/assets/images/wanda.png')
    },

    {
        id: "9",
        nomeProduto: "𝐂𝐚𝐩𝐢𝐭𝐚𝐨 𝐁𝐮𝐫𝐠𝐮𝐞𝐫",
        descricao: "pão, hamburguer duplo, chedar duplo, alface, tomate, maionese, molho barbecue, cebola caramelizada",
        valor: "35,00",
        imagem: require('../src/assets/images/capitao.png')
    },

    {
        id: "10",
        nomeProduto: "𝐂𝐨𝐜𝐚 𝐂𝐨𝐥𝐚",
        descricao: "boa demais, pretinha, deliciosa, maravilhosa, perfeita",
        valor: "8,00",
        imagem: require('../src/assets/images/coca.png')
    },

    {
        id: "11",
        nomeProduto: "𝐒𝐮𝐜𝐨 𝐓𝐫𝐨𝐩𝐢𝐜𝐚𝐥",
        descricao: "suco de maracuja, morango, laranja, água de coco, água, limão",
        valor: "10,00",
        imagem: require('../src/assets/images/suco.png')
    },

    {
        id: "12",
        nomeProduto: "𝐃𝐫𝐢𝐧𝐤 𝐝𝐚 𝐥𝐨𝐮𝐜𝐮𝐫𝐚",
        descricao: "tekila, vodka, cerveja, laranja, wisk, gim, pinga, cachaça",
        valor: "16,00",
        imagem: require('../src/assets/images/drink2.png')
    },

    {
        id: "13",
        nomeProduto: "𝐒𝐩𝐫𝐢𝐭𝐞",
        descricao: "Sprite, geladinha, deliciosa, gostinho de limão, maravilhosa",
        valor: "5,00",
        imagem: require('../src/assets/images/sprite.png')
    },

    {
        id: "14",
        nomeProduto: "𝐒𝐮𝐜𝐨 𝐖𝐚𝐧𝐝𝐚",
        descricao: "suco de morango intenso, muitooo morango, água, açucar",
        valor: "10,00",
        imagem: require('../src/assets/images/sucomorango.png')
    },

    {
        id: "15",
        nomeProduto: "𝐁𝐞𝐛𝐢𝐝𝐚 𝐇𝐮𝐥𝐤",
        descricao: "suco verde como o hulk!! hortelã, rucula, pepino, melão, limão, couve, agua de coco, gengibre",
        valor: "10,00",
        imagem: require('../src/assets/images/detox.png')
    },


];

const renderItem = ({ item }: { item: Itens }) => (
    <TouchableOpacity style={styles.item}>
        <Text style={styles.text1}>{item.nomeProduto}</Text>
        
        <View style={{flexDirection: 'row-reverse'}}>
         <Text style={styles.text2}>{item.descricao}</Text>
        <Image source={item.imagem} style={styles.image} />
        </View>
       
       
            <Text style={styles.text3}>{item.valor}</Text>
        

        <TouchableOpacity>
            <Text style={styles.botton}>Adicionar no carrinho</Text> 
            
        </TouchableOpacity>
     

       




    </TouchableOpacity>
);






function Cardapio(): React.JSX.Element {

    const navigation = useNavigation(); 
    return (
        <View style={styles.container} >
            <ImageBackground source={require('./assets/images/fundo.png')} style={styles.fundo}>
                <StatusBar backgroundColor="#F2D22E" barStyle="light-content" />
                <View style={styles.header}>

                    <TouchableOpacity>
                        <Image source={require('./assets/images/mais.png')} style={styles.mais} />
                    </TouchableOpacity>
                    <Image source={require('./assets/images/logo.png')} style={styles.logo} />
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
                    data={dados}
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

                <TouchableOpacity onPress={() => navigation.navigate('cardapio')}>
                    <Image
                        source={require('./assets/images/menu.png')}
                        style={styles.footerIcon}
                    />
                </TouchableOpacity >


                <TouchableOpacity onPress={() =>navigation.navigate('Carrinho')}>
                    <Image source={require('./assets/images/pedidos.png')}
                        style={styles.footerIcon}
                    />

                </TouchableOpacity>

                <TouchableOpacity onPress={() =>navigation.navigate('CadastroCliente')}>
                    <Image source={require('./assets/images/marvel.png')}
                        style={styles.footerIcon2}
                    />

                </TouchableOpacity>


                <TouchableOpacity onPress={() =>navigation.navigate('Listagem')}>
                    <Image source={require('./assets/images/home.png')}
                        style={styles.footerIcon}
                    />

                </TouchableOpacity>

                <TouchableOpacity onPress={() =>navigation.navigate('Cardapio')}>
                    <Image source={require('./assets/images/hero.png')}
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
    image: {
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



})
export default Cardapio;