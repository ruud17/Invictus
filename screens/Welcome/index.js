import React from 'react';
import {Button, StyleSheet, View} from "react-native";

const WelcomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Button
                title="Start with survey"
                onPress={() => navigation.navigate('Questionnaire')}
            />
        </View>
    );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(20,146,135,.5)',
        alignItems: 'center',
        justifyContent: 'center',
    },
});