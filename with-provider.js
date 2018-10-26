import React from 'react'
import { Provider } from 'react-redux';

import ThemeProvider from './src/components/ThemeProvider';
import creatStore from './src/stores/createStore';

export default ({ element }) => (
  <Provider store={creatStore()}>
    <ThemeProvider>{element}</ThemeProvider>
  </Provider>
)
