import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { Focus } from './src/features/focus/focus';
import { Timer } from './src/features/timer/Timer';
import { colors } from './src/utils/colors';
import { spacing } from './src/utils/sizes';

export default function App() {
  const [focusSubject, setFocusSubject] = useState(null);
  const [focusHistory, setFocusHistory] = useState([]);//stores the focus history in an empty array.

  useEffect(() => {
    if (focusSubject) {
      setFocusHistory([...focusHistory, focusSubject]);
    }
  }, [focusSubject]);

  console.log(focusHistory);

  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Timer
          focusSubject={focusSubject}
          onTimerEnd={() => {
            setFocusSubject(null);
          }}
          clearSubject={() => setFocusSubject(null)}//clears the focus subject but not the history, there is more to do...
        />
      ) : (
        <Focus addSubject={setFocusSubject} />
      )}
      <Text>{focusSubject}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBlue,
    padding: Platform.OS === 'ios' ? spacing.md : spacing.lg,
  },
});