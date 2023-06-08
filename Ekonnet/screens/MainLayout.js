import React from 'react';
import { View } from 'react-native';
import { IconTextButton } from '../components';

const MainLayout = ({ children }) => {
  return <View style={{ flex: 1 }}>{children}</View>;
};

export default MainLayout;
