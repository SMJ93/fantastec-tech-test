import React, {useState, useRef} from 'react';
import {SafeAreaView, FlatList} from 'react-native';

import * as liveCommentaryFeedResponse from '../mocks/liveCommentaryFeedResponse.json';
import {LiveCommentaryFeedResponse} from '../types/LiveCommentaryFeed';
import {Text, LiveCommentaryItem, KeyMoments} from '../components';
import styles from './styles';

export default function App() {
  const [isKeyMomentsVisible, setIsKeyMomentsVisible] = useState(false);
  const [activeCommentaryItemId, setActiveCommentaryItemId] = useState<
    number | null
  >(null);
  const flatListRef = useRef<FlatList>(null);

  const {
    feed,
    keyMoments,
  } = liveCommentaryFeedResponse.data as LiveCommentaryFeedResponse;

  const toggleKeyMomentsVisibility = () => {
    setIsKeyMomentsVisible(!isKeyMomentsVisible);
    setActiveCommentaryItemId(null);
  };

  const onPressKeyMomentItem = (id: number) => {
    flatListRef?.current?.scrollToIndex({index: id, animated: true});
    setActiveCommentaryItemId(id);
  };

  const keyMomentsHeight = isKeyMomentsVisible ? 180 : 90;

  return (
    <SafeAreaView style={styles.screen}>
      <Text type="h1">Live commentary</Text>
      <FlatList
        ref={flatListRef}
        data={feed}
        renderItem={({item, index}) => (
          <LiveCommentaryItem
            item={item}
            isFirstItem={index === 0}
            isLastItem={index === feed.length - 1}
            activeCommentaryItemId={activeCommentaryItemId}
          />
        )}
        keyExtractor={item => `${item.id}`}
        contentContainerStyle={{paddingBottom: keyMomentsHeight}}
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
