import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text} from 'react-native';
import {BorderlessButton} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';

import styles from './HeaderStyles';

export default function Header({
  title,
  showSettings = true,
  showReturn = true,
}) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {showReturn ? (
        <BorderlessButton onPress={navigation.goBack}>
          <Icon name="arrow-left" size={25} color="#ffffff" />
        </BorderlessButton>
      ) : (
        <View style={styles.viewWhite} />
      )}

      <Text style={styles.title}>{title}</Text>

      {showSettings ? (
        <BorderlessButton
          onPress={() => {
            navigation.navigate('TimerSettings');
          }}>
          <Icon name="settings" size={25} color="#ffffff" />
        </BorderlessButton>
      ) : (
        <View style={styles.viewWhite} />
      )}
    </View>
  );
}
