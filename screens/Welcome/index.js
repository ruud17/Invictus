import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-elements';

const image = {uri: "https://anyextee.com/wp-content/uploads/2017/10/computer-blue-opacity-background.jpg"};

const WelcomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
                <Text style={styles.text}>Your Feedback Helps Us Serve The World Better</Text>
                <Button
                    buttonStyle={styles.btn}
                    title="Start with survey"
                    onPress={() => navigation.navigate('Questionnaire')}
                />
            </ImageBackground>
        </View>
    );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: "white",
        fontSize: 28,
        fontWeight: "bold",
        textAlign: 'center',
        padding: 10,
    },
    btn: {
        backgroundColor: '#36a0fc',
        borderRadius: 10,
        borderWidth: 1,
        top: 40,
        paddingLeft: 20,
        paddingRight: 20
    }
});
