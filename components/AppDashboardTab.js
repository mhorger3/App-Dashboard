import React, { Component } from 'react';
import { Tab, MuiThemeProvider, createMuiTheme } from '@material-ui/core';

export class EURPaydownTab extends Component {
	render(){
		const { children } = this.props;
		return (
			 <Tab label={children}/>
		)
	}
}