import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const WelcomeScreen = ({ navigation }) => {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "#6db6ff"}}>
            <Button
                title="Start with survey"
                onPress={() => navigation.navigate('Questionnaire')}
            />
        </View>
    );
};

const QuestionnaireScreen = ({ navigation }) => {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Button
                title="Go to Thank you page"
                onPress={() => navigation.navigate('ThankYou')}
            />
        </View>
    );
};

const ThankYouScreen = () => {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        </View>
    );
};

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Welcome" component={WelcomeScreen}/>
                <Stack.Screen name="Questionnaire" component={QuestionnaireScreen}/>
                <Stack.Screen name="ThankYou" component={ThankYouScreen}/>

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
