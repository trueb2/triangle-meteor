import React, {Component} from 'react';
import injectSheet, { JssProvider, SheetsRegistry } from 'react-jss'
import { create } from 'jss';
import preset from 'jss-preset-default';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import createPalette from 'material-ui/styles/palette';
import createGenerateClassName from 'material-ui/styles/createGenerateClassName';
import { green, red } from 'material-ui/colors';

const styles = {
  main: {
    fontFamily: '"Roboto", sans-serif'
  }
};

class App extends Component {
  render() {
    // Create a sheetsRegistry instance.
    const sheetsRegistry = new SheetsRegistry();

    // Create a theme instance.
    const theme = createMuiTheme({
      palette: createPalette({
        primary: green,
        accent: red,
        type: 'light',
      }),
    });

    // Configure JSS
    const jss = create(preset());
    jss.options.createGenerateClassName = createGenerateClassName;

    return (
      <div className={this.props.classes.main}>
        <JssProvider registry={sheetsRegistry} jss={jss}>
          <MuiThemeProvider theme={theme} sheetsManager={new Map()}>
            <h1>Triangle</h1>
          </MuiThemeProvider>
        </JssProvider>
      </div>
    );
  }
}

export default injectSheet(styles)(App);
