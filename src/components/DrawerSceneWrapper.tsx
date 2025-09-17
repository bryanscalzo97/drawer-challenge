import React, { ReactNode } from 'react';
import { StyleSheet } from 'react-native';
import Animated, {
  useAnimatedStyle,
  interpolate,
  useDerivedValue,
} from 'react-native-reanimated';
import { useDrawerProgress } from '@react-navigation/drawer';

type DrawerSceneWrapperProps = {
  children: ReactNode;
};

const DrawerSceneWrapper = ({ children }: DrawerSceneWrapperProps) => {
  const progress = useDrawerProgress();

  // Optimize calculations with useDerivedValue
  const animatedValues = useDerivedValue(() => {
    const progressValue = progress.value;

    return {
      scale: interpolate(progressValue, [0, 1], [1, 0.85], 'clamp'),
      translateX: interpolate(progressValue, [0, 1], [0, 80], 'clamp'),
      rotateY: interpolate(progressValue, [0, 1], [0, -15], 'clamp'),
      borderRadius: interpolate(progressValue, [0, 1], [0, 20], 'clamp'),
      shadowOpacity: interpolate(progressValue, [0, 1], [0, 0.3], 'clamp'),
    };
  });

  const animatedStyle = useAnimatedStyle(() => {
    const { scale, translateX, rotateY, borderRadius, shadowOpacity } =
      animatedValues.value;

    return {
      transform: [
        { perspective: 1000 },
        { rotateY: `${rotateY}deg` },
        { scale },
        { translateX },
      ],
      borderRadius,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity,
      shadowRadius: 20,
      elevation: 10,
    };
  });

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      {children}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
    backfaceVisibility: 'hidden',
  },
});

export default DrawerSceneWrapper;
