import React from 'react';

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#DF645F',
  },

  main: {
    alignSelf: 'stretch',
    alignItems: 'stretch',
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 15,
    margin: 15,
  },

  viewTitleSession: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  titleSession: {
    alignSelf: 'center',
    fontSize: 48,
    fontWeight: 'bold',
    color: '#f1f1f1',
    paddingLeft: 10,
  },

  textTimer: {
    alignSelf: 'center',
    fontSize: 80,
    fontWeight: 'bold',
    color: '#f1f1f1',
  },

  buttons: {
    alignSelf: 'stretch',
    flexDirection: 'row',
  },

  button: {
    flex: 1,
    flexDirection: 'row',
    height: 51,
    backgroundColor: 'rgba(1, 0, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    borderRadius: 5,
    marginRight: 5,
    marginLeft: 5,
  },

  buttonPressed: {
    opacity: 0.5,
  },

  buttonText: {
    color: '#f1f1f1',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 5,
  },
});

export default styles;
