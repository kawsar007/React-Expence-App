import './App.css';
import AddTransection from './Components/AddTransection';
import Balance from './Components/Balance';
import Header from './Components/Header';
import IncomeExpence from './Components/IncomeExpence';
import Navbar from './Components/Navbar';
import TransectionList from './Components/TransectionList';

import { GlobalProvider } from './Context/GlobalState';

function App() {
  return (
    <GlobalProvider>
          <Navbar/>
          <Header/>
          <div className="container">
          <Balance/>
          <IncomeExpence/>
          <TransectionList/>
          <AddTransection/>
          </div>
    </GlobalProvider>
  );
}

export default App;
