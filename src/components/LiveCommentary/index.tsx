import React from 'react';
import {FlatList} from 'react-native';

import {LiveCommentaryFeed} from '../../types/LiveCommentaryFeed';
import Text from '../Text';
import LiveCommentaryItem from './Item';

interface Props {
  liveCommentaryFeed: LiveCommentaryFeed;
}

export default function LiveCommentary({liveCommentaryFeed}: Props) {
  return (
    <>
      <Text type="h1">Live commentary</Text>
      <FlatList
        data={liveCommentaryFeed}
        renderItem={({item, index}) => (
          <LiveCommentaryItem
            item={item}
            isFirstItem={index === 0}
            isLastItem={index === liveCommentaryFeed.length - 1}
          />
        )}
        keyExtractor={item => `${item.id}`}
      />
    </>
  );
}
