import React from "react";
import {  FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";

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
    nomeProduto: "Spider Burguer", 
    descricao: "pão vermelho, hamburguer de picanha, chedar duplo, alface, tomate, maionese, molho barbecue, cebola caramelizada",
    valor: "25,00",
    imagem: require('../src/assets/images/spider.png')
    },

    {id: "2",
     nomeProduto: "Tony Burguer", 
     descricao: "pão , hamburguer de picanha, queijo mussarela, alface, tomate, maionese, molho barbecue", 
     valor: "24,00", 
     imagem: require('../src/assets/images/tony.png')
    },

    {id: "3", 
    nomeProduto: "Hulk Burguer", 
    descricao: "pão verde, 3 hamburguer, chedar, queijo mussarela, alface, tomate, maionese, molho barbecue, cebola caramelizada", 
    valor: "25,00", 
    imagem: require('../src/assets/images/hulk.png')
    },

    {id: "4", 
    nomeProduto: "Natasha Burguer", 
    descricao: "pão vermelho, hamburguer, chedar, alface, tomate, maionese, molho barbecue", 
    valor: "25,00", 
    imagem: require('../src/assets/images/natasha.png')
    },

    {id: "5",
     nomeProduto: "Thor Burguer", 
     descricao: "pão azul, hamburguer duplo, mussarela, alface, tomate, maionese", 
     valor: "25,00", 
     imagem: require('../src/assets/images/thor.png')
    },

    {id: "6", 
    nomeProduto: "Peter Burguer", 
    descricao: "pão vermelho, hamburguer, alface, tomate, maionese, molho barbecue",
    valor: "25,00", 
    imagem: require('../src/assets/images/homenaranha.jpeg')
    },
    {id: "7",
     nomeProduto: "Groot Burguer", 
     descricao: "pão marrom, hamburguer, maionese, molho barbecue, cebola caramelizada, molho madeira", 
     valor: "25,00", 
     imagem: require('../src/assets/images/homenaranha.jpeg')
    },

    {id: "8", 
    nomeProduto: "Wanda Burguer", 
    descricao: "pão vermelho, hamburguer, ketchup, tomate, maionese, molho barbecue",
     valor: "25,00", 
     imagem: require('../src/assets/images/homenaranha.jpeg')
    },

    {id: "9",
     nomeProduto: "Capitão Burguer", 
     descricao: "pão, hamburguer duplo, chedar duplo, alface, tomate, maionese, molho barbecue, cebola caramelizada", 
     valor: "25,00", 
     imagem: require('../src/assets/images/homenaranha.jpeg')
    },

    {id: "10",
     nomeProduto: "Coca cola", 
     descricao: "boa demais", 
     valor: "25,00", 
     imagem: require('../src/assets/images/coca.png')
    },

    {id: "11",
     nomeProduto: "Suco tropical", 
     descricao: "suco de maracuja, morango e laranja", 
     valor: "25,00", 
     imagem: require('../src/assets/images/suco.png')
    },

    {id: "12", 
    nomeProduto: "Drink da loucura", 
    descricao: "tekila, vodka, cerveja, laranja", 
    valor: "25,00", 
    imagem: require('../src/assets/images/drink.png')
    },

    {id: "13", 
    nomeProduto: "Sprite", 
    descricao: "delicinha", 
    valor: "25,00", 
    imagem: require('../src/assets/images/sprite.png')
   },

    {id: "14", 
    nomeProduto: "Suco wanda", 
    descricao: "suco de morango intenso", 
    valor: "25,00", 
    imagem: require('../src/assets/images/sucomorango.png')
    },

    {id: "15", 
    nomeProduto: "Bebida hulk",
    descricao: "suco verde, detox", 
    valor: "25,00", 
    imagem: require('../src/assets/images/detox.png')
    }, 

];

const renderItem = ({item}: {item: Itens})=>(
    <TouchableOpacity style={styles.item}>
        <Text>{item.nomeProduto}</Text>
        <Text>{item.descricao}</Text>
        <Text>{item.valor}</Text>
        <Image source={item.imagem} style={styles.image} />




    </TouchableOpacity>
);






function Cardapio(): React.JSX.Element {
    return (
        <View style={ styles.container} >
            <StatusBar backgroundColor="#F2D22E" barStyle="light-content"/>
            <View style={styles.header}>
                <Text style={styles.headerText}>Marvel Burguer</Text>
                {/* <img src={require('./assets/images/marvel.png')} /> */}
            </View>
            <FlatList
            showsHorizontalScrollIndicator={true}
            data={dados}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
        />
        <View style={styles.footer}>
            <TouchableOpacity>
                <Image
                    source={require('./assets/images/menu.png')}
                    style={ styles.footerIcon}
                />
            </TouchableOpacity>


            <TouchableOpacity>
                <Image  source={require('./assets/images/pedidos.png')}
                style={styles.footerIcon}
                />
                
            </TouchableOpacity>


            <TouchableOpacity>
                <Image   source={require('./assets/images/home.png')}
                style={styles.footerIcon}
                />
                
            </TouchableOpacity>

            <TouchableOpacity>
                <Image   source={require('./assets/images/hero.png')}
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
        

    },
    item: {
        backgroundColor: '#BF2C2C',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        fontFamily: 'lucida grande', 
        borderRadius: 20


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
    image: {
        width: 150,
        height: 150,
        alignItems: 'stretch'
    }


})
export default Cardapio;