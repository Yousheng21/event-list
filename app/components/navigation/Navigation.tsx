import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { MediaPlan, News } from '../screens';
import { NavigationContainer } from '@react-navigation/native';
import SvgAnalysis from "../../assets/analysis.svg"

const Tab = createBottomTabNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="MediaPlan"
          component={MediaPlan}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => <SvgAnalysis fill={color} />,
          }}
        />
        <Tab.Screen name="News" component={News} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
