import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

// interface ButtonProps {
//   title: string;
//   style?: object;
//   onPress: (event: GestureResponderEvent) => void;
//   type?: 'outline' | 'filled';
// }

const defaultstyle = StyleSheet.create({
  container: {
    margin: 20,
    textAlign: 'center',
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    shadowColor: 'grey',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2,
    elevation: 1,
    minHeight: 54,
    width: 100,
  },
  text: {
    color: 'white',
    fontSize: 16,
    lineHeight: 44,
    fontFamily: '700',
  },
});

const outlineStyles = {
  container: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '3px',
    shadowColor: '#d2d2d2',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.23,
    shadowRadius: '3px',
    elevation: 1,
  },
  text: {
    color: 'blue',
    fontSize: 16,
    lineHeight: 44,
    fontFamily: '700',
  },
};

export const Button = ({title, style, onPress, type}) => {
  const styles = type === 'outline' ? outlineStyles : defaultstyle;
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};
