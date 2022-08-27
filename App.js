import * as React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import DetailScreen from './src/screens/DetailScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button, Text} from 'react-native';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          drawerPosition: 'left',
          drawerActiveBackgroundColor: '#fb8c00',
          drawerActiveTintColor: 'white',
          headerShown: false,
          // headerLeft: () => {
          //   return <Text>hello</Text>;
          // },
        }}
        backBehavior={'history'}
        drawerContent={({navigation}) => (
          <SafeAreaView>
            <Text>A custom Drawer</Text>
            <Button
              title={'Drawer 닫기'}
              onPress={() => {
                navigation.closeDrawer();
              }}
            />
          </SafeAreaView>
        )}>
        <Drawer.Screen name="HomeScreen" component={HomeScreen} />
        <Drawer.Screen name="DetailScreen" component={DetailScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
