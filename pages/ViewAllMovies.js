import React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';
import Realm from 'realm';

let realm;

export default class ViewAllMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FlatListItems: [],
    };
    realm = new Realm({ path: 'MovieDatabase.realm' });
    var movie_details = realm.objects('movie_details');
    this.state = {
      FlatListItems: movie_details,
    };
  }
  ListViewItemSeparator = () => {
    return (
      <View style={styles.container} />
    );
  };
  render() {
    return (
      <View>
        <FlatList
          data={this.state.FlatListItems}
          ItemSeparatorComponent={this.ListViewItemSeparator}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.info}>
              <Text>Id: {item.movie_id}</Text>
              <Text>Movie Name: {item.movie_name}</Text>
              <Text>Genre: {item.movie_genre}</Text>
              <Text>IMDB: {item.movie_IMDB}</Text>
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    height: 0.5, 
    width: '100%', 
    backgroundColor: '#000000' 
  },
  info: {
    backgroundColor: '#ffffff',
    padding: 20
  }
});