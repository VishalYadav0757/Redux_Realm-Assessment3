import React from 'react';
import { View, StyleSheet } from 'react-native';
import Mybutton from './components/Mybutton';

export default class AdminHomeScreen extends React.Component {

  constructor(props) {
    super(props);
    realm = new Realm({
      path: 'MovieDatabase.realm',
      schema: [
        {
          name: 'movie_details',
          properties: {
            movie_id: { type: 'int', default: 0 },
            movie_name: 'string',
            movie_genre: 'string',
            movie_IMDB: 'string',
          },
        },
      ],
    });
  }

  render() {
    return (
      <View
        style={StyleSheet.container}>
        <Mybutton
          title="Register"
          customClick={() => this.props.navigation.navigate('Register')}
        />
        <Mybutton
          title="Update User Details"
          customClick={() => this.props.navigation.navigate('Update')}
        />
        <Mybutton
          title="View Users"
          customClick={() => this.props.navigation.navigate('View')}
        />
        <Mybutton
          title="View All Users"
          customClick={() => this.props.navigation.navigate('ViewAll')}
        />
        <Mybutton
          title="Delete User"
          customClick={() => this.props.navigation.navigate('DeleteUser')}
        />
        <Mybutton
          title="Add Movies"
          customClick={() => this.props.navigation.navigate('AddMovies')}
        />
        <Mybutton
          title="Update Movie Details"
          customClick={() => this.props.navigation.navigate('UpdateMovie')}
        />
        <Mybutton
          title="View Movies"
          customClick={() => this.props.navigation.navigate('ViewMovie')}
        />
        <Mybutton
          title="View All Movies"
          customClick={() => this.props.navigation.navigate('ViewAllMovies')}
        />
        <Mybutton
          title="Delete Movies"
          customClick={() => this.props.navigation.navigate('DeleteMovie')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  constainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    flexDirection: 'column'
  }
});