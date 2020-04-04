import React from 'react';
import {StyleSheet, Text, TextInput, View} from "react-native";
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const questions = [
    {
        id: 1,
        question: "Fever?",
        type: "options",
        options: ["No", "Mild (99-100.4)", "(High 100.4+)"]
    },
    {
        id: 2,
        question: "Cough?",
        type: "options",
        options: ["No", "Mild", "Moderate", "Severe"]
    },
    {
        id: 3,
        question: "Chest pain?",
        type: "input",
        placeholder: " Enter value [0-10]"
    },
    {
        id: 4,
        question: "Do you take medicines that lower your immune system such as steroids?",
        type: "optionsWithInput",
        options: ["No"],
        placeholder: "If so, what kind"
    },
];

const QuestionnaireScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View>
                {questions.map(q => (
                    <View key={q.id}>
                        <View>
                            <Text style={styles.questionTitle}> {q.id}. {q.question} </Text>

                            {q.type === "options" && (
                                <View style={styles.questionOptions}>
                                    {q.options.map(option => <Text style={styles.questionSingleOption}
                                                                   key={option}> {option} </Text>)}
                                </View>)
                            }

                            {q.type === "input" && (
                                <View>
                                    <TextInput
                                        style={styles.textInput}
                                        placeholder={q.placeholder}
                                        // onChangeText={text => onChangeText(text)}
                                        // value={value}
                                    />
                                </View>)
                            }

                            {q.type === "optionsWithInput" && (
                                <View style={styles.questionOptions}>
                                    {q.options.map(option => <Text style={styles.questionSingleOption}
                                                                   key={option}> {option} </Text>)}
                                    <TextInput
                                        style={styles.textInput}
                                        placeholder={q.placeholder}
                                        // onChangeText={text => onChangeText(text)}
                                        // value={value}
                                    />
                                </View>)
                            }
                        </View>
                    </View>
                ))
                }
            </View>

            <View>
                <Button
                    icon={
                        <Icon
                            name="save"
                            size={15}
                            color="white"
                        />
                    }
                    iconLeft
                    title=" Save and load more questions"
                />

            </View>
        </View>
    );
};

export default QuestionnaireScreen;

const styles = StyleSheet.create({
    container: {
        margin: 20,
        flex: 1,
        justifyContent: 'space-between'
    },
    questionTitle: {
        fontSize: 18,
        fontWeight: "bold",
        paddingTop: 10
    },
    questionOptions: {
        display: "flex",
        //flexDirection:"row",
        paddingTop: 5,
    },
    questionSingleOption: {
        paddingTop: 5,
        fontSize: 16
    },
    textInput: {
        marginTop: 5,
        height: 30,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10
    },
});