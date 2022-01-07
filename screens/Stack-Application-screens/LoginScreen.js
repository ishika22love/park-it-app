import React, {useState} from 'react'
import { StyleSheet, Text, View, Button, Keyboard, TouchableOpacity, TouchableWithoutFeedback, Dimensions } from 'react-native'
import { StackActions, NavigationActions } from 'react-navigation'
import CustomBigButton from '../../components/CustomBigButton'
import CustomTextInput from '../../components/CustomTextInput'
const LoginScreen = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const emailChange = (value)=>{
        setEmail(value);
    }   
    const passwordChange = (value)=>{
        setPassword(value);
    }
    console.log(email, password);
    return (
        <View style={styles.screen}>
            {/* <Text>This is the login screen.</Text>
            <Button title="Log in" onPress={() =>{
                const navigateAction = StackActions.reset({
                    index: 0,
                    actions: [NavigationActions.navigate({routeName: "Main"})],        
                });
                props.navigation.dispatch(navigateAction);
            }
            }  
            /> */}
            <View style={styles.headerContainer}>
                <Text style={styles.headingPrimary}>Log In</Text>
            </View>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} style={{ flex: 1 }}>
                <View style={{}}>
                    <View style={styles.inputContainer}>
                        <CustomTextInput placeholder={"Email"} onChangeHandler={emailChange}/>
                        <CustomTextInput placeholder={"Password"} onChangeHandler={passwordChange} passwordTrue={true}/>
                    </View>
                    <CustomBigButton onPress={() =>{
                        const navigateAction = StackActions.reset({
                            index: 0,
                            actions: [NavigationActions.navigate({routeName: "Main"})],        
                        });
                        props.navigation.dispatch(navigateAction);
                    }} navigation={props.navigation}>
                        <Text>
                            Log In
                        </Text>
                    </CustomBigButton>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}

export default LoginScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "white",
        paddingVertical: 30,
    },
    headerContainer: {
        width: "100%",
        flexDirection: "row",
        margin: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    headingPrimary: {
        fontFamily: "open-sans-bold",
        fontSize: 24,
        justifyContent: "center",
    },
    headingSecondary: {
        fontFamily: "open-sans-bold",
        fontSize: 15,
    },
    inputContainer: {
        width: Dimensions.get("window").width*0.85,
        flexDirection: "column",
    },
})