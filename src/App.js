import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';
import PortfolioTable from './components/PortfolioTable/PortfolioTable';
import PortfolioTitle from './components/PortfolioTitle/PortfolioTitle';
import NetWorth from './components/NetWorth/NetWorth';

function App() {

  const [netWorth, setNetWorth] = useState(22000);

  return (
    <div className="App">
      <PortfolioTitle></PortfolioTitle>
      <PortfolioTable setNetWorth={setNetWorth}></PortfolioTable>
      <NetWorth totalNetWorth={netWorth}></NetWorth>
    </div>
  );
}

export default App;
