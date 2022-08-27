import React from 'react';
import {Button, Text, View} from 'react-native';

const DetailScreen = ({navigation, route}) => {
  const data = route.params?.data;
  console.log(route);
  return (
    <>
      <View>
        <Button
          title="HomeScreen 열기"
          onPress={() => {
            // navigation.navigate('HomeScreen');
            navigation.push('DetailScreen');
          }}
        />
      </View>
      <View>
        <Text>디테일 스크린입니다.{data}</Text>
      </View>
    </>
  );
};

export default DetailScreen;
