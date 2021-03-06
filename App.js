import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from "./screens/Welcome";
import QuestionnaireScreen from "./screens/Questionnaire";
import ThankYouScreen from "./screens/ThankYou";

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#36a0fc',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}>
                <Stack.Screen name="Welcome" component={WelcomeScreen}/>
                <Stack.Screen name="Questionnaire" component={QuestionnaireScreen}/>
                <Stack.Screen name="ThankYou" component={ThankYouScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;

