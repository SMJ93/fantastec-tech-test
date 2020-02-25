import React from 'react';
import {View, TouchableOpacity} from 'react-native';

import Text from '../Text';
import {LiveCommentaryKeyMoment} from '../../types/LiveCommentaryFeed';

import styles from './styles';
import KeyMomentsItem from './Item';

interface Props {
  keyMoments: LiveCommentaryKeyMoment[];
  onPressKeyMomentItem(id: number): void;
  toggleKeyMomentsVisibility(): void;
  isKeyMomentsVisible: boolean;
  keyMomentsHeight: number;
}

export default function KeyMoments({
  keyMoments,
  onPressKeyMomentItem,
  toggleKeyMomentsVisibility,
  isKeyMomentsVisible,
  keyMomentsHeight,
}: Props) {
  const chevronIcon = isKeyMomentsVisible ? 'v' : '>';

  return (
    <View style={[styles.keyMoments, {height: keyMomentsHeight}]}>
      <Text type="h1">Key moments</Text>
      <TouchableOpacity
        onPress={toggleKeyMomentsVisibility}
        style={styles.chevronButton}>
        <Text type="h2" bold>
          {chevronIcon}
        </Text>
      </TouchableOpacity>
      {isKeyMomentsVisible && (
        <>
          {keyMoments.map((item, index) => (
            <KeyMomentsItem
              item={item}
              key={index}
              onPressKeyMomentItem={onPressKeyMomentItem}
            />
          ))}
        </>
      )}
    </View>
  );
}
