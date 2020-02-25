import {StyleSheet, ViewStyle} from 'react-native';

interface Styles {
  item: ViewStyle;
  minuteSection: ViewStyle;
  minuteContainer: ViewStyle;
  messageContainer: ViewStyle;
  line: ViewStyle;
}

export default StyleSheet.create<Styles>({
  item: {
    flexDirection: 'row',
    minHeight: 34,
  },
  minuteSection: {
    width: 60,
    alignItems: 'center',
  },
  minuteContainer: {
    width: 34,
    height: 34,
    borderRadius: 17,
    borderWidth: 2,
    borderColor: '#333',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageContainer: {
    marginHorizontal: 15,
    marginVertical: 10,
    paddingRight: 50,
  },
  line: {
    width: 2,
    backgroundColor: '#333',
    flex: 0.5,
  },
});
