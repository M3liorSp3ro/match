import App from '@app/App'
import store from '@app/providers/StoreProvider/store'
import GlobalStyles from '@app/styles/globalStyles'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <GlobalStyles />
      <App />
    </Provider>
  </StrictMode>,
)
