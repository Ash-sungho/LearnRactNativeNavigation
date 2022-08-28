import * as React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import HomeScreen from './src/screens/HomeScreen';
import DetailScreen from './src/screens/DetailScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tap = createBottomTabNavigator();

const HomeScreen = () => (
  <View>
    <Text>Home</Text>
  </View>
);
const SearchScreen = () => (
  <View>
    <Text>Search</Text>
  </View>
);
const NotificationScreen = () => (
  <View>
    <Text>Notofication</Text>
  </View>
);
const MessageScreen = () => (
  <View>
    <Text>Message</Text>
  </View>
);

const App = () => {
  return (
    <NavigationContainer>
      {/* <Drawer.Navigator
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
      </Drawer.Navigator> */}
      <Tap.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#fb8c00',
          tabBarShowLabel: false,
          tabBarBadge: '10',
        }}>
        <Tap.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: '홈',
            tabBarIcon: ({focus, size, color}) => (
              <Icon name="home" color={color} size={size} />
            ),
          }}
        />
        <Tap.Screen
          name="SearchScreen"
          component={SearchScreen}
          options={{
            title: '검색',
            tabBarIcon: ({color, size}) => (
              <Icon name="search" color={color} size={size} />
            ),
          }}
        />
        <Tap.Screen
          name="NotificationScreen"
          component={NotificationScreen}
          options={{
            title: '알림',
            tabBarIcon: ({color, size}) => (
              <Icon name="notifications" color={color} size={size} />
            ),
          }}
        />
        <Tap.Screen
          name="MessageScreen"
          component={MessageScreen}
          options={{
            title: '메세지',
            tabBarIcon: ({color, size}) => (
              <Icon name="message" color={color} size={size} />
            ),
          }}
        />
      </Tap.Navigator>
    </NavigationContainer>
  );
};

export default App;
