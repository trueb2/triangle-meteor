import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import {
  AppBar,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from 'material-ui';
import HomeIcon from 'material-ui-icons/Home';
import MenuIcon from 'material-ui-icons/Menu';
import ViewAgendaIcon from 'material-ui-icons/ViewAgenda';
import {Link} from "react-router-dom";

const styles = {
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  list: {
    width: 250,
    flex: 'initial',
  },
};

class Nav extends Component {
  state = {
    open: false
  };

  handleClose = () => this.setState({open: false});
  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    return (
      <div className={this.props.classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              color="contrast"
              aria-label="Menu"
              onClick={this.handleToggle}>
              <MenuIcon/>
            </IconButton>
            <Typography type="title" color="inherit" className={this.props.classes.flex}>
              Triangle Fraternity
            </Typography>
            <Button color="contrast">Login</Button>
          </Toolbar>
        </AppBar>

        <Drawer
          open={this.state.open}
          onRequestClose={this.handleClose}
          onClick={this.handleClose}
        >
          <List className={this.props.classes.list} disablePadding>
            <ListItem button
                      component={props => <Link to="/"{...props} />}>
              <ListItemIcon>
                <HomeIcon/>
              </ListItemIcon>
              <ListItemText primary="Home"/>
            </ListItem>
            <ListItem button
                      component={props => <Link to="/semesters" {...props} />}>
              <ListItemIcon>
                <ViewAgendaIcon/>
              </ListItemIcon>
              <ListItemText primary="Semesters"/>
            </ListItem>
          </List>
        </Drawer>
      </div>
    );
  }
}

export default withStyles(styles)(Nav);

