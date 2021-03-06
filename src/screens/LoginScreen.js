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
    LayoutAnimation,
    Platform,
    UIManager,

} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';




if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
}
const inActiveColor = 'white';
const activeColor = '#00B712';


export default function LoginScreen2(props) {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const [toggleActive, setToggle] = useState(false);

    return (
        <TouchableWithoutFeedback
            onPress={() => {
                Keyboard.dismiss();
            }}
        >
            <LinearGradient
                colors={['#24202f', '#24202f', '#24202f']}
                style={styles.container}
            >
                <View style={styles.tinyLogo}>
                    <Image style={styles.tinyLogo}

                        source={require('../assets/imglogo.png')}
                    /></View>

                <Text style={styles.loginText}>Please Sign into your account</Text>


                <View style={styles.sectionStyle}>
                    <Image
                        source={require('../assets/pass.png')} //Change your icon image here
                        style={styles.ImageStyle}
                    />
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
                    <Image
                        source={require('../assets/email.png')} //Change your icon image here
                        style={styles.ImageStyle}
                    />
                    <TextInput
                        style={{ flex: 1, color: 'white', fontSize: 16, fontFamily: "Poppins-Regular", marginTop: 8 }}
                        placeholder="Password"
                        placeholderTextColor='white'
                        secureTextEntry={true}
                        textContentType='password'
                    />
                </View>

                <TouchableOpacity>
                    <View style={styles.tog}>
                        <TouchableOpacity
                            style={[
                                styles.toggleContainer,
                                { borderColor: null ? activeColor : null, },
                            ]}
                            onPress={() => {
                                LayoutAnimation.easeInEaseOut();
                                setToggle(!toggleActive);
                            }}
                            activeOpacity={1}>
                            <View
                                style={[
                                    styles.toggleBtn,
                                    toggleActive
                                        ? { backgroundColor: inActiveColor, borderRadius: 25, alignSelf: 'flex-end' }
                                        : { backgroundColor: activeColor, borderRadius: 25, },
                                ]}

                            />

                            <Text style={{ color: 'white', fontSize: 15, position: 'absolute', bottom: 2, left: 4 }}> Y</Text>
                            <Text style={{ color: !toggleActive ? 'white' : 'black', fontSize: 15, fontFamily: 'Poppins-Regular', position: 'absolute', bottom: -2, right: 6 }}>N</Text>
                        </TouchableOpacity>

                    </View>
                    
                </TouchableOpacity>
                <Text style={{ color: 'white', fontSize: 12, marginLeft: 70, marginTop: 4, fontFamily: "Poppins-Regular", }}>Remember</Text>
                <TouchableOpacity onPress={() => props.navigation.navigate("forgotpassword")}>
                    <Text style={styles.fpText} >Forgot Password?</Text>
               </TouchableOpacity>
                
                {/* <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Sign in</Text>
        </TouchableOpacity> */}
                <TouchableOpacity onPress={() => props.navigation.navigate("indicator")}>
                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                        colors={['#FF7474', '#E20303']}
                        style={styles.linearGradient} >
                        <Text style={styles.loginButtonText}>
                            Sign In
                        </Text>
                    </LinearGradient>
                </TouchableOpacity>
              
                <View style={styles.signUpTextView}>
                    <Text style={styles.signUpText}>Don't have an account?</Text>
                    <TouchableOpacity onPress={() => props.navigation.navigate("signup")}>
                        <Text style={[styles.signUpText, { color: '#00A8FF' }]}>
                            {' Sign Up'}
                        </Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({



    status: {
        width: 100,
        textAlign: 'center',
        marginBottom: 20,
        fontWeight: 'bold',
        borderRadius: 19,

    },
    toggleContainer: {
        marginLeft: 6,
        height: 23,
        width: 45,
        borderRadius: 19,

        overflow: 'hidden',
        backgroundColor: '#363143',
        padding: 1,
        position: 'relative',

    },
    toggleBtn: { height: '100%', width: '50%' },








    linearGradient: {


        width: 300,
        paddingVertical: 12,
        borderRadius: 11,
        marginTop: 26,
        alignSelf: 'center',
        height: 48,
    },
    buttonText: {
        fontSize: 16,
        fontFamily: "Poppins-Regular",
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
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#363143',
        borderRadius: 18,
        marginTop: 10,
        paddingHorizontal: 16,
        marginRight: 40,
        fontSize: 16,
        width: '95%',
        height: 76,

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
        marginLeft: "38%",
        marginRight: "50%",
        justifyContent: "center",
        alignItems: "center",
        height: 100,
        width: 100,


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
        fontFamily: "Poppins-Regular",


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
        fontSize: 12,
        fontFamily: "Poppins-Regular",

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
        
    },

    signUpTextView: {
        marginTop: 0,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        color: '#2279ae',
        marginTop: 65

    },
    signUpText: {
        color: '#ffff',
        fontSize: 16,
        fontFamily: "Poppins-Regular",
     
    },
});