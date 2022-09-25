import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Home from './Pages/Home';
import Presse from "./Pages/presse"

function App() {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/" component={Home} exact/>
                    <Route path="/presse" component={Presse} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
