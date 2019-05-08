import React from 'react';
import ReactDOM from 'react-dom'
import axios from 'axios'
import { Dashboard } from './AppDashboard.Dashboard-1.0.0.0.js'
import { AppDashboard } from './AppDashboard.Main-1.0.0.0.js'
ReactDOM.render(<Dashboard/>, document.getElementById('pageHeader'));
ReactDOM.render(<AppDashboard/>, document.getElementById('main'));
