import React from 'react';
import {View, TouchableOpacity} from 'react-native';

import Text from '../../Text';
import {LiveCommentaryKeyMoment} from '../../../types/LiveCommentaryFeed';

import styles from './styles';

interface Props {
  item: LiveCommentaryKeyMoment;
  onPressKeyMomentItem(id: number): void;
}

export default function KeyMomentsItem({
  item: {message, minute, id},
  onPressKeyMomentItem,
}: Props) {
  const onPress = () => onPressKeyMomentItem(id);
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.keyMomentsItem}>
        <View style={styles.timeContainer}>
          <Text type="h2" bold>
            {minute}
          </Text>
        </View>
        <Text type="h2">{message}</Text>
      </View>
    </TouchableOpacity>
  );
}
