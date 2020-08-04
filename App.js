import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './pages/Login';
import AdminLogin from './pages/AdminLogin';
import AdminSignup from './pages/AdminSignup';
import UserLogin from './pages/UserLogin';
import UserSignup from './pages/UserSignup';
import AdminHomeScreen from './pages/AdminHomeScreen';
import UserHomeScreen from './pages/UserHomeScreen';
import RegisterUser from './pages/RegisterUser';
import UpdateUser from './pages/UpdateUser';
import ViewUser from './pages/ViewUser';
import ViewAllUser from './pages/ViewAllUser';
import DeleteUser from './pages/DeleteUser';
import AddMovies from './pages/AddMovies';
import UpdateMovie from './pages/UpdateMovie';
import ViewMovie from './pages/ViewMovie';
import ViewAllMovies from './pages/ViewAllMovies';
import DeleteMovie from './pages/DeleteMovie';

const App = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'Login',
      headerStyle: { backgroundColor: '#ffffff' },
      headerTintColor: '#000000',
    },
  },
  AdminLogin: {
    screen: AdminLogin,
    navigationOptions: {
      title: 'Admin',
      headerStyle: { backgroundColor: '#ffffff' },
      headerTintColor: '#000000',
    },
  },
  AdminSignup: {
    screen: AdminSignup,
    navigationOptions: {
      title: 'Admin',
      headerStyle: { backgroundColor: '#ffffff' },
      headerTintColor: '#000000',
    },
  },
  UserLogin: {
    screen: UserLogin,
    navigationOptions: {
      title: 'User',
      headerStyle: { backgroundColor: '#ffffff' },
      headerTintColor: '#000000',
    },
  },
  UserSignup: {
    screen: UserSignup,
    navigationOptions: {
      title: 'User',
      headerStyle: { backgroundColor: '#ffffff' },
      headerTintColor: '#000000',
    },
  },
  AdminHomeScreen: {
    screen: AdminHomeScreen,
    navigationOptions: {
      title: 'Admin Dashboard',
      headerStyle: { backgroundColor: '#3a59b7' },
      headerTintColor: '#ffffff',
    },
  },
  View: {
    screen: ViewUser,
    navigationOptions: {
      title: 'View User',
      headerStyle: { backgroundColor: '#3a59b7' },
      headerTintColor: '#ffffff',
    },
  },
  ViewAll: {
    screen: ViewAllUser,
    navigationOptions: {
      title: 'View All User',
      headerStyle: { backgroundColor: '#3a59b7' },
      headerTintColor: '#ffffff',
    },
  },
  Update: {
    screen: UpdateUser,
    navigationOptions: {
      title: 'Update User Details',
      headerStyle: { backgroundColor: '#3a59b7' },
      headerTintColor: '#ffffff',
    },
  },
  Register: {
    screen: RegisterUser,
    navigationOptions: {
      title: 'Register User',
      headerStyle: { backgroundColor: '#3a59b7' },
      headerTintColor: '#ffffff',
    },
  },
  DeleteUser: {
    screen: DeleteUser,
    navigationOptions: {
      title: 'Delete User',
      headerStyle: { backgroundColor: '#3a59b7' },
      headerTintColor: '#ffffff',
    },
  },
  AddMovies: {
    screen: AddMovies,
    navigationOptions: {
      title: 'Add Movies',
      headerStyle: { backgroundColor: '#3a59b7' },
      headerTintColor: '#ffffff',
    },
  },
  ViewAllMovies: {
    screen: ViewAllMovies,
    navigationOptions: {
      title: 'Movies',
      headerStyle: { backgroundColor: '#3a59b7' },
      headerTintColor: '#ffffff',
    },
  },
  UserHomeScreen: {
    screen: UserHomeScreen,
    navigationOptions: {
      title: 'Movies',
      headerStyle: { backgroundColor: '#3a59b7' },
      headerTintColor: '#ffffff',
    },
  },
  UpdateMovie: {
    screen: UpdateMovie,
    navigationOptions: {
      title: 'Update Movies',
      headerStyle: { backgroundColor: '#3a59b7' },
      headerTintColor: '#ffffff',
    },
  },
  DeleteMovie: {
    screen: DeleteMovie,
    navigationOptions: {
      title: 'Delete Movie',
      headerStyle: { backgroundColor: '#3a59b7' },
      headerTintColor: '#ffffff',
    },
  },
  ViewMovie: {
    screen: ViewMovie,
    navigationOptions: {
      title: 'View Movie',
      headerStyle: { backgroundColor: '#3a59b7' },
      headerTintColor: '#ffffff',
    },
  },
});

export default createAppContainer(App);