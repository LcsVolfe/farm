/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, StatusBar, TouchableOpacity} from 'react-native';
import Header from './src/Components/Header';
import {ListTitle} from './src/Components/ListTitle';
import getList from './src/Service/getList';
import {Button, Text} from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { navigationRef } from './src/RootNavigation';

import HomeScreen from './src/Screens/HomeScreen/HomeScreen';
import CollectSoilScreen from './src/Screens/CollectSoilScreen/CollectSoilScreen';
import LoginScreen from './src/Screens/LoginScreen';

import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        primary: '#316845',
        accent: '#f1c40f',
    },
};

// const data = [
//     {id: 1, name: 'Name1'},
//     {id: 2, name: 'Name2'},
//     {id: 3, name: 'Name3'},
// ];

//https://mocki.io/fake-json-api

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStack = createStackNavigator();
function HomeStackScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
            <HomeStack.Screen name="CollectSoilScreen" component={CollectSoilScreen} />
        </HomeStack.Navigator>
    );
}


const SettingsStack = createStackNavigator();
function SettingsStackScreen() {
    return (
        <SettingsStack.Navigator>
            <SettingsStack.Screen name="CollectSoilScreen" component={CollectSoilScreen} />
            <SettingsStack.Screen name="CollectSoilScreen" component={CollectSoilScreen} />
        </SettingsStack.Navigator>
    );
}

const Tab = createBottomTabNavigator();
const App: () => React$Node = () => {
    // const [data, setItem] = useState([]);


    // useEffect(()=>{
    //     getList(setItem);
    // },[]);

    return (
        <PaperProvider theme={theme}>
            <NavigationContainer ref={navigationRef}>
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName;

                            if (route.name === 'Home') {
                                iconName = focused
                                    ? 'ios-information-circle'
                                    : 'ios-information-circle-outline';
                            } else if (route.name === 'Settings') {
                                iconName = focused ? 'ios-list-box' : 'ios-list';
                            }

                            // You can return any component that you like here!
                            return <Ionicons name={iconName} size={size} color={color} />;
                        },
                    })}
                    tabBarOptions={{
                        activeTintColor: 'tomato',
                        inactiveTintColor: 'gray',
                    }}>
                    <Tab.Screen name="HomeScreen" component={HomeStackScreen} options={{ tabBarBadge: 3 }}  />
                    <Tab.Screen name="LoginScreen" component={LoginScreen} />
                    <Tab.Screen name="CollectSoilScreen" component={CollectSoilScreen} />
                </Tab.Navigator>
            </NavigationContainer>
        </PaperProvider>


        // <>
        //     <StatusBar barStyle="dark-content"/>
        //     <SafeAreaView>
        //         <Header/>
        //         <Text>OK</Text>
        //
        //         <FlatList
        //             data={data}
        //             keyExtractor={(item, index) => item.id.toString()}
        //             renderItem={({item}) =>
        //                 <>
        //                     <TouchableOpacity onPress={() => { console.log('click')}}>
        //                         {/*<ListTitle text={item.name}/>*/}
        //                         <Text>CLICK-CLICK-CLICK-CLICK-CLICK-</Text>
        //                     </TouchableOpacity>
        //                 </>
        //             }
        //         >
        //         </FlatList>
        //
        //     </SafeAreaView>
        // </>
    );
};

export default App;
