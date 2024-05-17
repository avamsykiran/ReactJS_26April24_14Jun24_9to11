import { Fragment } from 'react';
import MenuBar from './components/MenuBar';
import Contacts from './components/Contacts';

const App = () => (
  <Fragment>
    <MenuBar appName="Address Book 1.0" />
    <div className='container-fluid p-4'>
      <Contacts />
    </div>
  </Fragment>
);

export default App;
