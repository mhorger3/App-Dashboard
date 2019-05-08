import React, { Component } from 'react';
import { TextField , MuiThemeProvider, createMuiTheme } from '@material-ui/core';

export class EURPaydownTextField extends Component {
	render(){
		const { children, id, label, defaultValue, value, style, multiline, rowsMax, onChange } = this.props;
		return (
			<TextField id={id} label={label} defaultValue={defaultValue} value={value} style={style} multiline={multiline} rowsMax={rowsMax} onChange={onChange} variant="outlined"/>
		)
	}

}