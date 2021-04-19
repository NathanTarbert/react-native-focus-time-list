import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { fontSizes, spacing } from '../utils/sizes';
import { colors } from '../utils/colors';

const minutesToMillis = (min) => min * 1000 * 60;
const formatTime = (time) => time < 10 ? `0${time}` : time;

export const Countdown = ({
  minutes = 20,
  isPaused,
}) => {
  const interval = React.useRef(null);
  const countDown = () => {
    setMillis((time) => {
      if(time === 0) {
        // do more stuff here
        return time;
      }
      const timeLeft = time - 1000;
      // report the progress
      return timeLeft;
    });
  };

  const [millis, setMillis] = useState(minutesToMillis(minutes));

  useEffect(() => {
    interval.current = setInterval(countDown, 1000)//this is going to set our countdown and count every 1000 which is 1 second in mlseconds

    return () => clearInterval(interval.current);//this will clear the interval
  },[]);

  const minute = Math.floor(millis / 1000 / 60 ) % 60;
  const seconds = Math.floor(millis / 1000 ) % 60;
  return (
   
    <Text style={styles.text}>{formatTime(minute)}:{formatTime(seconds)}</Text>
   
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