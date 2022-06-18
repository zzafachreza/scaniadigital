import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  View,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigator } from '../components';
import { colors } from '../utils/colors';
import { color } from 'react-native-reanimated';
import { Account, EditProfile, GetStarted, Home, Login, Menu0, Menu1, Menu1_detail, Menu2, Menu2_detail, Menu3, Menu4, Menu5, Menu5_detail, Menu6, MenuSlp, Register, Splash, Success } from '../pages';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Laporan" component={Menu5} />
      {/*<Tab.Screen name="Cart" component={Cart} />  */}
      {/* <Tab.Screen name="Notifikasi" component={Notifikasi} /> */}
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};

export default function Router() {
  return (
    <Stack.Navigator initialRouteName={'Splash'}>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Success"
        component={Success}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="MenuSlp"
        component={MenuSlp}
        options={{
          headerShown: false,
        }}
      />


      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerTitle: 'Login',
          headerShown: false,

          cardStyleInterpolator: ({ current, layouts }) => {
            return {
              cardStyle: {
                transform: [
                  {
                    translateX: current.progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [layouts.screen.width, 0],
                    }),
                  },
                ],
              },
            };
          },
        }}
      />



      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerTitle: 'Register',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: colors.primary,
            elevation: 0, // remove shadow on Android
          },
          cardStyleInterpolator: ({ current, layouts }) => {
            return {
              cardStyle: {
                transform: [
                  {
                    translateX: current.progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [layouts.screen.width, 0],
                    }),
                  },
                ],
              },
            };
          },
        }}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{
          headerShown: false,
        }}
      />


      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={({ route, navigation }) => ({
          title: 'Edit Profile',
          headerTintColor: colors.white,
          headerStyle: {
            backgroundColor: colors.primary,
            elevation: 0, // remove shadow on Android
          },
          cardStyleInterpolator: ({ current, layouts }) => {
            return {
              cardStyle: {
                transform: [
                  {
                    translateX: current.progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [layouts.screen.width, 0],
                    }),
                  },
                ],
              },
            };
          },
        })}
      />


      <Stack.Screen
        name="Menu1"
        component={Menu1}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Menu1_detail"
        component={Menu1_detail}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Menu2"
        component={Menu2}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Menu2_detail"
        component={Menu2_detail}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Menu3"
        component={Menu3}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Menu0"
        component={Menu0}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Menu4"
        component={Menu4}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Menu5"
        component={Menu5}
        options={{
          headerShown: false,
        }}
      />


      <Stack.Screen
        name="Menu5_detail"
        component={Menu5_detail}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Menu6"
        component={Menu6}
        options={{
          headerShown: false,
        }}
      />


    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
