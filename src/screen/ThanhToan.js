import { StyleSheet, Text, TouchableOpacity, View, TextInput, Image } from 'react-native'
import React from 'react'

const ThanhToan = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image source={require('../image/back.png')} style={{marginTop:30, width:24, height:24}}/>
            <Text style={{ fontSize: 22, fontWeight: 500, color: '#181D2D', marginTop: 100 }}>Sign in</Text>
            <Text style={{ color: '#AAAAAA', marginTop: 20 }}>Welcome back</Text>
            <View style={[styles.borderEdt, { marginTop: 50 }]}>
                <Image source={require('../image/mail.png')} />
                <View style={{ width: 2, height: 35, backgroundColor: '#333', marginHorizontal: 5 }}></View>
                <TextInput placeholder='Email address' style={{ flex: 1 }} />
            </View>
            <View style={styles.borderEdt}>
                <Image source={require('../image/lock.png')} />
                <View style={{ width: 2, height: 35, backgroundColor: '#333', marginHorizontal: 5 }}></View>
                <TextInput placeholder='Email address' style={{ flex: 1 }} />
                <Image source={require('../image/eye.png')} />
            </View>
            <View style={{ width: "100%", justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ width: 150, }}><Text style={{ textAlign: 'center', fontSize: 14, color: '#324A59', marginTop: 25, borderBottomWidth: 1 }}>Forgot Password?</Text></View>
            </View>
            <View style={{ width: '100%', alignItems: 'flex-end', marginTop: 120 }}>
                <TouchableOpacity onPress={() => { navigation.navigate('done') }}>
                    <Image source={require('../image/next.png')} style={{ width: 64, height: 64 }} />
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <Text style={{ color: '#AAAAAA', fontSize: 14, fontWeight: 400 }}>New memer </Text>
                <Text style={{ color: '#324A59', fontSize: 14, fontWeight: 500 }}>Register?</Text>
            </View>
        </View>
    )
}

export default ThanhToan

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical:20
    },
    borderEdt: {
        width: '100%',
        height: 60,
        borderColor: '#333',
        borderRadius: 8,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        marginTop: 20,
    },
    row: {
        flexDirection: 'row',
        marginTop: 50
    }
})