import React, { Component } from 'react';
import { InputLabel } from '@material-ui/core';

export class EURPaydownLabel extends Component {

	render(){
		const { children, htmlFor } = this.props;
		return (
			<InputLabel htmlFor={htmlFor}>{children}</InputLabel>
		)
	}
}
