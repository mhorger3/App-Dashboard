import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import MUIDataTable from 'mui-datatables';
import { Tabs, Tab, AppBar, MuiThemeProvider, createMuiTheme, BottomNavigation } from '@material-ui/core';
import { Toolbar, Typography, Menu, MenuItem } from '@material-ui/core';
import {List, Divider, ListItem, ListItemText, Drawer, Button} from '@material-ui/core';
import {AppDashboardAddButton, AppDashboardSaveButton, AppDashboardCloseButton} from '../components/AppDashboardButtons.js';
import {AppDashboardDialog} from '../components/AppDashboardDialog.js';
import {AppDashboardChip} from '../components/AppDashboardChip.js';
import {AppDashboardIconButton} from '../components/AppDashboardIconButton.js';
import {AppDashboardTextField} from '../components/AppDashboardTextField.js';


export class Dashboard extends Component {
	constructor(){
		super();
		this.state = {
				value: 0,
				top: false,
				left: false,
				bottom: false,
				right: false,
				isLoaded: true,
				selectedRows: [],
				errors: null
		};
		this.handleChange = this.handleChange.bind(this);
        this.toggleDrawer = this.toggleDrawer.bind(this);
	}

	toggleDrawer(side, open){
		this.setState({
			[side]: open,
		})
	};

	checkData(){
		this.handleClose();
    };
    
	handleChange(event, value){
	    this.setState({
	    	 value: value 
    	});
	};

	render(){
		const { value, isLoaded, selectedRows } = this.state;
		var rows;
		const styles = {
			root: {
			  flexGrow: 1,
			},
			grow: {
			  flexGrow: 1,
			},
			list: {
				width: 'auto',
			},
		};
		const sideList = (
			<div style={styles.list}>
				<List>
				{['EUR Paydowns', 'CREW', 'GFI Dashboard', 'Iceberg'].map((text, index) => (
					<ListItem button key={text}>
					<ListItemText primary={text} />
					</ListItem>
				))}
				</List>
				<Divider/>
			</div>
		);
		
		if(!this.state.isLoaded){ // check if the data has been loaded in yet, if not, show a loading modal
         	return ( <AppDashboardDialog id="load" onClose={() => {this.checkData()}}> <div style={{padding: '1em'}}> Loading Data </div> </AppDashboardDialog> )
		}
		
		return (
			<div>
				<div style={styles.root}>
					<AppBar position="static" color="default">
						<Toolbar>
							<Typography variant="h5" color="inherit" style={styles.grow}>
									<Button onClick={() => {this.toggleDrawer('left', 'true')}}><i class="material-icons">menu</i></Button>
									App Dashboard
							</Typography>
						</Toolbar>
				</AppBar>
				</div>
				<div id="mainContainer">
					<Drawer open={this.state.left} onClose={() => {this.toggleDrawer('left', false)}}>
						<div
							tabIndex={0}
							role="button"
							onClick={() => {this.toggleDrawer('left', false)}}
							onKeyDown={() => {this.toggleDrawer('left', false)}}
						>
						{sideList}
						</div>
					</Drawer>
				</div>
			</div>
  		)
	}
}