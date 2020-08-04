import React from 'react';
import { View, ScrollView, KeyboardAvoidingView, Alert, StyleSheet } from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import Realm from 'realm';

let realm;

export default class AddMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie_name: '',
      movie_genre: '',
      movie_IMDB: '',
    };
    realm = new Realm({ path: 'MovieDatabase.realm' });
  }

  register_movie = () => {
    var that = this;
    const { movie_name } = this.state;
    const { movie_genre } = this.state;
    const { movie_IMDB } = this.state;
    if (movie_name) {
      if (movie_genre) {
        if (movie_IMDB) {
          realm.write(() => {
            var ID =
              realm.objects('movie_details').sorted('movie_id', true).length > 0
                ? realm.objects('movie_details').sorted('movie_id', true)[0]
                    .movie_id + 1
                : 1;
            realm.create('movie_details', {
              movie_id: ID,
              movie_name: that.state.movie_name,
              movie_genre: that.state.movie_genre,
              movie_IMDB: that.state.movie_IMDB,
            });
            Alert.alert(
              'Success',
              'Movie added successfully',
              [
                {
                  text: 'Ok',
                  onPress: () => that.props.navigation.navigate('AdminHomeScreen'),
                },
              ],
              { cancelable: false }
            );
          });
        } else {
          alert('Please add IMDB');
        }
      } else {
        alert('Please add Movie Genre');
      }
    } else {
      alert('Please add Movie Name');
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps="handled">
          <KeyboardAvoidingView
            behavior="padding"
            style={{ flex: 1, justifyContent: 'space-between' }}>
            <Mytextinput
              placeholder="Enter Movie Name"
              onChangeText={movie_name => this.setState({ movie_name })}
            />
            <Mytextinput
              placeholder="Enter Genre"
              onChangeText={movie_genre => this.setState({ movie_genre })}
            />
            <Mytextinput
              placeholder="Enter IMDB"
              onChangeText={movie_IMDB => this.setState({ movie_IMDB })}
              style={{ textAlignVertical: 'top' }}
            />
            <Mybutton
              title="Submit"
              customClick={this.register_movie.bind(this)}
            />
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  }
});