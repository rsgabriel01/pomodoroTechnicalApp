import React, {useState, useEffect, useCallback} from 'react';

import {SafeAreaView, View, Text, TouchableOpacity, Alert} from 'react-native';

import {useFocusEffect} from '@react-navigation/native';

import AsyncStorage from '@react-native-community/async-storage';

import Icon from 'react-native-vector-icons/Feather';

import styles from './HomeStyles';

export default function ServiceOrder() {
  // #region Definitions
  const [secondsWork, setSecondsWork] = useState(25);
  const [secondsWorkText, setSecondsWorkText] = useState('25');
  const [pauseTimeWork, setPauseTimeWork] = useState(true);

  const [secondsBreak, setSecondsBreak] = useState(5);
  const [secondsBreakText, setSecondsBreakText] = useState('5');
  const [pauseTimeBreak, setPauseTimeBreak] = useState(true);

  // #endregion Definitions

  // #region useEffect

  useEffect(() => {
    getSettingsSave();
  }, []);

  useEffect(() => {
    if (secondsWork > 0 && pauseTimeWork === false) {
      decrementTime('work');
    } else if (secondsWork <= 0) {
      alerts('break');
    }

    if (secondsWork.toString().length < 2) {
      setSecondsWorkText(`0${secondsWork.toString()}`);
    } else {
      setSecondsWorkText(secondsWork);
    }
  }, [secondsWork]);

  useEffect(() => {
    if (secondsBreak > 0 && pauseTimeBreak === false) {
      decrementTime('break');
    } else if (secondsBreak <= 0) {
      alerts('work');
    }

    if (secondsBreak.toString().length < 2) {
      setSecondsBreakText(`0${secondsBreak.toString()}`);
    } else {
      setSecondsBreakText(secondsBreak);
    }
  }, [secondsBreak]);

  // #endregion usEffect

  // #region use Focus Effect

  useFocusEffect(
    useCallback(
      () => () => {
        setPauseTimeWork(true);
        setPauseTimeBreak(true);
      },
      [],
    ),
  );

  // #endregion use Effect

  // #region Alerts

  const alerts = (tipeAlert) => {
    if (tipeAlert === 'break') {
      Alert.alert(
        'IIIHUL!',
        'Hora de tomar aquele café.',
        [
          {
            text: 'OK',
            onPress: () => {
              handleResetTime('work');
            },
          },
        ],
        {cancelable: false},
      );
    }

    if (tipeAlert === 'work') {
      Alert.alert(
        'OLHA SÓ!',
        'Hora de voltar ao trabalho.',
        [
          {
            text: 'OK',
            onPress: () => {
              handleResetTime('break');
            },
          },
        ],

        {cancelable: false},
      );
    }
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

  const decrementTime = (typeTimeDecrement) => {
    if (typeTimeDecrement === 'work') {
      setTimeout(() => setSecondsWork(secondsWork - 1), 1000);
    }

    if (typeTimeDecrement === 'break') {
      setTimeout(() => setSecondsBreak(secondsBreak - 1), 1000);
    }
  };

  const handlePlayTimeWork = (typePlayTime) => {
    if (typePlayTime === 'work') {
      if (pauseTimeWork === true) {
        setPauseTimeWork(false);
      } else if (pauseTimeWork === false) {
        setPauseTimeWork(true);
      }

      decrementTime('work');
    }

    if (typePlayTime === 'break') {
      if (pauseTimeBreak === true) {
        setPauseTimeBreak(false);
      } else if (pauseTimeBreak === false) {
        setPauseTimeBreak(true);
      }

      decrementTime('break');
    }
  };

  const handleResetTime = (resetTypeTime) => {
    if (resetTypeTime === 'work') {
      setPauseTimeWork(true);
      getSettingsSave();
    }

    if (resetTypeTime === 'break') {
      setPauseTimeBreak(true);
      getSettingsSave();
    }
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.main}>
        <View>
          <View style={styles.viewTitleSession}>
            <Icon name="tool" size={40} color="#f1f1f1" />

            <Text style={styles.titleSession}>WORK</Text>
          </View>

          <Text
            style={[
              styles.textTimer,
              !pauseTimeWork ? {color: '#B22222'} : '',
            ]}>
            00:
            {secondsWorkText}
          </Text>

          <View style={styles.buttons}>
            <TouchableOpacity
              disabled={!pauseTimeBreak}
              onPress={() => {
                handlePlayTimeWork('work');
              }}
              style={[styles.button, !pauseTimeBreak ? {opacity: 0.5} : '']}>
              {pauseTimeWork ? (
                <Icon name="play" size={20} color="#f1f1f1" />
              ) : (
                <Icon name="pause" size={20} color="#f1f1f1" />
              )}

              <Text style={styles.buttonText}>
                {pauseTimeWork ? 'Start' : 'Pause'}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              disabled={!pauseTimeWork || !pauseTimeBreak}
              onPress={() => {
                handleResetTime('work');
              }}
              style={[
                styles.button,
                !pauseTimeWork || !pauseTimeBreak ? {opacity: 0.5} : '',
              ]}>
              <Icon name="rotate-ccw" size={20} color="#f1f1f1" />

              <Text style={styles.buttonText}>Reset</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.main}>
        <View>
          <View style={styles.viewTitleSession}>
            <Icon name="coffee" size={40} color="#f1f1f1" />

            <Text style={styles.titleSession}>BREAK</Text>
          </View>

          <Text
            style={[
              styles.textTimer,
              !pauseTimeBreak ? {color: '#B22222'} : '',
            ]}>
            00:
            {secondsBreakText}
          </Text>

          <View style={styles.buttons}>
            <TouchableOpacity
              disabled={!pauseTimeWork}
              onPress={() => {
                handlePlayTimeWork('break');
              }}
              style={[styles.button, !pauseTimeWork ? {opacity: 0.5} : '']}>
              {pauseTimeBreak ? (
                <Icon name="play" size={20} color="#f1f1f1" />
              ) : (
                <Icon name="pause" size={20} color="#f1f1f1" />
              )}

              <Text style={styles.buttonText}>
                {pauseTimeBreak ? 'Start' : 'Pause'}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              disabled={!pauseTimeWork || !pauseTimeBreak}
              onPress={() => {
                handleResetTime('break');
              }}
              style={[
                styles.button,
                !pauseTimeWork || !pauseTimeBreak ? {opacity: 0.5} : '',
              ]}>
              <Icon name="rotate-ccw" size={20} color="#f1f1f1" />

              <Text style={styles.buttonText}>Reset</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
