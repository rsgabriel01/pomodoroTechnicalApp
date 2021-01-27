import React from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
  Text,
  StyleSheet,
} from 'react-native';

import { createIconSet } from 'react-native-vector-icons';

// const glyphMap = require('../../assets/customIcons/remixicon.glyphmap.json');
// const assetId = require('../../assets/customIcons/remixicon.ttf');

// const CustomIcon = createIconSet(glyphMap, 'remixicon', assetId);

export default function ServiceOrder() {
  // #region Definitions

  // #endregion Definitions

  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView style={styles.containerScroll}>
        <View style={styles.main}>
          <View style={styles.iconNameClient}>
            {/* <CustomIcon name="user-2-line" size={75} color="#000" /> */}

            <View style={styles.nameCodClient}>
              <Text style={styles.nameClient} />
              <Text style={styles.codClient}>Código: </Text>
            </View>
          </View>

          {/* OS */}
          <View style={styles.orderService}>
            <View style={styles.dataTitle}>
              {/* <CustomIcon name="file-list-line" size={35} color="#000" /> */}
              <Text style={styles.dataTitleText}>Ordem de serviço</Text>
            </View>

            <View style={styles.codSituationServiceOrder}>
              <View style={styles.textsColumn}>
                <Text style={styles.textDarkGray}>Código</Text>
                <Text style={styles.textLightGray} />
              </View>

              <View style={styles.textsColumn}>
                <Text style={styles.textDarkGray}>Situação</Text>
                <Text style={styles.textLightGray} />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  loading: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    zIndex: 9999999999999,
  },

  successView: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(76,175,80,0.5)',

    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    zIndex: 9999999999999,
  },

  textSuccessView: {
    color: '#C7E6C8',
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: -100,
    textAlign: 'center',
  },

  safeContainer: {
    flex: 1,
  },

  containerScroll: {
    // flex: 1,
  },

  main: {
    // flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 15,
    margin: 15,
  },

  button: {
    flexDirection: 'row',
    height: 51,
    backgroundColor: '#0f4c82',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    borderRadius: 5,
  },

  buttonWhatsApp: {
    flex: 1,
    flexDirection: 'row',
    height: 51,
    color: '#000',
    backgroundColor: '#04D361',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    borderRadius: 5,
    marginRight: 3,
  },

  buttonWaze: {
    flex: 1,
    flexDirection: 'row',
    height: 51,
    color: '#000',
    backgroundColor: '#33CCFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    borderRadius: 5,
    marginLeft: 3,
  },

  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginBottom: 5,
  },

  buttonText: {
    color: '#EFEFEF',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 5,
  },

  iconNameClient: {
    flexDirection: 'row',
    marginBottom: 20,
  },

  nameCodClient: {},

  nameClient: {
    fontSize: 26,
    fontWeight: 'bold',
  },

  codClient: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#595959',
  },

  data: {
    marginBottom: 15,
  },

  dataTitle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 7,
  },

  dataTitleText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 3,
  },

  textsColumn: {
    flex: 1,
    marginBottom: 5,
  },

  textDarkGray: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#717171',
  },
  textLightGray: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#B0B0B0',
    textTransform: 'uppercase',
  },

  orderService: {
    flex: 1,
    marginBottom: 15,
  },

  codSituationServiceOrder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  titleClientAddress: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  clientAddress: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingLeft: 1,
  },
});
