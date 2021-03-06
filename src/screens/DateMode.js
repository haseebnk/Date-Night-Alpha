import React, { useEffect, useState, useRef, } from 'react';
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
    ListViewComponent,
    ScrollView,
    Animated,
    Modal,
    Pressable
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ModalComponent from '../components/modalQuit';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { types } from '@babel/core';
import UnlockModal from '../components/unlockModal';
import { set } from 'lodash';




const DATA = [
    {
        Id: 1,
        title: 'truth or date',
        Description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {
        Id: 2,
        title: 'selfie challenge',
        Description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum hello.'
    },

]



const Pings = [
    {
        id: "Item 1",
        type: "unlock",
        text: "Selfie challenge",
        Description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        selected: true,
    },
    {
        id: "Item 1",
        type: "unlock",
        text: " Compliment your date ",
        Description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        selected: true,
    },
    {
        id: "Item 2",
        type: "unlock",
        text: "Truth and dare",
        Description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        selected: false,
    },
    {
        id: "Item 1",
        type: "unlock",
        text: " Compliment your date ",
        Description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        selected: false,
    },
    {
        id: "Item 2",
        type: "lock",
        text: " Compliment your date ",
        Description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        selected: false,
    },
    {
        id: "Item 1",
        type: "lock",
        text: " Compliment your date ",
        Description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        selected: false,
    },
    {
        id: "Item 2",
        type: "lock",
        text: " Compliment your date ",
        Description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        selected: false,
    },

]







// const rendenText = () => {
//     return (
//         Pings.map((v, i) => {
//             return (
//                 <View style={styles.ping}
//                     key={i}
//                 >


//                     {v.text == 'selfie challenge' ?
//                         <Text style={styles.secondText}>{v.text}</Text>
//                         :
//                         <Text></Text>
//                     }



//                 </View>
//             )
//         })
//     )

// }




// const renderPause = () => {

//     return(
//         <MaterialIcons style={{ alignItems: 'center', justifyContent: 'space-between', top: 15, }} name='play-arrow' size={hp('5%')} color="yellow" />
//     )
// }





export default function DateMode(props) {


    const [PauseActive, setPause] = useState(false);

    const onPause = () => setPause(true);

    const onPause2 = () => setPause(false);


    const xyz = (type) => {
        console.log(type)
        type == 'lock' ? setModalOpenn(true) : null
    }


    const rendenPing = (props) => {

        const [modalOpenn, setModalOpenn] = useState(false);



        return (
            Pings.map((v, i) => {
                return (

                    <View style={styles.ping}
                        key={i}
                    >


                        <TouchableOpacity


                            onPress={() => xyz(v.type)}

                            style={v.type == "unlock" && v.selected == true ? styles.PingPlayed : styles.PingUnlock && v.type == 'lock' ? styles.PingLock : styles.PingUnlock}
                            type={Pings}

                        >


                            <Text style={styles.PingText}>
                                {v.text}
                            </Text>
                            {/* <Text style={styles.pinLockUnclock}></Text> */}
                            {
                                v.type == 'lock' ? (
                                    <>
                                        <View style={styles.pinLockPicback}>
                                            {/* {v.type} */}
                                            <Image style={styles.pinLockPic} source={require('../assets/lock.png')}></Image>
                                        </ View>
                                    </>
                                ) : null
                            }

                        </TouchableOpacity>



                    </View>
                )
            })
        )

    }



    const [myArray, setMyArray] = useState([]);

    function onlclick() {




        let myLocalArray = []
        myLocalArray = Pings.splice(0, 1)
        setMyArray(myLocalArray)
        console.log(myLocalArray)
        { Pings[0].type == 'lock' ? setModalOpenn(true) : null }
    }







    const [count, setCount] = useState(0);
    const animation = useRef(new Animated.Value(0)).current;
    const scale = animation.interpolate({ inputRange: [0, 1], outputRange: [1, 0.9] });

    const onPressIn = () => {
        Animated.spring(animation, {
            toValue: 1,
            useNativeDriver: true,
        }).start();
    };
    const onPressOut = () => {
        setTimeout(() => {
            Animated.spring(animation, {
                toValue: 0,
                useNativeDriver: true,
            }).start();
        }, 200);
    };

    const onPressMius = () => {
        Animated.spring(animation, {
            toValue: -5,
            useNativeDriver: true,
        }).start();
    };
    const onPress = () => setCount(count + 5);
    const onPree = () => setCount(count - 5);


    const [modalOpen, setModalOpen] = useState(false);

    const [modalOpenn, setModalOpenn] = useState(false);

    const [modalStart, setModalStart] = useState(false);

    return (
        <ScrollView >

            <Modal

                transparent={true}

                visible={modalOpenn}
                animationType='fade'


            >
                <View style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: -5,
                    backgroundColor: '#000000e0',
                }} >
                    <LinearGradient
                        start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                        colors={['#FF7474', '#E20303']}
                        style={styles.modalView}>
                        <Text style={styles.modalText2}>This Ping is currently locked would you like to permanently unlocked it for just $0.99 ?</Text>

                        <View style={styles.modalButtons2} >
                            <Pressable
                                style={styles.button}
                                onPress={() => ('')}
                            >
                                <Text style={styles.textStyleNo1}>Yes</Text>
                            </Pressable>

                            <Pressable
                                style={styles.button}
                                onPress={() => setModalOpenn(false)}
                            >
                                <Text style={styles.textStyleNo1}>No Thanks</Text>
                            </Pressable>

                        </View>


                    </LinearGradient>
                </View>

            </Modal>


            <LinearGradient
                colors={['#24202f', '#24202f', '#24202f']}
                style={styles.container}
            >
                <View>



                    <Text style={styles.CasualModeText}>Casual Date Mode</Text>

                </View>



                <View style={styles.ChallengeContainer}>

                    <Text style={styles.firstText}>
                        Ohhh..
                    </Text>

                    <View style={styles.secondText}>
                        <View style={styles.ping}

                        >
                            <View style={{ alignSelf: 'center', }}>

                                <Text style={styles.secondText}>{Pings[0].text}</Text>

                            </View>



                        </View>
                    </View>

                    <Text style={styles.thirdText}>
                        Are You Ready?
                    </Text>


                    <View style={styles.InnerContainer}>
                        <ScrollView nestedScrollEnabled={true}>
                            <Text style={styles.dareText}>
                                {Pings[0].Description}
                            </Text>
                        </ScrollView>
                    </View>



                </View>
                <Modal

                    transparent={true}

                    visible={modalOpen}
                    animationType='fade'

                    navigation={props.navigation}

                >
                    <View style={styles.centeredView}>
                        <LinearGradient
                            start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                            colors={['#FF7474', '#E20303']}
                            style={styles.modalView}>
                            <Text style={styles.modalText}>Are you sure you want to quit your date?</Text>

                            <View style={styles.modalButtons} >
                                <Pressable
                                    style={[styles.button, styles.buttonYes]}
                                    onPress={() => props.navigation.navigate('home')}
                                >
                                    <Text style={styles.textStyleYes}>Yes</Text>
                                </Pressable>

                                <Pressable
                                    style={[styles.button, styles.buttonNo]}
                                    onPress={() => setModalOpen(false)}
                                >
                                    <Text style={styles.textStyleNo}>No</Text>
                                </Pressable>
                            </View>


                        </LinearGradient>
                    </View>

                </Modal>

                <ScrollView nestedScrollEnabled={true} horizontal={true}>

                    {
                        rendenPing()
                    }

                </ScrollView>


                <View style={styles.BottomHeader}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('faqscreen')}>
                        <Text style={{ fontSize: 23, color: "white", alignSelf: "flex-start", margin: 20, fontFamily: "Poppins-Regular", marginLeft: 25, top: -5, }}> FAQ</Text>
                    </TouchableOpacity>


                    <View style={{ flexDirection: 'row', width: moderateScale(50), marginRight: 110 }}>
                        <TouchableOpacity onPress={() => setModalOpen(true)}>

                            <MaterialIcons style={{ margin: 10 }} name='stop' size={hp('5%')} color="#E20303" />

                            {/* 
                        <ModalComponent
                        
                        style={{ alignItems: 'center', left: -10 }} navigation={props.navigation} >

                        </ModalComponent> */}

                        </TouchableOpacity>

                        {
                            PauseActive == false
                                ?
                                <TouchableOpacity onPress={onPause}>

                                    <MaterialIcons style={{ margin: 10, }} name='play-arrow' size={hp('5%')} color="#74FF82" />

                                </TouchableOpacity>
                                :
                                <TouchableOpacity onPress={onPause2}  >

                                    <MaterialIcons style={{ margin: 10, }} name='pause' size={hp('5%')} color="yellow" />

                                </TouchableOpacity>
                        }

                        <TouchableOpacity onPress={onlclick} >




                            <MaterialIcons style={{ margin: 10, top: 3 }} name='double-arrow' size={hp('4%')} color="#0379FF" />

                        </TouchableOpacity>

                    </View>


                    <Modal

                        transparent={true}

                        visible={modalStart}
                        animationType='fade'


                    >
                        <View style={{
                            flex: 1,
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop: -5,
                            backgroundColor: '#000000e0',
                        }} >
                            <LinearGradient
                                start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                                colors={['#FF7474', '#E20303']}
                                style={styles.modalView3}>
                                <Text style={styles.modalText3}>Set Ping Frequency</Text>


                                <View style={styles.ping3}>
                                    <TouchableOpacity onPressIn={onPressMius}
                                        onPress={onPree}
                                        onPressOut={onPree}>
                                        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                                            colors={['white', 'white']}
                                            style={styles.btn1} >
                                            <Text style={styles.btn1Text}>
                                                -
                                            </Text>
                                        </LinearGradient>
                                    </TouchableOpacity>
                                    <Text style={styles.count1}>{count}</Text>

                                    <TouchableOpacity onPressIn={onPressIn}
                                        onPress={onPress}
                                        onPressOut={onPressOut}>
                                        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                                            colors={['white', 'white']}
                                            style={styles.btn2} >
                                            <Text style={styles.btn2Text}>
                                                +
                                            </Text>

                                        </LinearGradient>
                                    </TouchableOpacity>
                                </View>



                                <View style={styles.modalButtons3} >
                                    <Pressable
                                        style={styles.button}
                                        onPress={() => setModalStart(false)}
                                    >
                                        <Text style={styles.textStyleNo1}>Save</Text>
                                    </Pressable>

                                    <Pressable
                                        style={styles.button}
                                        onPress={() => setModalStart(false)}
                                    >
                                        <Text style={styles.textStyleNo1}>Cancel</Text>
                                    </Pressable>

                                </View>


                            </LinearGradient>
                        </View>

                    </Modal>



                    <TouchableOpacity onPressIn={onPressIn}
                        onPress={() => setModalStart(true)}
                        onPressOut={onPressOut}>
                        <Text style={styles.count}>{count}</Text>

                    </TouchableOpacity>
                </View>
                <Text style={{ color: 'white', fontSize: 10, bottom: 23, alignSelf: 'flex-end', marginRight: 53, }}>min</Text>
            </LinearGradient>
        </ScrollView>
    )
}


const styles = StyleSheet.create({

    //ping modalll
    count1: {
        fontSize: 30,
        color: "white",


        fontFamily: "Poppins-Regular",
        alignSelf: 'center'
    },

    modalButtons3: {
        flexDirection: 'row',
        justifyContent: 'space-between',




    },
    modalText3: {
        marginBottom: -50,

        textAlign: "center",
        fontFamily: 'Poppins-Regular',
        color: 'white',
        fontSize: 18
    },


    btn1Text: {
        fontSize: 41,
        alignSelf: "center",
        color: "black",
        fontFamily: "Poppins-Regular",

    },
    btn1: {
        width: 58,
        height: 58,
        margin: 25,
        borderRadius: 18,
        fontFamily: "Poppins-Regular",

    },
    btn2Text: {
        fontSize: 41,
        alignSelf: "center",
        color: "black",
        fontFamily: "Poppins-Regular",

    },
    btn2: {
        width: 58,
        height: 58,
        margin: 25,
        borderRadius: 18,

    },
    ping: {
        flexDirection: "row",

        alignSelf: "center",
        justifyContent: 'space-evenly',





    },
    modalView3: {
        width: 310,
        height: 249,

        // backgroundColor: "red",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "red",
        shadowOffset: {
            width: 310,
            height: 209
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },



    //ping modall close





    buttonNo: {
        backgroundColor: 'white',
        margin: 20,
        width: 74,
        height: 44,

    },
    buttonYes: {
        backgroundColor: null,
        margin: 20,
        width: 74,
        height: 44,

    },
    modalButtons2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 0,


    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,


    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: -5,
        backgroundColor: '#000000e0',

    },
    modalView: {
        width: 310,
        height: 209,

        // backgroundColor: "red",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "red",
        shadowOffset: {
            width: 310,
            height: 209
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 10,
        padding: 10,
        marginHorizontal: 20

    },
    textStyleYes1: {
        color: "white",
        fontFamily: 'Poppins-Regular',
        fontSize: 18,
        textAlign: "center"
    },
    textStyleNo1: {
        color: "white",
        fontFamily: 'Poppins-Regular',
        fontSize: 18,
        textAlign: "center",


    },

    textStyleYes: {
        color: "white",
        fontFamily: 'Poppins-Regular',
        fontSize: 18,
        textAlign: "center"
    },
    textStyleNo: {
        color: "#E20303",
        fontFamily: 'Poppins-Regular',
        fontSize: 18,
        textAlign: "center",


    },
    modalText2: {
        marginBottom: 10,
        textAlign: "center",
        fontFamily: 'Poppins-Regular',
        color: 'white',
        fontSize: 18
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontFamily: 'Poppins-Regular',
        color: 'white',
        fontSize: 18
    },

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#000000e0',

    },
    pinLockPic: {
        height: 12,
        width: 12,
        alignSelf: 'center',
        top: 3

    },
    pinLockPicback: {
        height: 17,
        width: 17,
        borderRadius: 20,
        backgroundColor: 'white',
        marginTop: 9,
        marginHorizontal: 65
    },
    modalText: {
        fontSize: 18,
        color: 'white',
        fontFamily: 'Poppins-Regular',
        textAlign: 'center'
    },



    dareText: {
        fontSize: 12.7,
        fontFamily: "Poppins-Light",
        alignSelf: 'center',
        margin: 18,
        color: '#24202F',

    },
    InnerContainer: {
        height: scale(270),
        width: scale(250),
        backgroundColor: '#FFFFFF',
        borderRadius: 17,
        alignSelf: 'center'
    },
    thirdText: {
        fontSize: 20,
        fontFamily: "Poppins-Regular",
        alignSelf: 'center',
        color: '#74FF82',

        marginBottom: 10

    },
    secondText: {
        fontSize: 30,
        fontFamily: "Poppins-SemiBold",
        alignSelf: 'center',
        color: '#74FF82',

        justifyContent: 'center',
        textAlign: 'center'


    },
    firstText: {
        fontSize: 20,
        fontFamily: "Poppins-Regular",
        alignSelf: 'center',
        color: '#74FF82',
        marginTop: 20

    },
    count: {
        fontSize: 20,
        color: "white",
        alignSelf: 'center',
        marginRight: 50,
        margin: 15,

        fontFamily: "Poppins-Regular",
    },
    BottomHeader: {
        alignSelf: "center",
        height: scale(68.7),
        backgroundColor: 'black',
        width: scale(350),
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopLeftRadius: 36,
        borderTopRightRadius: 36,
        bottom: -14,





    },
    pinLockUnclock: {
        fontSize: 12,
        color: "white",
        alignSelf: "center",
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 10,
        marginHorizontal: 6
    },

    PingUnlock: {
        width: 89,
        height: 90,
        borderRadius: 12,
        margin: 15,
        backgroundColor: "#FF2B25",
        fontFamily: "Poppins-Regular",


    },
    ping3: {
        flexDirection: "row",
        marginTop: 45,
        alignSelf: "center",
        marginBottom: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ping: {
        flexDirection: "row",
        marginTop: 15,
        alignSelf: "center",
        marginBottom: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    PingPlayed: {
        width: 89,
        height: 90,
        borderRadius: 12,
        margin: 15,
        backgroundColor: "#1AC72B",
        fontFamily: "Poppins-Regular",

    },
    PingLock: {
        width: 89,
        height: 90,
        borderRadius: 12,
        margin: 15,
        backgroundColor: "#C5C5C5",
        fontFamily: "Poppins-Regular",

    },
    PingText: {
        fontSize: 12,
        color: "white",
        alignSelf: "center",
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 27,
        marginHorizontal: 6

    },
    ChallengeContainer: {

        alignSelf: 'center',
        width: scale(300),
        height: scale(470),
        backgroundColor: '#363143',
        borderColor: '#00B712',
        borderWidth: 2.5,
        borderRadius: 20,
        marginTop: 20

    },

    CasualModeText: {
        alignSelf: "center",
        fontSize: 20,
        color: "white",
        fontFamily: 'Poppins-Regular',

    },



    container: {
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 0,
        backgroundColor: '#ffff',

    },
})

