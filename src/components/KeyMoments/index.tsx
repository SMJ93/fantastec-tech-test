import React from 'react';
import {Text, View} from 'react-native';

import styles from './styles';

interface Props {}

export default function KeyMoments({}: Props) {
  return (
    <View style={styles.keyMoments}>
      <Text>@todo</Text>
    </View>
  );
}
