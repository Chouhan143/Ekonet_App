import React from 'react';
import {View, Text} from 'react-native';
import {MainLayout} from './';
import {useDispatch, useSelector} from 'react-redux';
import {fetchCoinData} from '../Src/redux/market/coinSlice';
import { BalanceInfo } from "../components";
import {COLORS, SIZES} from '../constants';
const Home = () => {
  const dispatch = useDispatch();
  const coin = useSelector(state => state);
  console.log(coin);

  function renderWalletInfoSection() {
    return (
      <View
        style={{
          paddingHorizontal: SIZES.padding,
          borderBottomLeftRadius: 25,
          borderBottomRightRadius: 25,
          backgroundColor: COLORS.gray,
        }}>
        {/* balance Info */}
        <BalanceInfo
          title="Your Wallet"
          displayAmount="45,000"
          changePer={2.30}
          containerStyle={{
            marginTop: 20,
          }}
        />
      </View>
    );
  }

  return (
    <MainLayout>
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.black,
        }}>
        {/* Header- wallet-info */}

        {renderWalletInfoSection()}

        {/* chart */}

        {/* Top CryptoCurrency */}
      </View>
    </MainLayout>
  );
};

export default Home;
