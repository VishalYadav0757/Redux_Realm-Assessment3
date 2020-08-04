import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import Realm from 'realm';

let realm;

export default class ViewMovie extends React.Component {
  constructor(props) {
    super(props);
    realm = new Realm({ path: 'MovieDatabase.realm' });
    this.state = {
      input_movie_id: '',
      movieData: '',
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
      console.log(movie_details[0]);
      this.setState({
        movieData: movie_details[0],
      });
    } else {
      alert('No movie found');
      this.setState({
        movieData: '',
      });
    }
  };
  render() {
    return (
      <View>
        <Mytextinput
          placeholder="Enter Movie Id"
          onChangeText={input_movie_id => this.setState({ input_movie_id })}
        />
        <Mybutton
          title="Search Movie"
          customClick={this.searchMovie.bind(this)}
        />
        <View style={styles.container}>
          <Text>Movie Id: {this.state.movieData.movie_id}</Text>
          <Text>Movie Name: {this.state.movieData.movie_name}</Text>
          <Text>Movie Genre: {this.state.movieData.movie_genre}</Text>
          <Text>Movie IMDB: {this.state.movieData.movie_IMDB}</Text>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create ({
  container: {
    marginLeft: 35, 
    marginRight: 35, 
    marginTop: 10 
  }
});