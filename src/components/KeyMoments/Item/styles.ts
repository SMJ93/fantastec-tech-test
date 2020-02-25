import {StyleSheet, ViewStyle} from 'react-native';

interface Styles {
  keyMomentsItem: ViewStyle;
  timeContainer: ViewStyle;
}

export default StyleSheet.create<Styles>({
  keyMomentsItem: {
    flexDirection: 'row',
  },
  timeContainer: {
    width: 70,
    alignItems: 'center',
  },
});
