import React, { Component } from 'react';
import { Button, MuiThemeProvider, createMuiTheme } from '@material-ui/core';

export class AppDashboardAddButton extends Component {

	render(){
		const { children, id, onClick, disabled } = this.props;
		const theme = createMuiTheme({
		  palette: {
		    primary: { main: '#11cb5f' },
		    secondary: { main: '#c900ff' },
		    error: { main: '#ff0000' }
		  },
		  typography: { useNextVariants: true },
		});
		return(
			<MuiThemeProvider theme={theme}>
				<Button id={id} onClick={onClick} variant="contained" color="primary" disabled={disabled} style={{maxWidth: '200px'}}>
	      			{children}
	      		</Button>
      		</MuiThemeProvider>
			)
	}
}
export class AppDashboardSaveButton extends Component {

	render(){
		const { children, id, onClick, disabled } = this.props;
		const theme = createMuiTheme({
		  palette: {
		    primary: { main: '#11cb5f' },
		    secondary: { main: '#56d3cf' },
		    error: { main: '#ff0000' }
		  },
		  typography: { useNextVariants: true },
		});
		return(
			<MuiThemeProvider theme={theme}>
				<Button id={id} onClick={onClick} variant="contained" color="secondary" disabled={disabled} style={{maxWidth: '200px'}}>
	      			{children}
	      		</Button>
      		</MuiThemeProvider>
		)
	}
	
}

export class AppDashboardCloseButton extends Component {

	static showWarning(){
		alert("You may close the CREW editor now.");
	}


	render(){
		const { children, id, onClick, disabled } = this.props;
		const theme = createMuiTheme({
		  palette: {
		    primary: { main: '#11cb5f' },
		    secondary: { main: '#ff0000' },
		    error: { main: '#ff0000' }
		  },
		  typography: { useNextVariants: true },
		});
		return(
			<MuiThemeProvider theme={theme}>
				<Button id={id} onClick={onClick} variant="contained" color="secondary" disabled={disabled} style={{maxWidth: '200px'}}>
	      			{children}
	      		</Button>
      		</MuiThemeProvider>
		)
	}
}

export class AppDashboardHeaderMenuButton extends Component {
	render() {
		const { children, id } = this.props;
		const styles = {
		  root: {
		    'marginRight': '30px',
		  },
		};
		return (
			<Button id={id} variant="contained" color="primary" style={styles.root}>
				{children}
		    </Button>
		)
	}
}
