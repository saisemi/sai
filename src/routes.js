import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ContactUsPage from './components/ContactUsPage';
import CustomersPage from './components/CustomersPage';
import PartnersPage from './components/PartnersPage';
import ServicesPage from './components/ServicesPage';

// export default {
//   '/': () => <HomePage />,
//   '#/about': () => <AboutPage />,
// };


export default () => (
  <Switch>
    <Route exact path='/' component={HomePage}/>
    <Route path='/about' component={HomePage}/>
    <Route path='/contactus' component={ContactUsPage}/>
    <Route path='/customers' component={CustomersPage}/>
    <Route path='/partners' component={PartnersPage}/>
    <Route path='/services' component={ServicesPage}/>
  </Switch>
);
