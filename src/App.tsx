import React, { lazy, Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Home1 from './Components/Home/Home1';
// import Country1 from './Components/Home/Country1';
const Country = lazy(()=>import('./Components/Country/Country'));
const Home = lazy(()=>import('./Components/Home/Home'));

// const Home1 = lazy(()=>import('./Components/Home/Home1'))
// const Country1=lazy(()=>import('./Components/Home/Country1'))



function App() {
  return (
    <div className="App" data-testid="app">
       <Suspense fallback={<p>Loading...</p>}>
       <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/country/:name" component={Country}/>
      
          </Switch>
       </BrowserRouter>
       </Suspense>
    </div>
  );
}

export default App;
