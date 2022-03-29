import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Image,
    Text,
    View,
    TextInput,
    StatusBar,
    Keyboard,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Switch,
    ScrollView,
    FlatList
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
// import SplashScreen from 'react-native-splash-screen';

const COLORS = [
    {
        id: 1,
        color: ['#F11775', '#FB6580',],


    },
    {
        id: 2,
        color: ['#7AC9FD', '#0071BC', ],


    }
    ,
    {
        id: 3,
        color: ['#7AFDD0', '#00BC89', ],


    },
    {
        id: 4,
        color: ['#6617F1', '#8265FB', ],


    },
    {
        id: 5,
        color: ['#F1D417', '#FBFB65',],


    },

]

export default function SignupScreen(props) {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const [checked, setChecked] = React.useState(false);



    const [press, setPress] = useState('');

    function questionPick(item) {
        setPress(item.id)
    }

    function questionClose(item) {
        setPress(item.id)
    }


    return (
        <ScrollView>

            <TouchableWithoutFeedback
                onPress={() => {
                    Keyboard.dismiss();
                }}
            >



                <LinearGradient
                    colors={['#24202f', '#24202f', '#24202f']}
                    style={styles.container}
                >
                    <View>
                        <Text style={styles.ProfileDetails}>Personal Profile Details</Text>
                    </View>
                    <View style={styles.tinyLogo}>
                        <Image style={styles.tinyLogo}

                            source={require('../assets/profile.png')}
                        />
                    </View>
                    <Text style={styles.takePhoto}>Take a photo</Text>
                    <Text style={styles.uploadPhoto}>Upload Photo</Text>

                    <View style={styles.sectionStyle}>

                        <TextInput
                            style={{ flex: 1, color: 'white', fontSize: 16, fontFamily: "Poppins-Regular", marginTop: 8 }}
                            placeholder="Full Name"
                            placeholderTextColor='white'

                            textContentType='password'
                        />
                    </View>
                    <View style={styles.sectionStyle}>

                        <TextInput
                            style={{ flex: 1, color: 'white', fontSize: 16, fontFamily: "Poppins-Regular", marginTop: 8 }}
                            placeholder="Mobile Number"
                            placeholderTextColor='white'

                            textContentType='password'
                        />
                    </View>
                    <View style={styles.sectionStyle}>

                        <TextInput
                            style={{ flex: 1, color: 'white', fontSize: 16, fontFamily: "Poppins-Regular", marginTop: 8 }}

                            placeholder='Email'
                            placeholderTextColor='white'
                            autoCorrect={true}
                            autoCompleteType='email'
                            keyboardType='email-address'
                            textContentType='emailAddress'

                        />
                    </View>
                    <View style={styles.sectionStyle}>

                        <TextInput
                            style={{ flex: 1, color: 'white', fontSize: 16, fontFamily: "Poppins-Regular", marginTop: 8 }}

                            placeholder='Date Of Birth'
                            placeholderTextColor='white'
                            autoCorrect={true}
                            autoCompleteType='email'
                            keyboardType='email-address'
                            textContentType='emailAddress'

                        />
                    </View>
                    <View style={styles.sectionStyle}>

                        <TextInput
                            style={{ flex: 1, color: 'white', fontSize: 16, fontFamily: "Poppins-Regular", marginTop: 8, }}
                            placeholder="Password"
                            placeholderTextColor='white'
                            secureTextEntry={true}
                            textContentType='password'
                        />
                    </View>


                    <Text style={styles.profileText}>Profile Background color</Text>

                    <FlatList
                        horizontal={true}
                        data={COLORS}
                        keyExtractor={(item, index) => index.toString()}
                        style={{ alignSelf: 'center', }}
                        renderItem={({ item, index }) => (

                            <TouchableOpacity
                                onPress={() => questionPick(item)}
                                style={{ marginTop: 5, padding: 0, marginTop: 20, }}
                            >
                                <View style={{ flexDirection: 'row', width: '100%' }}>
                                    {press === item.id ?

                                        <TouchableOpacity onPress={() => setPress('')}  >

                                            <LinearGradient
                                                colors={[item.color[0], item.color[1]]}

                                            style={styles.withBorder}>

                                            </LinearGradient>

                                        </TouchableOpacity>

                                        :

                                        <LinearGradient
                                        
                                            colors={[item.color[0], item.color[1]]}
                                        style={styles.withOutBorder}>

                                        </LinearGradient>
                                    }
                                </View>

                            </TouchableOpacity>

                        )}
                    />




                 

                    <LinearGradient
                        start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                        colors={['#FF7474', '#E20303']}
                        style={styles.linearGradient}>
                        <Text style={styles.loginButtonText}>
                            Sign Up
                        </Text>
                    </LinearGradient>
                    {/* <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Sign in</Text>
        </TouchableOpacity> */}

                    <View style={styles.loginWithBar}>
                        <TouchableOpacity>

                        </TouchableOpacity>


                    </View>
                    <View style={styles.signUpTextView}>
                        <Text style={styles.signUpText}>Already have an account?</Text>
                        <TouchableOpacity onPress={() => props.navigation.goBack()}>
                            <Text style={[styles.signUpText, { color: '#00A8FF' }]}>
                                {' Sign In'}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
            </TouchableWithoutFeedback>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    withOutBorder:
    {
        marginHorizontal: 4,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        width: 38,
        height: 38,
        color: "White",
    }
    ,

    withBorder:
    {
        marginHorizontal: 4,
        borderRadius: 10,
        borderColor: 'white',
        borderWidth: 1,
        width: 38,
        height: 38,
        color: "White",
    },


    ProfileDetails: {
        color: 'white',
        fontSize: 20,
        marginTop: -15,
        marginBottom: 25,
        textAlign: 'center',
        fontFamily: "Poppins-Regular",

    },
    takePhoto: {
        color: '#0090FF',
        fontSize: 14,

        marginTop: 10,
        marginBottom: 10,
        textAlign: 'center',
        textDecorationLine: 'underline',
        fontFamily: "Poppins-Regular",
    },
    uploadPhoto: {
        color: '#fff',
        fontSize: 14,
        marginTop: 2,
        marginBottom: 10,
        textAlign: 'center',
        fontFamily: "Poppins-Regular",
    },
    backContainer: {
        alignSelf: "center",
        flexDirection: "row",

    },
    back1: {
        height: 38,
        width: 38,
        borderRadius: 10,
        margin: 2,
        marginTop: 10,



    },
    linearGradient: {

        marginTop: 40,
        width: 300,
        paddingVertical: 12,
        borderRadius: 11,

        alignSelf: 'center',
        height: 48,
    },
    buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
    tog: {
        flex: 1,
        alignSelf: 'flex-start'
    },

    ImageStyle: {
        padding: 5,
        marginRight: 10,

        margin: 5,
        height: 20,
        width: 18,
        resizeMode: 'stretch',
        alignItems: 'center',
    },
    sectionStyle: {
        alignSelf: "center",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#363143',
        borderRadius: 18,
        marginTop: 10,
        paddingHorizontal: 16,

        fontSize: 13,
        width: '80%',
        height: 63,

        margin: 10,
    },
    imageStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        paddingTop: 30,
        paddingHorizontal: 20,
        backgroundColor: '#ffff'
    },
    tinyLogo: {
        display: "flex",
        flexDirection: 'row',
        alignItems: 'center',


        justifyContent: "center",
        alignItems: "center",
        height: 126,
        width: 126,
        alignSelf: "center"


    },
    welcomeText: {
        fontSize: 30,
        fontWeight: '900',
        color: '#fff',
        alignSelf: 'center',
    },
    loginText: {
        color: '#fff',
        fontSize: 20,
        marginTop: 20,
        marginBottom: 30,
        textAlign: 'center',
    },
    // input: {
    //   width: '100%',
    //   height: 60,
    //   backgroundColor: '#363143',
    //   borderRadius: 12,
    //   marginTop: 10,
    //   paddingHorizontal: 10,
    //   fontSize: 16,
    //   color: '#808e9b',
    // },
    fpText: {
        alignSelf: 'flex-end',
        color: '#00A8FF',
        fontSize: 14,
        fontWeight: '500',
        marginTop: -17,
        // marginBottom:50,
    },
    loginButton: {
        backgroundColor: '#ee3231',
        paddingVertical: 12,
        borderRadius: 12,
        marginTop: 40,

    },
    loginButtonText: {
        fontSize: 16,
        fontFamily: "Poppins-Regular",
        color: '#fafafa',
        alignSelf: 'center',
    },
    loginWithBar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 50,
    },

    signUpTextView: {

        
        marginBottom: 60,
        flexDirection: 'row',
        justifyContent: 'center',
        color: '#2279ae',

    },
    signUpText: {
        color: '#ffff',
        fontSize: 16,
        fontFamily: "Poppins-Regular",
    },
    profileText: {
        color: '#ffff',
        fontSize: 16,
        marginTop:20,
        alignSelf: "center",
        fontFamily: "Poppins-Regular",
    },
});