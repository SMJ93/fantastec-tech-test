import {StyleSheet, TextStyle} from 'react-native';

interface Styles {
  text: TextStyle;
  h1: TextStyle;
  h2: TextStyle;
  body: TextStyle;
  bold: TextStyle;
}

export default StyleSheet.create<Styles>({
  text: {
    color: '#333',
  },
  h1: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: '700',
    marginVertical: 15,
  },
  h2: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 5,
  },
  body: {
    fontSize: 14,
  },
  bold: {
    fontWeight: '700',
  },
});
