import React, {useState} from 'react';
import './App.css';
import StartPage from './pages/StartPage';
import {Switch, Route} from 'react-router-dom';
import AgePage from './pages/AgePage';
import {PersonContext} from './contexts/PersonContext';
import InterestPage from './pages/InterestPage';
import RelationshipPage from './pages/RelationshipPage';
import ResultPage from './pages/ResultPage';

function App() {

  const [personList, setPersonList] = useState("")
  const [correctStarted, setCorrectStarted] = useState(false)

  return (
    <div className="app-wrapper">
      <PersonContext.Provider value={{personList, setPersonList, correctStarted, setCorrectStarted}}>
    <Switch>
      <Route path="/result">
        <ResultPage/>
      </Route>
      <Route path="/relations">
        <RelationshipPage/>
      </Route>
      <Route path="/interest">
        <InterestPage/>
      </Route>
      <Route path="/age">
        <AgePage/>
      </Route>
      <Route path="/">
     <StartPage/>
     </Route>
    </Switch>
    </PersonContext.Provider>
    </div>
  );
}

export default App;
