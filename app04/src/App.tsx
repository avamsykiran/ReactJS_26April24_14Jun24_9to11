import { Fragment } from 'react';
import MenuBar from './components/MenuBar';
import Counter from './components/Counter';
import CounterFn from './components/CounterFn';

const App = () => (
  <Fragment>
    <MenuBar appName="Life Cycle Methods Demo" />
    <div className='container-fluid p-4'>
      <Counter />
      <CounterFn />
    </div>
  </Fragment>
);

export default App;
