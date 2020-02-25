import {StyleSheet, TextStyle} from 'react-native';

interface Styles {
  text: TextStyle;
  h1: TextStyle;
  h2: TextStyle;
  body: TextStyle;
}

export default StyleSheet.create<Styles>({
  text: {
    color: '#333',
    marginBottom: 15,
  },
  h1: {
    fontSize: 28,
    textAlign: 'center',
    fontWeight: '700',
    marginTop: 10,
  },
  h2: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '700',
  },
  body: {
    fontSize: 14,
    textTransform: 'none',
  },
});
