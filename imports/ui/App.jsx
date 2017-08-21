import React, {Component} from 'react';
import {JssProvider, SheetsRegistry} from 'react-jss'
import {create} from 'jss';
import preset from 'jss-preset-default';
import {MuiThemeProvider, createMuiTheme, withStyles} from 'material-ui/styles';
import createPalette from 'material-ui/styles/palette';
import createGenerateClassName from 'material-ui/styles/createGenerateClassName';
import Nav from "./components/Nav";
import {
  BrowserRouter as Router,
  Route,
  withRouter,
} from 'react-router-dom';
import Semesters from "./Semesters";
import Home from "./Home";

const styles = {
  main: {
    fontFamily: '"Roboto", sans-serif'
  }
};

class App extends Component {
  renderSemesters = () => true ? <Semesters/> : <Home/>;

  render() {
    // Create a sheetsRegistry instance.
    const sheetsRegistry = new SheetsRegistry();

    // Create a theme instance.
    const theme = createMuiTheme({
      palette: createPalette(),
    });

    // Configure JSS
    const jss = create(preset());
    jss.options.createGenerateClassName = createGenerateClassName;

    return (
      <div className={this.props.classes.main}>
        <JssProvider registry={sheetsRegistry} jss={jss}>
          <MuiThemeProvider theme={theme} sheetsManager={new Map()}>
            <Router>
              <div>
                <Nav />
                <Route exact path="/" component={Home}/>
                <Route exact path="/semesters" render={this.renderSemesters}/>
              </div>
            </Router>
          </MuiThemeProvider>
        </JssProvider>
      </div>
    );
  }
}

export default withStyles(styles)(App);
