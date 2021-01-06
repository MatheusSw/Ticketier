import React from "react";
import ReactDOM from "react-dom";
import Home from "./pages/Home";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import TicketShow from "./pages/Ticket/TicketShow";

const rootElement = document.getElementById("root");

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Switch>
                <Route path='/dashboard/' exact>
                    <Home/>
                </Route>
                {/*TODO Make this only ?page=**/}
                <Route path='/dashboard/home/page/:page'>
                    <Home/>
                </Route>
                <Route path='/dashboard/ticket/:ticketId'>
                    <TicketShow/>
                </Route>
            </Switch>
        </Router>
    </React.StrictMode>,
    rootElement
);
