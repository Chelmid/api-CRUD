import React from 'react'
import CustomerList from '../Customer/CustomerList'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CustomerDetail from '../Customer/CustomerDetail.jsx'

const Dashbord = () => {

    return (
        <Router>
        <div className=''>
            <h2>Clients</h2>
                <CustomerList />
                <Switch>
                    <Route path="/customer/:id" component={CustomerDetail} />
                </Switch>
            </div>
        </Router>
    )
}

export default Dashbord