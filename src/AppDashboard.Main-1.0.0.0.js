import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import MUIDataTable from 'mui-datatables';
import { Tabs, Tab, AppBar, MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import {AppDashboardAddButton, AppDashboardSaveButton, AppDashboardCloseButton} from '../components/AppDashboardButtons.js';
import {AppDashboardDialog} from '../components/AppDashboardDialog.js';
import {AppDashboardChip} from '../components/AppDashboardChip.js';
import {AppDashboardIconButton} from '../components/AppDashboardIconButton.js';
import {AppDashboardTextField} from '../components/AppDashboardTextField.js';

export class AppDashboard extends AppDashboardDialog {
	constructor(){
		super();
		this.state = {
				applications: [],
				value: 0,
				isLoaded: true,
				selectedRows: [],
				errors: null
		};
		this.handleChange = this.handleChange.bind(this);
	}

	checkData(){
		this.handleClose();
	};
	handleChange(event, value){
	    this.setState({
	    	 value: value 
    	});
	};

	render(){
		const { applications, value, isLoaded, selectedRows } = this.state;
		var rows;
		
		if(!this.state.isLoaded){ // check if the data has been loaded in yet, if not, show a loading modal
         	return ( <AppDashboardDialog id="load" onClose={() => {this.checkData()}}> <div style={{padding: '1em'}}> Loading Data </div> </AppDashboardDialog> )
				}
		return (
			<div id="mainContainer">
		  </div>
		)
	}
}