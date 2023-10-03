import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'rsuite/dist/rsuite.min.css';
import Layout from './components/Layout.jsx'
import UserRoute from './common/UserRoute.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Layout>
      <UserRoute />
    </Layout>
  </React.StrictMode>,
)
