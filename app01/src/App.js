import { Fragment } from 'react';
import Contacts from './Contacts';
import Header from './Header';

const App = () => (
  <Fragment>
    <Header appName="React SPA 1.0" />
    <Contacts />
  </Fragment>
);

export default App;
