import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { AppDashboardHeaderAppBar } from '../components/AppDashboardHeaderAppBar.js'

export class Dashboard extends Component {

	render(){
		return(<AppDashboardHeaderAppBar/>)
	}
}