import React from 'react';
import { Text, View, StyleSheet } from 'react-native'

import { fontSizes, spacing } from '../utils/sizes';
import { colors } from '../utils/colors';

const minutesToMillis = (min) => min * 1000 * 60

export const Countdown = ({
  minutes = 20,
  isPaused,
}) => {

  return (
    <Text style={styles.text}>Countdown Timer Goes Here</Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: fontSizes.xxl,
    fontWeight: 'bold',
    color: colors.white,
    padding: spacing.lg,
    backgroundColor: 'rgba(94, 132, 226, 0.3)'
  }
})