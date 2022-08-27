import React from 'react';
import {Button, Text, View} from 'react-native';

const DetailScreen = ({navigation, route}) => {
  const data = route.params?.data;
  console.log(route);
  return (
    <>
      <View>
        <Text>디테일 스크린입니다.{data}</Text>
        <Button
          title="뒤로가기"
          onPress={() => {
            // navigation.navigate('HomeScreen');
            navigation.push('DetailScreen');
          }}
        />
      </View>
    </>
  );
};

export default DetailScreen;
