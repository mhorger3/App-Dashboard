import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import MUIDataTable from 'mui-datatables';
import { Tabs, Tab, AppBar, MuiThemeProvider, createMuiTheme, BottomNavigation } from '@material-ui/core';
import {AppDashboardAddButton, AppDashboardSaveButton, AppDashboardCloseButton} from '../components/AppDashboardButtons.js';
import {AppDashboardDialog} from '../components/AppDashboardDialog.js';
import {AppDashboardChip} from '../components/AppDashboardChip.js';
import {AppDashboardIconButton} from '../components/AppDashboardIconButton.js';
import {AppDashboardTextField} from '../components/AppDashboardTextField.js';
import {List, Divider, ListItem, ListItemText, Drawer, Button} from '@material-ui/core';


export class AppDashboard extends AppDashboardDialog {
	constructor(){
		super();
		this.state = {
		
		};
	};

	render(){
			return null;
	}
}