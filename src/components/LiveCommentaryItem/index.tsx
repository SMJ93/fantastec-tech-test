import React from 'react';
import {View} from 'react-native';

import {LiveCommentaryFeedItem} from '../../types/LiveCommentaryFeed';
import Text from '../Text';

import styles from './styles';

interface Props {
  item: LiveCommentaryFeedItem;
  isFirstItem: boolean;
  isLastItem: boolean;
}

export default function LiveCommentaryItem({
  item,
  isFirstItem,
  isLastItem,
}: Props) {
  return (
    <View style={styles.item}>
      <View style={styles.minuteSection}>
        {!isFirstItem && <View style={styles.line} />}
        <View style={styles.minuteContainer}>
          <Text type="time">{item.minute}</Text>
        </View>
        {!isLastItem && <View style={styles.line} />}
      </View>
      <View style={styles.messageContainer}>
        <Text>{item.message}</Text>
      </View>
    </View>
  );
}
