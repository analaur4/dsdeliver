import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from './Components/Navbar/index';
import Orders from './Components/Orders/index';
import Home from './Components/Home/index';

function Routes() {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path="/orders">
                    <Orders />
                </Route>

                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
