import React from 'react';
import { Button, Text, View, Alert, StyleSheet } from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import Realm from 'realm';

let realm;

export default class UpdateMovie extends React.Component {
  constructor(props) {
    super(props);
    realm = new Realm({ path: 'MovieDatabase.realm' });
    this.state = {
      input_movie_id: '',
    };
  }
  deleteMovie = () => {
    var that = this;
    const { input_movie_id } = this.state;
    realm.write(() => {
      var ID = this.state.input_movie_id;
      if (
        realm.objects('movie_details').filtered('movie_id =' + input_movie_id)
          .length > 0
      ) {
        realm.delete(
          realm.objects('movie_details').filtered('movie_id =' + input_movie_id)
        );
        var movie_details = realm.objects('movie_details');
        console.log(movie_details);
        Alert.alert(
          'Success',
          'Movie deleted successfully',
          [
            {
              text: 'Ok',
              onPress: () => that.props.navigation.navigate('AdminHomeScreen'),
            },
          ],
          { cancelable: false }
        );
      } else {
        alert('Please insert a valid Movie Id');
      }
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <Mytextinput
          placeholder="Enter Movie Id"
          onChangeText={input_movie_id => this.setState({ input_movie_id })}
        />
        <Mybutton
          title="Delete Movie"
          customClick={this.deleteMovie.bind(this)}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
});