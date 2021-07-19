import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';

import { AppRouter } from './components/router/AppRouter';



export const PerucashApp = () => {

    window.addEventListener('resize', () => { 
        document.querySelector(':root').style
          .setProperty('--vw', window.innerWidth/100 + 'px');
      })

    return (
      <Provider store={ store }>
            <AppRouter />
      </Provider>
    )
}
