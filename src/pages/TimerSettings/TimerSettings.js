import React, {useState, useEffect} from 'react';

import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import Icon from 'react-native-vector-icons/Feather';

import styles from './TimerSettingsStyles';

import {onlyNumber} from '../../helpers/onlyNumber';

export default function ServiceOrder() {
  // #region Definitions

  const [secondsWork, setSecondsWork] = useState('25');
  const [secondsBreak, setSecondsBreak] = useState('5');

  // #endregion Definitions

  // #region useEffect

  useEffect(() => {
    getSettingsSave();
  }, []);

  // #endregion useEffect

  // #region Alerts

  const alertAttention = (message) => {
    Alert.alert(
      'Atenção!',
      message,
      [
        {
          text: 'OK',
        },
      ],
      {cancelable: false},
    );
  };

  // #endregion Alerts

  const getSettingsSave = async () => {
    try {
      const secondsWorkSave = await AsyncStorage.getItem('@SECONDS_WORK');

      if (secondsWorkSave) {
        setSecondsWork(secondsWorkSave);
      }

      const secondsBreakSave = await AsyncStorage.getItem('@SECONDS_BREAK');

      if (secondsBreakSave) {
        setSecondsBreak(secondsBreakSave);
      }
    } catch (error) {
      alert(`ERRO: getSettingsSave. - ${error}`);
    }
  };

  const handleSubmit = () => {
    if (secondsWork === '') {
      alertAttention(
        'O campo segundos do cronômetro Work deve estar preenchido.',
      );
      return;
    }

    if (!onlyNumber(secondsWork)) {
      alertAttention(
        'O campo segundos do cronômetro Work deve conter apenas nmeros.',
      );
      return;
    }

    if (secondsBreak === '') {
      alertAttention(
        'O campo segundos do cronômetro Break deve estar preenchido.',
      );
      return;
    }

    if (!onlyNumber(secondsBreak)) {
      alertAttention(
        'O campo segundos do cronômetro Break deve conter apenas números.',
      );
      return;
    }

    saveConfig();
  };

  const saveConfig = async () => {
    try {
      await AsyncStorage.setItem('@SECONDS_WORK', secondsWork);
      await AsyncStorage.setItem('@SECONDS_BREAK', secondsBreak);

      Alert.alert(
        'Isso ai!',
        'Configurações de cronômetros salvas com sucesso.',
        [
          {
            text: 'OK',
          },
        ],
        {cancelable: false},
      );
    } catch (error) {
      alert(`ERROR: saveConfig - ${error}`);
    }
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.main}>
        <View style={styles.titleConfig}>
          <Text style={styles.titleConfigText}>Time Work</Text>
        </View>

        <View style={styles.configContainer}>
          <View style={styles.inputGroupConfigInColumn}>
            <TextInput
              editable={false}
              maxLength={2}
              value="00"
              style={styles.inputConfig}
            />
            <Text style={styles.labelInputConfig}>Minutes</Text>
          </View>

          <View style={styles.inputGroupConfigInColumn}>
            <Text style={styles.textTwoPoints}>:</Text>
          </View>

          <View style={styles.inputGroupConfigInColumn}>
            <TextInput
              keyboardType="numeric"
              maxLength={2}
              autoCorrect={false}
              autoCompleteType="off"
              value={secondsWork}
              onChangeText={setSecondsWork}
              style={styles.inputConfig}
            />
            <Text style={styles.labelInputConfig}>Seconds</Text>
          </View>
        </View>

        <View style={styles.titleConfig}>
          <Text style={[styles.titleConfigText, {marginTop: 30}]}>
            Time Break
          </Text>
        </View>

        <View style={styles.configContainer}>
          <View style={styles.inputGroupConfigInColumn}>
            <TextInput
              editable={false}
              maxLength={2}
              value="00"
              style={styles.inputConfig}
            />
            <Text style={styles.labelInputConfig}>Minutes</Text>
          </View>

          <View style={styles.inputGroupConfigInColumn}>
            <Text style={styles.textTwoPoints}>:</Text>
          </View>

          <View style={styles.inputGroupConfigInColumn}>
            <TextInput
              keyboardType="numeric"
              maxLength={2}
              autoCorrect={false}
              autoCompleteType="off"
              value={secondsBreak}
              onChangeText={setSecondsBreak}
              style={styles.inputConfig}
            />
            <Text style={styles.labelInputConfig}>Seconds</Text>
          </View>
        </View>

        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
          <Icon name="check" size={20} color="#f1f1f1" />

          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
