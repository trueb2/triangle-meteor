import React, {Component} from 'react';
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
import InboxIcon from 'material-ui-icons/Inbox';
import MenuIcon from 'material-ui-icons/Menu';

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
          open={this.props.open}
          onRequestClose={this.handleClose}
          onClick={this.handleClose}
        >
          <List className={this.props.classes.list} disablePadding>
            <ListItem button>
              <ListItemIcon>
                <InboxIcon/>
              </ListItemIcon>
              <ListItemText primary="Home"/>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <InboxIcon/>
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

