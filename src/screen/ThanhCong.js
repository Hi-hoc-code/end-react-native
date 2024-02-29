import { StyleSheet, Text, View, Image, FlatList, ScrollView } from 'react-native'
import React from 'react'


const DATA = [
    {
        id: '1',
        title: 'Americano',
        image: require('../image/list1.png')
    },
    {
        id: '2',
        title: 'Cappuccino',
        image: require('../image/list2.png')
    },
    {
        id: '3',
        title: 'Latte',
        image: require('../image/list3.png')
    },

    {
        id: '4',
        title: 'Flat White',
        image: require('../image/list4.png')
    },
    {
        id: '5',
        title: 'Raf',
        image: require('../image/list5.png')
    },
    {
        id: '6',
        title: 'Espresso',
        image: require('../image/list6.png')
    },
];
const Item = ({ title, image }) => (
    <View style={styles.item}>
        <Image source={image} style={{ width: 120 }} />
        <Text style={styles.title}>{title}</Text>
    </View>
);

const ThanhCong = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ flexDirection: 'row', paddingHorizontal: 25, marginTop: 50, marginStart: 8 }}>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={{ fontSize: 14, color: '#9c9c9c' }}>Welcome</Text>
                        <Text style={{ fontSize: 18, color: '#001833' }}>Alex</Text>
                    </View>
                    <View style={{ flex: 1 }}></View>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={require('../image/shoping.png')} style={{ width: 26, height: 26, marginRight: 20 }} />
                        <Image source={require('../image/persion.png')} style={{ width: 26, height: 26 }} />
                    </View>
                </View>
                <View style={styles.card}>
                    <Text style={{ color: "#D8D8D8", fontSize: 22, fontWeight: 'bold', marginStart: 8 }}>Select your coffee</Text>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <FlatList
                            data={DATA}
                            renderItem={({ item }) => <Item title={item.title} image={item.image} />}
                            keyExtractor={item => item.id}
                            numColumns={2}
                            style={{ marginStart: 8, marginTop: 15 }}
                        />
                        <View style={styles.tab}>
                            <Image source={require('../image/home.png')} style={{ width: 32, height: 32 }} />
                            <Image source={require('../image/gift.png')} style={{ width: 32, height: 32 }} />
                            <Image source={require('../image/note.png')} style={{ width: 32, height: 32 }} />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default ThanhCong

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ebebeb",
    },
    card: {
        width: '100%',
        height: '100%',
        backgroundColor: '#324A59',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        marginTop: 15,
        paddingHorizontal: 26,
        paddingVertical: 20
    },
    item: {
        width: 155,
        height: 165,
        backgroundColor: '#F7F8FB',
        borderRadius: 15,
        marginBottom: 30,
        marginEnd: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: '#001833',
        fontSize: 18,
        fontWeight: 'bold'
    },
    tab: {
        width: 340,
        height: 70,
        backgroundColor: '#fff',
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
})