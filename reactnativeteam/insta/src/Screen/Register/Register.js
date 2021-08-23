import React, { useState } from 'react'
import { Button, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Image } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { postDataRegister, PostRegisterUser, REGISTER_USER } from './redux/action'

export default function Register(props) {

    const [reRender, setRender] = useState(false);
    const [email, setEmail] = useState('');
    const [fullname, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [profilePicture, setProfilePicture] = useState('')
    const dispatch = useDispatch();

    const changeNameInStore = () => {
        const data = {
            email,
            fullname,
            username,
            password,
        };
        dispatch(postDataRegister(data));
    };

    // const state = useSelector(state =>{
    //     return{
    //         loading: state.Global.loading,
    //     }
    // })
    return (
        <SafeAreaView style={styles.safeView}>
            {/* {state.loading ? (
                <ActivityIndicator
                style={{flex:1}}
                color="blue"
                size={moderateScale(80)}
                />
            ):( */}
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.conCenter}>
                    <View style={styles.logo}>
                        <Image style={styles.triangle_right} source={require('../../Assets/Images/logo.png')}/>
                        <Text style={styles.logoText}>TEAME+</Text>
                    </View>
                </View>

                <View>
                    <TextInput
                        placeholder="Name"
                        placeholderTextColor="#ffff"
                        style={styles.input}
                        onChangeText={(text) => setName(text)}
                    />
                    <TextInput
                        placeholder="Username"
                        placeholderTextColor="#ffff"
                        style={styles.input}
                        onChangeText={(text) => setUsername(text)}
                    />
                    <TextInput
                        placeholder="Email"
                        placeholderTextColor="#ffff"
                        style={styles.input}
                        onChangeText={(text) => setEmail(text)}
                    />
                    <TextInput
                        placeholder="Password"
                        placeholderTextColor="#ffff"
                        style={styles.input}
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry
                    />
                </View>
                <View style={styles.conCenter}>
                    <TouchableOpacity
                        style={styles.btnSubmit}
                        onPress={changeNameInStore}>
                        <Text>SIGN UP</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
                        <Text style={styles.tx}>Already have account? Sign In</Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>
            {/* )}
            ... */}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: moderateScale(20),
        backgroundColor: 'rgb(44,44,44)',
    },
    conCenter: {
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 45
    },
    end: {
        marginTop: 20,
        alignSelf: 'flex-end',
        color: '#ffff'

    },
    input: {
        color: '#ffffff',
        borderColor: '#ffffff',
        borderBottomWidth: 0.5,
        marginRight: 30,
        marginLeft: 30,
        marginTop: 10,
    },
    btnSubmit: {
        justifyContent: 'center',
        width: widthPercentageToDP(30),
        borderRadius: moderateScale(50),
        height: heightPercentageToDP(5),
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    tx: {
        marginTop: 20,
        color: '#ffff',
    },
    safeView: {
        flex: 1
    },
    logo:{
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:50,
        marginTop:50,
    },
    triangle_right: {
        width: widthPercentageToDP(15),
        height: heightPercentageToDP(10),
        marginRight:10,
    },
    logoText:{
        fontSize: 40,
        color: '#7ba842'
    }
})