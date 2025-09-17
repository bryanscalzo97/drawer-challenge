import React from 'react';
import TabNavigator from '../navigations/TabNavigator';
import DrawerSceneWrapper from './DrawerSceneWrapper';

const AnimatedTabNavigator = () => {
  return (
    <DrawerSceneWrapper>
      <TabNavigator />
    </DrawerSceneWrapper>
  );
};

export default AnimatedTabNavigator;
