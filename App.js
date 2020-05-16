import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import NewRecipeModal from './components/NewRecipeModal';

export default function App() {
 const [isCreateNewRecipe, setIsCreateNewRecipe] = useState(false)

  function closeNewRecipeModal () {
    setIsCreateNewRecipe(false);
  }

  return (
    <View style={styles.mainMenu}>
      <Button title="Create New Recipe" onPress={() => setIsCreateNewRecipe(true)} />
      <NewRecipeModal visible={isCreateNewRecipe} close={closeNewRecipeModal}/>
      <Text>Main Menu Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainMenu: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  }
});
