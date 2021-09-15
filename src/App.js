import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Background from './components/Background'
import Home from './components/Home'
import Header from './components/Header'
import Cart from './components/Cart'
import Browse from './components/Browse'
import './App.css';
import Search from './components/Search'
import Admin from './components/Admin'






function App() {



  return (
    <div className="App">
     <Router>
     <Header/>
      <Background />
      <Switch>
      <Route exact path="/admin" component={Admin} />

        <Route exact path="/search" component={Search} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/browse" component={Browse} />
        <Route exact path="/" component={Home} />


      </Switch>



     </Router>
     

      
    </div>
  );
}

export default App;
