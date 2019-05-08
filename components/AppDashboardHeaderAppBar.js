import React, { Component } from 'react';
import axios from 'axios'
import { AppBar, Toolbar, Button, Typography, Menu, MenuItem } from '@material-ui/core';
import { AppDashboardHeaderMenuButton } from '../components/AppDashboardButtons.js'
import { AppDashboardDrawer } from '../src/AppDashboard.Drawer-1.0.0.0.js';
export class AppDashboardHeaderAppBar extends Component {

	constructor(){
		super();
	}
	render() {
		const { classes } = this.props;
		const styles = {
		  root: {
		    flexGrow: 1,
		  },
		  grow: {
		    flexGrow: 1,
		  },
		};
		return (
			<div style={styles.root}>
				<AppBar position="static" color="default">
		        	<Toolbar>
				        <Typography variant="h5" color="inherit" style={styles.grow}>
								<Button onClick={() => {AppDashboardDrawer.showDrawer('left', 'true')}}><i class="material-icons">menu</i></Button>
								App Dashboard
			            </Typography>
			        </Toolbar>
		      </AppBar>
	        </div>
  		)
	}
}
