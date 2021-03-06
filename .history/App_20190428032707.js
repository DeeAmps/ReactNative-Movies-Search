/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import  { StyleSheet, View , Text, TouchableOpacity, TextInput} from 'react-native';

 class App extends Component {
  constructor(props){
     super(props);
     this.handleChange = this.handleChange.bind(this);
      this.state = {  
        searchValue : ''
      }
    }

    handleChange(search) {
      this.setState({ searchValue: search });
    };
  
  render() {
    return (
      <View>
       
        <View style={styles.searchView}>
          <TextInput
              placeholder="Search Movie..."
              onChange={this.handleChange}
              value={this.state.searchValue}
              style={styles.searchInput}
          />
         <TouchableOpacity  style={styles.searchButton} >
            <Text style={{color: 'white', padding : 5}}>Search</Text>
          </TouchableOpacity>
        </View>       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header : {
    height: 10
  },
  searchView: {
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  main: {
    justifyContent: 'space-around'
  },
  searchInput : {
    width: '82%',
    borderColor: 'black'
  },
  searchButton: {
   borderWidth: 1,
   borderRadius: 5,
   backgroundColor: '#99AAFF',
   width: 70
  },
  searchHeader : {
    flexDirection: 'row'
  }
});

export default App;
