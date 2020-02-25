import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';

import * as liveCommentaryFeedResponse from '../mocks/liveCommentaryFeedResponse.json';
import {LiveCommentaryFeedResponse} from '../types/LiveCommentaryFeed';
import {Text, LiveCommentaryItem, KeyMoments} from '../components';
import styles from './styles';

export default function App() {
  const {
    feed,
    keyMoments,
  } = liveCommentaryFeedResponse.data as LiveCommentaryFeedResponse;
  return (
    <SafeAreaView style={styles.screen}>
      <Text type="h1">Live commentary</Text>
      <FlatList
        data={feed}
        renderItem={({item, index}) => (
          <LiveCommentaryItem
            item={item}
            isFirstItem={index === 0}
            isLastItem={index === feed.length - 1}
          />
        )}
        keyExtractor={item => `${item.id}`}
      />
      <KeyMoments />
    </SafeAreaView>
  );
}
