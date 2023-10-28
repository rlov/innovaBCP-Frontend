import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

export default function Home(): JSX.Element {
  const navigation = useNavigation();
  const offset = useSharedValue(-50);
  const opacity = useSharedValue(1);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: offset.value }],
    opacity: opacity.value,
  }));

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      offset.value = withTiming(0, { duration: 200 });
      opacity.value = withTiming(1, { duration: 120 });
    });

    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      offset.value = withTiming(10, { duration: 200 });
      opacity.value = withTiming(0.85, { duration: 120 });
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <Animated.View style={[styles.container, animatedStyles]}>
      <View></View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
