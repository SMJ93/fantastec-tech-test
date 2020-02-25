import React, {ReactNode} from 'react';
import {Text} from 'react-native';

import styles from './styles';

interface Props {
  type?: 'h1' | 'h2' | 'body';
  bold?: boolean;
  children: ReactNode;
}

export default function TextComponent({
  type = 'body',
  bold = false,
  ...props
}: Props) {
  return (
    <Text {...props} style={[styles.text, styles[type], bold && styles.bold]} />
  );
}
