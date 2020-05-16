import React from 'react';
import { StyleSheet, Text, View, Button, Modal } from 'react-native';

export default function NewRecipeModal(props) {
    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.modalForm}>
                <Text>MODAL</Text>
                <Button title="Close" onPress={(props.close)} />
            </View>
        </Modal>
  
    )
}

const styles = StyleSheet.create({
    modalForm: {
        flex: 1,
        backgroundColor: "slategrey",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
})