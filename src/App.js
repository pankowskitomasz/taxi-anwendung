import * as React from 'react';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';

import AccountView from './views/accountView';
import AccountCreateView from './views/account/accountCreateView';
import AccountProfileView from './views/account/accountProfileView';
import AccountUpdate from './views/account/accountUpdateView';
import DashboardView from './views/dashboardView';
import DestinationView from './views/destinationView';
import DestinationDetailsView from './views/destination/destinationDetailsView';
import DestinationListView from './views/destination/destinationListView';
import DestinationMapView from './views/destination/destinationMapView';
import DestinationSearchView from './views/destination/destinationSearchView';
import DriverView from './views/driverView';
import DriverDetailsView from './views/driver/driverDetailsView';
import DriverListView from './views/driver/driverListView';
import PasswordUpdateView from './views/passwordUpdateView';
import RestorePasswordView from './views/restorePasswordView';
import RouteView from './views/routeView';
import RouteDetailsView from './views/route/routeDetailsView';
import RouteListView from './views/route/routeListView';
import RouteMapView from './views/route/routeMapView';
import RouteSearchView from './views/route/routeSearchView';
import SignInView from './views/signInView';
import SignUpView from './views/signUpView';
import WelcomeView from './views/welcomeView';

import './App.css';


function App() {
  return (
    <Router>
        <Routes>
            <Route exact path="/" element={<WelcomeView/>}/>
            <Route exact path="/account" element={<AccountView/>}/>
            <Route exact path="/account/create" element={<AccountCreateView/>}/>
            <Route exact path="/account/profile" element={<AccountProfileView/>}/>
            <Route exact path="/account/update" element={<AccountUpdate/>}/>
            <Route exact path="/dashboard" element={<DashboardView/>}/>
            <Route exact path="/destination" element={<DestinationView/>}/>
            <Route exact path="/destination/details/*">
              <Route path=":id" element={<DestinationDetailsView/>}/> 
            </Route>
            <Route exact path="/destination/list" element={<DestinationListView/>}/>
            <Route exact path="/destination/map" element={<DestinationMapView/>}/>
            <Route exact path="/destination/search" element={<DestinationSearchView/>}/>
            <Route exact path="/driver" element={<DriverView/>}/>
            <Route exact path="/driver/details/*">
              <Route path=":id" element={<DriverDetailsView/>}/>
            </Route>
            <Route exact path="/driver/list" element={<DriverListView/>}/>
            <Route exact path="/update-password" element={<PasswordUpdateView/>}/>
            <Route exact path="/restore-password" element={<RestorePasswordView/>}/>
            <Route exact path="/route" element={<RouteView/>}/>
            <Route exact path="/route/details/*">
              <Route path=":id" element={<RouteDetailsView/>}/>
            </Route>
            <Route exact path="/route/list" element={<RouteListView/>}/>
            <Route exact path="/route/map" element={<RouteMapView/>}/>
            <Route exact path="/route/search" element={<RouteSearchView/>}/>
            <Route exact path="/signin" element={<SignInView/>}/>
            <Route exact path="/signup" element={<SignUpView/>}/>
        </Routes>
    </Router>
  );
}

export default App;
