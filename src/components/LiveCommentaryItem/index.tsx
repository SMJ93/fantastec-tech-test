import React from 'react';
import {View} from 'react-native';

import {LiveCommentaryFeedItem} from '../../types/LiveCommentaryFeed';
import Text from '../Text';

import styles from './styles';

interface Props {
  item: LiveCommentaryFeedItem;
  isFirstItem: boolean;
  isLastItem: boolean;
  activeCommentaryItemId: number | null;
}

export default function LiveCommentaryItem({
  item: {minute, message, id},
  isFirstItem,
  isLastItem,
  activeCommentaryItemId,
}: Props) {
  const isActive = id === activeCommentaryItemId;
  return (
    <View style={[styles.item, isActive && styles.activeItem]}>
      <View style={styles.minuteSection}>
        {!isFirstItem && <View style={styles.line} />}
        <View style={styles.minuteContainer}>
          <Text type="body" bold>
            {minute}
          </Text>
        </View>
        {!isLastItem && <View style={styles.line} />}
      </View>
      <View style={styles.messageContainer}>
        <Text>{message}</Text>
      </View>
    </View>
  );
}
