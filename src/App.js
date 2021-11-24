import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Home from './Pages/Home';

function App() {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/" component={Home} exact/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
