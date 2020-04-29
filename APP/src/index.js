import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import {
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  Dashboard,
  DashboardStu,
  TodayShedule,
  SelectShedule,
  DriverMap,
} from './screens';

const Router = createStackNavigator(
  {
    HomeScreen,
    LoginScreen,
    RegisterScreen,
    ForgotPasswordScreen,
    Dashboard,
    TodayShedule,
    DashboardStu,
    SelectShedule,
    DriverMap,
  },
  {
    initialRouteName: 'LoginScreen',
    headerMode: 'none',
  }
);

export default createAppContainer(Router);
