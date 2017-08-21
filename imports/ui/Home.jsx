import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';

const styles = {};

class Home extends Component {
  state = {};

  render() {
    return (
      <div className={this.props.classes.root}>
        <h1>Home</h1>
      </div>
    );
  }
}

export default withStyles(styles)(Home);

