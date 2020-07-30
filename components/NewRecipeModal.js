import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Modal, TextInput } from 'react-native';

export default function NewRecipeModal(props) {
    const [recipeName, setRecipeName] = useState("");
    const [ingredients, setIngredients] = useState("");
    
    function handleAddIngredient(newIngredient) {
        setIngredients(newIngredient)
        console.log(newIngredient)
    }

    function handleRecipeName(newRecipeName) {
        setRecipeName(newRecipeName);
        console.log("Recipe Name : " + newRecipeName)
    }
    function handleIngredientName(newIngredientName) {
        setIngredients(newIngredientName)
        console.log(newIngredientName)
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.modalForm}>
                <View style={styles.viewBorder}>
                    <Text style={styles.modalLabels}>Recipe Name</Text>
                    <TextInput
                        style={styles.textInput}
                        value={recipeName}
                        onChangeText={handleRecipeName}
                    />
                </View>
                <View style={styles.viewBorder}>
                    <Text style={styles.modalLabels}>Ingredient</Text>    
                    <TextInput 
                        style={styles.textInput}
                        value={ingredients}
                        onChangeText={handleIngredientName}/>
                </View>

                <Button title="Add an ingredient" onPress={handleIngredientName}/>
                <Button title="Close" onPress={(props.close)} />
            </View>
        </Modal>
  
    )
}

const styles = StyleSheet.create({
    viewBorder: {
        borderWidth: 1
    },
    modalForm: {
        flex: 1,
        backgroundColor: "whitesmoke",
        fontSize: 45,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    modalLabels: {
        fontSize: 30,
        justifyContent: "center",
        alignItems: "center"
    },
    textInput: {
        width: "50%",
        backgroundColor: "lightgrey",
        borderWidth: 1,
        borderTopColor: "black",
        borderBottomColor: "black",
        borderColor: "black",
        borderRadius: 8,
        height: 50,
        fontSize: 40,
        justifyContent: "center",
        alignItems: "center",
        padding: 8
    }
})