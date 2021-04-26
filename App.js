import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { Focus } from './src/features/focus/focus';
import { Timer } from './src/features/timer/Timer';
import { colors } from './src/utils/colors';
import { spacing } from './src/utils/sizes';

const STATUS = {
  COMPLETE: 1,
  CANCELLED: 2,
};

export default function App() {
  const [focusSubject, setFocusSubject] = useState(null);
  const [focusHistory, setFocusHistory] = useState([]); //stores the focus history in an empty array.

  console.log(focusHistory);

  // useEffect(() => {//this does not track the subject well enough to tell if the focusSubject was successful so we will use state instead.
  //   if (focusSubject) {
  //     setFocusHistory([...focusHistory, focusSubject]);
  //   }
  // }, [focusSubject]);

  // console.log(focusHistory);

  const addFocusHistorySubjectWithState = (subject, status) => {
    // this will track our progress
    setFocusHistory([...focusHistory, { subject, status }]);
  };

  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Timer
          focusSubject={focusSubject}
          onTimerEnd={() => {
            addFocusHistorySubjectWithState(focusSubject, STATUS.COMPLETE);
            setFocusSubject(null);
          }}
          clearSubject={() => {
            addFocusHistorySubjectWithState(focusSubject, STATUS.CANCELLED);
            setFocusSubject(null);
          }}
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
