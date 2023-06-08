import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabIcon} from '../components';
import {Home, Portfolio, Market, Profile} from '../screens';
import {COLORS, icons} from '../constants';

const Tab = createBottomTabNavigator();
const TabBarCustomButton = ({children, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};
const Tabs = () => {
  const [showTradeButton, setShowTradeButton] = useState(false);

  const handleTradeButtonPress = () => {
    setShowTradeButton(true);
  };
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 125,
          backgroundColor: COLORS.primary,
          borderTopColor: 'transparent',
        },
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return <TabIcon focused={focused} icon={icons.home} label="Home" />;
          },
        }}
      />
      <Tab.Screen
        name="Portfolio"
        component={Portfolio}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <TabIcon
                focused={focused}
                icon={icons.briefcase}
                label="Portfolio"
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Trade"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <TabIcon
                focused={focused}
                icon={icons.trade}
                isTrade={true}
                label="Trade"
              />
            );
          },
          tabBarButton: props => (
            <TabBarCustomButton
              {...props}
              onPress={() => handleTradeButtonPress} // Dispatch the action
            />
          ),
        }}
      />
      <Tab.Screen
        name="Market"
        component={Market}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <TabIcon focused={focused} icon={icons.market} label="Market" />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <TabIcon focused={focused} icon={icons.profile} label="Profile" />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
