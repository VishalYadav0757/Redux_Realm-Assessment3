import React from 'react';
import {
  View,
  YellowBox,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  StyleSheet
} from 'react-native';
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
      movie_name: '',
      movie_genre: '',
      movie_IMDB: '',
    };
  }
  searchMovie = () => {
    const { input_movie_id } = this.state;
    console.log(this.state.input_movie_id);
    var movie_details = realm
      .objects('movie_details')
      .filtered('movie_id =' + input_movie_id);
    console.log(movie_details);
    if (movie_details.length > 0) {
      this.setState({
        movie_name: movie_details[0].movie_name,
      });
      this.setState({
        movie_genre: movie_details[0].movie_genre,
      });
      this.setState({
        movie_IMDB: movie_details[0].movie_IMDB,
      });
    } else {
      alert('No movie found');
      this.setState({
        movie_name: '',
      });
      this.setState({
        movie_genre: '',
      });
      this.setState({
        movie_IMDB: '',
      });
    }
  };
  updateMovie = () => {
    var that = this;
    const { input_movie_id } = this.state;
    const { movie_name } = this.state;
    const { movie_genre } = this.state;
    const { movie_IMDB } = this.state;
    if (input_movie_id) {
      if (movie_name) {
        if (movie_genre) {
          if (movie_IMDB) {
            realm.write(() => {
              var ID = this.state.input_movie_id;
              console.log('ID', ID);
              var obj = realm
                .objects('movie_details')
                .filtered('movie_id =' + this.state.input_movie_id);
              console.log('obj', obj);
              if (obj.length > 0) {
                obj[0].movie_name = this.state.movie_name;
                obj[0].movie_genre = this.state.movie_genre;
                obj[0].movie_IMDB = this.state.movie_IMDB;
                Alert.alert(
                  'Success',
                  'Movie updated successfully',
                  [
                    {
                      text: 'Ok',
                      onPress: () =>
                        that.props.navigation.navigate('AdminHomeScreen'),
                    },
                  ],
                  { cancelable: false }
                );
              } else {
                alert('Movie Updation Failed');
              }
            });
          } else {
            alert('Please fill Movie IMDB');
          }
        } else {
          alert('Please fill Movie Genre');
        }
      } else {
        alert('Please fill Movie Name');
      }
    } else {
      alert('Please fill Movie Id');
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
              placeholder="Enter Movie Id"
              onChangeText={input_movie_id => this.setState({ input_movie_id })}
            />
            <Mybutton
              title="Search Movie"
              customClick={this.searchMovie.bind(this)}
            />
            <Mytextinput
              placeholder="Enter Movie Name"
              value={this.state.movie_name}
              onChangeText={movie_name => this.setState({ movie_name })}
            />
            <Mytextinput
              placeholder="Enter Movie Genre"
              value={'' + this.state.movie_genre}
              onChangeText={movie_genre => this.setState({ movie_genre })}
            />
            <Mytextinput
              value={this.state.movie_IMDB}
              placeholder="Enter Movie IMDB"
              onChangeText={movie_IMDB => this.setState({ movie_IMDB })}
              style={{ textAlignVertical: 'top' }}
            />
            <Mybutton
              title="Update Movie"
              customClick={this.updateMovie.bind(this)}
            />
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    );
  }
};

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  }
});