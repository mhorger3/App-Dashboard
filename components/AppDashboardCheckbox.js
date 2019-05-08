import React, { Component } from 'react';
import { Checkbox , MuiThemeProvider, createMuiTheme } from '@material-ui/core';

export class AppDashboardCheckbox extends Component {
	render(){
		const {checked, id, onChange, value, disabled} = this.props;
		return(
			<Checkbox id={id} checked={checked} onChange={onChange} value={value} color="primary" disabled={disabled}/>
		)
	}
}