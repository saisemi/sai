import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import Header from './components/Header';
import Routes from './routes';




const App = () => {
  // const routeResult = useRoutes(routes);
  return (
    <div className="App">
      <Header />
      <Routes />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
