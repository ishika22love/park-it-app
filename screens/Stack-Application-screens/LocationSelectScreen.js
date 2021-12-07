import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button, Image, Dimensions, TextInput, Keyboard } from 'react-native'
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from 'react-native-gesture-handler';
import DefaultText from '../../components/DefaultText';
import CustomBigButton from '../../components/CustomBigButton';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import MainScreenButton from '../../components/MainScreenButton';
const LocationSelectScreen = (props) => {
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);

 useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true); // or some other action
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false); // or some other action
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);
    return (
        <View style={styles.screen}>
            {
                !isKeyboardVisible &&
                <View style={styles.topContainer}>
                    <View style={styles.topNavigation}>
                        <TouchableOpacity >
                            <DefaultText fontSize={14} color="white">Settings</DefaultText>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <DefaultText fontSize={28} color="white">Profile</DefaultText>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <DefaultText fontSize={14} color="white">Logout</DefaultText>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.profileImageContainer}>
                        <Image 
                            source={{uri:"https://memetemplatehouse.com/wp-content/uploads/2020/05/main-toh-sirf-pati-banna-chahta-hun-shyam-hera-pheri.jpg"}}
                            fadeDuration={1000}
                            style={styles.profileImage}
                            resizeMode="cover"
                        />
                    </View>
                </View>
            }
            <View style={styles.nameContainer}>
                <Text style={styles.nameMain}>Ghanshyam</Text>
                <Text style={styles.nameMantra}>Aapka naam bhi Anuradha hai</Text>
            </View>
            <View style={styles.searchLocationMain}>
                <View style={styles.searchLocationContainer}>
                    <TextInput placeholder={"Enter the destination..."}/>
                    <Ionicons name="ios-search" size={24} color="#bbb"/>
                </View>
            </View>
        </View>
    )
}

export default LocationSelectScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    topContainer: {
        backgroundColor: "black",
        alignItems: "center",
        paddingVertical: 20,
    },
    topNavigation: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    }, 
    profileImageContainer:{
        width: 150,
        height: 150,
        borderRadius: 75,
        overflow: "hidden",
        margin: 30,
        marginBottom: 10,
        borderColor: "white",
        borderWidth: 5,
    },
    profileImage: {
        width: "100%",
        height: "100%",
    },
    nameContainer: {
        alignItems: "center",
        margin: 20,
    },
    nameMain: {
        fontSize: 30,
        fontFamily: "open-sans-bold",
        margin: 5,
    },
    nameMantra: {
        fontFamily: "open-sans-bold",
        fontSize: 14,
    },
    searchLocationContainer: {
        flexDirection: "row",
        paddingVertical: 10,
        paddingHorizontal: 20,
        width: Dimensions.get("window").width*0.9,
        justifyContent: "space-between",
        elevation: 3,
        backgroundColor: "white",
        borderRadius: 20,
    },
    searchLocationMain: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    }
})
