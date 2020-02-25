import React from 'react';
import {SafeAreaView} from 'react-native';

import * as liveCommentaryFeedResponse from '../mocks/liveCommentaryFeedResponse.json';
import {LiveCommentary} from '../components';
import styles from './styles';

export default function App() {
  return (
    <SafeAreaView style={styles.screen}>
      <LiveCommentary liveCommentaryFeed={liveCommentaryFeedResponse.data} />
    </SafeAreaView>
  );
}
