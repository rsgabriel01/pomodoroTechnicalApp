import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },

  main: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 15,
    margin: 15,
  },

  titleConfig: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 10,
  },

  titleConfigText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 3,
  },

  inputGroupConfigInColumn: {
    flex: 1,
    marginBottom: 5,
    alignItems: 'center',
  },

  labelInputConfig: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#717171',
  },

  inputConfig: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#B0B0B0',
    textTransform: 'uppercase',
  },

  textTwoPoints: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#B0B0B0',
    textTransform: 'uppercase',
    alignSelf: 'center',
  },

  configContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  button: {
    flexDirection: 'row',
    height: 51,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginHorizontal: 5,
    marginTop: 30,
  },

  buttonDisabled: {
    opacity: 0.5,
  },

  buttonText: {
    color: '#f1f1f1',
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 5,
  },
});

export default styles;
