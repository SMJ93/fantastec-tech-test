import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {Text} from '../components';

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text type="h1">Live commentary</Text>
      </ScrollView>
    </SafeAreaView>
  );
}
