import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from 'components/App';

// import { GlobalStyles } from 'styles/GlobalStyles';
// import { theme } from './styles/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="project-money-guard">
        <PersistGate loading={null} persistor={persistor}>
          <App />
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <GlobalStyles />
        </PersistGate>
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
);
