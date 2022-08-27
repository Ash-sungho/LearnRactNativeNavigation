import React from 'react';
import {Button, View} from 'react-native';

const HomeScreen = ({navigation}) => {
  React.useEffect(() => {
    navigation.setOptions({title: '홈2'});
  }, [navigation]);

  return (
    <View>
      <Button
        title="Detail 열기"
        onPress={() => {
          navigation.navigate('DetailScreen', {data: 'test'});
        }}
      />
    </View>
  );
};

export default HomeScreen;
