import React from 'react';
import {StyleSheet, Text, TextInput, View} from "react-native";
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import RadioForm from 'react-native-simple-radio-button';

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
    {
        id: 5,
        question: "How physically active are you?",
        type: "input",
        placeholder: " hours/month"
    },
];

const QuestionnaireScreen = ({navigation}) => {

    const adjustRadioButtonLabels = (values) => (
        values.map(v => ({label: v, value: v}))
    );

    return (
        <View style={styles.container}>
            <View>
                {questions.map(q => (
                    <View key={q.id}>
                        <View>
                            <Text style={styles.questionTitle}> {q.id}. {q.question} </Text>

                            {q.type === "options" && (
                                <View style={styles.questionOptions}>
                                    <View>
                                        <RadioForm
                                            radio_props={adjustRadioButtonLabels(q.options)}
                                            initial={0}
                                            borderWidth={0.5}
                                            //buttonInnerColor={'#e74c3c'}
                                            // buttonOuterColor={this.state.value3Index === i ? '#2196f3' : '#000'}
                                            buttonSize={8}
                                            buttonOuterSize={18}
                                            buttonStyle={{}}
                                            //onPress={(value) => {this.setState({value:value})}}
                                        />
                                    </View>
                                </View>)
                            }

                            {q.type === "input" && (
                                <View>
                                    <TextInput
                                        style={styles.inputField}
                                        placeholder={q.placeholder}
                                        // onChangeText={text => onChangeText(text)}
                                        // value={value}
                                    />
                                </View>)
                            }

                            {q.type === "optionsWithInput" && (
                                <View style={styles.questionOptions}>
                                    <RadioForm
                                        radio_props={adjustRadioButtonLabels(q.options)}
                                        initial={0}
                                        borderWidth={0.5}
                                        //buttonInnerColor={'#e74c3c'}
                                        // buttonOuterColor={this.state.value3Index === i ? '#2196f3' : '#000'}
                                        buttonSize={8}
                                        buttonOuterSize={18}
                                        buttonStyle={{}}
                                        //onPress={(value) => {this.setState({value:value})}}
                                    />
                                    {/*<Input*/}
                                    {/*    placeholder={q.placeholder}*/}
                                    {/*    inputStyle={styles.inputField}*/}
                                    {/*    //onChangeText={text => onChangeText(text)}*/}
                                    {/*/>*/}
                                    <TextInput
                                        style={styles.inputField}
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
                            size={20}
                            color="white"
                        />
                    }
                    iconLeft
                    title="  Save & load more questions"
                    buttonStyle={styles.btn}
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
        fontSize: 16,
        fontWeight: "bold",
    },
    questionOptions: {
        paddingTop: 5,
        paddingBottom: 10
    },
    inputField: {
        height: 30,
        borderColor: 'gray',
        paddingLeft: 10,
        marginBottom: 10,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 1,
    },
    btn: {
        backgroundColor: '#36a0fc',
        borderRadius: 10,
        paddingLeft: 20,
        paddingRight: 20
    },
});