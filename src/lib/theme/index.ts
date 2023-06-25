// My main theme entrypoint

import { extendTheme } from '@chakra-ui/react';
import styles from './style';

const colors = {
  body: '#F5F5F5',
  base: '#333333',
  input: {
    email: {
      500: '#d9d9d9',
      600: '#bfbfbf',
      bg: '#f5f5f5',
      icon: '#8c8c8c',
    },
    password: {
      500: '#ded3a4',
      600: '#d0c27f',
      bg: '#e9e2c0',
      icon: '#c3b15b',
    },
    're-password': {
      500: '#d099e4',
      600: '#bd70da',
      bg: '#e1bcef',
      icon: '#aa49d0',
    },
  },
};

const breakpoints = {
  md: '40em',
};

const sizes = {
  screen: '100vh',
};

const layerStyles = {};

const overrides = {
  colors,
  styles,
  layerStyles,
  sizes,
  breakpoints,
  components: {},
};

export default extendTheme(overrides);
