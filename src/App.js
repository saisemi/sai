import React from 'react';
// import { useRoutes } from 'hookrouter';

import './App.css';
import Header from './components/Header';
// import Body from './components/HomePage/Body';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './routes';

	

const App = () => {
  // const routeResult = useRoutes(routes);
  return (
    <div className="App">
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
