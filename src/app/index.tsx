import React, {useState} from 'react';
import {SafeAreaView, FlatList} from 'react-native';

import * as liveCommentaryFeedResponse from '../mocks/liveCommentaryFeedResponse.json';
import {LiveCommentaryFeedResponse} from '../types/LiveCommentaryFeed';
import {Text, LiveCommentaryItem, KeyMoments} from '../components';
import styles from './styles';

export default function App() {
  const [isKeyMomentsVisible, setIsKeyMomentsVisible] = useState(false);

  const {
    feed,
    keyMoments,
  } = liveCommentaryFeedResponse.data as LiveCommentaryFeedResponse;

  const toggleKeyMomentsVisibility = () =>
    setIsKeyMomentsVisible(!isKeyMomentsVisible);

  const onPressKeyMomentItem = (id: number) => {
    console.log('PRESS ', id);
  };

  const keyMomentsHeight = isKeyMomentsVisible ? 180 : 90;

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
        contentInset={{bottom: keyMomentsHeight}}
      />
      <KeyMoments
        keyMoments={keyMoments}
        onPressKeyMomentItem={onPressKeyMomentItem}
        toggleKeyMomentsVisibility={toggleKeyMomentsVisibility}
        isKeyMomentsVisible={isKeyMomentsVisible}
        keyMomentsHeight={keyMomentsHeight}
      />
    </SafeAreaView>
  );
}
