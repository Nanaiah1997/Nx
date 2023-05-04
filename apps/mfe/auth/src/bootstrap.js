import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './app/app';
import { Provider } from 'react-redux';
import {store} from "@workspace/store/auth"
import { ThemeProvider } from '@mui/styles';
import {theme} from '@workspace/theme/theme'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 

  <StrictMode>
     <Provider store={store}>
      <ThemeProvider theme={theme}>

    <App />
    </ThemeProvider>
    </Provider>
  </StrictMode>
  
);
