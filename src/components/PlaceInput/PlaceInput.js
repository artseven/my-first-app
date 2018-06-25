import React, { Component } from 'react';

class PlaceInput extends Component {
    render() {
        <View style={styles.inputContainer}>
          <TextInput
           placeholder="An awesome place" 
           value={this.state.placeName}
           onChangeText={this.placeNameChangedHandler}
           style={styles.placeInput}
          />
          <Button 
           title="Add"
           style={styles.placeButton}
           onPress={this.placeSubmitHandler}
          />
        </View>
    }
}


const style = StyleSheet.apply({
    inputContainer: {
    // flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  placeInput: {
    width: "70%"
  },
  placeButton: {
    width: "30%"
  },
})

export default PlaceInput;