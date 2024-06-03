import { Fragment } from 'react';
import MenuBar from './components/MenuBar';
import Contacts from './components/Contacts';

const App = () => (
  <Fragment>
    <MenuBar appName="Address Book 2.0 (ts)" />
    <div className='container-fluid p-4'>
      <Contacts />
    </div>
  </Fragment>
);

export default App;
