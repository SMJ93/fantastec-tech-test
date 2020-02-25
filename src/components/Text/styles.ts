import {StyleSheet, TextStyle} from 'react-native';

interface Styles {
  text: TextStyle;
  h1: TextStyle;
  h2: TextStyle;
  body: TextStyle;
  time: TextStyle;
}

export default StyleSheet.create<Styles>({
  text: {
    color: '#333',
  },
  h1: {
    fontSize: 28,
    textAlign: 'center',
    fontWeight: '700',
    marginVertical: 15,
  },
  h2: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '700',
  },
  body: {
    fontSize: 12,
  },
  time: {
    fontSize: 12,
    fontWeight: '700',
  },
});
