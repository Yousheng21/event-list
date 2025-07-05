import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { MediaPlan, News } from '../screens';
import { NavigationContainer } from '@react-navigation/native';
import SvgAnalysis from '../../assets/analysis.svg';
import SvgNews from '../../assets/news.svg';
import { NewsHeader } from '../screens/news/NewsHeader';

const Tab = createBottomTabNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: 'pink',
          },
        }}
      >
        <Tab.Screen
          name="MediaPlan"
          component={MediaPlan}
          options={{
            tabBarIcon: ({ color }) => <SvgAnalysis fill={color} />,
          }}
        />
        <Tab.Screen
          name="News"
          component={News}
          options={{
            header: () => <NewsHeader />,
            tabBarIcon: ({ color }) => <SvgNews fill={color} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
