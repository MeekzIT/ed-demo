/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
  Platform,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import ArrowIcon from '../assets/icons/ArrowIcon.svg';
import {MotiView} from 'moti';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigator/RootNavigator';

interface Data {
  navigate: keyof RootStackParamList;
  title: string;
}

const Home = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const data: Data[] = [
    {
      navigate: 'Model3D',
      title: '3D Model',
    },
    {
      navigate: 'Character3D',
      title: '3D Animation',
    },
  ];
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {data.map((v, i) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  if (
                    (v.navigate === 'Model3D' ||
                      v.navigate === 'Character3D') &&
                    Platform.OS === 'ios'
                  ) {
                    console.log(v.navigate);
                    Alert.alert(
                      '3D',
                      'if you are using iOS simulator, then the 3D Model will not load, use iOS physical device or use Android Emulator instead',
                      [
                        {
                          text: 'Cancel',
                          onPress: () => console.log('Cancel Pressed'),
                          style: 'cancel',
                        },
                        {
                          text: 'OK',
                          onPress: () => navigation.navigate(v.navigate as any),
                        },
                      ],
                    );
                  } else {
                    navigation.navigate(v.navigate as any);
                  }
                }}
                key={i}>
                <MotiView
                  style={styles.listContainer}
                  from={{opacity: 0, translateY: 50, scale: 0.5}}
                  animate={{opacity: 1, translateY: 0, scale: 1}}
                  transition={{delay: 100 + i * 100}}>
                  <Text style={styles.listText}>{v.title}</Text>
                  <ArrowIcon width={14} height={14} />
                </MotiView>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#F6F6F6'},
  cardContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#1C6BC8',
    aspectRatio: 16 / 9,
    marginTop: 10,
    borderRadius: 25,
  },
  cardText: {
    color: 'white',
    fontSize: 28,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  cardButton: {
    backgroundColor: 'white',
    height: 46,
    borderRadius: 12.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardButtonText: {color: 'black', fontSize: 16, marginLeft: 10},
  listContainer: {
    padding: 20,
    margin: 10,
    borderRadius: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  listText: {color: 'black'},
});
